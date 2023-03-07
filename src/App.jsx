import "./App.css";

const MappedItems = () => {
  const items = ["car", "buss", "airplane"];

  const elementItems = items.map((item, key) => {
    return <li key={key}>{item}</li>;
  });
  return <ul>{elementItems}</ul>;
};

const FoundItem = (props) => {
  if (!props.name) {
    return <p>No name given</p>;
  }
  const persons = [
    {
      name: "John",
      age: 25,
    },
    {
      name: "Jane",
      age: 35,
    },
    {
      name: "Olivia",
      age: 25,
    },
    {
      name: "Hans",
      age: 43,
    },
  ];

  const foundPerson = persons.find((person) => person.name === props.name);
  console.log(foundPerson);
  if (foundPerson) {
    return (
      <p>
        {foundPerson.name} is {foundPerson.age} old
      </p>
    );
  }
  return <p>No found person</p>;
};

function App() {
  const items = ["car", "buss", "airplane"];

  return (
    <div className="App">
      <MappedItems />

      <ul>
        {items.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>

      <FoundItem name="John" />
    </div>
  );
}

export default App;
