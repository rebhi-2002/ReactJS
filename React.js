// * First React Project:
// ======================

// What React ? A JavaScript library for building user interfaces

// Why React ?
// -----------
//* 1) Single Page Application
//* 2) Client Side Library
//* 3) Build Complex Ui Easy
//* 4) Component

// * codepen.io => settings > babel, Js: react-dom + react | CDN Link
//* https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
//* https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

// HTML:
<div id="root"></div>;

// JS(Babel):

// * Example 1:
ReactDOM.render(<h2>Hello From React</h2>, document.getElementById("root")); // result: Hello From React

// * Example 2:
ReactDOM.render(
  <div>
    <span></span>
  </div>,
  document.getElementById("root")
);

// * Example 3:
const App = () => {
  const name = "Ahmed";
  return (
    <div>
      {/* <h1>First Test</h1> */}
      <h1>{name}</h1> {/* Ahmed */}
      <h2>Second Test</h2> {/* Second Test */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// * Example 4:
const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};
const Content = () => {
  return (
    <div>
      <h1>Content</h1>
    </div>
  );
};

const App2 = () => {
  // return (<Header />), (<Content />), (<Footer />);
  return (
    <div>
      <Header />,
      <Content />,
      <Content />,
      <Footer />
    </div>
  );
};

ReactDOM.render(<App2 />, document.getElementById("root"));

// * result:
// =========
// - Header
// - Content
// - Content
// - Footer

// * First React Project:
// ======================

// Install NodeJs VSCode
// Run First Project Vscode

/*
Create 01-FirstProject Folder

D:\مجلد جديد\React\01-FirstProject
λ npx create-react-app firsttest

D:\مجلد جديد\React\01-FirstProject
λ cd firsttest

D:\مجلد جديد\React\01-FirstProject\firsttest
λ npm start
*/

/*
npm start: Starts the development server.

npm run build: Bundles the app into static files for production.

npm test: Starts the test runner.

npm run eject:
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!
We suggest that you begin by typing:

cd test: npm start

Happy hacking!
*/

// * First React Project:
// ======================

// React File Structure Vs Code

// * React Fundamentals:
// =====================

// What JSX // Styling Bootstrap // Custom Component // Props, PropsFunction
// Render List Conditional // Events, UserInput // React Router // Hooks
// Custom Hooks // Fetching Data Api (Fetch, Axios)

// * React Fundamentals:
// =====================

// What JSX

// JSX stands for "JavaScript XML," and it is a syntax extension to JavaScript based in ES6, the newest "Version" of
// JavaScript. JSX allows you to write HTML in React by converting HTML into React components.

// --------------------------------------

// Babel ?

// JSX vs HTML
// ClassName // Style // Ref Variables

// * React Fundamentals:
// =====================

// React Bootstrap, Styling

// npm install react-bootstrap
// CSS library to give us easy design

// --------------------------------------

// npm install react-bootstrap bootstrap
// In this video, the version used is: npm install react-bootstrap bootstrap@5.1.3

//* Other Library:
// Material UI: The React component library you always wanted, Move faster with intuitive React UI tools | https://mui.com
// Semantic UI: User Interface is the language of the web | https://semantic-ui.com
// ...

// {" "} : إضافة مساحة فارغة بين العناصر المختلفة

// * React Fundamentals:
// =====================

// Building Custom Component, Reuse

// * React Fundamentals:
// =====================

// * Props
// Pass Data, Params, Between Component

// (Card.js) ⬅️[title, description] (App.js) [title, description]➡️ (Card.js)
//                                    ⬆️
//                                    ⬆️[title, description]➡️ (Card.js)

// * React Fundamentals:
// =====================

// * Props Functions
// Pass Function As Props, Children

//* ______________________                        _____________________
//* |                    |                        |                   |
//* |    function1 {     |               [function1]➡️---- Card.js    |
//* |      //code        |                 ⬆️     |      ⬇            |
//* |    }       ________|__________________|      |      ⬇            |
//* |            |       |                         |     _⬇_______     |
//* |    App.js _|     ⬅️[execute function1]<-----|---- |_Button_|    |
//* |____________________|                         |___________________|

// * React Fundamentals:
// =====================

// Render Lists conditional

// * React Fundamentals:
// =====================

//* Events, Handlers
// -----------------
// 1. onClick
// 2. onChange
// clickMe // typeing...

// * React Fundamentals:
// =====================

// React Router (Navigation) - Part 1

// D:\مجلد جديد\React\01-FirstProject\firsttest (master)
// λ npm i react-router-dom

// * React Fundamentals:
// =====================

// React Router (Navigation) - Part 2
// Links
// Error 404 Page Not Found

// * React Fundamentals:
// =====================

//                  ----------------------
//            ↙⬅⬅⬅| ** React Hooks ** |➡➡➡↘
//            ⬇     ----------------------      ⬇
//            ⬇                ⬇                ⬇
//            ⬇                ⬇                ⬇
//           ⬇️               ⬇️              ⬇️
//         useState         useEffect         useRef
//            ⬇                ⬇                ⬇
//            ⬇                ⬇                ⬇
//           ⬇️               ⬇️              ⬇️
//       useContext         useMemo        useReducer

// عنا تقريبا 10 أو 12 تقريبا، منهم 6 يعتبرو هم مهمين وهم أقصى استخداما أما الباقيين استخدامهم بكون قليل جدا جدا Hooks عدد ال

//* 01- useState: بتخليك تخزن قيم
//* 02- useEffect: بتنفذلك الكود لما يحصل حاجة معينة
//* 03- useRef: بتخليك تعرف تشاور على أي عنصر موجود عندك على الشاشة
//* 04- useContext: application بيخليك تخزن بيانات وتوصلها من أي مكان في ال
//* 05- useMemo: بيخليك تخزن بيانات وتنفذ بشروط معينة
//* 06- useReducer: useState عاملة زي ال

// useState, useEffect :أو إثنين أو ثلاثة مثلا Hook لازم على الأقل هتستخدم component في المشاريع مفيش

// * React Fundamentals:
// =====================

//* 01-useState:

// useState() is an example built-in React hook that lets you see states in your functional components.
// This was not possible before React 16.7 .
// const [value, setValue] = useState(initialValue)
// make Component Rerender

// * React Fundamentals:
// =====================

// * 02-useEffect:

// To Make Life sycle methods, in different times
// useEffect(function, [array]) => useEffect(function, [input]): useEffect(() => {}, [input])
// Run When Component Run First Time, Or dependency Element Change

// * React Fundamentals:
// =====================

// * 03-useRef:

// Function let you make ref to any element
// => const value = useRef();
// => <input ref={value} />
// => const getValue = value.current.value

// * React Fundamentals:
// =====================

// * 04-useContext:

// ،database وهو طبعا مش database بتخليني أخزن قيمة في مكان منفصل كأنه
// وأقدر أوصلوه من أي مكان داخل ال (كأنه قاعدة بيانات في مكان منفصل)
// بسهولة وأقدر أعدل فيه كمان component أو الموقع تاعي بسهولة من اي application

// ContextApi دي على شان تشغلها لازم تتعلم حاجة إسمها useContext ال

//* 01-ContextApi  // 02-useContext
// --------------------------------

// useContext: Accepts a context object (the value returned from React.createContext) and return the current value for that context.

// ContextApi: The Context API is a React structure that enables you to exchange unique and assists in solving prop-drilling
//                            from all levels of your application.

// const value = useContext(MyContext);

// * React Fundamentals:
// =====================

// * 04-useContext: [Part-2]

// useContext: .(Context API) وعلى شان أستخدمها بعمل حاجة إسمها Hook هي عبارة عن
// ContextAPI:
/*
  ،بإختصار شديد هي عبارة عن مخزن للداتا بتاعي أو كأنه قاعدة بيانات مصغرة
  ،useContext بخزن فيه بعض البيانات وأقدر إني أوصلها عن طريق ال
  بين الأول والثاني والثالث ... والعاشر component بين ال Props بتوفر عليه إني أعمل
  .وبيوفر لي الكود شوية
*/

// * React Fundamentals:
// =====================

// * 05-useMemo:

// useMemo: إضافية، يعني مش أساسية وما بتستخدم كثير جدا ولكنها هامة وبتوفر لنا شغل Hook
// إسمها جاي من الذاكرة أو التخزين :useMemo

// To Store Values and use it, Execute Function when another value change
// const value = useMemo(() => function(...), [a, b]);

// useMemo => // * 1- Function // * 2- Dependency
// value غير إنو القيمة النهاية بتتخزن في ال useEffect تبعها شبيه بال syntax تقريبا يعني ال

// * React Fundamentals:
// =====================

// * 06-useReducer:

// ،العادية JavaScript في ال array يلي بتبقى موجودة في ال reducer() ملهاش علاقة بالدالة يلي إسمها Reducer طبعا كلمة
// .مجرد تشابه أسماء ولكن مش نفس الوظيفة

//* 01-Reducer  // 02-useReducer
// -----------------------------

// (Context, Context API) نفس فكرة ال
// أنا بعملو Reducer بستخدمها على شان أنادي بيها على حاجة إسمها useReducer إنو ال

// ده Reducer طيب شو هو ال:
// بمعنى إيه؟ ،complex state بيخليني أستخدم ال
// ....أو أين كان array [] أو obj {} أنا بخزن قيمة سواء كانت رقم أو نص أو state طبعا أنا في ال
// بتاعي component لل Rerender وبقدر إني أوصلها وبقدر إني أغيرها وبتعملي

// ،طيب في حالة لو أنا بعمل مثلا عمليات معقدة
// وبعمل عملية جمع وعملية طرح data إنو أنا بجيب
// 50 state وعاوز ألم الكلام ده كله في مكان واحد بدل ما يبقى عندي
// manage عاوز ألم الكلام ده كله في مكان واحد وأقدر إني أعمل

// ،المعقدة شوية يلي فيها شغل كثير states بالزبط ولكن لل state هو نفس فكرة ال
// ،طبعا إحنا هندرس عليها مثال هالوقت ولكن فيما بعد هندرسها بالتفصيل الممل
// يلي إحنا هندرسو فيما بعد إن شاءالله redux دي لأنها مدخل لل Reducer وعاوزك تركز جدا على ال
// .👍 بمنتهى السهولة تمام Redux كويس جدا، هتفهم بعد كدا ال Reducer ف لو فهمت ال

// The useReducer hook is used for complex state manipulations and state transitions. Just like the other React Hook,
//           we can import useReducer from react as shown in the below snippt:

// const [state, dispatch] = useReducer(reducer, initialValue);

// * React Fundamentals:
// =====================

// * Custom Hooks
// Building your own Hooks lets you extract component logic into reusable function. Hooks are reusable function.

// Json Holder: https://jsonplaceholder.typicode.com/todos

// * React Fundamentals:
// =====================

// Fetching Data Api

//* 01-Axios // 02-Fetch
// ---------------------

// Axios allows us to communicate with APIs easily in our React apps.
// Axios is a promise-based library used with Node.js and your browser to make asynchronous JavaScript HTTP requests.

// Fetch Build in JavaScript to get data from backend Api.

// https://jsonplaceholder.typicode.com/posts

// D:\مجلد جديد\React\01-FirstProject\firsttest (master)
// λ npm i axios

// https://axios-http.com/docs/intro

// * Small Projects Intro:
// =======================

// open in PowerShell
// PS D:\مجلد جديد\React\02-Dates Reminder> npx create-react-app dates-reminder
// PS D:\مجلد جديد\React\02-Dates Reminder> code .

// PS D:\مجلد جديد\React\03-QA> npx create-react-app q-a
// PS D:\مجلد جديد\React\03-QA\q-a> npm install --save react-toastify

// PS D:\مجلد جديد\React\04-Menu> npx create-react-app menu
// PS D:\مجلد جديد\React\04-Menu\menu> npm install react-reveal --save
//              => npm install react-reveal --force
//                            **OR:**
//          => npm install react-reveal --legacy-peer-deps

/*
 * PS D:\مجلد جديد\React\04-Menu\menu> npm install react-reveal --save
 * npm ERR! code ERESOLVE
 * npm ERR! ERESOLVE unable to resolve dependency tree
 * npm ERR!
 * npm ERR! While resolving: menu@0.1.0
 * npm ERR! Found: react@18.2.0
 * npm ERR! node_modules/react
 * npm ERR!   react@"^18.2.0" from the root project
 * npm ERR!
 * npm ERR! Could not resolve dependency:
 * npm ERR! peer react@"^15.3.0 || ^16.0.0" from react-reveal@1.2.2
 * npm ERR! node_modules/react-reveal
 * npm ERR!   react-reveal@"*" from the root project
 * npm ERR!
 * npm ERR! Fix the upstream dependency conflict, or retry
 * npm ERR! this command with --force or --legacy-peer-deps
 * npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
 * npm ERR!
 * npm ERR!
 * npm ERR! For a full report see:
 * npm ERR! C:\Users\Subeh\AppData\Local\npm-cache\_logs\2023-09-01T02_52_01_122Z-eresolve-report.txt
 *
 * npm ERR! A complete log of this run can be found in: C:\Users\Subeh\AppData\Local\npm-cache\_logs\2023-09-01T02_52_01_122Z-debug-0.log
 *
 * ======================================================================================================================================
 *
 * PS D:\مجلد جديد\React\04-Menu\menu> npm install react-reveal --legacy-peer-deps
 *
 * added 1 package, removed 9 packages, and audited 1521 packages in 5s
 *
 * 247 packages are looking for funding
 *   run `npm fund` for details
 *
 * 6 high severity vulnerabilities
 *
 * To address all issues (including breaking changes), run:
 *   npm audit fix --force
 *
 * Run `npm audit` for details.
 * PS D:\مجلد جديد\React\04-Menu\menu>
 * ======================================================================================================================================
 */

// * https://legacy.reactjs.org/docs/legacy-context.html
// * https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html
// * https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

/*
 * PS D:\مجلد جديد\React\04-Menu\menu> npx react-codemod rename-unsafe-lifecycles
 * Need to install the following packages:
 * react-codemod@5.4.3
 * Ok to proceed? (y) Y
 * npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
 * npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
 * npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
 * npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
 * npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
 * Thank you for using react-codemods!
 *
 * But before we continue, please stash or commit your git changes.
 *
 * You may use the --force flag to override this safety check.
 * PS D:\مجلد جديد\React\04-Menu\menu>
 */

// PS D:\مجلد جديد\React\05-Movies DB> npx create-react-app movies-starter
// PS D:\مجلد جديد\React\05-Movies DB\movies-starter> npm i axios

// ** API: **
//* https://www.themoviedb.org
//* https://developer.themoviedb.org/docs/getting-started
//* https://developer.themoviedb.org/docs/image-basics
//* https://developer.themoviedb.org/docs/errors

//* Postman app: https://www.postman.com : بتاعتك API's لإستعراض ال

//* https://getbootstrap.com/docs/5.3/components/pagination
//* https://react-bootstrap.netlify.app/docs/components/pagination

// PS D:\مجلد جديد\React\05-Movies DB\movies-starter> npm install react-paginate --save
// https://codepen.io/monsieurv/pen/yLoMxYQ

// PS D:\مجلد جديد\React\05-Movies DB\movies-starter> npm i react-router-dom

/*

* npm install react-bootstrap bootstrap

* [\src\index.js]:
------------------------------
import "bootstrap/dist/css/bootstrap.min.css";

* [\public\index.html]:
-----------------------------------
<html dir="rtl" lang="ar">

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@300&display=swap" rel="stylesheet" />

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />

* [\src\index.css]:
-------------------------------
font-family: 'Almarai', sans-serif;
font-family: 'Cairo', sans-serif;

*/

// * React Redux:
// ==============

// ** What Redux **

// Redux is a state management library for front end applications. Developers commonly use it with React through the
// react-redux package, but it can also stand alone - so you can it in any front end framework or library, including
//                                   Vanilla JavaScript.

// * Followed in section: Redux\redux\src\ReduxNotes.js !

// ------------------------------------------------------------------------------------------

// C:\cmder
// λ cd /d D:\"مجلد جديد"\React\"01-FirstProject"\firsttest

/*
 * 01. HTML, CSS, and JavaScript Fundamentals
 * 02. JavaScript ES6+ Features
 * 03. Getting Started with React
 * 04. React Components
 * 05. React Routing
 * 06. State Management
 * 07. React Hooks
 * 08. Working with APIs
 * 09. React UI Libraries
 * 10. Testing React Applications
 * 11. React Performance Optimization
 * 12. Advanced React Concepts
 * 13. Building Real-World Projects
 * 14. React Router
 * 15. Redux
 * 16. React Context
 * 17. React Hooks Libraries
 * 18. Server-Side Rendering (SSR)
 * 19. TypeScript with React
 * 20. Testing Libraries
 * 21. Performance Optimization
 * 22. Advanced React Patterns
 * 23. Community Resources
 *
 * 2.2 Front End "React"
 * https://www.youtube.com/watch?v=opR0gitWQ1w&list=PLDQ11FgmbqQPRui5VDCSQvYt2HOYiCVep
 * -------------------------
 * https://www.youtube.com/watch?v=LgB3j2y1b-4&list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW
 * ------------------------
 * https://www.youtube.com/watch?v=F627pKNUCVQ&t=11767s
 * -----------------------
 * https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=3s
 * -----------------------
 * https://www.youtube.com/@indexacademyofficial/playlists?view=50&sort=dd&shelf_id=2
 * https://www.udemy.com/course/reactjs-build-full-e-commerce-from-scratch-redux/
 * https://www.udemy.com/course/react-the-complete-guide-incl-redux/
 */
