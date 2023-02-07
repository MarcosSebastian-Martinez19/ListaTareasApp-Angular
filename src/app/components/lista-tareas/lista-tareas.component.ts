import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TareasService } from 'src/app/services/tareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent {
  title = "App Lista de Tareas";

  tareasIncompletas: string[] = [];

  tareasCompletas: string[] = [];

  constructor(private _tareasService: TareasService, private _snackBar: MatSnackBar) {
    this.tareasIncompletas = this._tareasService.tareasIncompletas;
    this.tareasCompletas = this._tareasService.tareasCompletas;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
