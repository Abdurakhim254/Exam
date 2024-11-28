import { connection } from "../../Database/index.js";

export const createCustomerTable = async () => {
  try {
    if (!(await connection.schema.hasTable("customer"))) {
      await connection.schema.createTable("customer", (table) => {
        table.uuid("id").primary,
          table.string("first_name").notNullable(),
          table.string("last_name").notNullable(),
          table.string("email").unique().notNullable(),
          table.string("password"),
          table.enu("role", ["user", "admin", "manager"]),
          table.boolean("is_active").defaultTo("false"),
          table.string("phone"),
          table.date("date_of_birth"),
          table.timestamp("created_at").defaultTo(connection.fn.now()),
          table.timestamp("updated_at").defaultTo(connection.fn.now());
      });
      console.log("Table yaratildi");
    } else {
      console.log("Table allaqachon yaratilgan");
    }
  } catch (error) {
    console.error(error.message);
  }
};


