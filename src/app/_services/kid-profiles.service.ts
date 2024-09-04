import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {KidProfile} from "../models/kidProfile";

@Injectable({
  providedIn: 'root'
})
export class KidProfilesService {
  url = environment.apiUrl;
  constructor( private http: HttpClient) { }

  loadKidProfilesFromUserId(userId: string) {
    return this.http.get<KidProfile[]>(
      `${this.url}KidProfile/getkidsbyuserid?userId=${userId}`
    )
  }
}
