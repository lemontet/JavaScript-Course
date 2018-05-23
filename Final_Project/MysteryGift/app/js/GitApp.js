const React = require("react");

const Search = require("./Search");
const UserProfile = require("./UserProfile");
const {fetchUserProfile} = require("./Fetch");

import Background from '../components/background';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null, repos: null };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(username) {

    // Make two API requests:
      // Get profile details of username from the Github API
      // Get repository details of username from the Github API

    fetchUserProfile(username)
      .then(data => {
        // Some for some enhanced object literals!
        const { login, avatar_url, followers, following } = data;
        const profile = { login, avatar_url, followers, following };
        this.setState({ profile });
        console.log(profile);
      })
  }

  render() {
    return (
      <div>
        <h1>Our Github App</h1>
        <Search handleSearch={this.handleSearch} />
        <hr />
        <UserProfile userData={this.state.profile} />
        <Background />
      </div>
    );
  }
};

module.exports = App;