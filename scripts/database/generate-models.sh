#!/bin/bash

sequelize model:create --name User --attributes username:string,password:string,token:string,facebookToken:string,googleToken:string,pushToken:array,profilePhoto:string,isValid:boolean