#!/bin/bash

# DO NOT RUN THIS SCRIPT!
# It is used as one time when this project was built!

# 1. Generate skeleton based on .sequelizerc
sequelize init

# 2. Create DB
createdb -O dbuser dbname

# 3. Generate models
sequelize model:create --name User --attributes username:string,password:string,token:string,isValid:boolean

# 3. Persist the models to the database
sequelize db:migrate