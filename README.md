# AI 2024 APPLICATION API - NODE JS - Connected to SQL database

 Server Side of the Full Stack Image Detection Application.
 ## 🛠 Client Side Repository
<a href="https://github.com/vargaae/ai-2024" target="_blank"> ReactJS Application on the client side</a>
## AI Detection Image Analysis Project
<div align="center">
  <img alt="Application image" src="https://cssh.northeastern.edu/informationethics/wp-content/uploads/sites/44/2020/07/ai@2x.png" width="400" />
</div>
<br>
<p align="center">
AI detection image analysis | AI visual inspection tool application with Clarifai API. This application analyses the loaded image and makes predictions of concepts, that we can use for example for keywords. I designed and developed the React application for this AI detection tool. It's connected to the server side through the Routes - REST API and through the encrypted auth services.
AI detection image analysis | AI visual inspection tool
with Clarifai API: analyses the loaded image and makes predictions of concepts, that we can use for example for keywords. I designed and developed the NodeJS server application for this AI detection tool and it's connected to the PostgreSQL database and to the client side through the Routes - REST API. Server side has encrypted Authentication and Authorization services.
</p>
<img alt="Application image" src="https://www.clarifai.com/hs-fs/hubfs/logo/Clarifai/clarifai-740x150.png?width=120&name=clarifai-740x150.png" width="150" />
 🚀 Cloud Application Platform: deployed on Render 
both BE+FE applications and the DB entirely in the CLOUD.


## 🛠 Server side: 
- REST API with Node JS-express server
- PostgreSQL database
- knex
- CORS
- bcrypt-nodejs
- clarifai 2.9.1

## 🛠 Authentication and Authorization 
are set with email registration-log in system on the server side throughout the Routes, bcrypt encryption and the designed database

## 🛠 ROUTES - Controllers

 - / --> res = this is working
 - /signin --> POST success/fail
 - /register --> POST = user
 - /profile/:userId --> GET = user
 - /image --> PUT --> user (ranking)

 ## Earlier Front End Application Integration - Screenshots
 - Current version of Integration is in process!
  
 - Image Analysis
 - Sign In
 - Registration

<div align="center">
  <img alt="Application image" src="https://vargaae.hu/images/projects/aiimagedetect.jpg" width="700" />
</div>