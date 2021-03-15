#Sauvegarde de lancien IFS
OLDIFS=$IFS
pointeur=2

#Recuperation des tous les noms des fichiers CSV
fichiers=$(ls CSV)

#----DEBUG-----
#echo $fichiers
#--------------

for k in $fichiers;
do
	#Suppression de l'extension .csv
	k=$( echo $k |cut -f1 -d '.')


    curl -X DELETE "localhost:9200/$k?pretty"
done