import { connection } from "../../Database/index.js";

export const createOrdersTable = async () => {
    try {
      if (!(await connection.schema.hasTable("orders"))) {
        await connection.schema.createTable("orders", (table) => {
          table.uuid("id").primary(),
          table.uuid("customer_id").references("id").inTable('customer').notNullable(),
          table.timestamp('order_date').defaultTo(connection.fn.now()),
          table.enu('status',['pending', 'shipped', 'delivered', 'cancelled']),
          table.integer('total_amount').notNullable()
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  

