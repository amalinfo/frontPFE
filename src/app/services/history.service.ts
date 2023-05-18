import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {History, HistoryDto} from "../models/History";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  url  = "http://localhost:8081/History"
  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<History[]>(this.url+"/get");
  }

  delete(id: any) {
  return this.http.delete(this.url+"/delete/"+id) 
  }
  save(history:HistoryDto){
    return this.http.post(this.url +"/save", history);
  }
  get() {
    return this.http.get<History[]>(this.url+"/pdf");
  }
}
