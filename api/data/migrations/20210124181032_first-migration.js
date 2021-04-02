exports.up = async (knex) => {
  await knex.schema
    .createTable("diner", (users) => {
      users.increments("diner_id");
      users.string("diner_username", 200).notNullable().unique();
      users.string("diner_email", 320).notNullable().unique();
      users.string("diner_password", 200).notNullable();
      users.specificType("diner_favorite_trucks", "text ARRAY");
      users.timestamps(false, true);
    })
    .createTable("diner_location", (location) => {
      location.increments("diner_location_id");
      location.string("diner_street");
      location.string("diner_city");
      location.string("diner_state");
      location.string("diner_zip");
      location
        .integer("diner_id")
        .unsigned()
        .notNullable()
        .references("diner_id")
        .inTable("diner")
        .onDelete("RESTRICT");
    })
    .createTable("operator", (users) => {
      users.increments("operator_id");
      users.string("operator_username", 200).notNullable().unique();
      users.string("operator_email", 320).notNullable().unique();
      users.string("operator_password", 200).notNullable();
      users.specificType("operator_owned_trucks", "text ARRAY");
      users.timestamps(false, true);
    })
    .createTable("trucks", (truck) => {
      truck.increments("truck_id");
      truck.string("truck_name", 200).notNullable().unique();
      truck.string("truck_img", 800);
      truck.string("truck_cuisine_type", 200).notNullable();
      truck.specificType("truck_ratings", "integer ARRAY");
      truck.integer("truck_ratings_avg");
      truck
        .integer("operator_id")
        .unsigned()
        .notNullable()
        .references("operator_id")
        .inTable("operator")
        .onDelete("RESTRICT");
    })
    .createTable("truck_location", (location) => {
      location.increments("truck_location_id");
      location.string("truck_location_street");
      location.string("truck_location_city");
      location.string("truck_location_state");
      location.string("truck_location_zip");
      location.date("truck_departure_date");
      location.time("truck_departure_time");
      location
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT");
    })
    .createTable("menu", (menu) => {
      menu.increments("menu_id");
      menu.string("menu_name", 200).notNullable();
      menu
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT");
    })
    .createTable("items", (items) => {
      items.increments("item_id");
      items.string("item_name");
      items.text("item_description");
      items.string("item_img");
      items.integer("item_price");
      items.specificType("item_ratings", "integer ARRAY");
      items.integer("item_ratings_avg");
      items
        .integer("menu_id")
        .unsigned()
        .notNullable()
        .references("menu_id")
        .inTable("menu")
        .onDelete("RESTRICT");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("diner")
    .dropTableIfExists("diner_location")
    .dropTableIfExists("operator")
    .dropTableIfExists("trucks")
    .dropTableIfExists("menu")
    .dropTableIfExists("items");
};
