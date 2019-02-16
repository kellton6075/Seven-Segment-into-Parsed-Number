Steps For Running This App:

Step 1:
Migrate to the project which you have extracted.

cd marco-polo/

Step 2 :
Install the required packages using this command

$npm install

Step 3:
Now you are ready with project setup, just hit this command on command line

$npm start

Step 4:
Open the browser and hit

http://localhost:4200/


Question(2)=>

1.imports: makes the exported declarations of other modules available in the current module.For example,
imports: [FormsModule]
 we import FormsModule in @NgModule. Now we can use the functionality which the FormsModule has to offer throughout the @NgModule module.
  
declarations: used to declare components, directives, pipes that belongs to the current module. Once declared, we can use them throughout the whole module. For example,
  declarations: [UserComponent]
 UserComponent now is accessible throuhout the module.

providers: used to inject the services required by components, directives, pipes in our module. For example,
providers: [RegisterService]
Now, RegisterService can be used in any component of module using dependency injection.

2.Component: Component is used to break up the application into smaller components,
Component is a directive with a view.

Directive: Directive is used to add behavior to an existing DOM element. Directive doesn't use View.

Model: they are basically used to consume data from api's.
A simple example of this is a User class that defines a name variable that's a string and an age variable that must be a number:

export class User {
  name: string = 'Angular2';
  age: number = 0;
}

Module: Modules consist of one or more components. They do not control any html. Modules declare which components can be used by components belonging to other modules, which classes will be injected by the dependency injector and which component gets bootstrapped.

Services: Angular services are mainly used to communicate with API's. They contain methods that maintain data throughout the life of an application, i.e. data does not get refreshed and is available all the time. The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application.

