import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirsttdf';

  @ViewChild('userForm') uf:NgForm | undefined;
  countryList=[
    {"countryname":"India"},
    {"countryname":"USA"},
    {"countryname":"England"}
  ];
  SetDefaultValue(){
    // this.uf?.setValue({
    //   personalinformation:{
    //     firstname:'muthu',
    //     lastname:'journey',
    //     email:'abc@gmail.com',
    //     gender:'male',
    //     isMarried:true
    //         },
    //         address:{
    //           country:'USA',
    //           city:"newyork",
    //           street:'wall mart',
    //           pincode:614203
    //         }
    // }) ;
    this.uf?.form.patchValue({
      personalinformation:{
       firstname:'Muthu Journey'
      }
    });
  }
  // onSubmit(myForm:NgForm)
  // {
  //   console.log(myForm);
  // }

  onSubmit()
  {
    console.log(this.uf)
    this.uf?.reset();
  }
}
