const React = require("react");

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    // Preventing page refresh is ususally the only reason you might use preventDefault
    // A couple of others is preventing right-clicking an image (to prevent people from saving it)
    // Or to prevent closing a tab or clicking a link when there are unsaved changes on the page
    event.preventDefault();
    console.log('the form was submitted', this);
    const { username } = this.state;
    // In our App we have a component called handleSearch which we also want to use here. So we're going to make it available
    this.props.handleSearch(username);
  }

  handleInputChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            value="Search"
          />
        </form>
    );
  }
};

// How to order props fed to component
// Must-haves
// Nice-to-haves
// React-specific stuff

module.exports = Search;