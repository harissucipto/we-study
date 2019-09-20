import React from 'react';
import { TextField, Button } from '@material-ui/core';


const Form = props => {
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist(); // agar bisa mengahandle data secara async
    handleChange(e);
    setFieldTouched(name, true, false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        fullWidth
        value={name}
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        onChange={change.bind(null, "name")}

      />
      <TextField
        id="email"
        name="email"
        label="Email"
        fullWidth
        value={email}
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        onChange={change.bind(null, "email")}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        fullWidth
        value={password}
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        onChange={change.bind(null, "password")}

      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="ConfirmPassword"
        fullWidth
        type="password"
        value={confirmPassword}
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        error={touched.confirmPassword && errors.confirmPassword}
        onChange={change.bind(null, "confirmPassword")}
      />
      <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
        submit
      </Button>
    </form>
  );
};

export default Form;