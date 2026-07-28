import type { Request, Response } from "express";
import { createEnquiry } from "../models/enquiryModel.js";

export async function submitEnquiry(req: Request, res: Response) {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await createEnquiry({ name, email, phone, message });

    return res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Enquiry Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
