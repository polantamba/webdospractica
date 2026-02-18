import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pets';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  
  private http = inject(HttpClient);

  private API_PET = 'https://www.mockdog.dev/api/dogs'

  //LEER DATOS DE LA API

  getMascotas():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.API_PET);
    
  }

}
