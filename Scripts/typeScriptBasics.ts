
//Object Oriented Style Interface
interface Greeter{
    saysHello(): string;
}


//Module or group of objects 
module objects {

 //Abstract class that you cannot implement like java   
 abstract class Person {
    //Private
    private _age_num: number;
    private _name_string: string;

    //GETS and SETS
    set name(x:string){
        this._name_string = x;
    }

    get name(): string{
        return this._name_string;
    }

    set age(x:number) {
        this._age_num = x;
    }

    get age(): number{
        return this._age_num;
    } 

    //Public Methods

    public sayHello(): string {

        console.log(`%c The following is a paid promotion 
        endorsed by ${this._name_string}`,"font-size: 13px; color: red")

        return "Hello !";


    }

    //Internal Sets and Gets did not work
    //TRY CHANGING THIS APRIL 16 2019
    public ReturnName(): string{
        return this._name_string;
    }

    constructor(name:string, age:number) {
        this._age_num = age;
        this._name_string = name;
    }


}

//EXPORT NEEDS TO BE ADDED FOR USER COMPONENT USE.!!
export class Employee extends Person{

    private emp_Title: string;
    private emp_Number: number;

    private salary: number;

    //GETS and SETS
    set empTitle(x:string) {
        this.emp_Title =  x;
    }

    set empNumber(x:number) {
        this.emp_Number = x;
    }

    set sal(x:number) {
        this.salary = x;
    }

    get Title(): string{
        return this.emp_Title;
    }

    get Number(): number{
        return this.emp_Number;
    }

    get Salary(): number{
        return this.salary;
    } 

    constructor(name:string, age:number, Title: string, Number:number, Salary:number) {
        super(name, age);

        this.emp_Title = Title;
        this.emp_Number = Number;
        this.salary = Salary;
    }



    public emp_Listing(): void{

        let name = this.ReturnName();

        console.log(`%c This is the employee ${name}`,"color: red;");
        console.log(`%c This is the employees title ${this.emp_Title}`,"color:blue;");
        console.log(`%c This is the employee salary ${this.salary}`,"color:green;");
        
    }
}
}

//SIMPLE TEST RUN
let best: objects.Employee;
    
    best = new objects.Employee("Joshua", 28, "Cyber Intelligence", 54632, 74000);

best.emp_Listing();