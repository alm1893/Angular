import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/model/contacto.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

public contactlist: Contacto [];
public contacto: any;

public index: number;
public indexEdit: number;
public activeEdit: boolean;

 constructor() {
   this.contactlist = [];
   this.contactlist.push(new Contacto('Ron','Weasley',42,'12487935T','1-03-1980','azul','Masculino'));
   this.contactlist.push(new Contacto('Harry','Potter',41,'36478521J','31-07-1980','Rojo','Masculino'));
   this.contactlist.push(new Contacto('Hermione','Granger',42,'45123578M','19-09-1979','Amarillo','Femenino'));

   this.index = 0; 
   this.indexEdit = -1;
   this.activeEdit = false;
 }


 ngOnInit() {}
   nombreFC = new FormControl('', [Validators.required, Validators.minLength(3)]);
   apellidosFC= new FormControl('',[Validators.required, Validators.minLength(3)]);
   edadFC= new FormControl('', [Validators.required, Validators.min(0), Validators.max(125)]);
   dniFC= new FormControl('', [Validators.required, Validators.maxLength(9), Validators.pattern('[0-9]{8}[a-zA-Z]{1}')]);
   cumpleFC= new FormControl('', [Validators.required]);
   colorfavFC= new FormControl('', [Validators.required, Validators.minLength(3)]);
   sexoFC= new FormControl('', [Validators.required]);
 
  getErrorMessageNombre() {
    return this.nombreFC.hasError('required') ? 'Debes introducir un valor' : this.nombreFC.hasError('minlength') ? 'No es un nombre válido' : '';
  }

  getErrorMessageApellidos() {
    return this.apellidosFC.hasError('required') ? 'Debes introducir un valor' : this.apellidosFC.hasError('minlength') ? 'No es un apellido válido' : '';
  }

  getErrorMessageEdad() {
    return this.edadFC.hasError('required') ? 'Debes introducir un valor' : this.edadFC.hasError('min') ? 'inferior al valor mínimo' : this.edadFC.hasError('max') ? 'superior al valor máximo' : '';
  }

  getErrorMessageDni() {
    return this.dniFC.hasError('required') ? 'Debes introducir un valor' : this.dniFC.hasError('maxlength') ? 'Ha excedido el número de dígitos' : this.dniFC.hasError('pattern') ? 'No es un formato de DNI válido' : '';
  }

  getErrorMessageCumple() {
    return this.cumpleFC.hasError('required') ? 'Debes introducir un valor' : '';
  }

  getErrorMessageColor() {
    return this.colorfavFC.hasError('required') ? 'Debes introducir un valor' : this.colorfavFC.hasError('minlength') ? 'No es un color valido' : '';
  }

  getErrorMessageSexo() {
    return this.sexoFC.hasError('required') ? 'Debes introducir un valor' : '';
  }

addContacto(){
  let localCumple= new Date(this.cumpleFC.value);
  if(this.activeEdit){ //Es una edicion
    this.contactlist[this.indexEdit] = (new Contacto(this.nombreFC.value, this.apellidosFC.value, this.edadFC.value, this.dniFC.value, localCumple.toLocaleDateString(), this.colorfavFC.value, this.sexoFC.value));
  } else { //Contacto nuevo
    this.contactlist.push(new Contacto(this.nombreFC.value, this.apellidosFC.value, this.edadFC.value, this.dniFC.value, localCumple.toLocaleDateString(), this.colorfavFC.value, this.sexoFC.value));
  }
  
  this.resetformcontrol();
}

resetformcontrol(){
//reseteamos los form control
this.nombreFC.reset();
this.apellidosFC.reset();
this.edadFC.reset();
this.dniFC.reset();
this.cumpleFC.reset();
this.colorfavFC.reset();
this.sexoFC.reset();

//reseateamos el editor
this.activeEdit = false;
this.indexEdit = -1;
}

removeContacto(index:number){
  if(index> -1) {
    this.contactlist.splice(index,1);
  }
}

editContacto(index:number){
  if(index> -1){
    this.contacto= this.contactlist[index];
    this.nombreFC.setValue(this.contacto.nombre);
    this.apellidosFC.setValue(this.contacto.apellidos);
    this.edadFC.setValue(this.contacto.edad);
    this.dniFC.setValue(this.contacto.dni);
    this.cumpleFC.setValue(this.contacto.cumple);
    this.colorfavFC.setValue(this.contacto.colorFav);
    this.sexoFC.setValue(this.contacto.sexo);

    this.activeEdit = true;
    this.indexEdit = index;
  }
}
}
