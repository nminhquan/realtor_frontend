import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import './item_grid.css';

export class ItemGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';

    // Get a date range between today and one month ago to dynamically update the link for the request
    let todayDate = new Date();
    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    let oneMonthAgo = todayDate.getFullYear() + '-' + todayDate.getMonth() + '-' + todayDate.getDate();

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const movies = data.results;
          this.setState({ movies });
        });

      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
  }

  render() {
    return(
      <section>
        <h2>New releases</h2>
        <div className="newcssMovies">
          {this.state.movies.map((movie, index) => {
            return (
              <BrowserRouter>
              <Link to={`/movie/${this.state.movies[index].id}`} key={index} className="movieLink">
                <img src={this.state.movies[index].poster_path === null ? this.state.movies[index].poster_path : 'http://fortstandard.com/wp-content/uploads/2014/08/Range-Chair-Thumbnail.jpg'} alt={`${this.state.movies.title} poster`} className="imgResponsive" />

                <div className="movieInfo">
                  <h3>{this.state.movies[index].title}</h3>
                  <p>{this.state.movies[index].release_date}</p>
                </div>
              </Link>
              </BrowserRouter>
              
            )
          })}
        </div>
      </section>
    );
  }
}
