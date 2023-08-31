// Classes

// class Car {
//   color = "red"; // Property
//   const printColor = () => {...} // Methoud
// }

// Use:
// let car1 = new Car();
// car1.printColor();

// * ===============================================================

// 03-MainApp.mjs
// --------------

// Ex.1:
// -----
// class Car {
//   color = "red";
//   printColor = () => {
//     console.log(this.color); // إن وجد parameter ويتجاهل ال [color = "red";] على شان يعرف إنو فقط لل :this
//   };
// }
// export default Car;

// Ex.2:
// -----
// class Car {
//   color = "red";
//   printColor = (color) => {
//     console.log(color);
//   };
// }
// export default Car;

// Ex.3:
// -----
// class Car {
//   color = "red";
//   printColor = (color) => {
//     console.log(this.color);
//   };
// }
// export default Car;

// Ex.4:
// -----
// class Car {
//   color = "red";
//   printColor = (_) => console.log(this.color);
// }
// export default Car;

// Ex.5:
// -----
// class Car {
//   color = "red";
//   printColor = (color) => console.log(color);
// }
// export default Car;

// Ex.6:
// -----

// class RED {
//   printRED = () => {
//     console.log("Hello from RED Class");
//   };
// }

// class Car extends RED {
//   color = "red";
//   printColor = (color) => console.log(color);
// }
// export default Car;

// Ex.7:
// -----

// class RED {
//   printRED = () => {
//     console.log("Hello from RED Class");
//   };
// }

// class Car extends RED {
//   constructor() {
//     super(); // في الأول على شان ما يحصلش معي أي مشاكل extends بتخلي الكلاس قبل ما يشتغل أو يعمل أي حاجة يروح ينفذ عملية ال
//     this.COLOR = "green"; // وهتتنفذ قبل ما أي حاجة تحصل [let myCar = new Car();] مثل object دالة تتنفذ في لحظة إنشاء
//   }
//   printColor = (color) => console.log(this.COLOR);
// }
// export default Car;

// Ex.8:
// -----

// class RED {
//   printRED = () => {
//     console.log("Hello from RED Class");
//   };
// }

// class Car extends RED {
//   constructor(color) {
//     super();
//     this.COLOR = color;
//   }
//   printColor = () => console.log(this.COLOR);
// }
// export default Car;

// Ex.9:
// -----

// class RED {
//   printRED = () => {
//     console.log("Hello from RED Class");
//   };
// }

// class Car extends RED {
//   constructor(color) {
//     super(); // Function Build In
//     console.log("constructor");
//   }
// }
// export default Car;
