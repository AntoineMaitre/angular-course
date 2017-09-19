/**
 * Section 2: Arrow functions
 */
// let log = function (message) {
//     console.log(message);
// };
//
// let doLog = (message) => {
//     console.log(message);
// };

/**
 * Section 2: Interfaces, classes, objects
 */

/**
 * 2.1 Interface style
 */
// interface Point {
//     x: number,
//     y: number
// }
//
// let drawPoint = (point: Point) => {
//     // ...
// };
//
// drawPoint(<Point>{
//     x: 1,
//     y: 2
// });
//
// let getDistance = (pointA: Point, pointB: Point) => {
//     // ...
// };

/**
 * 2.2 Class style + objects + constructor
 */
// class Point {
//     private x: number; // field
//     private y: number; // field
//
//     // Constructor with optionnal params
//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
//
//     getDistance(another: Point) {
//         // ...
//     }
// }
//
// let point = new Point(1, 2);
// point.draw();

/**
 *  Access modifiers in constructor
 */
// class Point {
//     // Constructor with optionnal params
//     // simplified constructor
//     constructor(private _x?: number, private _y?: number) {
//     }
//
//     draw() {
//         console.log('X: ' + this._x + ', Y: ' + this._y);
//     }
//
//     get x() {
//         return this._x;
//     }
//
//     set x(value) {
//         if (value < 0)
//             throw new Error('value cannot be less than 0');
//
//         this._x = value;
//     }
// }
//
// let point = new Point(1, 2);
// point.draw();

/**
 * Section 2: Modules
 */
// import {Point} from "./point";
//
// let point = new Point(1, 2);
// point.draw();


/**
 * Section 2: tS types assertion
 */
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
/**
 * Section 2: Session 16 (types)
 */
// let count = 5;
// count = 'aa';
//
// let a: number;
// a = 2;
// a = 'a';
// a = true;

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];
//
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
//
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3}
//
// let backGroundColor = Color.Red;

/**
 * Section 2: TS
 */
// function doSomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//
//     console.log('Finally: ' + i);
// }
//
// doSomething();

// function log(message) {
//     console.log(message);
// }
//
// var message = 'Hello World';
//
// log(message);


import {LikeComponent} from "./like.component";

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);