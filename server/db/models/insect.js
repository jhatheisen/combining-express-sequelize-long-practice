'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {

        titleCased(sentence) {
          let words = sentence.split(' ');

          words.forEach(word => {
            let firstLetter = word[0];
            if (firstLetter.toUpperCase() !== firstLetter) {
              throw new Error('Make sure to capitalize each Word');
            }
          });
        }

      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING(240),
      validate: {
        len: {
          args: [0, 240],
          msg: 'must be under 240 characters'
        }
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
