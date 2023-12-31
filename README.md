<!--
![React Icon](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)
![Redux Icon](https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/320px-Redux.png)
-->

<div align="center">
  <a href="https://react.dev">
    <img width="50%" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/ReactJS-unscreen.gif" alt="ReactJS Logo" />
  </a>
</div>

<h1 align="center">
  <a href="https://react.dev">React - The library for web and native user interfaces</a>
</h1>

<br />
<div align="center">

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)
[![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield)](https://circleci.com/gh/facebook/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

[![GitHub repo size](https://img.shields.io/github/repo-size/rebhi-2002/ReactJS?style=plastic&color=61DAFB&label=Repo%20Size&logo=react)](https://github.com/rebhi-2002/ReactJS)
[![GitHub contributors](https://img.shields.io/github/contributors/rebhi-2002/ReactJS?style=plastic&color=181717&label=Contributors&logo=github)](https://github.com/rebhi-2002/ReactJS)
[![GitHub stars](https://img.shields.io/github/stars/rebhi-2002/ReactJS?style=plastic&color=FFD700&label=Stars)](https://github.com/rebhi-2002/ReactJS)
[![GitHub forks](https://img.shields.io/github/forks/rebhi-2002/ReactJS?style=plastic&color=008000&label=Forks)](https://github.com/rebhi-2002/ReactJS)

</div>
<br />

<!-- # React JavaScript Content -->

# :rocket: React.js and JavaScript Mastery: Your Comprehensive Learning Journey

## Table of Contents

**1. Introduction**

- Important Notice for Users
- Overview
- Getting Started
  - Requirements
  - Installation
  - Project Libraries and Versions
  - Start Development

**2. Modern JavaScript**

- Topics Covered
  - Var, Let, Const
  - Arrow Function
  - Export and Import
  - Classes
  - Spread Operators
  - De-structuring
  - Primitive Types
  - Array Functions
  - Array Simple Methods (Slice, Splice, Reverse, Concat, Join)
  - Array Methods (Filter, Find, Sort, Reduce)
  - Higher Order Functions
  - Promise, Asynchronous, Synchronous
  - Multi Promise
  - Async, Await

**3. First React Project**

- Lessons
  - What, Why, ReactJS
  - How React Work
  - Install NodeJs VsCode, Run Project
  - React File Structure Vs Code

**4. React Fundamentals**

- Lessons
  - What JSX, JSX vs HTML
  - React Bootstrap, Styling
  - Building Custom Component, Reuse
  - Props
  - Pass Function As Props, Children
  - Render Lists Conditional
  - Events, Handlers, User Input
  - React Router (Navigation) - Part1
  - React Router (Navigation) - Part2
  - React Hooks Meaning
  - useState
  - useEffect
  - useRef
  - useContext, ContextApi Part1
  - useContext, ContextApi Part2
  - useMemo
  - useReducer
  - Custom Hooks
  - Fetching Data Api (Fetch and Axios)

**5. Basic Projects**

- Dates Reminder Project
- Question and Answer Project
- Menu Project
- Movies DB Project

**6. React Redux From Scratch**

- Introduction
- Course Objectives
- Target Audience
- Requirements
- Lessons:
  - Redux Fundamentals (What, Why, When)
  - Comparing Redux with the Context API
  - How Redux Works
  - Create Store Reducer
  - Utilizing Redux Hooks (useSelector and useDispatch)
  - Multi Reducer Redux DevTools
  - Update Movies Project with Redux
- Let's Get Started

**7. Contribution**

- How to Contribute

**8. License**

**9. References**

- Video Tutorials and Courses
- Official Documentation and Resources
- Books
- UI Component Libraries
- Additional Resources

**10. Author Information**

### Important Notice for Users

This content is directed towards individuals who possess a broad knowledge and prior experience in web development. It is assumed that you are proficient in handling technologies such as HTML 5, CSS 3, Bootstrap +4, and JavaScript with ease before embarking on exploring the content here. If you do not have this experience yet, we strongly advise learning these fundamentals first and acquiring the necessary expertise.

**_You Don't Need Any Experience in React JS_**

## Overview

Welcome to my ReactJS project! This project aims to learn and understand the ReactJS library and how to use it to build dynamic user interface applications.

## Getting Started

Before you begin, make sure you meet the following requirements:

### Requirements

To run the ReactJS project, you'll need:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))
- A text editor like [Visual Studio Code](https://code.visualstudio.com/) (optional)

### Installation

1. Install Node.js and npm (or Yarn) from the official website.
2. Clone the project repository to your computer:

```bash
git clone https://github.com/rebhi-2002/ReactJS.git
```

3. Navigate to the project folder:

```bash
cd ReactJS/01-FirstProject/firsttest/
```

4. Install dependencies using npm (or Yarn):

```bash
npm install
# Or
yarn install
```

**To set up your project, you can use [Create React App](https://github.com/facebook/create-react-app). It's a popular tool for quickly bootstrapping React applications.**

### Project Libraries and Versions

In this project, we are using the following libraries and versions:

> :star: **ProjectFolder\package.json:**

```json
"dependencies": {
  "@redux-devtools/extension": "^3.2.5",
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "axios": "^1.5.0",
  "bootstrap": "^5.3.1",
  "cra-template": "1.2.0",
  "react": "^18.2.0",
  "react-bootstrap": "^2.8.0",
  "react-dom": "^18.2.0",
  "react-paginate": "^8.2.0",
  "react-redux": "^8.1.2",
  "react-router-dom": "^6.15.0",
  "react-reveal": "^1.2.2",
  "react-scripts": "5.0.1",
  "redux": "^4.2.1",
  "redux-thunk": "^2.4.2",
  "redux-devtools-extension": "^2.13.9",
  "react-toastify": "^9.1.3",
  "web-vitals": "^2.1.4"
},
```

| Package Name                |  Version  |                                                           npm Link                                                            | Package Name                       |  Version  |                                                                          npm Link                                                                           |
| --------------------------- | :-------: | :---------------------------------------------------------------------------------------------------------------------------: | ---------------------------------- | :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
| @testing-library/jest-dom   | `^5.17.0` |   [![npm](https://img.shields.io/npm/v/@testing-library/jest-dom)](https://www.npmjs.com/package/@testing-library/jest-dom)   | @testing-library/react             | `^13.4.0` |                     [![npm](https://img.shields.io/npm/v/@testing-library/react)](https://www.npmjs.com/package/@testing-library/react)                     |
| @testing-library/user-event | `^13.5.0` | [![npm](https://img.shields.io/npm/v/@testing-library/user-event)](https://www.npmjs.com/package/@testing-library/user-event) | axios                              | `^1.5.0`  |                                      [![npm](https://img.shields.io/npm/v/axios)](https://www.npmjs.com/package/axios)                                      |
| bootstrap                   | `^5.3.1`  |                   [![npm](https://img.shields.io/npm/v/bootstrap)](https://www.npmjs.com/package/bootstrap)                   | cra-template                       |  `1.2.0`  |                               [![npm](https://img.shields.io/npm/v/cra-template)](https://www.npmjs.com/package/cra-template)                               |
| react-dom                   | `^18.2.0` |                   [![npm](https://img.shields.io/npm/v/react-dom)](https://www.npmjs.com/package/react-dom)                   | react-router-dom                   | `^6.15.0` |                           [![npm](https://img.shields.io/npm/v/react-router-dom)](https://www.npmjs.com/package/react-router-dom)                           |
| react-scripts               |  `5.0.1`  |               [![npm](https://img.shields.io/npm/v/react-scripts)](https://www.npmjs.com/package/react-scripts)               | react-reveal                       | `^1.2.2`  |                               [![npm](https://img.shields.io/npm/v/react-reveal)](https://www.npmjs.com/package/react-reveal)                               |
| react-toastify              | `^9.1.3`  |              [![npm](https://img.shields.io/npm/v/react-toastify)](https://www.npmjs.com/package/react-toastify)              | web-vitals                         | `^2.1.4`  |                                 [![npm](https://img.shields.io/npm/v/web-vitals)](https://www.npmjs.com/package/web-vitals)                                 |
| react                       | `^18.2.0` |                       [![npm](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)                       | react-bootstrap                    | `^2.8.0`  |                            [![npm](https://img.shields.io/npm/v/react-bootstrap)](https://www.npmjs.com/package/react-bootstrap)                            |
| react-paginate              | `^8.2.0`  |              [![npm](https://img.shields.io/npm/v/react-paginate)](https://www.npmjs.com/package/react-paginate)              | react-redux                        | `^8.1.2`  |                                [![npm](https://img.shields.io/npm/v/react-redux)](https://www.npmjs.com/package/react-redux)                                |
| redux                       | `^4.2.1`  |                       [![npm](https://img.shields.io/npm/v/redux)](https://www.npmjs.com/package/redux)                       | @redux-devtools/extension          | `^3.2.5`  |                  [![npm](https://img.shields.io/npm/v/@redux-devtools/extension)](https://www.npmjs.com/package/@redux-devtools/extension)                  |
| redux-devtools-extension    | `^2.13.9` |    [![npm](https://img.shields.io/npm/v/redux-devtools-extension)](https://www.npmjs.com/package/redux-devtools-extension)    | Redux DevTools 'Browser Extension' | `^3.1.3`  | [![npm](https://img.shields.io/npm/v/@redux-devtools/extension)](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) |
| redux-thunk                 | `^2.4.2`  |                 [![npm](https://img.shields.io/npm/v/redux-thunk)](https://www.npmjs.com/package/redux-thunk)                 |

### Start Development

Now that you have everything set up, you can start developing your React application. Here are some initial steps to help you get going:

Now you can start development and explore the ReactJS project. Use the examples and files within the project to understand how to use ReactJS to build dynamic user interface applications.

## 01-Modern JavaScript

This section covers modern JavaScript concepts and techniques. Each topic is accompanied by code examples available in the GitHub repository.

### Topics Covered

1. **[Var, Let, Const](https://github.com/rebhi-2002/ReactJS/blob/main/01-Variables.js)**: Explanation of var, let, and const in JavaScript.

2. **[Arrow Function](https://github.com/rebhi-2002/ReactJS/blob/main/02-ArrowFunction.js)**: Understanding arrow functions in JavaScript.

3. **Export and Import**: How to export and import modules in JavaScript.

   - [Import MainApp](https://github.com/rebhi-2002/ReactJS/blob/main/03-MainApp.mjs)
   - [Export class1](https://github.com/rebhi-2002/ReactJS/blob/main/03-class1.mjs)

4. **[Classes](https://github.com/rebhi-2002/ReactJS/blob/main/04-Car.mjs)**: Working with classes in JavaScript.

5. **[Spread Operators](https://github.com/rebhi-2002/ReactJS/blob/main/05-Spread.js)**: Explanation and usage of spread operators.

6. **[De-structuring](https://github.com/rebhi-2002/ReactJS/blob/main/06-Destructuring.js)**: De-structuring objects and arrays in JavaScript.

7. **[Primitive Types](https://github.com/rebhi-2002/ReactJS/blob/main/07-PrimitiveTypes.js)**: An overview of primitive data types in JavaScript.

8. **[Array Functions](https://github.com/rebhi-2002/ReactJS/blob/main/08-ArrayFunctions.js)**: Understanding various array functions.

9. **[Array Simple Methods (Slice, Splice, Reverse, Concat, Join)](https://github.com/rebhi-2002/ReactJS/blob/main/09-Array-Methodes.js)**: Explanation of simple array methods like slice, splice, reverse, concat, and join.

10. **[Array Methods (Filter, Find, Sort, Reduce)](https://github.com/rebhi-2002/ReactJS/blob/main/10-Array-Methodes2.js)**: Explanation of array methods like filter, find, sort, and reduce.

11. **[Higher Order Functions](https://github.com/rebhi-2002/ReactJS/blob/main/11-HigherOrderFunctions.js)**: Understanding higher-order functions in JavaScript.

12. **[Promise, Asynchronous, Synchronous](https://github.com/rebhi-2002/ReactJS/blob/main/12-Promise.js)**: Introduction to promises and asynchronous programming in JavaScript.

13. **[Multi Promise](https://github.com/rebhi-2002/ReactJS/blob/main/13-MultiPromise.js)**: Working with multiple promises.

14. **[Async, Await](https://github.com/rebhi-2002/ReactJS/blob/main/14-AsyncAwait.js)**: Usage of async/await in JavaScript.

### Accessing Code Examples

You can find the code examples for each topic in the GitHub repository's corresponding commits. Simply browse the [Modern JavaScript folder](https://github.com/rebhi-2002/ReactJS) and look for commits with the topic names.

To get started, you can access the code examples for the first topic, [01-Var, Let, Const], directly by clicking the following link: [01-Var, Let, Const Code Examples](https://github.com/rebhi-2002/ReactJS/blob/main/01-Variables.js).

Feel free to explore and learn from these code examples to deepen your understanding of modern JavaScript concepts.

## 02-First React Project

Welcome to the "🚀 ReactJS (Getting Started)" file!

In this section, you'll find lessons and code related to the fundamentals of ReactJS. Here's a brief overview of what's inside "React.js":

### Lessons

- **[01-What, Why, ReactJS](https://github.com/rebhi-2002/ReactJS/blob/main/React.js)**: An introduction to ReactJS, its purpose, and why it's used.

- **[02-How React Work](https://github.com/rebhi-2002/ReactJS/blob/main/React.js)**: Understanding how React works.

- **[03-Install NodeJs VsCode, Run Project](https://github.com/rebhi-2002/ReactJS/blob/main/React.js)**: Installing Node.js and Visual Studio Code, and running your first React project.

- **[04-React File Structure Vs Code](https://github.com/rebhi-2002/ReactJS/blob/main/React.js)**: Explanation of React's file structure and using Visual Studio Code for development.

Feel free to explore the lessons and code samples in this file. It's a great place to start your journey with ReactJS!

This file is part of the larger ReactJS project. You can explore more lessons and projects in the repository.

## 03-React Fundamentals

Welcome to the "🚀 First React Project/firsttest" folder! along with the "React.js" file.

In this section, you'll find code and lessons related to the fundamentals of ReactJS, including the "React.js" file. Here's a brief overview of what's inside:

### Lessons

- **[01-What JSX, JSX vs HTML](https://github.com/rebhi-2002/ReactJS/blob/main/React.js)**: Explaining JSX and the differences between JSX and HTML.

- **[02-React Bootstrap, Styling](https://github.com/rebhi-2002/ReactJS/blob/main/React.js)**: Styling React components with React Bootstrap.

- **[03-Building Custom Component, Reuse](https://github.com/rebhi-2002/ReactJS/tree/main/01-FirstProject/firsttest/src)**: Creating custom components for reuse.

- **[04-Props](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/CardDetails.js)**: Understanding and working with props in React.

- **[05-Pass Function As Props, Children](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/CardDetails.js)**: Passing functions as props and working with children in React.

- **[06-Render Lists conditional](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/App.js)**: Conditional rendering and rendering lists in React.

- **[07-Events, Handlers, User Input](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/CardDetails.js)**: Handling events and user input in React.

- **[08-React Router (Navigation) - Part1](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/App.js)**: Introduction to React Router for navigation - Part 1.

- **[09-React Router (Navigation) - Part2](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/App.js)**: Introduction to React Router for navigation - Part 2.

- **[10-React Hooks Meaning](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/App.js)**: Understanding the meaning and purpose of React hooks.

- **[11-useState](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/state.js)**: Using the useState hook in React.

- **[12-useEffect](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useEffectExample.js)**: Using the useEffect hook in React.

- **[13-useRef](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useRefExample.js)**: Using the useRef hook in React.

- **[14-useContext, ContextApi Part1](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useContext.js)**: Introduction to useContext and Context API - Part 1.

- **[15-useContext, ContextApi Part2](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useContext.js)**: Introduction to useContext and Context API - Part 2.

  - **[Context API Guide](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useContext.js.txt)** - A comprehensive guide on using useContext and the Context API in React, covering both Part 1 and Part 2.

- **[16-useMemo](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useMemo.js)**: Using the useMemo hook in React.

- **[17-useReducer](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useReducer.js)**: Using the useReducer hook in React.

- **[18-Custom Hooks](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/useCustomHooks.js)**: Creating custom hooks in React.

- **[19-Fetching Data Api (Fetch and Axios)](https://github.com/rebhi-2002/ReactJS/blob/main/01-FirstProject/firsttest/src/component/FetchAxios.js)**: Fetching data from APIs using Fetch and Axios in React.

Feel free to explore the lessons and code samples in this folder. Happy learning!

## 04-Basic Projects

### 1. [📅 Dates Reminder Project](https://github.com/rebhi-2002/ReactJS/tree/main/02-Dates%20Reminder)

- [**Desktop View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Dates%20Reminder%20(Desktop).png>) &nbsp; | &nbsp; [**Mobile View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Dates%20Reminder%20(Mobile).png>)

#### Before you get started, make sure to install the necessary npm packages for this project

1. Open your terminal.
2. Navigate to the project directory for the "ReactJS/02-Dates Reminder/dates-reminder"
3. Run the following command to install the required npm packages: **`npm install`**

This will download and install all the necessary dependencies for the project. Once the installation is complete, you can proceed to run the project.

### 2. [🤔 Question and Answer Project](https://github.com/rebhi-2002/ReactJS/tree/main/03-QA)

- [**Desktop View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/QA%20(Desktop).png>) &nbsp; | &nbsp; [**Mobile View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/QA%20(Mobile).png>)

#### To use the "Question and Answer Project," follow these steps

1. Open your terminal.
2. Navigate to the project directory for the "ReactJS/03-QA/q-a"
3. Run the following command to install the required npm packages: **`npm install`**

This will download and install all the necessary dependencies for the project.

### 3. [🍽️ Menu Project](https://github.com/rebhi-2002/ReactJS/tree/main/04-Menu)

- [**Desktop View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Menu%20(Desktop).png>) &nbsp; | &nbsp; [**Mobile View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Menu%20(Mobile).png>)

#### For the "Menu Project," ensure that you have the required npm packages installed

1. Open your terminal.
2. Navigate to the project directory for the "ReactJS/04-Menu/menu"
3. Run the following command to install the required npm packages: **`npm install`**

Once the installation is complete, you'll be ready to explore the "Menu Project."

Remember to repeat these steps for each project when you want to use them. This ensures that you have all the necessary dependencies installed and can run the projects smoothly.

### 4. [📽️ Movies DB Project](https://github.com/rebhi-2002/ReactJS/tree/main/05-Movies%20DB)

- [**Desktop View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Movies%20DB%20(Desktop).png>) &nbsp; | &nbsp; [**Mobile View**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Movies%20DB%20(Mobile).png>) &nbsp; | &nbsp; [**Movie Details Page**](<https://github.com/rebhi-2002/ReactJS/blob/main/assets/Movies%20DB%20(Details).png>)

#### To set up the "Movies DB Project," follow these steps

1. Open your terminal.
2. Navigate to the project directory for the "ReactJS/05-Movies DB/movies-starter"
3. Run the following command to install the required npm packages: **`npm install`**

This will download and install all the necessary dependencies for the project.

4. After the installation is complete, you can start the project by running the following command:

```bash
npm start
```

This will start the web application and allow you to open it in your default web browser.

Now you can start exploring and working on the "Movies DB Project." Be sure to repeat these steps for each project when you want to use them to ensure that you have all the necessary dependencies installed and can run the projects smoothly.

## 05-Creating a React Redux Application From Scratch:

<div align="right">
  <img width="4%" src="https://d33wubrfki0l68.cloudfront.net/97f337956b87f4589dbf68591f22f5f3dacf2736/55f2a/img/redux_white.svg" />
</div>

<div align="center">
  <a href="https://react-redux.js.org">
    <img align="center" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/320px-Redux.png" alt="Redux Icon" />
  </a>
</div>

<h2 align="center">
  <a href="https://react-redux.js.org">React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.
  </a>
</h2>

<br />

<div align="center">

[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/reduxjs/react-redux/blob/master/LICENSE.md)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/reduxjs/react-redux/test.yml?style=flat-square)
[![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![npm downloads](https://img.shields.io/npm/dm/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![#redux channel on Discord](https://img.shields.io/badge/discord-redux@reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

</div>

### Introduction:

Welcome to our comprehensive and specialized course, "Creating a React Redux Application from Scratch." This course is meticulously designed to provide web developers and React programmers with the knowledge and practical skills required to effectively and precisely employ the Redux framework for managing application state.

Redux is a state management framework for React applications and stands as one of the most renowned tools for this purpose. This framework introduces concepts and methodologies that assist in organizing and simplifying state management, particularly in large-scale applications.

<br />

<p align="center">
  1: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/01-Redux_img.png" alt="" width="47%" height="250" />
  2: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/02-Redux_img.png" alt="" width="47%" height="250" />
  <br /><br />
  3: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/03-Redux_img.png" alt="" width="47%" height="250" />
  4: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/04-Redux_img.png" alt="" width="47%" height="250" />
  <br /><br />
  5: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/05-Redux_img.png" alt="" width="47%" height="250" />
  6: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/06-Redux_img.png" alt="" width="47%" height="250" />
  <br /><br />
  7: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/07-Redux_img.png" alt="" width="47%" height="250" />
  8: <img align="center" src="https://github.com/rebhi-2002/ReactJS/blob/main/assets/08-Redux_img.png" alt="" width="47%" height="250" />
</p>

### Course Objectives:

**Primary Objective**: The primary goal of this course is to empower you with comprehensive knowledge and proficient skills to master the application of Redux within React development. Upon completion, you will possess the capability to effectively structure and govern application state, thereby elevating user experiences and streamlining the complexities of application maintenance.

### Target Audience:

**Intended Audience**: This course has been meticulously designed for discerning developers and seasoned programmers who possess a fundamental foundation in React application development. It caters to individuals seeking to elevate their expertise in the art of state management using Redux.

### Requirements:

- Basic knowledge of the JavaScript programming language.
- Prior experience in developing React applications.

### Lessons

Here's an overview of the course content:

- **[Lesson 01-Redux Fundamentals (What, Why, When)](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/ReduxNotes.js)**: In this lesson, we will delve into the fundamentals of Redux, understanding why it's essential, and when it's appropriate to use it in React applications.

- **[Lesson 02-Comparing Redux with the Context API](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/ReduxNotes.js)**: In this lesson, we'll make a comparative analysis between Redux and the Context API in React, helping you grasp the distinctions between them and when to favor one over the other.

- **[Lesson 03-How Redux Works](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/ReduxNotes.js)**: This lesson will dissect how Redux operates under the hood, from state storage to state updates and component re-rendering based on changes.

  - Please view the YouTube video titled 'Lecture 65: How Redux Work' by following this official link: [How Redux Work](https://www.youtube.com/watch?v=Oi90TML6Oz8&t=6s).

- **[Lesson 04-Redux: Create Store Reducer](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/redux/src)**: We will create a Redux store and its associated reducers in this lesson, laying the foundation for managing the application's state.

  - [store.js](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/redux/src/store/store.js)
  - [reducerCounter.js](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/redux/src/reducer/reducerCounter.js)
  - [index.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/index.js)

- **[Lesson 05-Utilizing Redux Hooks (useSelector and useDispatch)](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/redux/src)**: In this lesson, we'll introduce you to using Redux hooks like useSelector and useDispatch to access the store's state and execute actions.

  - [useSelector, useDispatch](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/App.js)
  - [state, action](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/reducer/reducerCounter.js)
  - [type.js](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/redux/src/type/type.js)
  - [action.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/actions/action.js)

- **[Lesson 06-Redux Multi Reducer Redux DevTools](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/redux/src/reducer)**: We will explore managing the application state using multiple reducers in this lesson. Additionally, we'll learn how to utilize Redux DevTools for easier debugging and monitoring of the application's state.

  - [reducerCounter.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/reducer/reducerCounter.js)
  - [reducerAuth.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/reducer/reducerAuth.js)
  - [rootReducer.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/reducer/rootReducer.js)
  - [store.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/store/store.js)
  - [App.js](https://github.com/rebhi-2002/ReactJS/blob/main/Redux/redux/src/App.js)

- **[Lesson 07-Update Movies Project with Redux](https://github.com/rebhi-2002/ReactJS/tree/main/Redux/Movies%20Final%20-%20With%20Redux)**: In the final lesson, we'll enhance our previous movie project by incorporating Redux for state management. You'll witness how Redux can contribute to improving the application's performance.

### Let's Get Started:

We are excited to embark on this educational journey with you and assist you in achieving your goals in React application development using Redux. Join us now to commence this inspiring and valuable learning experience.

## Contribution

If you'd like to contribute to the development of the ReactJS project, please open a Pull Request or report issues on the [project's GitHub page](https://github.com/rebhi-2002/ReactJS).

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

## References

Below, you'll find some recommended resources for learning React:

### Video Tutorials and Courses:

- ✅ [ReactJs-Build Full E-Commerce-Scratch Redux 2023 (بالعربي)](https://www.youtube.com/playlist?list=PLDQ11FgmbqQPRui5VDCSQvYt2HOYiCVep)
  - ✅ [Complete Course in Udemy](https://www.udemy.com/course/reactjs-build-full-e-commerce-from-scratch-redux)
- ✅ [Learn React JS Tutorial](https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW)
- ✅ [10-Hour Course: Build and Deploy 4 Modern React Apps for Frontend Developers](https://www.youtube.com/watch?v=F627pKNUCVQ&t=11767s)
- ✅ [Code 15 React Projects](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=3s)
- ✅ [React: The Complete Guide with Redux (Udemy Course)](https://www.udemy.com/course/react-the-complete-guide-incl-redux)
- ✅ [React JS Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
- ✅ [React Router v6 Major Changes](https://www.youtube.com/watch?v=k2Zk5cbiZhg)
- ✅ [React Context \& Hooks Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)
- ✅ [React js: (بالعربي) تعلم برمجة متجر إلكتروني مع لوحة التحكم](https://www.udemy.com/course/react-js-e-commerce)

### Official Documentation and Resources:

- ✅ [React: The library for web and native user interfaces](https://react.dev)
- ✅ [React Developer Tools](https://react.dev/learn/react-developer-tools)
- ✅ [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis)
- ✅ [Legacy React Documentation](https://legacy.reactjs.org)
- ✅ [React Bootstrap](https://react-bootstrap.netlify.app)
- ✅ [Visual Studio Code React Tutorial](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
- ✅ [Create React App Documentation](https://create-react-app.dev/docs/getting-started)
- ✅ [React Router Documentation](https://reactrouter.com/en/main)
- ✅ [CodeSandbox React Examples](https://codesandbox.io/examples/package/react-emmet-assertion)

### Books:

- ✅ [Pro React Book](https://www.amazon.com/Pro-React-Cassio-Sousa-Antonio/dp/1484212614)
- ✅ [React: Up and Running Book](https://www.amazon.com/React-Up-Running-Stoyan-Stefanov/dp/1491931825)

### UI Component Libraries:

- ✅ [Material-UI: An elegant framework for crafting exquisite user interfaces in React](https://mui.com)
- ✅ [NextUI: A sophisticated library of meticulously designed UI components, tailored for accelerated React application development](https://nextui.org)
- ✅ [Horizon UI Components: A collection of modern, high-quality UI components, elevating the aesthetics of React applications](https://horizon-ui.com/components)
- ✅ [Ant Design: The quintessential design library for creating polished, visually stunning user interfaces in React and React Native](https://ant.design)
  - ✅ [Ant Design GitHub Repository](https://github.com/ant-design/ant-design)

### Additional Resources:

- ✅ [How to write Javascript and React with VS Code FASTER! (using code snippets)](https://www.youtube.com/watch?v=uuXxomVFbC8)
- ✅ [Hands-On React: The best way to learn React](https://handsonreact.com)

#### Author: [**Rebhi Ibrahim**](mailto:rebheibrahim@gmail.com) <br/> Crafted with ❤️ By _Rebhe Ibrahim_ © 2023 🚀
