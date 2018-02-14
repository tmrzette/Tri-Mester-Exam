import React, { Component } from 'react';

class Films extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      films: [],
      isLoaded: true,
      error: null
    }
      
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
        });
      }
    )
  }
  

  render() {
    const { error, isLoaded, films } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {films.map(films => (
            <li key={films.id}>
              <div class="card text-center">
                <div class="card-header">
                  Director: { films.director }
                </div>
                <div class="card-block">
                  <h4 class="card-title">{ films.title }</h4>
                  <p class="card-text">{ films.description }</p>
                  <a href={ films.url } class="btn btn-primary">Go to Film!</a>
                </div>
                <div class="card-footer text-muted" id="card-foot">
                  Producer: { films.producer }
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }

  
};  

export default Films;