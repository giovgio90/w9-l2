import SingleBook from "./SingleBook";

import { Col, Row } from "react-bootstrap";

function BookList(props) {
  return (
    <>
      <Row>
        {props.books.map((book, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <SingleBook colorPrice="text-danger fw-bold" book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BookList;
