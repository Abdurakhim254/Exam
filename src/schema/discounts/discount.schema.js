import { connection } from "../../Database/index.js";

export const createDiscounttTable = async () => {
    try {
      if (!(await connection.schema.hasTable("discount"))) {
        await connection.schema.createTable("discount", (table) => {
          table.uuid("id").primary(),
          table.uuid('product_id').references('id').inTable('products').notNullable(),
          table.string('code').notNullable(),
          table.enu('discount_type',['percentage', 'fixed_amount']),
          table.date('expiration_date').defaultTo(connection.fn.now())
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  

