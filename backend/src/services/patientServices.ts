import patients from "../../data/patients";
import { Patient, PatientPublicData } from "../types";

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

export default {
  getAllPatients,
  getNonSensitiveEntries,
};
