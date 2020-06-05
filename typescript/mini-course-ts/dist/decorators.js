"use strict";
// @Component
// @Selector
// @useState ("ssasdsa")
// Factory
// function Logger(prefix: string) {
//   return (target: any) => {
//     console.log(`${prefix} - ${target}`);
//   }
// }
// @Logger('awesome')
// class Foo {
// }
// Class decorator
// function setAPIVersion(apiVersion: string) {
//   return (constructor: any) => {
//     return class extends constructor {
//       version = apiVersion;
//     }
//   }
// }
// // decorator - annotate the version of API
// @setAPIVersion('2.0.0')
// class API {}
// console.log(new API())
// Property decorator
// function minLength(length: number) {
//   return (target: any, key: string) => {
//     let val = target[key];
//     const getter = () => val;
//     const setter = (value: string) => {
//       if (value.length < length) {
//         console.log(`Error: You can't create ${key} smallest than ${length}.`);
//       } else {
//         val = value;
//       }
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     });
//   }
// }
// class Movie {
//   // validation - if smaller than 5 - error
//   @minLength(5)
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const movie = new Movie('tst');
// console.log(movie.title);
// Method decorator
// function delay(ms: number) {
//   return (target: any, key: string, descriptor: PropertyDescriptor) => {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log(`Waiting delay time ${ms}`);
//       setTimeout(() => {
//         originalMethod.apply(this, args);
//       }, ms);
//       return descriptor;
//     }
//   }
// }
// class Greeter {
//   greeting: string;
//   constructor(g: string) {
//     this.greeting = g;
//   }
//   // wait some time and execute the method (ms)
//   @delay(2000)
//   // debounce(300)
//   greet() {
//     console.log(`Hello! ${this.greeting}`);
//   }
// }
// const person = new Greeter('Person!');
// person.greet();
// Parameter decorator
// Acessor decorator
