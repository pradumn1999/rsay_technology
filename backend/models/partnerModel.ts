import { pool } from "../config/db.js";

export interface PartnerInput {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export async function createPartner(data: PartnerInput, partnerId: string) {
  const [result] = await pool.execute(
    "INSERT INTO partners (partner_id, name, email, phone, company) VALUES (?, ?, ?, ?, ?)",
    [partnerId, data.name, data.email, data.phone, data.company]
  );

  return { result, partnerId };
}

export async function findPartnerById(partnerId: string) {
  const [rows] = await pool.execute("SELECT * FROM partners WHERE partner_id = ?", [partnerId]);
  return rows as Array<Record<string, unknown>>;
}
