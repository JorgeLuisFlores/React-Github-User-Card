import React from "react";
import axios from "axios";
import List from "./list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://api.github.com/users/";
    this.state = {
      Data: {},
      followers: [],
      followerData: []
    };
  }

  componentDidMount() {
    axios
      .get(this.url + "JorgeLuisFlores")
      .then(res => {
        this.setState({
          Data: res.data
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });

    axios
      .get(this.url + "JorgeLuisFlores/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log("Followers Error: ", err);
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.followers !== this.state.followers) {
      this.state.followers.map(cv => {
        return axios
          .get(this.url + cv.login)
          .then(res => {
            this.setState({
              followerData: [...this.state.followerData, res.data]
            });
          })
          .catch(err => {
            console.log("Error: ", err);
          });
      });
    }
  }

  render() {
    return (
      <div className="container">
        <List
          data={this.state.Data}
          list={this.state.followerData}
          url={this.url}
        />
      </div>
    );
  }
}

export default App;
