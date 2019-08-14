import React, { Component } from "react";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { DISHES } from "../shared/Dishes";
import Header from "./Header";
import Footer from "./Footer";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  // Cập nhật lại kho với onClick
  onDishSelect = dishId => {
    this.setState({
      selectedDish: dishId
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer/>
      </div>
    );
  }
}
