const db = require("../../api/data/db-config");

const getAll = () => {
  return db("menu");
};
const getByID = (id) => {
  return db("menu").where("menu_id", id);
};
const post = (data) => {
  return db("menu").insert(data);
};
const edit = (id, changes) => {
  return db("menu").where("menu_id", id).update(changes);
};
const remove = (id) => {
  return db("menu").where("menu_id", id).del();
};

module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
};
