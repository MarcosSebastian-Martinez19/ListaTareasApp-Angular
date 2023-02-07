import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

  newTarea: FormGroup;
  
  constructor (private fb: FormBuilder, private _tareaService: TareasService, private router: Router, private _snackBar: MatSnackBar) {
    this.newTarea = this.fb.group({
      nombre: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  agregarTarea() {
    const tarea: string = this.newTarea.value.nombre.toUpperCase();
    if(tarea !== "") {
      this._tareaService.agregarTarea(tarea);
      this.newTarea.reset();
      this._snackBar.open("Tarea creada con Éxito", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      })
    }
  }
}
