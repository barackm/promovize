import { Formik } from 'formik';
import React, { forwardRef } from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubimit: (values: any) => void;
  initialValues: {
    [key: string]: any;
  };
  validationSchema?: any;
}

const Form: React.FC<FormProps> = forwardRef((props, ref: any) => {
  const { children, onSubimit } = props;
  return (
    <Formik onSubmit={onSubimit} {...props} innerRef={ref}>
      {() => children}
    </Formik>
  );
});

export default Form;
