import React from 'react'
import { Formik } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import Form from './form'
import { Paper } from '@material-ui/core'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: Yup.string("").min(8, "Password must contain at least 8 characters").required("Enter your password"),
  confirmPassword: Yup.string("Enter Your Password").required("Confirm Your Password").oneOf([Yup.ref("password")], "Password does not match")
})

const styles = theme => ({
  paper: {
    marginTop: `${theme.spacing(8)}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(5)}px`,
  },
  container: {
    maxWidth: "400px",
    margin: "0 auto"
  }
})

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  submit = data => {
    console.log(data)
  }

  render() {
    const { classes } = this.props;
    const values = { name: "", email: "", confirmPassword: "", password: "" };

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Form</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(InputForm)