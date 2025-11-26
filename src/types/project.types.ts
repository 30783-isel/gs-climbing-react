import type { User } from "./user.types";

export interface Project {
  idProject: string;
  name: string;
  country: string;
  location: string;
  numberTurbines: string;
  site: string;
  number: string;
  type: string;
  users?: User[];
}