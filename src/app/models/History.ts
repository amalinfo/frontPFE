import {Capteur} from "./Capteur";

export class History {
  id !:  number ;
  capteur!: Capteur;
  valeur !: number;
 date! :string;
}
export class HistoryDto {
  valeur !: number;
  idCapteur !:number
}
