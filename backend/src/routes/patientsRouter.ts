import express, { Request, Response } from "express";
import patientsService from "../services/patientServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

// Get all patients + ssn
// router.get("/", (_req: Request, res: Response) => {
//   res.send(patientsService.getAllPatients());
// });

router.get("/:id", (req: Request, res: Response) => {
  const patient = patientsService.findById(req.params.id);

  if (patient) {
    res.send(patient);
    console.log("req.params", patient);
  } else {
    res.sendStatus(404);
  }
});

router.get("/", (_req: Request, res: Response) => {
  res.send(patientsService.getNonSensitiveEntries());
});

router.post("/", (req: Request, res: Response) => {
  try {
    const newPatientEntry = toNewDiaryEntry(req.body);
    const addedEntry = patientsService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
  // const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  // const newPatientEntry = patientsService.addPatient({
  //   name,
  //   dateOfBirth,
  //   ssn,
  //   gender,
  //   occupation,
  // });
  // res.json(newPatientEntry);
});

export default router;
