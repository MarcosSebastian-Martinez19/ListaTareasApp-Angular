import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareasIncompletas: any = ['TAREA 2', 'TAREA 3', 'TAREA 4', 'TAREA 5', 'TAREA 6',];

  tareasCompletas: any = ['TAREA 1'];

  getTareas() {
    return this.tareasIncompletas.slice();
  }

  agregarTarea(tarea: string) {
    this.tareasIncompletas.push(tarea);
  }
}
