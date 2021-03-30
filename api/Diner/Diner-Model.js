const db = require("../../api/data/db-config");

const getAll = () => {
  return db("diner");
};

const getDinerwLocation = (id) => {
  return db("diner as d")
    .join("diner_location as dl", "dl.diner_location_id", "d.diner_id")
    .where("d.diner_id", id);
};

const post = (data) => {
  return db("diner").insert(data);
};
const remove = (id) => {
  return db("diner").where("diner_id", id).del();
};
const findBy = (filter) => {
  return db("diner").where(filter);
};
const getLocation = () => {
  return db("diner_location");
};
const getByIDlocation = (id) => {
  return db("diner_location").where("diner_location_id", id);
};
const postLocation = (data) => {
  return db("diner_location").insert(data);
};
const editLocation = (id, changes) => {
  return db("diner_location").where("diner_location_id", id).update(changes);
};

module.exports = {
  getAll,
  getByIDlocation,
  post,
  remove,
  postLocation,
  getLocation,
  getDinerwLocation,
  editLocation,
  findBy,
};
