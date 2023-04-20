import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import { listProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert";

const CategoryWiseProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log("p",params)
  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

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
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )} */}
      <Typography variant="h4" style={{ marginTop: "2em" }}>
        {params.brand}
      </Typography>
      {/* <h1></h1> */}
      <ToastContainer />
      <>
        <Row>
          {products.map((product) =>
            product.brand === params.brand &&
            product.category === params.category ? (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ) : null
          )}
        </Row>
      </>
    </>
  );
};

export default CategoryWiseProduct;
