import express from "express";
import { submitEnquiry } from "../controllers/enquiryController.js";
import { registerPartner, verifyPartner } from "../controllers/partnerController.js";

const router = express.Router();

router.post("/enquiry", submitEnquiry);
router.post("/partner", registerPartner);
router.get("/partner/:id", verifyPartner);
router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default router;
