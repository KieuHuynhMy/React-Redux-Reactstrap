import React, { Component } from 'react'
import Menu from './components/Menu';
import { DISHES } from "../src/shared/Dishes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  
  render() {
    return (
      <div>
        <Menu dishes={this.state.dishes} />
      </div>
    )
  }
}
