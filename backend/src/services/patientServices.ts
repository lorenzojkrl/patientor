import patients from "../../data/patients";
import { Patient, PatientPublicData, NewPatientEntry } from "../types";

const getAllPatients = (): Array<Patient> => {
  return patients;
};

const getNonSensitiveEntries = (): PatientPublicData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id: String(Math.floor(Math.random() * 100000)),
    ...entry,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getAllPatients,
  getNonSensitiveEntries,
  addPatient,
};
