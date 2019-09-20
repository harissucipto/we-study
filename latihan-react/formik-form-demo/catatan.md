# Tutorial ini Membahas Beberapa Hal

Ada beberapa hal penting yaitu Formik untuk validasi form dan Yup untuk validasi schema data yang diproses.

Link Tutorial

## Formik

There are three ways to render things with Formik

```js
<Formik component />
<Formik render />
<Formik children />
```

We used the render props in the above. All three render methods will be passed some props which include:

values : An object that contains the initial values of the form fields.

errors : An object containing error messages of the field.

touched : An object containing fields that have been touched/visited, fields that have been touched are set to true otherwise they are set to false.

handleChange : General Input handler, This will update the values[key] where key is the event-emitting input's name attribute. If the name attribute is not present, handleChange will look for an input's id attribute.

isValid: Returns true if there are no errors i.e (no errors in the errors object).

setFieldTouched: is a function used to set the touched state of a field. The first argument is the name of the field, the second argument is the value you want to set the touched state to which is true and the last argument is a boolean used to prevent validation.

## Yup
