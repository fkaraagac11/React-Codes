function Person(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.lastname}</h1>
            <h1>My Age:{props.age} </h1>
        </div>
    );
}
var app = (
    <div>
        <Person name="Fehmi" lastname="Karaagac" age="47" />
        <Person name="Faruk" lastname="Aydin" age="37" />
    </div>
);

ReactDOM.render(app, document.querySelector("#fk"));
