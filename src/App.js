import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const { isLoading } = this.state;
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
    //isLoading = movies
  };
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "is loading..." : "ready"}</div>;
  }
}

export default App;
