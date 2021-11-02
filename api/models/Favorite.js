const S = require("sequelize");
const db = require("../database/db");

class Favs extends S.Model {}

Favs.init(
  {
    movieId: {
      type: S.INTEGER,
      allowNull: false,
    },
    title:{
      type:S.STRING,
      allowNull:true
    },
    year:{
      type:S.STRING,
      allowNull:true
    },
    poster_path:{
      type:S.STRING
    },
    vote_average:{type:S.STRING},
    overview:{type:S.TEXT},
    adult:{type:S.BOOLEAN},
  },{ sequelize: db, modelName: "favs" }
);

module.exports = Favs;