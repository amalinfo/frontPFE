import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Capteur} from "../models/Capteur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CapteurService {


  constructor(private http:HttpClient)
  { }
  private url= "http://localhost:8081/Capteur"
  getAllChampsCapteur(id: any) {
    return this.http.get(this.url+"/getByChamp/"+id);
  }
  addcapteur(capteur:Capteur){
    return this.http.post(this.url+"/save",capteur)
  }
  getAllCapteur():Observable<Capteur[]>
  {
    const url = this.url+`/lister`;
    return this.http.get<Capteur[]>(url)
  }
  delete(id :any){
    return this.http.delete(this.url+"/"+id)
  }

  getById(value: string) {
      return this.http.get(this.url+"/findbyid/"+value);
  }
}


