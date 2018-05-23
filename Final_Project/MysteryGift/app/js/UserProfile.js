const React = require("react");

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { userData } = this.props;
    console.log(userData);
    if(!userData){
      return (
        <div>
          User profile goes here
        </div>
      );
    } else {
      return (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url}/>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )
    }
  }
}

module.exports = UserProfile;