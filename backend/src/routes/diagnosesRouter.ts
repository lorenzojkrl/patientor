import express from "express";
import diagnosesService from "../services/diagnoseService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diagnosesService.getEntries());
  console.log("In diagnoses!");
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
