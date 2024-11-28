// import { connection } from "../../Database/index.js";

// export const createProductTable = async () => {
//     try {
//       if (!(await connection.schema.hasTable("payments"))) {
//         await connection.schema.createTable("payments", (table) => {
//           table.uuid("id").primary(),
//           table.uuid('order_id').references('id').inTable('orders').notNullable()
//          table.timestamp('payment_date').defaultTo(connection.fn.now()),
//          table.enu('payment_method',[]),
//          table.decimal('amount').notNullable(),
//          table.integer('stock').notNullable()
//         });
//         console.log("Table yaratildi");
//       } else {
//         console.log("Table allaqachon yaratilgan");
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
  
