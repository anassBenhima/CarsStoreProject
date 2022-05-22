import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageUploader from "../../../common/uploader/ImageUploader";
import { Form, Input, InputNumber, Checkbox } from 'formik-antd'
import { Formik } from 'formik'

const FormPage = () => {

  const { id } = useParams(); 
  const [carData, setCarData] = useState(null);
  useEffect(() => {
    console.log({ id: parseInt(id), });
  })

  return (
    <div style={{ minHeight: '80vh', padding: '40px', }}>
      {/* <ImageUploader image={carData.image} /> */}
      <Formik
        initialValues={{ title: '' }}
        render={() => (
          <Form>

          </Form>
        )}
      />
    </div>
  )
}

export default FormPage
