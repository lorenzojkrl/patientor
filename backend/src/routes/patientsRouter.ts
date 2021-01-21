import express from "express";
import patientsService from "../services/patientServices";

const router = express.Router();

// Get all patients + ssn
// router.get("/", (_req, res) => {
//   res.send(patientsService.getAllPatients());
//   console.log("In patients!");
// });

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
  console.log("In patients!");
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const newPatientEntry = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });
  res.json(newPatientEntry);
});

export default router;
