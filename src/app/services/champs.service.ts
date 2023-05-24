import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Champ, ChampDto} from "../models/Champ";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChampsService {
  getAllUserChamps(id: any) {
    return this.http.get(this.url+"/getByUser/"+id);
  }
  getAllChampsByEmail() {
    let email = localStorage.getItem("userEmail");
    return this.http.get(this.url+"/getByEmail/"+email);
  }
  updatechamp(champ: any) {
    return this.http.put(this.url + '/update/'+champ.id, champ);
  }

  private url:string=   'http://localhost:8081/Champs';
  constructor(private http: HttpClient, private router: Router) {}
  addchamp(champ: ChampDto) {
    return this.http.post(this.url + '/save', champ);
  }

  getAllChamp(): Observable<Champ[]> {
    const url = this.url + `/lister`;
    return this.http.get<Champ[]>(url);
  }
  deletechamp(id: any) {
    return this.http.delete(this.url + '/delete/' + id);
  }
  getById(id:any){
    return this.http.get(this.url+"/findbyid/"+id)
  }
}
