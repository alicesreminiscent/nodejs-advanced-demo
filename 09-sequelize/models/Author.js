const { seq } = require('./common'),
      { DataTypes } = require('sequelize');

const attributes = {
  author_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
};

module.exports = seq.define('author', attributes);
