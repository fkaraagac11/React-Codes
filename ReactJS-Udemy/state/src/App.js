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

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>

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
