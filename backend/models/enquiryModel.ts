import { pool } from "../config/db.js";

export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function createEnquiry(data: EnquiryInput) {
  const [result] = await pool.execute(
    "INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)",
    [data.name, data.email, data.phone, data.message ?? "Demo request from Software page"]
  );

  return result;
}
