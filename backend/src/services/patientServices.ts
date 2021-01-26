import patients from "../../data/patients";
import {
  Patient,
  PatientPublicData,
  NewPatientEntry,
  // PublicPatient,
} from "../types";

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

const findById = (id: string): Patient | undefined => {
  const entry = patients.find((record) => record.id === id);
  console.log("entry", entry);
  return patients.find((record) => record.id === id);
};

export default {
  getAllPatients,
  getNonSensitiveEntries,
  addPatient,
  findById,
};
