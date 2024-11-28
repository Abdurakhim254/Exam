import { connection } from "../../Database/index.js";

export const createProductTable = async () => {
    try {
      if (!(await connection.schema.hasTable("products"))) {
        await connection.schema.createTable("products", (table) => {
          table.uuid("id").primary(),
         table.string('name').notNullable(),
         table.string('description').notNullable(),
         table.decimal('price').notNullable(),
         table.integer('stock').notNullable()
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
