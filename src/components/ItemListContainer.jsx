import { Container } from "react-bootstrap";

export const ItemListContainer = (props) => {
  return (
    <Container className="mt-5">
      <h1>{props.greeting}</h1>
    </Container>
  );
};
