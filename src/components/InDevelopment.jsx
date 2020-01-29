import React from "react";
import { Container } from "react-bootstrap";

const InDevelopment = () => {
  return (
    <>
      <section className="in-development">
        <Container className="text-center">
          <h1 className="title">In Development</h1>
          <p>Thanks for checking out this section, we are working hard to bring it to you soon!</p>
        </Container>
      </section>
    </>
  );
};

export default InDevelopment;
