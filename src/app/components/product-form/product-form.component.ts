import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

//para atrapar el valor del imput despues de un tiempo de inactividad o cuando de click
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

// *******/////// Creamos solo un FromControl ///////******* 

export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.maxLength(80), Validators.required]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    // this.form.valueChanges
    //   .pipe(debounceTime(500))
    //   .subscribe(value => {
    //     console.log(value);
    //   });
  }

  ngOnInit(): void {
    // ...
  }
  
  //metodo cuando doy click al boton submit
  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value= this.form.value;
      console.log(value);
    }else {
      this.form.markAllAsTouched(); //estoy diciendole que todos los errores salten si le da al boton
    }
  }

  //creamos un metodo para remplazar el form.get('email')
  get emailField(){
    return this.form.get('email');
  }

  doSomething() {
    console.log('click');
  }



}





