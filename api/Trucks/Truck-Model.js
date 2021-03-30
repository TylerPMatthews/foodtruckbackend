const db = require("../../api/data/db-config");

const getAll = () => {
  return db("trucks");
};

const getByID = (id) => {
  return db("trucks").where("truck_id", id);
};

const post = (data) => {
  return db("trucks").insert(data);
};
const remove = (id) => {
  return db("trucks").where("truck_id", id).del();
};

const edit = (id, changes) => {
  return db("trucks").where("truck_id", id).update(changes);
};

const postLocation = (location) => {
  return db("truck_location").insert(location);
};
const getLocationByID = (id) => {
  return db("truck_location").where("truck_location_id", id);
};
const editLocation = (id, changes) => {
  return db("truck_location").where("truck_location_id", id).update(changes);
};
const deleteLocation = (id) => {
  return db("truck_location").where("truck_location_id", id).del();
};
const getTruckALocation = (id) => {
  return db("trucks as t")
    .join("truck_location as tl", "tl.truck_location_id", "t.truck_id")
    .where("t.truck_id", id);
};
const getAllLocation = () => {
  return db("truck_location");
};
module.exports = {
  getAll,
  post,
  remove,
  getByID,
  edit,
  postLocation,
  getLocationByID,
  editLocation,
  deleteLocation,
  getTruckALocation,
  getAllLocation,
};
