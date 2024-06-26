import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
  } from "@mui/material";
  import { Formik } from "formik";
  import React from "react";
  import * as Yup from "yup";
  
  const Login = () => {
    return (
      <Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Must be a valid email.")
              .required("Email is required.")
              .trim()
              .min(4, "Email must be at least 4 characters.")
              .lowercase()
              .max(55, "Email must be at max 55 characters."),
            password: Yup.string()
              .matches(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
                "Password must be strong."
              )
              .required("Password is required."),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => {
            return (
              <form
                onSubmit={formik.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: "2rem",
                  minWidth: "300px",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Typography variant="h4">Sign in</Typography>
  
                <FormControl fullWidth>
                  <TextField label="Email" {...formik.getFieldProps("email")} />
                  {formik.touched.email && formik.errors.email ? (
                    <FormHelperText error>{formik.errors.email}</FormHelperText>
                  ) : null}
                </FormControl>
  
                <FormControl fullWidth>
                  <TextField
                    label="Password"
                    {...formik.getFieldProps("password")}
                  />
  
                  {formik.touched.password && formik.errors.password ? (
                    <FormHelperText error>
                      {formik.errors.password}
                    </FormHelperText>
                  ) : null}
                </FormControl>
  
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  submit
                </Button>
              </form>
            );
          }}
        </Formik>
      </Box>
    );
  };
  
  export default Login;