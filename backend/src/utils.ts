/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NewPatientEntry, Gender } from "./types";

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseParameter = (parameter: any): string => {
  if (!parameter || !isString(parameter)) {
    throw new Error("Incorrect or missing parameter: " + String(parameter));
  }

  return parameter;
};

//   Validate date is string
const isDate = (date: string): boolean => {
  console.log("date:", date);
  console.log("Date.parse(date)", Date.parse(date));

  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  //   console.log("parsedate:", date);
  //   console.log("parse Date.parse(date)", Date.parse(date));
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + String(date));
  }
  return date;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + String(gender));
  }

  return gender;
};

const toNewDiaryEntry = (object: any): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseParameter(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseParameter(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseParameter(object.occupation),
    entries: [],
  };

  return newEntry;
};

export default toNewDiaryEntry;
