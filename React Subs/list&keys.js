function Test() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) => <li>{numbers}</li>);
    return listItems;
}
//JSX allows embedding any expression in curly braces so we could inline the map() result:
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) => (
                <ListItem key={number.toString()} value={number} />
            ))}
        </ul>
    );
}

ReactDOM.render(<Test />, document.getElementById("root"));
