import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import DishDetail from "./DishDetail";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  // Cập nhật lại kho với onClick
  onDishSelect = dish => {
    this.setState({
      selectedDish: dish
    });
  };

  renderDish = dish => {
    if (dish !== null) {
      return <DishDetail dish={this.state.selectedDish} />;
    } else {
      return <div />;
    }
  };

  render() {
    // Hiển thị dữ liệu danh sách món ăn
    const menu = this.props.dishes.map(item => {
      return (
        <div key={item.id} className="col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(item)}>
            <CardImg src={item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {this.renderDish(this.state.selectedDish)}
      </div>
    );
  }
}
