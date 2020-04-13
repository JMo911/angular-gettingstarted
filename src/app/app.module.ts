//THIS IS THE ROOT ANGULAR MODULE... 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

//ATTACH THIS DECORATOR TO DEFINE AS AN ANGULAR CLASS
@NgModule({
  //METADATA DETAILS...

  //THE PROPS ARE ARRAYS

  //WHICH OF OUR COMPONENTS BELONG TO THIS MODULE.. BY CONVENTION THE ROOT APP COMPONENT BELONGS TO THIS MODULE.. THUS DECLARED HERE, WE CAN ADD OTHERS HERE AS WELL
  //house OUR components, pipes, and directives
  declarations: [
    //ALLOWS ANGULAR TO LOCATE IT'S SELECTOR
    AppComponent,
    ProductListComponent
  ],

  //DEFINE EXTERNAL MODULES THAT WE WANT TO HAVE AVAILABLE TO ALL OF THE COMPONENTS THAT BELONG TO THIS ANGULAR MODULE... COULD BE MODS PROVIDED BY ANGULAR, A 3RD PARTY, OR OUR OWN ANGULAR MODULES .. EVERY BROWSER MOD NEEDS THIS
  imports: [
    //APP CAN RUN CORRECTLY IN BROWSER
    BrowserModule,
    //external components, pipes, and directives
    FormsModule
  ],

  //DEFINES THE STARTUP COMPONENT OF THE APP.. WHICH IS OUR APP COMPONENT... SHOULD CONTAIN THE SELECTOR WE USE IN THE INDEX.HTML FILE... WHICH IN THIS CASE IT DOES
  bootstrap: [AppComponent]
})
//DEFINED USING A CLASS
export class AppModule { }
