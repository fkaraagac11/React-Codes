import React, { Component } from "react";
import P from "./P";
import Validation from "./Validation/Validation";
import "./App.css";
import Char from "./Char/Char";

class App extends Component {
    state = {
        userInput: "",
        userAge: "",
        userBirthPlace: "",
    };
    userInputChangedHandler = (event) => {
        this.setState({ userInput: event.target.value });
    };

    userAgeInputChangedHandler = (event) => {
        this.setState({ userAge: event.target.value });
    };
    userBirthPlaceInputChangedHandler = (event) => {
        this.setState({ userBirthPlace: event.target.value });
    };
    deleteCharHandeler = (index) => {
        const text = this.state.userInput.split(" ");
        console.log(text);
        text.splice(index, 1);
        const updatedText = text.join(" ");
        console.log(updatedText);
        this.setState({ userInput: updatedText });
    };
    render() {
        const charList = this.state.userInput.split("").map((ch, index) => {
            return (
                <Char
                    character={ch}
                    key={index}
                    clicked={() => this.deleteCharHandeler(index)}
                />
            );
        });
        return (
            <div>
                <input
                    type="text"
                    onChange={this.userInputChangedHandler}
                    value={this.state.userInput}
                />
                <input
                    type="text"
                    onChange={this.userAgeInputChangedHandler}
                    value={this.state.userAge}
                />
                <input
                    type="text"
                    onChange={this.userBirthPlaceInputChangedHandler}
                    value={this.state.userBirthPlace}
                />
                <p>{this.state.userInput}</p>
                <p>{this.state.userAge}</p>
                <p>{this.state.userBirthPlace}</p>

                <P
                    name={this.state.userInput}
                    age={this.state.userAge}
                    place={this.state.userBirthPlace}
                />
                <Validation name={this.state.userInput} />
                {charList}
            </div>
        );
    }
}

export default App;
