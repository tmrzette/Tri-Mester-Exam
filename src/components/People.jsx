import React, { Component } from 'react';

class People extends Component {
    constructor(props){
        super(props)

        this.state = {
            people: [],
            isLoaded: true,
            error: null  
        }
    }  

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                people: result
              });
            },
    
            (error) => {
              this.setState({
                isLoaded: true,
                error
            });
        })
    }
    
    
    render() {
      const { error, isLoaded, people } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {people.map(people => (
              <li key={people.id}>
                <div class="card text-center">
                  <div class="card-header">
                    Featured Artist
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">{ people.name }</h4>
                    <p class="card-text">Age: { people.age } <br/> Hair Color: { people.hair_color } <br/> Eye Color: { people.eye_color }</p>
                    <a href={ people.url } class="btn btn-primary">Go to Film!</a>
                  </div>
                  <div class="card-footer text-muted" id="card-foot">
                    <i class="glyphicon glyphicon-star-empty"></i>
                    <i class="glyphicon glyphicon-star-empty"></i>
                    <i class="glyphicon glyphicon-star-empty"></i>
                    <i class="glyphicon glyphicon-star-empty"></i>
                    <i class="glyphicon glyphicon-star-empty"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )};
    }
    
  
    
}

export default People;