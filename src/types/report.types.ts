import type { Turbine } from "./turbine.types";

export interface Report {
  reportId: number;
  uuid: string;
  userId: string;
  createDate: string;
  modifiedDate: string;
  locked: string;
  permission2Edit: string;
  site: string;
  wtgNumber: string;
  projectoId: number;
  turbinaId: number;
  typeReport: number;
  turbine: Turbine;
}

export const ReportType = {
  DEFECT_INSPECTION: 0,
  EXAMINATION_TRANSFORMER: 1,
  MEASUREMENTS_MV_SWITCHGEAR: 2,
  MEASUREMENTS_6KV: 3,
  MEASUREMENTS_690V400V: 4,
  ONBOARD_CRANE: 5,
  PERFORMANCE_REPAIR_ELEVATOR: 6,
  STATUTORY_INSPECTION: 7
} as const;

export type ReportType = typeof ReportType[keyof typeof ReportType];