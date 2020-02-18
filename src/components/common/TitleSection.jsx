import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const TitleSection = ({ sub, crumbLabel }) => {
  return (
    <section className="section-title">
      <Container>
        <Row>
          <Col lg="12">
            <div>
              <h2>{crumbLabel}</h2>

              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                {sub && <Breadcrumb.Item href={`/${sub.slug}`}>{sub.label}</Breadcrumb.Item>}
                <Breadcrumb.Item active>{crumbLabel}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TitleSection;