import type { Project } from "./project.types";

export interface Turbine {
  id: string;
  name: string;
  defectsInspectionReport: boolean;
  examinationTransformer: boolean;
  measurements6KV: boolean;
  measurements690V400V: boolean;
  measurementsMwSwitchgear: boolean;
  onboardCraneInspectionReport: boolean;
  performanceReportRepairElevator: boolean;
  statutoryInspectionReport: boolean;
  project: Project;
  listReports: Report[];
}