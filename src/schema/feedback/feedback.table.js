import { connection } from "../../Database/index.js";

export const createFeedbackTable = async () => {
    try {
      if (!(await connection.schema.hasTable("feedback"))) {
        await connection.schema.createTable("feedback", (table) => {
          table.uuid("id").primary,
          table.uuid("customer_id").references("id").inTable('customer').notNullable(),
          table.date('submitted_at').defaultTo(connection.fn.now()),
          table.enu('feedback_type',['complaint','suggestion','praise']),
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
  

