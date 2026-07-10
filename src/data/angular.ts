import type { InterviewQuestion } from "../types";

export const angularQuestions: InterviewQuestion[] = [
  {
    "question": "Decorators in Angular",
    "ans": {
      "text": "In Angular, decorators are special functions that are used to add metadata to classes, methods, properties, or parameters."
    },
    "children": [
      {
        "question": "Class Decorators",
        "ans": {
          "list": [
            "Used to define classes and mark them with metadata for Angular to interpret and process.",
            "Examples: @Component, @Directive, @Pipe, @NgModule, and @Injectable.",
            "@Component: Defines a component with template, style, and selector information.",
            "@Directive: Marks a class as a directive and allows it to manipulate the DOM.",
            "@Pipe: Declares a class as a pipe, used for transforming data in templates.",
            "@NgModule: Specifies an Angular module and organizes components, services, and directives.",
            "@Injectable: Marks a class as injectable and managed by Angular's dependency injection system."
          ],
          "script": "@Component({\n  selector: 'app-sample',\n  templateUrl: './sample.component.html'\n})\nexport class SampleComponent {}"
        },
        "children": []
      },
      {
        "question": "Property Decorators",
        "ans": {
          "list": [
            "@Input: Allows data to be passed into a component from a parent component.",
            "@Output: Enables the component to emit events to communicate with a parent component.",
            "@HostBinding: Binds a property to a host element's attribute or style.",
            "@HostListener: Listens to events on the host element and triggers methods within the class."
          ],
          "script": "@Input() title: string;\n @Output() clicked = new EventEmitter<void>();\n @HostBinding('class.active') isActive = true;\n @HostListener('click') onClick() {\n  this.clicked.emit();\n}"
        },
        "children": []
      },
      {
        "question": "Method Decorators",
        "ans": {
          "text": "@HostListener: Allows listening for events on the host element of a directive or component.",
          "script": "@HostListener('mouseover') onHover() {\n  console.log('Mouse over!');\n}"
        },
        "children": []
      },
      {
        "question": "Parameter Decorators",
        "ans": {
          "text": "@Inject: Specifies the dependency to be injected in a parameter, especially useful when injecting types that are not directly inferable by Angular.",
          "script": "constructor(@Inject(SomeService) private service: SomeService) {}"
        },
        "children": []
      }
    ]
  },
  {
    "question": "Directives in Angular",
    "ans": {
      "text": "Directives are classes that add behavior to elements in the DOM. They can be structural (like *ngFor) or attribute directives (like [ngClass])."
    },
    "children": [
      {
        "question": "Component Directives",
        "ans": {
          "text": "A component is a type of directive with a template. Components are the building blocks of the application and are used to encapsulate and render views.",
          "script": "@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})\nexport class AppComponent { title = 'angular-app'; }"
        }
      },
      {
        "question": "Structural Directives",
        "ans": {
          "text": "Structural directives are responsible for altering the structure of the DOM by adding or removing elements. They typically have a * prefix.",
          "list": [
            "*ngIf: Conditionally includes a template based on a condition",
            "*ngFor: Loops over a collection and repeats a template for each element in the collection",
            "*ngSwitch: A set of directives used to conditionally display one of many templates based on a value"
          ],
          "script": "<div *ngIf=\"isVisible\">This is conditionally visible</div>\n<ul>\n  <li *ngFor=\"let item of items\">{{ item }}</li>\n</ul>"
        }
      },
      {
        "question": "Attribute Directives",
        "ans": {
          "text": "Attribute directives are used to change the appearance or behavior of an element, component, or another directive. These do not alter the layout of the DOM but instead modify the behavior or styles of elements.",
          "list": [
            "ngClass: Adds or removes CSS classes dynamically",
            "ngStyle: Modifies the inline styles of an element",
            "ngModel: Binds form input elements to data properties"
          ],
          "script": "<div [ngClass]=\"{ 'highlight': isHighlighted }\">This div can be highlighted</div>\n<div [ngStyle]=\"{ 'color': textColor }\">This text color is dynamically set</div>"
        }
      },
      {
        "question": "Custom Directive",
        "ans": {
          "text": "Can create custom directives by using Angular’s @Directive decorator",
          "script": "import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';\n\n@Directive({selector: '[appHighlight]'})\nexport class HighlightDirective {\n  constructor(private el: ElementRef, private renderer: Renderer2) {}\n\n  @HostListener('click') onClick() {\n    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');\n  }\n}\n\n<!-- binding directive to dom -->\n<div appHighlight>\n  Click me to change my background color.\n</div>"
        }
      }
    ]
  },
  {
    "question": "Lifecycle hooks in Angular",
    "ans": {
      "text": "Angular components have lifecycle hooks that allow developers to tap into various stages of a component’s lifecycle. Key hooks include ngOnInit, ngOnChanges, ngOnDestroy, and ngAfterViewInit."
    },
    "children": [
      {
        "question": "ngOnChanges",
        "ans": {
          "text": "The ngOnChanges hook is called whenever an input property of the component changes. It is invoked before ngOnInit and whenever the input bindings are updated.",
          "script": "import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>{{name}}</p>',\n})\nexport class MyComponent implements OnChanges {\n  @Input() name: string;\n\n  ngOnChanges(changes: SimpleChanges) {\n    console.log('Changes:', changes);\n  }\n}"
        }
      },
      {
        "question": "ngOnInit",
        "ans": {
          "text": "The ngOnInit hook is called once the component has been initialized and all its inputs are set. It’s commonly used for initialization logic, like fetching data.",
          "script": "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>{{data}}</p>',\n})\nexport class MyComponent implements OnInit {\n  data: string;\n\n  ngOnInit() {\n    this.data = 'Hello, Angular!'; // Initialization logic\n  }\n}"
        }
      },
      {
        "question": "ngDoCheck",
        "ans": {
          "text": "The ngDoCheck hook is called during every change detection cycle. It's useful for detecting and responding to changes that Angular's default change detection doesn't detect.",
          "script": "import { Component, DoCheck } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>{{count}}</p>',\n})\nexport class MyComponent implements DoCheck {\n  count = 0;\n\n  ngDoCheck() {\n    console.log('Change detection running');\n  }\n}"
        }
      },
      {
        "question": "ngAfterContentInit",
        "ans": {
          "text": "The ngAfterContentInit hook is called once the content (ng-content) has been initialized. It’s useful for interacting with projected content.",
          "script": "import { Component, AfterContentInit } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<ng-content></ng-content>',\n})\nexport class MyComponent implements AfterContentInit {\n\n  ngAfterContentInit() {\n    console.log('Content initialized');\n  }\n}"
        }
      },
      {
        "question": "ngAfterContentChecked",
        "ans": {
          "text": "The ngAfterContentChecked hook is called after every check of content projected into the component (ng-content). It’s useful for checking changes in the projected content.",
          "script": "import { Component, AfterContentChecked } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<ng-content></ng-content>',\n})\nexport class MyComponent implements AfterContentChecked {\n\n  ngAfterContentChecked() {\n    console.log('Content checked');\n  }\n}"
        }
      },
      {
        "question": "ngAfterViewInit",
        "ans": {
          "text": "The ngAfterViewInit hook is called once Angular has fully initialized the component’s view. It’s typically used to interact with child components or DOM elements that rely on the view being fully rendered.",
          "script": "import { Component, AfterViewInit, ViewChild } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<div #myDiv></div>',\n})\nexport class MyComponent implements AfterViewInit {\n  @ViewChild('myDiv') myDiv;\n\n  ngAfterViewInit() {\n    console.log('View is initialized:', this.myDiv.nativeElement); // Accessing child view elements\n  }\n}"
        }
      },
      {
        "question": "ngAfterViewChecked",
        "ans": {
          "text": "The ngAfterViewChecked hook is called after every check of the component’s view. It's used to check for any changes in the component's view after change detection.",
          "script": "import { Component, AfterViewChecked } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>My component</p>',\n})\nexport class MyComponent implements AfterViewChecked {\n\n  ngAfterViewChecked() {\n    console.log('View checked');\n  }\n}"
        }
      },
      {
        "question": "ngOnDestroy",
        "ans": {
          "text": "The ngOnDestroy hook is called just before the component is destroyed. It’s used for cleanup tasks like unsubscribing from Observables or detaching event handlers.",
          "script": "import { Component, OnDestroy } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>Component destroyed</p>',\n})\nexport class MyComponent implements OnDestroy {\n  ngOnDestroy() {\n    console.log('Component is about to be destroyed'); // Cleanup logic\n  }\n}"
        }
      }
    ]
  },
  {
    "question": "Data Binding",
    "ans": {
      "text": "Angular supports different types of data binding to synchronize data between the component and the view."
    },
    "children": [
      {
        "question": "Interpolation",
        "ans": {
          "text": "Allows you to display component properties in the template using double curly braces.",
          "script": "{{ title }}"
        }
      },
      {
        "question": "Property Binding",
        "ans": {
          "text": "Binds component properties to HTML element attributes using square brackets.",
          "script": "<img [src]=\"imageUrl\" />"
        }
      },
      {
        "question": "Event Binding",
        "ans": {
          "text": "Listens to events from the view and calls component methods using parentheses.",
          "script": "<button (click)=\"handleClick()\">Click me</button>"
        }
      },
      {
        "question": "Two-Way Binding",
        "ans": {
          "text": "Combines property and event binding using ngModel for bidirectional data flow.",
          "script": "<input [(ngModel)]=\"userName\" />"
        }
      }
    ]
  },
  {
    "question": "Interaction between components",
    "ans": {
      "text": "Components can communicate with each other using Input and Output decorators for parent-child communication, or services for sharing data across unrelated components."
    },
    "children": [
      {
        "question": "Parent-Child Communication using @Input and @Output",
        "ans": {
          "text": "In Angular, parent and child components can communicate by passing data with `@Input` and `@Output` decorators. `@Input` is used to send data from the parent to the child, and `@Output` is used to send data from the child to the parent.",
          "script": "// Parent Component\n@Component({\n  selector: 'app-parent',\n  template: '<app-child [childData]=\"parentData\" (childEvent)=\"handleEvent($event)\"></app-child>'\n})\nexport class ParentComponent {\n  parentData = 'Data from Parent';\n  handleEvent(event) {\n    console.log('Received from child:', event);\n  }\n}\n\n// Child Component\n@Component({\n  selector: 'app-child',\n  template: '<div>{{ childData }}</div><button (click)=\"sendToParent()\">Send to Parent</button>'\n})\nexport class ChildComponent {\n  @Input() childData: string;\n  @Output() childEvent = new EventEmitter<string>();\n\n  sendToParent() {\n    this.childEvent.emit('Hello from Child!');\n  }\n}"
        }
      },
      {
        "question": "Sharing Data Using Services",
        "ans": {
          "text": "Services in Angular are used for sharing data between unrelated components. A service can hold shared state and be injected into any component that needs it, allowing them to communicate indirectly.",
          "script": "// Service to share data\n@Injectable({ providedIn: 'root' })\nexport class SharedService {\n  private data = new BehaviorSubject<string>('Initial Data');\n  data$ = this.data.asObservable();\n\n  updateData(newData: string) {\n    this.data.next(newData);\n  }\n}\n\n// Component A\n@Component({\n  selector: 'app-component-a',\n  template: '<div>{{ sharedData }}</div>'\n})\nexport class ComponentA {\n  sharedData: string;\n  constructor(private sharedService: SharedService) {\n    this.sharedService.data$.subscribe(data => this.sharedData = data);\n  }\n}\n\n// Component B\n@Component({\n  selector: 'app-component-b',\n  template: '<button (click)=\"updateData()\">Update Data</button>'\n})\nexport class ComponentB {\n  constructor(private sharedService: SharedService) {}\n\n  updateData() {\n    this.sharedService.updateData('New Data from Component B');\n  }\n}"
        }
      },
      {
        "question": "ViewChild and ContentChild",
        "ans": {
          "text": "`@ViewChild` and `@ContentChild` decorators allow components to query and interact with child elements and projected content. `@ViewChild` is used to get a reference to a DOM element or child component, while `@ContentChild` is used to get a reference to content projected into the component.",
          "script": "// Using @ViewChild\n@Component({\n  selector: 'app-parent',\n  template: '<app-child></app-child>'\n})\nexport class ParentComponent {\n  @ViewChild(ChildComponent) childComponent: ChildComponent;\n\n  ngAfterViewInit() {\n    this.childComponent.someMethod();\n  }\n}\n\n// Using @ContentChild\n@Component({\n  selector: 'app-parent',\n  template: '<ng-content></ng-content>'\n})\nexport class ParentComponent {\n  @ContentChild('content') contentElement: ElementRef;\n\n  ngAfterContentInit() {\n    console.log(this.contentElement.nativeElement.textContent); // Logs projected content\n  }\n}\n\n// Content Component\n@Component({\n  selector: 'app-content',\n  template: '<div #content>Content to project</div>'\n})\nexport class ContentComponent {}"
        }
      }
    ]
  },
  {
    "question": "Component in Angular",
    "ans": {
      "text": "Components are the building blocks of Angular applications. Each component consists of HTML, CSS, and TypeScript files, controlling a specific view in the application. Component metadata defines essential configuration properties within the @Component decorator to control how the component is used and displayed.",
      "script": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n  styleUrls: ['./example.component.css']\n})\nexport class ExampleComponent {\n  title = 'Hello, Angular!';\n}"
    },
    "children": [
      {
        "question": "selector",
        "ans": {
          "text": "The CSS selector that identifies this component in a template. Angular creates an instance of this component wherever it finds the selector in the DOM.",
          "script": "\"selector: 'app-example'\""
        }
      },
      {
        "question": "templateUrl",
        "ans": {
          "text": "Specifies the external HTML file that contains the component’s template.",
          "script": "\"templateUrl: './example.component.html'\""
        }
      },
      {
        "question": "template",
        "ans": {
          "text": "Defines an inline HTML template directly within the component metadata. Useful for small templates.",
          "script": "\"template: '<p>Hello, Angular!</p>'\""
        }
      },
      {
        "question": "styleUrls",
        "ans": {
          "text": "Specifies external CSS files that define styles for this component.",
          "script": "\"styleUrls: ['./example.component.css']\""
        }
      },
      {
        "question": "styles",
        "ans": {
          "text": "Defines inline styles for the component, useful for quick style adjustments without an external file.",
          "script": "\"styles: ['p { color: blue; }']\""
        }
      },
      {
        "question": "providers",
        "ans": {
          "text": "Specifies services that the component can use, allowing for dependency injection at the component level.",
          "script": "\"providers: [ExampleService]\""
        }
      },
      {
        "question": "animations",
        "ans": {
          "text": "Defines animations for the component using Angular's animation library.",
          "script": "\"animations: [trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))])])]\"",
          "extra_info": "Used to add entry/exit animations."
        }
      },
      {
        "question": "changeDetection",
        "ans": {
          "text": "Controls the change detection strategy for the component, optimizing how Angular checks for data changes.",
          "script": "\"changeDetection: ChangeDetectionStrategy.OnPush\""
        }
      },
      {
        "question": "encapsulation",
        "ans": {
          "text": "Sets the style encapsulation mode for this component, controlling how styles apply to the component and its children.",
          "script": "\"encapsulation: ViewEncapsulation.None\""
        }
      }
    ]
  },
  {
    "question": "Module in Angular",
    "ans": {
      "text": "An Angular module, or NgModule, is a container that organizes the components, directives, pipes, and services of an application. It provides a mechanism to group related pieces of an application and manage dependencies. The @NgModule decorator is used to define metadata for an Angular module, specifying its components, imports, and other configurations.",
      "script": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ExampleComponent } from './example/example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule],\n  exports: [ExampleComponent]\n})\nexport class ExampleModule {}"
    },
    "children": [
      {
        "question": "declarations",
        "ans": {
          "text": "Contains the components, directives, and pipes that belong to this module. These can only be used within the module unless they are exported.",
          "script": "\"declarations: [ExampleComponent, ExampleDirective, ExamplePipe]\""
        }
      },
      {
        "question": "imports",
        "ans": {
          "text": "Specifies other modules whose exported classes are needed by component templates in this module.",
          "script": "\"imports: [CommonModule, FormsModule, ReactiveFormsModule]\""
        }
      },
      {
        "question": "exports",
        "ans": {
          "text": "Lists the components, directives, and pipes that can be used in other modules importing this module.",
          "script": "\"exports: [ExampleComponent, ExampleDirective]\""
        }
      },
      {
        "question": "providers",
        "ans": {
          "text": "Registers services with the dependency injector, making them available application-wide or module-wide depending on configuration.",
          "script": "\"providers: [ExampleService]\""
        }
      },
      {
        "question": "bootstrap",
        "ans": {
          "text": "Specifies the root component that Angular should bootstrap when the application starts. Used only in the root AppModule.",
          "script": "\"bootstrap: [AppComponent]\""
        }
      },
      {
        "question": "schemas",
        "ans": {
          "text": "Defines allowed schemas for this module, such as NO_ERRORS_SCHEMA to ignore unknown elements/attributes.",
          "script": "\"schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]\""
        }
      }
    ]
  },
  {
    "question": "Pipes in Angular",
    "ans": {
      "text": "Pipes transform displayed values in templates. Built-in pipes include DatePipe, CurrencyPipe, and UpperCasePipe. Custom pipes can also be created."
    },
    "children": [
      {
        "question": "Built-in Pipes",
        "ans": {
          "text": "date, uppercase, lowercase, currency, percent, json, slice, async",
          "script": "{{ currentDate | date:'shortDate' }}\n{{ 'hello world' | uppercase }}\n{{ 'HELLO WORLD' | lowercase }}\n{{ 1234.56 | currency:'USD' }}\n{{ 0.25 | percent }}\n{{ { name: 'Angular' } | json }}\n{{ 'Hello World' | slice:0:5 }}\n<div>{{ asyncData$ | async }}</div>"
        }
      },
      {
        "question": "Custom Pipes",
        "ans": {
          "text": "Can create custom pipes by using Angular’s @Pipe decorator",
          "script": "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({name: 'formatNumber'})\nexport class FormatNumberPipe implements PipeTransform {\n  transform(value: number, decimals: number): string {\n    return value.toFixed(decimals);\n  }\n}\n\n<!-- custom pipe implementation with param -->\n{{ 1234.5678 | formatNumber:2 }}"
        }
      },
      {
        "question": "Pure and impure pipes",
        "ans": {
          "text": "Pure pipes execute only when their input reference changes or when the component is destroyed. Impure pipes run on every change detection cycle, even when their input has not changed.",
          "list": [
            "Pure pipes (default) are more performant and should be preferred for simple transformations.",
            "Impure pipes are useful when the transform depends on global state or mutable objects.",
            "Set pure: false in the @Pipe decorator to make a custom pipe impure."
          ],
          "script": "@Pipe({ name: 'impureExample', pure: false })\nexport class ImpureExamplePipe implements PipeTransform {\n  transform(value: unknown): unknown {\n    return value;\n  }\n}"
        }
      }
    ]
  },
  {
    "question": "Forms in Angular",
    "ans": {
      "text": "Angular provides two types of forms: Template-driven forms and Reactive forms. Template-driven forms are easy to use with Angular directives, while reactive forms offer more control with explicit form models."
    },
    "children": [
      {
        "question": "Template-driven forms",
        "ans": {
          "text": "Template-driven forms are built using Angular directives within the HTML template. They are simple to set up and use two-way data binding for form management, making them ideal for simpler forms.",
          "script": "<form #form=\"ngForm\">\n  <input name=\"username\" ngModel required />\n  <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n</form>"
        }
      },
      {
        "question": "Reactive forms",
        "ans": {
          "text": "Reactive forms use an explicit form model in the component class to manage form inputs and validation. They provide more control over form data and are ideal for complex forms with dynamic validations.",
          "script": "import { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({ /* component metadata */ })\nexport class ExampleComponent {\n  form: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.form = this.fb.group({\n      username: ['', Validators.required],\n      email: ['', [Validators.required, Validators.email]]\n    });\n  }\n\n  onSubmit() {\n    if (this.form.valid) {\n      // handle valid form submission\n    }\n  }\n}"
        }
      },
      {
        "question": "Form validation",
        "ans": {
          "text": "Angular forms support built-in and custom validation. Validators are functions that verify the correctness of form fields, such as checking if required fields are filled or if an email format is valid.",
          "script": "import { Validators } from '@angular/forms';\n\nconst form = this.fb.group({\n  username: ['', [Validators.required, Validators.minLength(3)]],\n  email: ['', [Validators.required, Validators.email]]\n});\n\n<form [formGroup]=\"form\">\n  <input formControlName=\"username\" />\n  <div *ngIf=\"form.get('username').hasError('required')\">Username is required</div>\n</form>"
        }
      },
      {
        "question": "Custom validators",
        "ans": {
          "text": "Custom validators are functions you define to implement specific validation rules beyond the built-in validators. They allow you to handle more complex validation requirements.",
          "script": "import { AbstractControl, ValidatorFn } from '@angular/forms';\n\nexport function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {\n  return (control: AbstractControl): { [key: string]: any } | null => {\n    const forbidden = nameRe.test(control.value);\n    return forbidden ? { 'forbiddenName': { value: control.value } } : null;\n  };\n}\n\nthis.form = this.fb.group({\n  name: ['', [forbiddenNameValidator(/admin/i)]]\n});"
        }
      },
      {
        "question": "Async validators",
        "ans": {
          "text": "Async validators perform validation operations asynchronously, useful for tasks like checking the uniqueness of a username on a server. They return an observable or promise.",
          "script": "import { AbstractControl } from '@angular/forms';\nimport { of } from 'rxjs';\nimport { delay, map } from 'rxjs/operators';\n\nexport function uniqueUsernameValidator(control: AbstractControl) {\n  return of(control.value !== 'existingUser').pipe(\n    delay(500),\n    map(isUnique => (isUnique ? null : { uniqueUsername: true }))\n  );\n}\n\nthis.form = this.fb.group({\n  username: ['', Validators.required, uniqueUsernameValidator]\n});"
        }
      },
      {
        "question": "Form arrays",
        "ans": {
          "text": "Form arrays enable handling dynamic sets of form controls, useful for forms with variable numbers of inputs, like adding or removing items in a list.",
          "script": "import { FormArray, FormBuilder, Validators } from '@angular/forms';\n\n@Component({ /* component metadata */ })\nexport class ExampleComponent {\n  form = this.fb.group({\n    items: this.fb.array([ this.createItem() ])\n  });\n\n  constructor(private fb: FormBuilder) {}\n\n  createItem() {\n    return this.fb.group({\n      name: ['', Validators.required]\n    });\n  }\n\n  addItem() {\n    this.items.push(this.createItem());\n  }\n\n  get items() {\n    return this.form.get('items') as FormArray;\n  }\n}"
        }
      },
      {
        "question": "Dynamic form controls",
        "ans": {
          "text": "Dynamic form controls can be added or removed from reactive forms at runtime, allowing for highly flexible and adaptable forms.",
          "script": "import { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({ /* component metadata */ })\nexport class DynamicFormComponent {\n  form: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.form = this.fb.group({});\n  }\n\n  addControl(name: string) {\n    this.form.addControl(name, this.fb.control(''));\n  }\n\n  removeControl(name: string) {\n    this.form.removeControl(name);\n  }\n}"
        }
      }
    ]
  },
  {
    "question": "AOT and JIT",
    "ans": {
      "text": "AOT (Ahead of Time) compiles the code at build time, while JIT (Just in Time) compiles it at runtime. AOT is faster for production builds as it reduces the size of the application.",
      "script": "ng build --configuration production\nng build"
    },
    "children": []
  },
  {
    "question": "Promises and Observables in Angular",
    "ans": {
      "text": "Promises represent a single value that will be resolved in the future, while Observables can emit multiple values over time. Observables are more powerful for asynchronous programming in Angular."
    },
    "children": [
      {
        "question": "Promises in Angular",
        "ans": {
          "text": "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It resolves with a value or rejects with an error.",
          "script": "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Data fetched successfully');\n  }, 2000);\n});\n\npromise.then(response => {\n  console.log(response); // 'Data fetched successfully'\n}).catch(error => {\n  console.error(error);\n});"
        }
      },
      {
        "question": "Observables in Angular",
        "ans": {
          "text": "Observables are a more powerful alternative to Promises, as they can emit multiple values over time, and allow cancellation, retries, and other advanced operations.",
          "script": "import { Observable } from 'rxjs';\n\nconst observable = new Observable(subscriber => {\n  setTimeout(() => {\n    subscriber.next('First value');\n    subscriber.next('Second value');\n    subscriber.complete();\n  }, 2000);\n});\n\nobservable.subscribe({\n  next: value => console.log(value),\n  complete: () => console.log('Observable complete')\n});"
        }
      },
      {
        "question": "Promise vs Observable",
        "ans": {
          "text": "Promises are great for a single asynchronous result, but Observables are preferred when you need multiple values over time or need to handle complex asynchronous scenarios (e.g., retries, cancellations, streaming data).",
          "script": "// Promise example\nconst promise = new Promise((resolve) => setTimeout(() => resolve('Data'), 1000));\n\npromise.then(response => console.log(response));\n\n// Observable example\nimport { Observable } from 'rxjs';\nconst observable = new Observable(subscriber => {\n  subscriber.next('Data 1');\n  subscriber.next('Data 2');\n  setTimeout(() => subscriber.next('Data 3'), 2000);\n});\nobservable.subscribe(value => console.log(value));"
        }
      },
      {
        "question": "Using Observables with HTTP in Angular",
        "ans": {
          "text": "In Angular, HTTP requests return Observables, which allows you to handle asynchronous operations with features like retries, cancellation, and piping operations.",
          "script": "import { HttpClient } from '@angular/common/http';\nimport { Observable } from 'rxjs';\n\nconstructor(private http: HttpClient) {}\n\ngetData(): Observable<any> {\n  return this.http.get('https://api.example.com/data');\n}\n\nthis.getData().subscribe(response => {\n  console.log(response);\n});"
        }
      },
      {
        "question": "Operators in Observables",
        "ans": {
          "text": "Observables come with a wide variety of operators (like map, filter, merge, etc.) that allow you to transform, filter, combine, and manage streams of data.",
          "script": "import { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nconst observable = new Observable(subscriber => {\n  subscriber.next(1);\n  subscriber.next(2);\n  subscriber.next(3);\n});\n\nobservable.pipe(\n  map(value => value * 2)\n).subscribe(value => {\n  console.log(value); // 2, 4, 6\n});"
        }
      }
    ]
  },
  {
    "question": "constructor and ngOnInit in Angular",
    "ans": {
      "text": "The constructor is used for dependency injection and setting up initial states. ngOnInit is a lifecycle hook used to initialize component data after Angular has initialized the component’s input properties."
    },
    "children": [
      {
        "question": "Constructor in Angular",
        "ans": {
          "text": "The constructor is a special method used to create and initialize an object created within a class. In Angular, it is mainly used for dependency injection, to inject services into the component.",
          "script": "import { Component } from '@angular/core';\nimport { MyService } from './my-service';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>{{message}}</p>',\n})\nexport class MyComponent {\n  message: string;\n\n  constructor(private myService: MyService) {\n    this.message = this.myService.getMessage(); // Initializing data with injected service\n  }\n}"
        }
      },
      {
        "question": "ngOnInit in Angular",
        "ans": {
          "text": "ngOnInit is a lifecycle hook that is called after Angular has initialized the component’s input properties. It is used to perform any additional initialization tasks that require access to input properties or services.",
          "script": "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  template: '<p>{{data}}</p>',\n})\nexport class MyComponent implements OnInit {\n  data: string;\n\n  ngOnInit() {\n    this.data = 'Hello from ngOnInit!'; // Performing initialization logic\n  }\n}"
        }
      },
      {
        "question": "Constructor vs ngOnInit",
        "ans": {
          "text": "The constructor is used for dependency injection and setting initial values, while ngOnInit is a lifecycle hook that is invoked after the component’s input properties are set, making it suitable for initializing data that depends on those properties.",
          "script": "// Constructor example\nconstructor(private service: MyService) {\n  this.service.fetchData(); // Dependency injection\n}\n\n// ngOnInit example\nngOnInit() {\n  this.data = this.service.getData(); // Initialize data after input properties are set\n}"
        }
      }
    ]
  },
  {
    "question": "Routing in Angular",
    "ans": {
      "text": "Routing in Angular allows you to navigate between different views or pages within a single-page application. It uses the Angular Router module to define routes and manage navigation between components."
    },
    "children": [
      {
        "question": "Setting up Routes in Angular",
        "ans": {
          "text": "To set up routing, you first need to import the Angular Router module and configure the routes array, which maps URL paths to components.",
          "script": "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\nimport { AboutComponent } from './about/about.component';\n\nconst routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'about', component: AboutComponent },\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }"
        }
      },
      {
        "question": "Using RouterLink and RouterOutlet",
        "ans": {
          "text": "RouterLink is used to define navigation links in templates, and RouterOutlet is used to define where the routed components will be displayed.",
          "script": "<!-- app.component.html -->\n<nav>\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/about\">About</a>\n</nav>\n\n<router-outlet></router-outlet>"
        }
      },
      {
        "question": "Lazy Loading in Angular",
        "ans": {
          "text": "Lazy loading is a technique that allows you to load feature modules only when they are needed, improving the initial load time of the application.",
          "script": "// app-routing.module.ts\nconst routes: Routes = [\n  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },\n  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }"
        }
      },
      {
        "question": "Route Guards in Angular",
        "ans": {
          "text": "Route guards allow you to control access to routes based on certain conditions, such as user authentication or permissions.",
          "script": "import { Injectable } from '@angular/core';\nimport { CanActivate } from '@angular/router';\nimport { AuthService } from './auth.service';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthGuard implements CanActivate {\n  constructor(private authService: AuthService) {}\n\n  canActivate(): boolean {\n    return this.authService.isAuthenticated();\n  }\n}\n\n// app-routing.module.ts\nconst routes: Routes = [\n  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }\n];"
        }
      },
      {
        "question": "Passing Parameters in Routes",
        "ans": {
          "text": "You can pass parameters to routes via the URL using route parameters. These can be accessed in the component using ActivatedRoute.",
          "script": "// app-routing.module.ts\nconst routes: Routes = [\n  { path: 'user/:id', component: UserComponent }\n];\n\n// user.component.ts\nimport { ActivatedRoute } from '@angular/router';\n\nconstructor(private route: ActivatedRoute) {}\n\nngOnInit() {\n  this.route.params.subscribe(params => {\n    const userId = params['id']; // Accessing route parameter\n  });\n}"
        }
      },
      {
        "question": "Child Routes in Angular",
        "ans": {
          "text": "Child routes allow you to create nested routes. These are defined by specifying a child property within the route configuration.",
          "script": "// app-routing.module.ts\nconst routes: Routes = [\n  { path: 'parent', component: ParentComponent, children: [\n    { path: 'child', component: ChildComponent }\n  ] }\n];\n\n// app.component.html\n<router-outlet></router-outlet>\n\n// parent.component.html\n<a routerLink=\"child\">Go to Child</a>"
        }
      }
    ]
  },
  {
    "question": "RxJs in Angular",
    "ans": {
      "text": "RxJS is a reactive programming library used in Angular for managing asynchronous operations. It provides powerful operators like map, filter, mergeMap, etc., to handle events, HTTP requests, and more."
    },
    "children": [
      {
        "question": "Creation Operators",
        "ans": {
          "text": "Creation operators are used to create new Observables from various sources.",
          "list": [
            "of: Emits the arguments you pass, then completes.",
            "from: Converts various data types like arrays or promises to Observables.",
            "interval: Creates an Observable that emits sequential numbers at a specified interval."
          ],
          "script": "import { of } from 'rxjs';\nof(1, 2, 3).subscribe(console.log); // Output: 1, 2, 3\n\nimport { from } from 'rxjs';\nfrom([1, 2, 3]).subscribe(console.log); // Output: 1, 2, 3\n\nimport { interval } from 'rxjs';\ninterval(1000).subscribe(console.log); // Output: 0, 1, 2... every second"
        }
      },
      {
        "question": "Transformation Operators",
        "ans": {
          "text": "Transformation operators are used to modify data emitted by an Observable.",
          "list": [
            "map: Applies a given function to each emitted value, transforming it.",
            "mergeMap: Projects each value to an Observable, then flattens all inner Observables using merge.",
            "switchMap: Maps each value to an Observable, then flattens by unsubscribing from previous Observables if a new value is emitted."
          ],
          "script": "import { of } from 'rxjs';\nimport { map } from 'rxjs/operators';\nof(1, 2, 3).pipe(map(x => x * 2)).subscribe(console.log); // Output: 2, 4, 6\n\nimport { of } from 'rxjs';\nimport { mergeMap } from 'rxjs/operators';\nof('Hello').pipe(\n  mergeMap(val => of(`${val} World`))\n).subscribe(console.log); // Output: Hello World\n\nimport { interval } from 'rxjs';\nimport { switchMap } from 'rxjs/operators';\ninterval(1000).pipe(\n  switchMap(() => of('New value'))\n).subscribe(console.log);"
        }
      },
      {
        "question": "Filtering Operators",
        "ans": {
          "text": "Filtering operators emit only certain items based on specified criteria.",
          "list": [
            "filter: Emits values that pass a given condition.",
            "take: Takes only the first specified number of values from the source.",
            "debounceTime: Emits a value from the source Observable only after a certain time has passed without another source emission."
          ],
          "script": "import { of } from 'rxjs';\nimport { filter } from 'rxjs/operators';\nof(1, 2, 3, 4, 5).pipe(\n  filter(x => x % 2 === 0)\n).subscribe(console.log); // Output: 2, 4 \n\nimport { interval } from 'rxjs';\nimport { take } from 'rxjs/operators';\ninterval(1000).pipe(take(3)).subscribe(console.log); // Output: 0, 1, 2\n\nimport { fromEvent } from 'rxjs';\nimport { debounceTime } from 'rxjs/operators';\nfromEvent(document, 'click').pipe(\n  debounceTime(300)\n).subscribe(console.log);"
        }
      },
      {
        "question": "Combination Operators",
        "ans": {
          "text": "Combination operators combine multiple Observables into one.",
          "list": [
            "combineLatest: Emits the latest values from multiple Observables whenever one of them emits.",
            "concat: Subscribes to each Observable in order, only moving to the next when the current one completes.",
            "withLatestFrom: Combines each value from the source Observable with the latest value from other Observables."
          ],
          "script": "import { combineLatest, of } from 'rxjs';\ncombineLatest([of(1), of(2)]).subscribe(console.log); // Output: [1, 2]\n\nimport { concat, of } from 'rxjs';\nconcat(of(1, 2, 3), of(4, 5, 6)).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6\n\nimport { interval } from 'rxjs';\nimport { withLatestFrom } from 'rxjs/operators';\ninterval(1000).pipe(\n  withLatestFrom(interval(500))\n).subscribe(console.log);"
        }
      },
      {
        "question": "Observables and Subscriptions in RxJS",
        "ans": {
          "text": "In RxJS, Observables are streams that emit values over time. Subscriptions are used to listen to the emitted values from an Observable and perform actions accordingly.",
          "script": "import { Observable } from 'rxjs';\n\nconst data$ = new Observable(observer => {\n  observer.next('Hello');\n  observer.complete();\n});\n\nconst subscription = data$.subscribe(value => console.log(value)); // Output: Hello\nsubscription.unsubscribe();"
        }
      },
      {
        "question": "Handling HTTP Requests with RxJS",
        "ans": {
          "text": "RxJS is widely used to handle HTTP requests in Angular. The HttpClient module in Angular returns Observables, allowing developers to manage asynchronous HTTP requests with RxJS operators.",
          "script": "import { HttpClient } from '@angular/common/http';\nimport { map } from 'rxjs/operators';\n\nconstructor(private http: HttpClient) {}\n\ngetData() {\n  return this.http.get('https://api.example.com/data').pipe(\n    map(response => response['data'])\n  );\n}\n"
        }
      }
    ]
  },
  {
    "question": "HTTP Interceptors",
    "ans": {
      "text": "HTTP interceptors allow you to modify HTTP requests and responses globally. They can be used for tasks like adding authentication tokens or handling global error messages."
    },
    "children": [
      {
        "question": "Creating an HTTP Interceptor",
        "ans": {
          "text": "An HTTP interceptor is created by implementing the `HttpInterceptor` interface and overriding the `intercept` method. It allows you to manipulate the request before it is sent to the server or modify the response before it reaches the application.",
          "script": "import { Injectable } from '@angular/core';\nimport { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';\nimport { Observable } from 'rxjs';\n\n@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {\n    const clonedRequest = req.clone({\n      setHeaders: { 'Authorization': 'Bearer my-token' }\n    });\n    return next.handle(clonedRequest);\n  }\n}"
        }
      },
      {
        "question": "Registering HTTP Interceptors",
        "ans": {
          "text": "Once an interceptor is created, it must be provided in the application module to be used globally. The `HTTP_INTERCEPTORS` token is used to register multiple interceptors.",
          "script": "import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { HTTP_INTERCEPTORS } from '@angular/common/http';\nimport { AuthInterceptor } from './auth.interceptor';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }"
        }
      },
      {
        "question": "Error Handling with HTTP Interceptors",
        "ans": {
          "text": "HTTP interceptors can also be used for global error handling by catching errors in the HTTP response and performing actions like showing alerts or logging errors.",
          "script": "import { Injectable } from '@angular/core';\nimport { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';\nimport { catchError } from 'rxjs/operators';\nimport { of } from 'rxjs';\n\n@Injectable()\nexport class ErrorInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) {\n    return next.handle(req).pipe(\n      catchError(err => {\n        console.error('HTTP Error:', err);\n        return of([]); // Handle the error\n      })\n    );\n  }\n}"
        }
      }
    ]
  },
  {
    "question": "ngZone in Angular",
    "ans": {
      "text": "ngZone is a service used for managing change detection in Angular. It helps in ensuring that Angular is aware of changes when you work with asynchronous code (e.g., setTimeout or HTTP requests)."
    },
    "children": [
      {
        "question": "What is ngZone?",
        "ans": {
          "text": "ngZone is a wrapper around JavaScript's native asynchronous operations like `setTimeout`, `setInterval`, and HTTP requests. Angular uses it to ensure that when asynchronous operations are executed, the framework can trigger change detection to update the view accordingly.",
          "script": "import { Component, NgZone } from '@angular/core';\n\n@Component({\n  selector: 'app-zone-example',\n  template: '<div>{{ counter }}</div>'\n})\nexport class ZoneExampleComponent {\n  counter = 0;\n\n  constructor(private ngZone: NgZone) {\n    setInterval(() => {\n      this.counter++;\n    }, 1000);\n  }\n}"
        }
      },
      {
        "question": "Why ngZone is used in Angular?",
        "ans": {
          "text": "ngZone is used to ensure that Angular is aware of changes made outside its context. For example, when using `setTimeout` or external libraries that don’t trigger Angular's change detection, ngZone helps to run code inside the Angular zone and notify Angular to update the view.",
          "script": "// Example using NgZone\nimport { Component, NgZone } from '@angular/core';\n\n@Component({\n  selector: 'app-zone-example',\n  template: '<button (click)=\"start()\">Start Counter</button><div>{{ counter }}</div>'\n})\nexport class ZoneExampleComponent {\n  counter = 0;\n\n  constructor(private ngZone: NgZone) { }\n\n  start() {\n    this.ngZone.runOutsideAngular(() => {\n      setInterval(() => {\n        this.counter++;\n      }, 1000);\n    });\n  }\n}"
        }
      },
      {
        "question": "ngZone Methods",
        "ans": {
          "text": "There are several methods provided by ngZone for managing change detection and running code inside or outside the Angular zone: `run()`, `runOutsideAngular()`, and `runGuarded()`.",
          "script": "// run() - Executes a function inside Angular zone\nthis.ngZone.run(() => {\n  this.counter++;\n});\n\n// runOutsideAngular() - Executes a function outside Angular zone (to avoid triggering change detection)\nthis.ngZone.runOutsideAngular(() => {\n  // perform long-running tasks\n});"
        }
      },
      {
        "question": "Using ngZone to improve performance",
        "ans": {
          "text": "By using `runOutsideAngular()` for tasks that do not need to update the view (like animations or third-party libraries), you can prevent unnecessary change detection cycles, thereby improving performance. Once the task is completed, you can use `run()` to re-enter the Angular zone if needed.",
          "script": "// Example for improving performance with ngZone\nimport { Component, NgZone } from '@angular/core';\n\n@Component({\n  selector: 'app-zone-performance',\n  template: '<div>{{ counter }}</div>'\n})\nexport class ZonePerformanceComponent {\n  counter = 0;\n\n  constructor(private ngZone: NgZone) { }\n\n  startTask() {\n    this.ngZone.runOutsideAngular(() => {\n      setInterval(() => {\n        this.counter++;\n      }, 1000);\n    });\n  }\n}"
        }
      }
    ]
  },
  {
    "question": "Optimize loading and performance improvements",
    "ans": {
      "text": "Optimizing loading times and performance in Angular applications is essential for providing a better user experience. Several techniques can be used, including lazy loading, ahead-of-time (AOT) compilation, tree shaking, change detection strategies, and more."
    },
    "children": [
      {
        "question": "Lazy Loading",
        "ans": {
          "text": "Lazy loading helps to load only the necessary modules at runtime, reducing the initial loading time. It defers the loading of parts of the application until they are needed.",
          "script": "// Example of lazy loading in Angular\nconst routes: Routes = [\n  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }\n];"
        }
      },
      {
        "question": "Ahead-of-Time (AOT) Compilation",
        "ans": {
          "text": "AOT compilation pre-compiles the Angular templates and components during the build process. This improves the application startup time, as it avoids compiling templates at runtime.",
          "script": "// Angular build with AOT enabled (default for production)\nng build --configuration production"
        }
      },
      {
        "question": "Tree Shaking",
        "ans": {
          "text": "Tree shaking is a technique used to eliminate unused code from the final bundle. Angular, using Webpack, automatically removes unused code during the build process to reduce the size of the application.",
          "script": "// Tree shaking is enabled by default in Angular production builds\nng build --configuration production"
        }
      },
      {
        "question": "Change Detection Strategies",
        "ans": {
          "text": "Angular provides two change detection strategies: Default and OnPush. Using `OnPush` can improve performance by reducing the number of checks Angular performs when data changes.",
          "script": "// Using OnPush change detection strategy\n@Component({\n  selector: 'app-my-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: '<div>{{ data }}</div>'\n})\nexport class MyComponent {\n  @Input() data: any;\n}"
        }
      },
      {
        "question": "Caching HTTP Requests",
        "ans": {
          "text": "Caching HTTP requests can help reduce the load time for frequently accessed data. You can implement caching mechanisms to store HTTP responses and reuse them without hitting the backend.",
          "script": "// Example of HTTP request caching with an interceptor\n@Injectable()\nexport class CacheInterceptor implements HttpInterceptor {\n  private cache = new Map<string, any>();\n\n  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {\n    const cachedResponse = this.cache.get(req.url);\n    if (cachedResponse) {\n      return of(cachedResponse);\n    }\n    return next.handle(req).pipe(\n      tap(event => {\n        if (event instanceof HttpResponse) {\n          this.cache.set(req.url, event);\n        }\n      })\n    );\n  }\n}"
        }
      },
      {
        "question": "Minification and Compression",
        "ans": {
          "text": "Minification and compression help reduce the size of JavaScript, CSS, and HTML files. Angular CLI automatically minifies and compresses files in production mode.",
          "script": "// Minification and compression are enabled during production build\nng build --configuration production"
        }
      },
      {
        "question": "Preloading Strategy",
        "ans": {
          "text": "Preloading modules after the initial load helps reduce delays when navigating to other parts of the application. Angular provides different preloading strategies for lazy-loaded modules.",
          "script": "// Example of preloading strategy\nconst routes: Routes = [\n  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })]\n})\nexport class AppRoutingModule {}"
        }
      },
      {
        "question": "Optimize Assets and Images",
        "ans": {
          "text": "Optimizing images and assets can significantly reduce the size of the application. Compress images, use modern formats like WebP, and lazy load images to improve performance.",
          "script": "// Lazy load images\n<img loading=\"lazy\" src=\"image.jpg\" alt=\"image\" />"
        }
      },
      {
        "question": "Service Workers and PWA",
        "ans": {
          "text": "Service Workers enable caching of application assets, which helps in offline functionality and faster load times. Angular provides support for building Progressive Web Apps (PWA) to improve performance.",
          "script": "// Example of enabling PWA with Angular\nng add @angular/pwa"
        }
      },
      {
        "question": "Reduce Bundle Size",
        "ans": {
          "text": "Reducing the bundle size can improve load times. Techniques include splitting the code into multiple bundles, using lazy loading, and optimizing third-party libraries.",
          "script": "// Bundle optimization strategies\nng build --configuration production"
        }
      }
    ]
  },
  {
    "question": "Signals State management",
    "ans": {
      "text": "Angular Signals provide a reactive primitive for managing state with fine-grained updates, less boilerplate than RxJS for local UI state, and better integration with change detection.",
      "list": [
        "Signals track dependencies automatically and update only the parts of the UI that depend on them.",
        "They are useful for component state, derived values, and lightweight global state without NgRx overhead.",
        "Use computed() for derived state and effect() for side effects that react to signal changes."
      ]
    },
    "children": [
      {
        "question": "signal()",
        "ans": {
          "text": "signal() creates a writable reactive value. Read it by calling the signal as a function and update it with set() or update().",
          "script": "import { Component, signal } from '@angular/core';\n\n@Component({\n  selector: 'app-counter',\n  template: '<p>{{ count() }}</p>',\n})\nexport class CounterComponent {\n  count = signal(0);\n\n  increment() {\n    this.count.update((value) => value + 1);\n  }\n}"
        }
      },
      {
        "question": "computed()",
        "ans": {
          "text": "computed() creates a read-only derived signal whose value is recalculated when its dependencies change.",
          "script": "import { computed, signal } from '@angular/core';\n\nconst count = signal(0);\nconst doubled = computed(() => count() * 2);\n\nconsole.log(doubled()); // 0\ncount.set(5);\nconsole.log(doubled()); // 10"
        }
      },
      {
        "question": "effect()",
        "ans": {
          "text": "effect() runs a side effect whenever the signals read inside it change. Useful for logging, syncing to localStorage, or triggering non-UI work.",
          "script": "import { effect, signal } from '@angular/core';\n\nconst theme = signal('light');\n\neffect(() => {\n  document.body.dataset.theme = theme();\n});"
        }
      },
      {
        "question": "Signals vs NgRx",
        "ans": {
          "text": "Signals are ideal for local and medium-complexity state with minimal ceremony. NgRx is better for large apps that need strict unidirectional flow, time-travel debugging, and complex async side effects."
        }
      }
    ]
  },
  {
    "question": "NgRX State management",
    "ans": {
      "list": [
        "NgRx is a state management library based on Redux principles. It uses actions, reducers, and effects to manage the application's state in a reactive and predictable manner.",
        "NgRx includes: Actions, Reducers, Store, Selectors, and Effects",
        "It enables a centralized, immutable state with unidirectional data flow, making it easier to manage state changes and side effects in large applications.",
        "NgRx offers benefits such as a predictable state management system, separation of concerns, better testability, and scalability.",
        "It makes it easier to manage complex state in large applications by enforcing strict unidirectional data flow and using observable streams."
      ]
    },
    "children": [
      {
        "question": "Actions in NgRx",
        "ans": {
          "text": "Actions represent events that describe a change in state. They are dispatched to trigger state updates. Actions can carry payloads of data that are used by reducers to modify the store.",
          "script": "// Example of defining an action\nimport { createAction } from '@ngrx/store';\n\nexport const loadData = createAction('[App] Load Data');"
        }
      },
      {
        "question": "Reducers in NgRx",
        "ans": {
          "text": "Reducers are pure functions that specify how the state of the application changes in response to actions. They take the current state and an action as input, and return a new state.",
          "script": "// Example of a reducer\nimport { createReducer, on } from '@ngrx/store';\nimport { loadData } from './actions';\n\nexport const initialState = { data: [] };\n\nconst _dataReducer = createReducer(\n  initialState,\n  on(loadData, (state) => ({ ...state, data: [/* new data */] }))\n);\n\nexport function dataReducer(state, action) {\n  return _dataReducer(state, action);\n}"
        }
      },
      {
        "question": "Store in NgRx",
        "ans": {
          "text": "The Store is a single source of truth that holds the state of the application. The store is updated by reducers and accessed by components through selectors. It is immutable, meaning state changes are always done via actions and reducers.",
          "script": "// Example of adding the store to a component\nimport { Store } from '@ngrx/store';\nimport { Observable } from 'rxjs';\nimport { loadData } from './actions';\n\n@Component({ selector: 'app-data', template: '...' })\nexport class DataComponent {\n  data$: Observable<any>;\n\n  constructor(private store: Store) {\n    this.data$ = store.select(state => state.data);\n  }\n\n  loadData() {\n    this.store.dispatch(loadData());\n  }\n}"
        }
      },
      {
        "question": "Selectors in NgRx",
        "ans": {
          "text": "Selectors are functions that allow components to query the store for specific pieces of data. They are used to select slices of state from the store, ensuring components only re-render when necessary.",
          "script": "// Example of a selector\nimport { createSelector } from '@ngrx/store';\n\nexport const selectData = createSelector(\n  (state) => state.data,\n  (data) => data\n);"
        }
      },
      {
        "question": "Effects in NgRx",
        "ans": {
          "text": "Effects are used to handle side effects in NgRx. They listen for actions dispatched to the store and perform tasks like making HTTP requests or other asynchronous operations, before dispatching other actions to update the state.",
          "list": [
            "GET: switchMap (to cancel previous requests)",
            "POST: concatMap (sequential processing), mergeMap (concurrent processing)",
            "PUT: mergeMap (concurrent updates), switchMap (cancel previous updates)",
            "PATCH: switchMap (cancel previous updates), mergeMap (concurrent processing)",
            "DELETE: concatMap (sequential deletion), exhaustMap (ensure one deletion at a time)"
          ],
          "script": "// Example of an effect\nimport { Injectable } from '@angular/core';\nimport { Actions, ofType } from '@ngrx/effects';\nimport { Store } from '@ngrx/store';\nimport { loadData } from './actions';\nimport { switchMap } from 'rxjs';\n\n@Injectable()\nexport class DataEffects {\n  loadData$ = createEffect(() => this.actions$.pipe(\n    ofType(loadData),\n    switchMap(() => this.dataService.getData().pipe(\n      map(data => loadDataSuccess({ data })),\n      catchError(() => loadDataFailure())\n    ))\n  ));\n\n  constructor(private actions$: Actions, private dataService: DataService) {}\n}\n"
        }
      },
      {
        "question": "NgRx vs Signals",
        "ans": {
          "text": "NgRx provides a more structured and comprehensive approach to state management, with a focus on immutability and side effects. Signals, on the other hand, offer a simpler, more lightweight state management solution suitable for less complex applications or specific use cases that don’t require the overhead of NgRx."
        }
      }
    ]
  },
  {
    "question": "Auth Guards in Angular",
    "ans": {
      "text": "Auth guards are used to protect routes in Angular by preventing unauthorized users from accessing certain routes. They implement the CanActivate or CanLoad interface to check conditions before routing."
    },
    "children": [
      {
        "question": "CanActivate",
        "ans": {
          "text": "The CanActivate guard is used to prevent navigation to a route based on a condition. It checks if a user can access a route before it’s activated.",
          "script": "import { Injectable } from '@angular/core';\nimport { CanActivate, Router } from '@angular/router';\nimport { AuthService } from './auth.service';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthGuard implements CanActivate {\n  constructor(private authService: AuthService, private router: Router) {}\n\n  canActivate(): boolean {\n    if (this.authService.isLoggedIn()) {\n      return true;\n    } else {\n      this.router.navigate(['/login']);\n      return false;\n    }\n  }\n}"
        }
      },
      {
        "question": "CanLoad",
        "ans": {
          "text": "The CanLoad guard is used to prevent loading a lazy-loaded module unless a condition is met. Useful for optimizing load time by loading modules only when needed.",
          "script": "import { Injectable } from '@angular/core';\nimport { CanLoad, Route, Router } from '@angular/router';\nimport { AuthService } from './auth.service';\n\n@Injectable({ providedIn: 'root' })\nexport class AuthLoadGuard implements CanLoad {\n  constructor(private authService: AuthService, private router: Router) {}\n\n  canLoad(route: Route): boolean {\n    if (this.authService.isLoggedIn()) {\n      return true;\n    } else {\n      this.router.navigate(['/login']);\n      return false;\n    }\n  }\n}"
        }
      },
      {
        "question": "CanActivateChild",
        "ans": {
          "text": "The CanActivateChild guard checks if a user can access child routes. It’s often used to protect nested routes within a parent route.",
          "script": "import { Injectable } from '@angular/core';\nimport { CanActivateChild, Router } from '@angular/router';\nimport { AuthService } from './auth.service';\n\n@Injectable({ providedIn: 'root' })\nexport class ChildAuthGuard implements CanActivateChild {\n  constructor(private authService: AuthService, private router: Router) {}\n\n  canActivateChild(): boolean {\n    if (this.authService.isLoggedIn()) {\n      return true;\n    } else {\n      this.router.navigate(['/login']);\n      return false;\n    }\n  }\n}"
        }
      },
      {
        "question": "CanDeactivate",
        "ans": {
          "text": "The CanDeactivate guard checks if it’s safe to leave a route, commonly used to warn users of unsaved changes before navigating away.",
          "script": "import { Injectable } from '@angular/core';\nimport { CanDeactivate } from '@angular/router';\n\nexport interface CanComponentDeactivate {\n  canDeactivate: () => boolean;\n}\n\n@Injectable({ providedIn: 'root' })\nexport class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {\n  canDeactivate(component: CanComponentDeactivate): boolean {\n    return component.canDeactivate() ? true : confirm('You have unsaved changes. Do you really want to leave?');\n  }\n}"
        }
      }
    ]
  },
  {
    "question": "Encapsulation Modes",
    "ans": {
      "text": "Angular offers three types of encapsulation modes: Emulated, None, and ShadowDom."
    },
    "children": [
      {
        "question": "Emulated (default)",
        "ans": {
          "text": "Emulated mode is the default mode in Angular. It scopes styles to the component by generating unique attributes for each component's elements, simulating Shadow DOM behavior without native support.",
          "script": "@Component({\n  selector: 'app-example',\n  encapsulation: ViewEncapsulation.Emulated,\n  template: '<div>Example</div>',\n  styles: ['div { color: blue; }']\n})\nexport class ExampleComponent { }"
        }
      },
      {
        "question": "None",
        "ans": {
          "text": "None mode applies styles globally without any encapsulation. Styles defined in the component will affect all matching elements in the entire application.",
          "script": "@Component({\n  selector: 'app-example',\n  encapsulation: ViewEncapsulation.None,\n  template: '<div>Example</div>',\n  styles: ['div { color: red; }']\n})\nexport class ExampleComponent { }"
        }
      },
      {
        "question": "ShadowDom",
        "ans": {
          "text": "ShadowDom mode uses the native Shadow DOM, which provides actual DOM encapsulation. Styles are scoped to the component and will not leak outside, supported in modern browsers.",
          "script": "@Component({\n  selector: 'app-example',\n  encapsulation: ViewEncapsulation.ShadowDom,\n  template: '<div>Example</div>',\n  styles: ['div { color: green; }']\n})\nexport class ExampleComponent { }"
        }
      }
    ]
  },
  {
    "question": "Change Detection Strategies",
    "ans": {
      "text": "Angular provides two change detection strategies: Default and OnPush, which control how and when Angular checks for changes in components."
    },
    "children": [
      {
        "question": "Default Strategy",
        "ans": {
          "text": "The default strategy checks for changes in all components, meaning every time any data changes, Angular triggers change detection throughout the entire component tree."
        }
      },
      {
        "question": "OnPush Strategy",
        "ans": {
          "text": "OnPush strategy limits change detection to a component and its subtree only when the component’s input properties change, or an event originates from that component. This is useful for optimizing performance.",
          "script": "@Component({\n  selector: 'app-example',\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ExampleComponent { }"
        }
      },
      {
        "question": "detectChanges()",
        "ans": {
          "text": "detectChanges() manually triggers change detection for the current component and its children, which is useful when you know that a change has occurred but Angular hasn't detected it automatically.",
          "script": "import { ChangeDetectorRef } from '@angular/core';\n\nconstructor(private cdr: ChangeDetectorRef) {}\n\nsomeMethod() {\n  this.cdr.detectChanges();\n}"
        }
      },
      {
        "question": "markForCheck()",
        "ans": {
          "text": "markForCheck() marks the component for change detection in the next cycle. This is used with OnPush components to notify Angular to check for changes when an input property doesn’t trigger detection.",
          "script": "import { ChangeDetectorRef } from '@angular/core';\n\nconstructor(private cdr: ChangeDetectorRef) {}\n\nsomeMethod() {\n  this.cdr.markForCheck();\n}"
        }
      }
    ]
  },
  {
    "question": "Injectable providedIn",
    "ans": {
      "text": "Angular offers several options for the providedIn property, including 'root', 'platform', 'any', and specifying a specific module. Each option determines the scope of the service and when it is instantiated."
    },
    "children": [
      {
        "question": "providedIn: 'root'",
        "ans": {
          "text": "When providedIn is set to 'root', the service is available as a singleton throughout the entire application. This is the most common option and is tree-shakable, meaning unused services won’t be included in the final bundle.",
          "script": "@Injectable({\n  providedIn: 'root'\n})\nexport class MyService { }"
        }
      },
      {
        "question": "providedIn: 'platform'",
        "ans": {
          "text": "When providedIn is set to 'platform', the service is shared across multiple Angular applications on the same platform. This is less common but useful for apps that run in the same environment.",
          "script": "@Injectable({\n  providedIn: 'platform'\n})\nexport class MyService { }"
        }
      },
      {
        "question": "providedIn: 'any'",
        "ans": {
          "text": "When providedIn is set to 'any', Angular creates a separate instance of the service for each lazy-loaded module that injects it, but shares it across eagerly loaded modules. This is useful for services that need to be re-instantiated in lazy-loaded modules.",
          "script": "@Injectable({\n  providedIn: 'any'\n})\nexport class MyService { }"
        }
      },
      {
        "question": "providedIn: Module",
        "ans": {
          "text": "You can specify a particular module (e.g., providedIn: MyFeatureModule) to limit the service’s availability to that module alone. This is useful for feature-specific services.",
          "script": "@Injectable({\n  providedIn: MyFeatureModule\n})\nexport class MyService { }"
        }
      }
    ]
  },
  {
    "question": "Subject and BehaviorSubject in Angular",
    "ans": {
      "text": "Subjects and BehaviorSubjects are types of Observables in RxJS. Both are used to emit values to multiple subscribers, but they have distinct behaviors that make each suitable for different use cases."
    },
    "children": [
      {
        "question": "Subject",
        "ans": {
          "list": [
            "A Subject is a multicast Observable, allowing multiple subscribers to listen to the same Observable stream.",
            "It does not hold any current value, so new subscribers receive values only after they subscribe."
          ],
          "script": "import { Subject } from 'rxjs';\n\nconst subject = new Subject<string>();\n\nsubject.subscribe((value) => console.log('Subscriber 1:', value));\n\nsubject.next('Hello');\n\nsubject.subscribe((value) => console.log('Subscriber 2:', value));\n\nsubject.next('World');"
        }
      },
      {
        "question": "BehaviorSubject",
        "ans": {
          "list": [
            "A BehaviorSubject is similar to a Subject but holds a current value.",
            "When a new subscriber joins, it immediately receives the last emitted value.",
            "This makes it useful for representing state that can change over time."
          ],
          "script": "import { BehaviorSubject } from 'rxjs';\n\nconst behaviorSubject = new BehaviorSubject('Initial Value');\n\nbehaviorSubject.subscribe((value) => console.log('Subscriber 1:', value));\n\nbehaviorSubject.next('Hello');\n\nbehaviorSubject.subscribe((value) => console.log('Subscriber 2:', value));\n\nbehaviorSubject.next('World');"
        }
      }
    ]
  },
  {
    "question": "Angular Testing",
    "ans": {
      "text": "Angular testing involves verifying application logic and ensuring components work as expected. Key testing types include unit, integration, and end-to-end (E2E) testing, using tools like Jasmine, Karma, and Protractor.",
      "list": [
        "Jasmine is a popular JavaScript testing framework used for writing tests in Angular. It provides functions like `describe`, `it`, and `expect` for structuring tests and making assertions.",
        "Karma is a test runner that executes Angular tests in a browser environment. It is configured in Angular CLI projects by default for running unit tests.",
        "Protractor is an end-to-end testing framework for Angular that simulates user interactions with the application.",
        "TestBed is Angular’s primary API for configuring and initializing test environments for unit and integration testing."
      ]
    },
    "children": [
      {
        "question": "Component Testing",
        "ans": {
          "text": "Component tests verify the behavior and template rendering of an Angular component.",
          "script": "import { ComponentFixture, TestBed } from '@angular/core/testing';\nimport { MyComponent } from './my.component';\n\ndescribe('MyComponent', () => {\n  let component: MyComponent;\n  let fixture: ComponentFixture<MyComponent>;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({ declarations: [ MyComponent ] });\n    fixture = TestBed.createComponent(MyComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create the component', () => {\n    expect(component).toBeTruthy();\n  });\n});"
        }
      },
      {
        "question": "Service Testing",
        "ans": {
          "text": "Service tests verify the logic of Angular services, typically isolating them from the components that use them.",
          "script": "import { TestBed } from '@angular/core/testing';\nimport { MyService } from './my.service';\n\ndescribe('MyService', () => {\n  let service: MyService;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({});\n    service = TestBed.inject(MyService);\n  });\n\n  it('should be created', () => {\n    expect(service).toBeTruthy();\n  });\n});"
        }
      },
      {
        "question": "Testing Components with Services",
        "ans": {
          "text": "Tests that include component-service interactions, often requiring mock services to simulate dependencies.",
          "script": "import { ComponentFixture, TestBed } from '@angular/core/testing';\nimport { MyComponent } from './my.component';\nimport { MyService } from './my.service';\n\nclass MockMyService {\n  getData() { return 'mock data'; }\n}\n\ndescribe('MyComponent with MyService', () => {\n  let component: MyComponent;\n  let fixture: ComponentFixture<MyComponent>;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      declarations: [ MyComponent ],\n      providers: [{ provide: MyService, useClass: MockMyService }]\n    });\n    fixture = TestBed.createComponent(MyComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should display data from the service', () => {\n    expect(component.data).toBe('mock data');\n  });\n});"
        }
      }
    ]
  }
];
