#!/bin/bash

# Vérifie si un argument est passé
if [ $# -ne 1 ]; then
    echo "Usage: $0 <command_to_run>"
    exit 1
fi

command_to_run="$1"
log_file="${command_to_run}/process.log"

echo "Lancement du squid VRF avec surveillance toutes les 5 secondes, relance si le process ne tourne plus"
echo "Le fichier de log du process est dans $log_file${NC}"

while true; do
    # Vérifie si le processus existe
    if pgrep -f "sqd run $command_to_run" > /dev/null; then
    	echo -ne "[$(date +'%Y-%m-%d %H:%M:%S')] Le processus est en cours d'exécution."\\r
    else
        echo -e "[$(date +'%Y-%m-%d %H:%M:%S')] Le processus n'est pas en cours d'exécution. Lancement..."
	echo "commande: \`sqd run $command_to_run\`"
	sqd run "$command_to_run" >> "$log_file" 2>&1 &
    fi
    sleep 5  # Attendre 5 secondes avant de vérifier à nouveau
done

