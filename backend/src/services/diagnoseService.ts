import diagnoses from "../../data/diagnoses";
import { Diagnose } from "../types";

const getEntries = (): Array<Diagnose> => {
  return diagnoses;
};

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

export default {
  getEntries,
};
