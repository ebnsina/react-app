import React from "react";

import CardList from "./components/CardList";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users }))
      .catch((err) => console.err(err));
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <Layout>
        <SearchBox
          handleChange={this.handleSearch}
          placeholder="Type a name.."
        />
        <CardList users={filteredUsers} />
      </Layout>
    );
  }
}

export default App;
