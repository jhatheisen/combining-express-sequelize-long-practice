'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Insects', [
    {
      name: "1",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "2",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "3",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "4",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "5",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "6",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "7",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "8",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "9",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    },
    {
      name: "10",
      description: "Testing",
      territory: "Testing:P",
      fact: "Testing :D",
      millimeters: 1.0
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects',{
      name: ['1','2','3','4','5','6','7','8','9','10']
    })
  }
};
