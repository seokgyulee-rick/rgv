import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(typeof movies);
    console.log(movies);
    this.setState({ movies, isLoading: false });
    //isLoading = movies
  };
  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        {isLoading
          ? "loading..."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  year={movie.year}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
