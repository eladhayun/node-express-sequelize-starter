#!/bin/bash

sequelize model:create --name User --attributes username:string,password:string,token:string,facebookToken:string,googleToken:string,pushToken:array,profilePhoto:string,isValid:boolean
sequelize model:create --name Course --attributes name:string,author:string,rating:double,description:string,image:string,institute:string,releaseDate:date,duration:integer
sequelize model:create --name Section --attributes name:string,courseId:integer,duration:integer,description:string,position:integer
sequelize model:create --name Video --attributes name:string,sectionId:integer,url:string,free:boolean,duration:integer,position:integer
sequelize model:create --name UserCourse --attributes courseId:integer,userId:integer,completed:integer
sequelize model:create --name UserVideo --attributes videoId:integer,userId:integer