export const API_CONFIG = {
  baseUrl: `${window.location.origin}:8080/api/`,
  baseLogUrl: `${window.location.origin}:8080/auth/`,
  baseProjectsUrl: `${window.location.origin}:8080/api/project/`,
  baseUsersUrl: `${window.location.origin}:8080/api/user/`,
  baseReportsUrl: `${window.location.origin}:8080/api/reports/`,
  baseFilesUrl: `${window.location.origin}:8080/api/reports/files/`
};

export const REPORT_NAMES: Record<number, string> = {
  0: "Defect Inspection Report",
  1: "Examination transformer",
  2: "Measurements of MV Switchgear and Stator Cabinet",
  3: "Medidas 6Kv",
  4: "Medidas 690V400V",
  5: "Onboard crane Inspection Report",
  6: "Performance Report Repair Elevator",
  7: "Statutory Inspection Report"
};