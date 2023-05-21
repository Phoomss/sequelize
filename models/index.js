const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acqurie: dbConfig.pool.acqurie,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connented.....");
  })
  .catch((err) => {
    console.log("err" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./productModels.js")(sequelize, DataTypes);
db.review = require("./reviewModels.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync donel");
});

// กำหนดความสัมพันธ์ One-to-Many ของโมเดล "product" กับ "review"
db.product.hasMany(db.review, {
  foreignKey: "product_id",
  as: "review",
});

db.review.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
});

module.exports = db;
