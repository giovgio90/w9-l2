import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";

import MyFooter from "./components/MyFooter";

import books from "../src/data/scifi.json";
import BookList from "./components/BookList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNav navBar="bg-primary mb-4" linkStyle="text-white fw-bold" />
      <Container>
        <Welcome className="my-4 p-5 bg-primary text-white " />
        {/* <AllTheBooks className="mt-5" display="d-flex" price="fw-2 text-danger  pt-3" margin="mb-4" /> */}
        <BookList books={books} />
      </Container>
      <MyFooter className="bg-primary text-center text-white p-3" container="container" footerStyle="fs-5 m-0" />
    </div>
  );
}

export default App;
