import type { Request, Response } from "express";
import { createPartner, findPartnerById } from "../models/partnerModel.js";

export async function registerPartner(req: Request, res: Response) {
  try {
    const { name, email, phone, company } = req.body;

    if (!name || !email || !phone || !company) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const year = new Date().getFullYear();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const partnerId = `LEO-${year}-${randomDigits}`;

    await createPartner({ name, email, phone, company }, partnerId);

    return res.status(201).json({
      message: "Partner registered successfully",
      partner_id: partnerId,
    });
  } catch (error) {
    console.error("Partner Registration Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function verifyPartner(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const partner = await findPartnerById(id);

    if (!partner.length) {
      return res.status(404).json({ error: "Partner not found" });
    }

    return res.json(partner[0]);
  } catch (error) {
    console.error("Partner Verification Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
