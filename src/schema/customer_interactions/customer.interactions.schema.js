import { connection } from "../../Database/index.js";

export const createCustomerInteractionsTable = async () => {
    try {
      if (!(await connection.schema.hasTable("customer_interactions"))) {
        await connection.schema.createTable("customer_interactions", (table) => {
          table.uuid("id").primary(),
          table.uuid('customer_id').references('id').inTable('customer').notNullable(),
          table.timestamp('interaction_date').defaultTo(connection.fn.now()),
          table.enu('type',['email', 'call', 'meeting']),
          table.string('notes').notNullable()
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  

