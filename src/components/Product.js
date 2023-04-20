import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  function numDifferentiation(value) {
    var val = Math.abs(value);
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    }
    return val;
  }

  return (
    <>
      <Card
        className="my-3"
        style={{
          backgroundColor: "rgb(34 43 69)",
          borderBottom: "#F037A5",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h3">₹ {numDifferentiation(product.price)}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
