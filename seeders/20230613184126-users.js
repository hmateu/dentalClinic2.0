'use strict';

require('dotenv').config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bcrypt = require("bcrypt");
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        dni: "32547782N",
        name: "Marta",
        surname: "Marí Soro",
        password: bcrypt.hashSync("Marta1234!", parseInt(parseInt(process.env.BCRYPT_SALT))),
        age: 30,
        mobile: 736554817,
        email: "marta@gmail.com",
        location: "C/Arturo Benlliure",
        collegial: 464663207,
        role: 1,
        speciality: 2,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 2,
        dni: "20123665C",
        name: "Maria Angeles",
        surname: "Sanchis Oltra",
        password: bcrypt.hashSync("MAngeles1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 45,
        mobile: 631147890,
        email: "mangeles@gmail.com",
        location: "C/Colombari Agustí",
        collegial: 464623660,
        role: 2,
        speciality: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 3,
        dni: "03654471A",
        name: "Jose Enrique",
        surname: "Castells Montell",
        password: bcrypt.hashSync("JEnrique1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 38,
        mobile: 638921473,
        email: "jenrique@gmail.com",
        location: "C/Artes escénicas",
        collegial: 390907823,
        role: 2,
        speciality: 3,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 4,
        dni: "30187314N",
        name: "Angela",
        surname: "Maza Gilabert",
        password: bcrypt.hashSync("Angela1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 37,
        mobile: 714300654,
        email: "angela@gmail.com",
        location: "C/Arturo Mariano",
        collegial: 464684003,
        role: 2,
        speciality: 2,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 5,
        dni: "20653328K",
        name: "David",
        surname: "Mateu Mahiques",
        password: bcrypt.hashSync("David1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 35,
        mobile: 631478872,
        email: "david@gmail.com",
        location: "Av/Paseo marítimo",
        collegial: null,
        role: 3,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 6,
        dni: "88307452P",
        name: "Andrea",
        surname: "Pérez Carrillo",
        password: bcrypt.hashSync("Andrea1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 30,
        mobile: 632214782,
        email: "andrea@gmail.com",
        location: "Av/Reyes Católicos",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 7,
        dni: "02788541P",
        name: "Nastia",
        surname: "López Pérez",
        password: bcrypt.hashSync("Nastia1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 5,
        mobile: 632214782,
        email: "nastia@gmail.com",
        location: "Av/Reyes Católicos",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 8,
        dni: "36541208P",
        name: "Judit",
        surname: "Alberola Camús",
        password: bcrypt.hashSync("Judit1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 28,
        mobile: 716593002,
        email: "judit@gmail.com",
        location: "C/Corts Valencianes",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 9,
        dni: "51479360H",
        name: "Coral",
        surname: "Méndez Ripoll",
        password: bcrypt.hashSync("Coral1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 30,
        mobile: 639874102,
        email: "coral@gmail.com",
        location: "C/ Por algún lugar",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 10,
        dni: "14523900D",
        name: "Edu",
        surname: "Jorpe Aslot",
        password: bcrypt.hashSync("Edu1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 32,
        mobile: 723654880,
        email: "edu@gmail.com",
        location: "C/ Búscame por aquí",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 11,
        dni: "70639541A",
        name: "Oriana",
        surname: "Alpe Corre",
        password: bcrypt.hashSync("Oriana1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 29,
        mobile: 638741002,
        email: "oriana@gmail.com",
        location: "C/ Atrápame si puedes",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 12,
        dni: "20395134X",
        name: "Jorge",
        surname: "Arriba Alpe",
        password: bcrypt.hashSync("Jorge1234!", parseInt(process.env.BCRYPT_SALT)),
        age: 10,
        mobile: 638741002,
        email: "jorge@gmail.com",
        location: "C/ Atrápame si puedes",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};