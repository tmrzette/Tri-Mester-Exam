import React, { Component } from 'react';
import People from './People';

class PeopleList extends Component {
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
        <button onClick={this.onButtonClick}>LOAD PEOPLE</button>
        {this.state.showComponent ?
           <People /> :
           null
        }
      </div>
    );
  }
}
  
  
  

export default PeopleList;