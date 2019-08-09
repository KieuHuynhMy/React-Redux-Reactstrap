import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import moment from "moment";

export default class DishDetail extends Component {
  // Hiển thị món ăn
  renderDish = dish => {
    if (dish !== null) {
      return (
        <Card>
          <CardImg src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  };

  // Hiển thị bình luận
  renderComments = comments => {
    if (comments !== null) {
      return (
        <div>
          <ul className="list-unstyled">
            <h4>Comment</h4>
            {comments.comments.map(comment => {
              return (
                <React.Fragment>
                  <li>
                    <p>{comment.comment}</p>
                  </li>
                  <li>
                    <p>
                      {"--" +
                        comment.author +
                        " , " +
                        moment(comment.date).format("MMM DD, YYYY")}
                    </p>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  };
  
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}
