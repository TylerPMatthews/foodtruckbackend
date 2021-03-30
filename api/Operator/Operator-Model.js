const db = require("../../api/data/db-config");

const getAll = () => {
  return db("operator");
};

const getByID = (id) => {
  return db("operator").where("operator_id", id);
};

const post = (data) => {
  return db("operator").insert(data);
};
const remove = (id) => {
  return db("operator").where("operator_id", id).del();
};
const findBy = (filter) => {
  return db("operator").where(filter);
};
module.exports = {
  getAll,
  post,
  remove,
  getByID,
  findBy,
};
