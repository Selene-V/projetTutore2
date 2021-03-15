#!/bin/bash

#-------------RECUPERATION DES DONNEES----------------

#Sauvegarde de lancien IFS
OLDIFS=$IFS
pointeur=2

#Recuperation des tous les noms des fichiers CSV
fichiers=$(ls CSV)

for k in $fichiers;
do
	#Suppression de l'extension .csv
	k=$( echo $k |cut -f1 -d '.')

	#Ajout indications vu utilisateur
	echo "Récupération des champs de l'index $k."

	#recupération de tous les champs
	header=$(head -n 1 CSV/$k.csv)
	tableauHeader=( ${header//,/ } )

	#recupération de toutes les données du fichier
	listData=$(tail +2 CSV/$k.csv)

	attributs=""
	IFS=,
	#Recuperation de tous les champs d'un fichier
	for i in $header;
	do
		attributs+="\"$i\" : {\"type\":\"text\"},";
	done

#Récupération de la ligne souhaité
	IFS=$'\n';
	#Ajout indications vu utilisateur
	echo "Récupération des données à ajouter à l'index $k. Veuillez patienter, cette opération peut prendre quelques minutes."
	for ligne in $listData;
		do
		data="{\"create\":{ \"_index\": \"$k\"}}{"
		IFS=,
		cmpt=0
		for attribut in $ligne;
		do
			data+="\"${tableauHeader[${cmpt}]}\":\"$attribut\","
			((cmpt=cmpt+1))
		done
		data=${data::-1}
		data+=$'\n'
		echo "$data}" >> data.json
	done

	#Suppression de la virgule a la fin de la variable
	IFS=$OLDIFS
	attributs=${attributs::-1}
	#Sauvegarde des attributs d'un fichier
	echo "$attributs" >> attributs.json

	#Création des properties par champs
	mappings="{\"mappings\": { \"properties\" : { $(cat attributs.json)}}}"
	#Sauvegarde dans un fichier
	echo "$mappings" >> mappings.json

	#Reinitialisation des attributs
	rm attributs.json

#-------------CREATION DE L'INDEX----------------

#Creation de l'index de chaques fichiers

#Ajout indications vu utilisateur
echo "Création de l'index $k."

curl -X PUT "http://localhost:9200/$k?pretty" -H 'Content-Type: application/json' -d '@./mappings.json'

#-------------INSERTION DES DONNEES----------------
#Ajout indications vu utilisateur
echo "Insertion des données dans l'index $k."
curl -X PUT "localhost:9200/$k/_bulk?&pretty" -H 'Content-Type: application/json' -d '@./data.json'

#Suppression des fichiers inutiles
rm mappings.json
rm data.json

#Ajout indications vu utilisateur
echo "Fin du script concernant l'index $k."

done