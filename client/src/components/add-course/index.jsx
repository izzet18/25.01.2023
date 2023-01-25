import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import "./index.scss"
import {Helmet} from "react-helmet";

const CourseSchema = Yup.object().shape({
   title: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   imgUrl: Yup.string()
     .min(2, 'Too Short!')
     .max(5000, 'Too Long!')
     .required('Required'),
   author: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   imgUrl2: Yup.string()
     .min(2, 'Too Short!')
     .max(5000, 'Too Long!')
     .required('Required'),
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   price: Yup.number()
     .min(2, 'Too Short!')
     .max(5000, 'Too Long!')
     .required('Required'),

})
const AddCourse = () => {
  return (
    <div id='form'>
      <Helmet>
            <title>Add Course</title>
      </Helmet>
       <Formik
       initialValues={{
         title: '',
         imgUrl: '',
         author: '',
         imgUrl2: '',
         name: '',
         price: 0,
       }}
       validationSchema={CourseSchema}
       onSubmit={values => {
            axios.post("http://localhost:8081/courses",values)
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="title" />
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
           <Field name="imgUrl" />
           {errors.imgUrl && touched.imgUrl ? (
             <div>{errors.imgUrl}</div>
           ) : null}
           <Field name="author" />
           {errors.author && touched.author ? (
             <div>{errors.author}</div>
           ) : null}
           <Field name="imgUrl2" />
           {errors.imgUrl2 && touched.imgUrl2 ? (
             <div>{errors.imgUrl2}</div>
           ) : null}
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="price" />
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

    </div>
  )
}

export default AddCourse