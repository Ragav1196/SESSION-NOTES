import "./App.css";
import React from "react";

class StudentPage extends React.Component {
  //  2(2) -> CREATING STATES USING CONSTRUCTOR
  constructor(props /* the props that we send will be available here */) {
    // super(props);
    console.log(super());
    /*
      if we use super(props) it means that we are sending the props to the constructor function of the React.Component
        class. only after using the super(props), our states that we have created below will be initialized or else
        it will throw an error.
    */

    this.state = {
      name: "Guvi",
    };
  }
  // Constructor is the function that will be called first

  changeName = () => {
    console.log("ChangeName Called");
    this.setState({ name: "Zen" });
  };

  render() {
    return (
      <>
        <h1>Student</h1>
        <p>Name - {this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </>
    );
  }
}

// 2(1) -> CLASS COMPONENT WORKING EXPLAINED
// MAIN CLASS
/* 
  class person {
    constructor() {
      this.name = "Guvi";
    }

    getName() {
      return this.name;
    }
  } 
*/

// COPYING THE PERSON CLASS INTO THE STUDENT CLASS
/* 
  class Student extends person {} 
*/

/* 
  we are copying the class constructor and methods from the class person to the class student. this is called as 
  inheritance. for inheritance we are using "extends" keyword. this same concept is happening in the above class 
  component.

  "studentPage" component is inheriting all the methods and constructors from the "React.Component" which i also a 
  class. 
*/

export default StudentPage;
