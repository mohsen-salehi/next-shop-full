import { Field, useField } from "formik";
import React from "react";

function InputValidation({label, ...props }) {
  const [field, meta, {setValue}] = useField(props);

  return (
    <div className="w-full flex flex-wrap my-2">
      <Field
        {...field}
        {...props}
        onInput={(e) => {
            setValue(props.name , e.target.value)}}
        className="p-2 rounded-xl w-full focus:outline-0 border flex"
      />
      {meta?.error ? (
        <small className="my-2 animate-bounce text-red-500">
          {meta?.error}
        </small>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputValidation;
