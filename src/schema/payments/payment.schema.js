import { connection } from "../../Database/index.js";

export const createPaymenttTable = async () => {
    try {
      if (!(await connection.schema.hasTable("payments"))) {
        await connection.schema.createTable("payments", (table) => {
          table.uuid("id").primary(),
          table.uuid('order_id').references('id').inTable('orders').notNullable()
         table.timestamp('payment_date').defaultTo(connection.fn.now()),
         table.enu('payment_method',['credit_card', 'paypal', 'bank_transfer']),
         table.integer('amount').notNullable(),
         table.enu('status',['pending','failed','pending'])
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
await createPaymenttTable()