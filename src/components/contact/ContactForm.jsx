import React from "react";
import { Formik } from "formik";
import { string, object } from "yup";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import * as bent from "bent";

const schema = object({
  firstName: string().required(),
  secondName: string().required(),
  email: string()
    .email()
    .required(),
  phone: string()
    .min(11)
    .max(15),
  message: string().required(),
});

const sendDataToLambda = (values) => {
  const post = bent("POST", process.env.GATSBY_CONTACT_FORM_ENDPOINT);
  const headers = { "x-api-key": process.env.GATSBY_CONTACT_FORM_KEY };
  const body = JSON.stringify({
    firstName: values.firstName,
    secondName: values.secondName,
    email: values.email,
    message: values.message,
    phone: values.phone,
  });

  return post("ContactFormLambda", body, headers);
};

const ContactForm = () => {
  return (
    <>
      <section className="contact-form">
        <Container className="inner">
          <Row>
            <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
              <h2 className="title text-center">Send us a message</h2>
              <p className="text-center">
                Use the form bellow to send us your enquiry, we&apos;ll get back to you as soon as
                possible!
              </p>

              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  sendDataToLambda(values);
                }}
                initialValues={{
                  firstName: "",
                  secondName: "",
                  email: "",
                  phone: "",
                  message: "",
                }}>
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} md={6} controlId="validationName1">
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                          placeholder="First Name *"
                          aria-label="First Name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md={6} controlId="validationName2">
                        <Form.Control
                          type="text"
                          name="secondName"
                          value={values.secondName}
                          onChange={handleChange}
                          isInvalid={!!errors.secondName}
                          placeholder="Second Name *"
                          aria-label="Second Name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.secondName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md={6} controlId="validationEmail">
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="Email *"
                          aria-label="Enter Email"
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md={6} controlId="validationPhone">
                        <Form.Control
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          placeholder="Phone"
                          aria-label="Phone Number"
                        />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md={12} controlId="validationMessage">
                        <Form.Control
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                          type="textarea"
                          placeholder="Message *"
                          aria-label="Your message"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md={12}>
                        <Button type="submit" className="cta-btn-pink" aria-label="Submit form">
                          Submit Form
                        </Button>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Col md={12}>
                        <p className="text-muted">* These fields are required</p>
                      </Col>
                    </Form.Row>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
