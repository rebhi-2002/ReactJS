import React from "react";

// * Class Component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello From Home</h1>
      </div>
    );
  }
}

// * Function Component
const Home = () => {
  return (
    <div>
      <h1>Hello From Home</h1>
    </div>
  );
};

export default Home;
