import { connection } from "../../Database/index.js";

export const createOrder_itemsTable = async () => {
    try {
      if (!(await connection.schema.hasTable("order_items"))) {
        await connection.schema.createTable("order_items", (table) => {
          table.uuid("id").primary(),
          table.uuid('order_id').references('id').inTable('orders').notNullable(),
          table.uuid('product_id').references('id').inTable('products').notNullable(),
          table.integer('quantity').notNullable(),
          table.integer('price').notNullable(),
          table.integer('subtotal').notNullable()
        });
        console.log("Table yaratildi");
      } else {
        console.log("Table allaqachon yaratilgan");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
await createOrder_itemsTable()