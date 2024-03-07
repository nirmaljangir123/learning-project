import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
const FormikAndYup = () => {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your valid  name"),
    email: yup.string().required("please enter your valid email"),
    password: yup.string().required("please enter your password"),
    gender: yup.string().required("please enter your gender ....."),
  });
  const handleSubmit = (values) => {
    console.log("values --->", values);
  };

  return (
    <>
      <h2>Formik And Yup validation</h2>
      <div>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ width: "90%" }}>
              <Field
                type="text"
                name="name"
                placeholder="please enter your name"
                style={{ width: "100%", padding: "10px" }}
              />
              <p style={{ color: "red" }}>
                <ErrorMessage name="name" />
              </p>
            </div>
            <div style={{ width: "90%" }}>
              <Field
                type="text"
                name="email"
                placeholder="please enter your email id"
                style={{ width: "100%", padding: "10px", marginTop: "15px" }}
              />
              <p style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </p>
            </div>
            <div style={{ width: "90%" }}>
              <Field
                type="password"
                name="password"
                placeholder="please enter your password"
                style={{ width: "100%", padding: "10px", marginTop: "15px" }}
              />
              <p style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </p>
            </div>
            <div style={{ width: "90%" }}>
              <Field
                name="gender"
                component="select"
                placeholder="please enter your gender"
                style={{ width: "100%", padding: "10px", marginTop: "15px" }}
              >
                <option value={""} disabled>
                  choose gender
                </option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </Field>
              <p style={{ color: "red" }}>
                <ErrorMessage name="gender" />
              </p>
            </div>
            <div>
              <button
                type="submit"
                style={{
                  width: "30%",
                  padding: "10px",
                  marginTop: "15px",
                  background: "#bbb",
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormikAndYup;
