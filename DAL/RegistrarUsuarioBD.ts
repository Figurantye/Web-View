import { UsuarioModel } from "../Model/UsuarioModel";
import { db } from "./DBConnection";
import { OkPacket, RowDataPacket } from "mysql2";


export const create = (usuario:UsuarioModel) => {
  const queryString = "INSERT INTO ProductOrder (product_id, customer_id, product_quantity) VALUES (?, ?, ?)";

  db.query(
    queryString,
    [order.product.id, order.customer.id, order.productQuantity],
    (err, result) => {
      if (err) { callback(err) };

      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};