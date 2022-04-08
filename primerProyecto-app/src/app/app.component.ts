import { Component } from '@angular/core';
import { Car } from './Car';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Mundo";
  //username = "";
  

  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
  cars: Car[] = [this.subaru, this.honda, this.bmw];

  constructor(){}

  user:string="";

  saySomething() {
    alert("Hola mundo");
}
counter = 0;
increment() {
  this.counter++;
}

phrase = "Its going...";
update() {
  this.phrase += "..and going";
}



}

