import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import moment from "moment";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
    <Card key={dish.id}>
      <CardImg width="100" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
    </div>
  );
}

// Hiển thị bình luận
function RenderComments({ comments }) {
  if (comments != null) {
    let cmt = comments.map(comment => {
      return (
        <ul className="list-unstyled">
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
        </ul>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comment</h4>
        {cmt}
      </div>
    );
  }
}

const DishDetail = props => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
