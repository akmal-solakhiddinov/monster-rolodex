// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-comp";
import SearchBox from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div>
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
