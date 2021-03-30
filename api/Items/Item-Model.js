const db = require("../../api/data/db-config");

const getAll = () => {
  return db("items");
};
const getByID = (id) => {
  return db("items").where("item_id", id);
};
const post = (data) => {
  return db("items").insert(data);
};
const edit = (id, changes) => {
  return db("items").where("item_id", id).update(changes);
};
const remove = (id) => {
  return db("items").where("item_id", id).del();
};

module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
};
