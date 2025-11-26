export interface HistoricRecord {
  idHistoricReport: string;
  idReport: string;
  localDateTime: string;
  typeReport: string;
  idTeam: string;
  team: string;
  idUser: string;
  user: string;
}

export interface Alternation {
  idHistoricReport: string;
  field: string;
  fieldOld: string;
  fieldNew: string;
  oldPicByte: string;
  newPicByte: string;
}

export interface Historic {
  historicRecord: HistoricRecord;
  listAlterations: Alternation[];
}