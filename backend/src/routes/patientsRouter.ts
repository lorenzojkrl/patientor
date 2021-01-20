import express from "express";
import patientsService from "../services/patientServices";

const router = express.Router();

// router.get("/", (_req, res) => {
//   res.send(patientsService.getAllPatients());
//   console.log("In patients!");
// });

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
  console.log("In patients!");
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
