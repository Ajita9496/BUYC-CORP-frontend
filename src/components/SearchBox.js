import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        className="mr-2"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        style={{ borderRadius: 20, borderWidth: 1 }}
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;
