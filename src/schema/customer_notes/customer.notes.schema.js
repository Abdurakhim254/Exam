import { connection } from "../../Database/index.js";

export const createCustomNotestTable = async () => {
    try {
      if (!(await connection.schema.hasTable("custom_notes"))) {
        await connection.schema.createTable("custom_notes", (table) => {
          table.uuid("id").primary(),
          table.uuid('customer_id').references('id').inTable('customer').notNullable(),
          table.timestamp('created_at').defaultTo(connection.fn.now()),
          table.string('content').notNullable()
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  

await createCustomNotestTable()