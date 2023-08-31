// console.log("dcnj"); // Terminal: node 01-Variables.js

// ** var ** //

// Ex.1:
// console.log(x); // ReferenceError: x is not defined

// Ex.2:
// console.log(x); // undefined
// var x = 10;

// Ex.3:
// x = 10;
// console.log(x); // 10
// var x;

// ** let ** //

// Ex.1:
// y = 10;
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y;

// ** const ** //

// Ex.1:
// y = 10;
// console.log(y); // SyntaxError: Missing initializer in const declaration
// const y; // 'const' declarations must be initialized.

// ** var ** //

// Ex.1:
// var x = 10;
// var x = 11;
// console.log(x); // 11

// ** let ** //

// Ex.1:
// let x = 10; // Error: Cannot redeclare block-scoped variable 'x'.
// let x = 11; // Error: Cannot redeclare block-scoped variable 'x'.
// console.log(x); // SyntaxError: Identifier 'x' has already been declared

// ** const ** //

// Ex.1:
// const w;
// SyntaxError: Missing initializer in const declaration
// Error: 'const' declarations must be initialized.

// Ex.2:
// const w = "ahmed";
// console.log(w); // ahmed

// ** var ** //

// Ex.1:
// var y;
// y = 10;
// console.log(y); // 10

// Ex.2:
// var y;
// y = 10;
// y = 12;
// console.log(y); // 12

// ** let ** //

// Ex.1:
// let x;
// x = 11;
// console.log(x); // 11

// Ex.2:
// let x;
// x = 11;
// x = 13;
// console.log(x); // 13

// ** const ** //

// Ex.1:
// const w = "xcbh";
// w = "xckvn";
// console.log(x); // TypeError: Assignment to constant variable.

// ============================================================ //

/*
                      ---------------------
            ----------| Declaring Vaiables|----------
            |         ---------------------         |
            |                   |                   |
            |                   |                   |
            |                   |                   |
        ---------           ---------          -----------
        |  Var  |           |  Let  |          |  Const  |
        ---------           ---------          -----------

    ---------------      ---------------    ---------------
    |Globale Scope|      | Block Scope |    | Block Scope |
    ---------------      ---------------    ---------------
*/

// var: Declare above, Globale Scope, Redeclare (var y, var y, ...)
// let & const: Block Scope

//  -----       var    let    const
// redeclare    yes     no       no
// reassign     yes    yes       no

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block or Function Scope

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block or Function Scope

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block or Function Scope
*/
