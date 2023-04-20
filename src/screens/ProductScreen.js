import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
// import products from '../products'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails } from "../actions/productActions";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert";

const ProductScreen = () => {
  const params = useParams();
  const alert = useAlert();
  const navigate = useNavigate();
  // const history = useHistory();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [comment, setComment] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link
        to="/"
        className="btn btn-light"
        style={{
          fontWeight: "bold",
        }}
      >
        Go Back
      </Link>
      <>
        <Row style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Col md={6}>
            {/* <Image src={product.image} alt={product.name} fluid /> */}
            <Carousel
              showThumbs={false}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{
                        width: 8,
                        height: 8,
                        display: "inline-block",
                        margin: "0 8px",
                      }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={{
                      background: "rgb(34 43 69)",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                      boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",

                      width: 8,
                      height: 8,
                      display: "inline-block",
                      margin: "0 8px",
                    }}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              <div>
                <Image
                  src={product.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    padding: 0,
                    margin: 0,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                  alt={product.name}
                />
              </div>
              {product.images &&
                product.images.map((img, index) => (
                  <div key={index}>
                    <Image
                      src={img}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 0,
                        padding: 0,
                        margin: 0,
                        marginLeft: 0,
                        marginRight: 0,
                      }}
                      alt={img.name}
                    />
                  </div>
                ))}
            </Carousel>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Typography variant="h5">{product.name}</Typography>
              </ListGroup.Item>
              <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </>
  );
};

export default ProductScreen;
