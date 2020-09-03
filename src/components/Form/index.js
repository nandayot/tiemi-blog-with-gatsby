import React, { useState, useRef } from 'react';

import Button from './Button';

import Input from './Input';
import validators from './Helpers/validator';

const Form = ({ schema, onSubmit: submit, disabled }) => {
  const fieldsWithValidations = schema.fields.filter(field =>  field.validations && field.validations.length);
  const [fields, setFields] = useState(
    fieldsWithValidations.reduce((validations, field) => ({...validations, [field.name]: false }), {})
  );

  const getFieldValue = field => formRef.current[field].value;

  const getFormValues = () => Object.keys(fields).reduce((acc, cur) => ({
      ...acc,
      [cur]: getFieldValue(cur)
    }), {});

  const onChangeField = (name, type) => value => {
    const validation = validators(type)(value);

    if (validation.hasError) {
      setFields(prevFields => ({
        ...prevFields,
        [name]: validation.message
      }));
    } else {
      setFields(prevFields => ({
        ...prevFields,
        [name]: true
      }));
    }
  };

  const validations = fieldsWithValidations.reduce((validations, field) => ({
    ...validations,
    [field.name]: onChangeField(field.name, field.validations)
  }), {});

  const formRef = useRef(null);

  const validateAllFields = () => Object.keys(validations).forEach(field => {
    validations[field](getFieldValue(field))
  });

  const allFieldsAreValid = () => {
    validateAllFields();
    return !Object.keys(fields).find(key => !fields[key] || typeof fields[key] === 'string');
  };

  const onSubmit = e => {
    e.preventDefault();
    if(!allFieldsAreValid() || disabled) return;

    submit(getFormValues());
  };

  return (
    <form method="POST" onSubmit={onSubmit} ref={formRef} className="form">
      {
        schema.fields.map(({ type, name, label, placeholder, mask, inputProps }, index) => {
          const props = {type, name, id: name , placeholder, label, mask };

          if (validations[name]) {
            props.onChange = props.onBlur = (e) => validations[name](e.target.value);
          }

          return (
            <Input
              {...props}
              {...inputProps}
              error={fields[name]}
              key={`input-field-${index}-${name}-${type}`}
            />
          )
        })
      }
      <Button disabled={disabled}>{schema.submit}</Button>
    </form>
  );
}

export default Form;