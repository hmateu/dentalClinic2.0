'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
        id: 1,
        date: "2023-06-01 11:59:38",
        price: 745.50,
        assessment: "Se realiza una ortodoncia invisible completa",
        dentist: 2,
        patient: 10,
        service: 1,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 2,
        date: "2023-06-01 11:59:38",
        price: 342,
        assessment: "Se realiza una ortodoncia infantil completa",
        dentist: 1,
        patient: 7,
        service: 2,
        payment: 3,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 3,
        date: "2023-06-01 11:59:38",
        price: 467.50,
        assessment: "Coronas de zirconio implantadas",
        dentist: 3,
        patient: 6,
        service: 6,
        payment: 3,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 4,
        date: "2023-06-02 11:59:38",
        price: 87.35,
        assessment: "Se eliminan las caries y se rellena el diente con pasta",
        dentist: 3,
        patient: 9,
        service: 9,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 5,
        date: "2023-06-03 11:59:38",
        price: 3246.50,
        assessment: "Se aplican brackets al paciente",
        dentist: 2,
        patient: 10,
        service: 1,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 6,
        date: "2023-06-05 11:59:38",
        price: 48.20,
        assessment: "Se realiza una limpieza dental",
        dentist: 3,
        patient: 11,
        service: 8,
        payment: 4,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 7,
        date: "2023-06-05 11:59:38",
        price: 342.75,
        assessment: "Se debe realizar una ortodoncia infantil",
        dentist: 1,
        patient: 12,
        service: 2,
        payment: 4,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 8,
        date: "2023-06-06 11:59:38",
        price: 247,
        assessment: "Ortodoncia invisible para el cliente cita 1",
        dentist: 3,
        patient: 8,
        service: 3,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 9,
        date: "2023-06-08 11:59:38",
        price: 500,
        assessment: "Ortodoncia invisible para el cliente cita 2",
        dentist: 3,
        patient: 8,
        service: 3,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 10,
        date: "2023-06-08 11:59:38",
        price: 237.80,
        assessment: "Periodoncia bien aplicada y revisada",
        dentist: 4,
        patient: 10,
        service: 7,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Appointments', null, {});

  }
};