import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import { listProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";

import ProductCarousel from "../components/ProductCarousel";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  return (
    <div>
      {!keyword ? (
        <>
          <ProductCarousel />
        </>
      ) : (
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
          <Typography variant="h4" style={{ marginTop: "3em" }}>
            Search Results
          </Typography>
        </>
      )}

      <ToastContainer />

      <>
        <Row>
          {products.slice(0, 8).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
};

export default HomeScreen;
