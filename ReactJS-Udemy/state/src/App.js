import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Vehbi", age: 20 },
            { name: "Meltem", age: 44 },
            { name: "Melih", age: 10 },
            { name: "fehmi", age: 47 },
        ],
        otherState: "some other value",
    };
    switchNameHandler = () => {
        // console.log("was clicked");
        this.setState({
            persons: [
                { name: "VehbiK", age: 20 },
                { name: "MeltemK", age: 44 },
                { name: "MelihCan", age: 10 },
                { name: "fehmik", age: 47 },
            ],
            otherState: "something else",
        });
    };
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>

                <Person
                    name={this.state.persons[3].name}
                    age={this.state.persons[3].age}
                />
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
                <Person
                    name={this.state.persons[3].name}
                    age={this.state.persons[3].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
