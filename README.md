# API de una clínica dental
<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#diagrama-er">Diagrama Entidad Relación</a></li>
    <li><a href="#tecnologías-utilizadas">Stack - Tecnologías utilizadas</a></li>
    <li><a href="#instalación-en-local">Instalación en local</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#licencia">Licencia</a></li>
  </ol>
</details>

## Objetivo
Esta API la he desarrollado con los conocimientos que he adquirido con el cuarto proyecto de GeeksHub Academy. Con el objetivo de mejorar la anterior API y disponer de un mejor Backend para el siguiente proyecto, <a href="https://github.com/hmateu/frontDentalClinic">su frontend</a>.

## Sobre el proyecto
Esta API ha sido desarrollada por **Héctor Mateu**, como mejora del cuarto proyecto del **Bootcamp de Full Stack Developer de Geekshubs Academy**, el cuál se basa en el diseño del backend de una aplicación. El cuál es totalmente funcional y se le puede atacar mediante POSTMAN.
*Como mejoras de esta API, cabe destacar la utilización de variables de entorno y una mejor practica de abstracción de funciones. Así como una organización de carpetas mucho mejor.*

## Diagrama ER
![image](./img/ERDiagram.JPG)

## Tecnologías utilizadas
<img src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642" data-canonical-src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/a101467fe68ef07bba498b3e4a62a62e861ef0fe93302a1076b01ae7893af544/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3032364530303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808650-2ae0204a-1c59-4789-bfa9-3f16b24b737d.svg" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808612-8d3f0fee-99d9-45d8-8274-6584c9ac0b38.svg" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/b184cf7adbab9f5464e80c0f5dd32c85393f6248499a57d743e619f4214391c4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d3234393645443f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465" alt="DOCKER" data-canonical-src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&amp;logo=docker&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/902ef9f04d190cba77c41b8dc217260698573f992a2d46bf37e75161912caadd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MYSQL" data-canonical-src="https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/c0303b8bf28065067be013ecbfa1447392b6d328a38362de9beb6d14f810544f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73657175656c697a652d3343373643333f7374796c653d666f722d7468652d6261646765266c6f676f3d73657175656c697a65266c6f676f436f6c6f723d7768697465" alt="SEQUELIZE" data-canonical-src="https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&amp;logo=sequelize&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465" alt="Postman" data-canonical-src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT" data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" style="max-width: 100%;">

## Instalación en local
1. Clona el repositorio
`$ git clone https://github.com/hmateu/dentalClinic2.0.git`
2. Instala las dependencias
`$ npm install`
3. Crea el archivo .env para las variables de entorno
4. Crea la base de datos 
`$ sequelize db:create`
5. Ejecutar las migraciones
`$ sequelize db:migrate`
6. Ejecuta los seeders
`$ sequelize db:seed:all`
7. Levanta el servicio de MySQL
**`En mi caso Docker`**
8. Levanta el servidor
`$ npm run dev`

## Endpoints
A continuación detallo los endpoints que han sido desarrollados en esta API para poder ser atacados desde un front. Desde Postman puedes verificar que funcionan correctamente. Con el propio Postman he validado cada uno de ellos.
<details>
<summary>Endpoints</summary>

- **auth**
    - **/register**

            POST http://localhost:5000/auth/register
        body:
        ``` js
            {
                "dni": "35471123Z",
                "name": "Héctor",
                "surname": "Mateu Ortolá",
                "password": "Hector1234!",
                "age": 28,
                "mobile": 630174559,
                "email": "hmateu.ortola@gmail.com",
                "location": "C/ Pintor Perales"
            }
        ```
    - **/login**

            POST http://localhost:5000/auth/login  
        body:
        ``` js
            {
                "email":"hmateu.ortola@gmail.com",
                "password":"Hector1234!"
            }
        ```
- **usuarios**
    - **/users** : Recupera todos los usuarios (debes estar logueado como admin)  

            GET http://localhost:5000/users

    - **/users/perfil** : Recupera toda la información del usuario logueado  

            GET http://localhost:5000/users/perfil

    - **/users/users** : Rescupera toda la información de los usuarios menos del admin

            GET http://localhost:5000/users/users

    - **/users/patients** : Rescupera toda la información de los pacientes

            GET http://localhost:5000/users/patients

    - **/users** : Modifica los datos del usuario logueado

            PUT http://localhost:5000/users

    - **/users/:id** : Elimina el usuario con el id que le pases por parámetro (debes estar logueado como admin)

            DELETE http://localhost:5000/users/2

- **citas**
    - **/appointments** : Recupera toda las citas (debes estar logueado como admin)  

            GET http://localhost:5000/appointments

    - **/appointments/patient** : Recupera todas las citas donde el usuario logueado es el paciente  

            GET http://localhost:5000/appointments/patient

    - **/appointments/dentist** : Recupera todas las citas donde el usuario logueado es el dentista  

            GET http://localhost:5000/appointments/dentist

    - **/appointments/:id** : Recupera la cita con el id que le pases por argumento, siempre que seas paciente de dicha cita

            GET http://localhost:5000/appointments/2

    - **/appointments** : Crea una cita para el paciente logueado

            POST http://localhost:5000/appointments

    - **/appointments/:id** : Modifica la cita con el id que le pases por argumento, siempre que seas paciente de dicha cita

            PUT http://localhost:5000/appointments/2

- **servicios**
    - **/services** : Recupera todos los servicios

            GET http://localhost:5000/services
</details>

## Contribuciones
Las sugerencias y aportaciones son siempre bienvenidas.  

Puedes hacerlo de dos maneras:

1. Abriendo una issue
2. Crea un fork del repositorio
    - Crea una nueva rama  
        ```
        $ git checkout -b feature/nombreUsuario-mejora
        ```
    - Haz un commit con tus cambios 
        ```
        $ git commit -m 'feat: mejora X cosa'
        ```
    - Haz push a la rama 
        ```
        $ git push origin feature/nombreUsuario-mejora
        ```
    - Abre una solicitud de Pull Request

## Agradecimientos
Agradezco a mis profesores el tiempo dedicado a este proyecto:

- **Dani**  
<a href="https://github.com/Datata" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=lime" target="_blank"></a> 

- **David**  
<a href="https://github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

## Contacto
<a href = "mailto:hmateu.ortola@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a> <a href="https://www.linkedin.com/in/h%C3%A9ctor-mateu-ortol%C3%A1-278b92160/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
## Licencia
Este proyecto se ha realizado bajo la **licencia MIT**.