import React from 'react'
import { Form } from 'formik'

export default function FirstExample() {
  return (
    <Formik>
      {
        ({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" />
            <button>Submit</button>
          </form>
        )
      }

    </Formik>
  )
}
