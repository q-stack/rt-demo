import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RtService {
  private engineUrl = '...';

  constructor() { }

  run<T>(data: T): Observable<T> {
    const response = fetch(this.engineUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }  
      )
      .then(response => response.json());

    return from(response);
  }
}
