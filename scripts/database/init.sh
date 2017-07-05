#!/bin/bash

sh ./create-database.sh
sh ./generate-models.sh
sh ./migrate-database.sh

echo "All Done!"