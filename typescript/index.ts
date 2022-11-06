// Typescript::
// Superset of JS. Compiles to plain JS.
// OOP with classes, interfaces and static types.
let watch: string = "Orafit";

// Why TS::
// reduce runtime type error before even executing.
// Better linintg.
// Better documentation.
// Good error checking.

// Disadvantages of TS::
// Need to write extra code.
// Extra compilication step inclduded in TS.
// Need to add types of all 3rd party libraries.
// Leaning curve. Mindset traind to write JS code is little ditterent from TS.

// Components of TS::
// Language, compiler, language service.

// install and compile::
// npm i -g typescript
// tsc index.js

// Types in TS::
// 1. Built-in => number, string, boolean, void, null, undefined
// 2. User provided => enum, interface, classes, array, tuple.

// Interface::
// defines structure and types of object.
interface UserType {
  name: string;
  age?: number;
  getAge: () => number;
}

// classes::
class Person implements UserType {
  name: string;
  age?: number;

  constructor(name: string = "", age: number = 0) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

// enum::
// types to define set of named constants.
enum Gender {
  Male = "Male",
  Female = "Female",
}

// Access modifers::
// public, private, protected

// tsonfig.json::
// specify different options for compiler.

// Generics::
// way to use compoents with different data types.

// type assertions::
// Changing types in run time.
// <> or AS
// React.useState<String>("")
let code: any = 123;
let employeeCode = <number>code;
console.log(typeof employeeCode);

// utilities::
// Omit: remove properties from interface.
interface UserType {
  name: string;
  class: string;
  cnic: string;
}
type UserProfile = Omit<UserType, "cnic">;
// Partial, Required => make all types optional and required.
type UsetInput = Partial<UserType>;
type UsetInputRequired = Required<UserType>;

// narrowing::
// changing or narrowing down to required data type::
// 'isAadmin' in user;
function getData(val: number | string): number {
  if (typeof val === "string") return parseInt(val);
  return val;
}

// any, unknown and never type::
// never => is like a void but it will never return a value. In case of void it might return null | undefined.
function getNewData(): never {
  throw new Error("ss");
}
// any => any is used to place any type of vaue. out-out to type checking behaviour.
// unknown => like any Any type can be accigned but we have to use it in a safe manner.
let alpha: unknown;
alpha = 150;
if (typeof alpha === "number") {
  alpha = alpha * 100;
}

// String vs string::
// string => string primitive type. should be used.
// Seting => object to create and manipulate strings.
