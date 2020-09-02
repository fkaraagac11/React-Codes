import React from "react";

export default function P(props) {
    return (
        <div>
            <h1>
                Benim adim {props.name} ve ben {props.age} yasindayim ve{" "}
                {props.place}'da dogdum.
            </h1>
        </div>
    );
}
