#!/bin/bash
#Sauvegarde de lancien IFS
OLDIFS=$IFS

#Recuperation des tous les noms des fichiers CSV
fichiers=$(ls CSV)
echo $fichiers

for k in $fichiers;
do
	#Suppression de l'extension .csv
	k=$( echo $k |cut -f1 -d '.')

	header=$(head -n 1 CSV/$k.csv)
	
	attributs=""
	IFS=,
	#Recuperation de tous les champs d'un fichier
	for i in $header;
	do
		attributs+="\"$i\" : {\"type\":\"string\"},";
		
	done
	#DEBUGG////
echo "--------------- ATTRIBUT --------------"
echo "$attributs"
	#////DEBUGG

	#Suppression de la virgule a la fin de la variable
	IFS=$OLDIFS
	attributs=${attributs::-1}
	#Sauvegarde des attributs d'un fichier
	echo "$attributs" >> attributs.json

	#Création des properties par champs
	tables="\"$k\" : { \"properties\" : { $(cat attributs.json)}},"
	#Sauvegarde dans un fichier
	echo "$tables" >> tables.json

		#DEBUGG////
	echo "-----------------TABLE------------"
	echo "$tables"
	#////DEBUGG

	#Reinitialisation des attributs
	rm attributs.json

done

#Suppression de la virgule a la fin du fichier
echo "$(sed '$ s/.$//' "tables.json")" >> tablesok.json

#Suppression du fichier tables.json qui devient inutile
rm tables.json

# Creation du mapping
mapping="{\"mappings\": {$(cat tablesok.json)}}"
#Sauvegarde du mapping dans un fichier pour pouvoir l'appeler dans la commande CURL
echo "$mapping" >> mappings.json

#Creation de l'index de chaques fichiers
curl -X PUT 'http://localhost:9200/test3?pretty' -H 'Content-Type: application/json' -d '@./mappings.json'

#Suppression des fichiers inutiles
#rm tablesok.json
#rm mappings.json