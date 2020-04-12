// //import the members that we need
//         //member    //path to module containing that member
// import { Component } from '@angular/core';



// // decorator -> defines the metadata -> includes template that lays out the view managed by this component
// @Component({
//   //a function that adds metadata to a class, its members, or its method arguments
//   // a javascript language feature that's implemented in typescript.. limited to feature it decorates... always prefix with @
//   // can build your own decorators
//   // always put immediately in front of the feature you're decorating

//   //reference the component in html? specify selector... specifies the directive name (custom html tag).. when directive is used in the html, angular renders this components template
//   selector: 'pm-root',

//   //points to the template... template defines the layour for the user interface fragment/view
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// //class -> defines methods and props needed by our view
// // a construct that allows us to create a type ... use class keyword followed by class name (name with the featurename, then component as suffix... i.e. AppComponent)
// export class AppComponent {
//   //property -> data element associated with the class (noun describing element... camelCase)
//   pageTitle: string = 'Angular: Getting Started';
//   //methods should also be camelCase...
// }


//REBUILD FROM SCRATCH
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //selector -> which directive do we want to use in the html to reference this component (custom html element [just an empty div with the prescribed name] where we'll append this component..)
  template: `<div style="text-align:center">
  <h1>
    {{pageTitle}}
  </h1>
  <pm-products></pm-products>
</div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}