import React, { Component } from 'react';
import Films from './Films'

class FilmsList extends Component {
  constructor(props) {
    super(props) 

    this.state = {
     showComponent: false,
    }

    this.onButtonClick = this.onButtonClick.bind(this);
      
  }
  
  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>LOAD FILMS</button>
        {this.state.showComponent ?
           <Films /> :
           null
        }
      </div>
    );
  }
}  

export default FilmsList;