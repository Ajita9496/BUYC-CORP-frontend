import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { listProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";

const AccScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

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
      <Typography variant="h4" style={{ marginTop: "2em" }}>
        Accessories
      </Typography>
      <ToastContainer />
    </>
  );
};

export default AccScreen;
