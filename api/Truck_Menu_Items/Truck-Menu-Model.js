const db = require("../../api/data/db-config");

const getAll = () => {
  return db("truck_menu_items")
};
const getByID = (id) => {
  return db("truck_menu_items").where("truck_menu_id", id);
};
const post = (data) => {
  return db("truck_menu_items").insert(data);
};
const edit = (id, changes) => {
  return db("truck_menu_items").where("truck_menu_id", id).update(changes);
};
const remove = (id) => {
  return db("truck_menu_items").where("truck_menu_id", id).del();
};

module.exports = {
  getAll,
  getByID,
  post,
  edit,
  remove,
};
