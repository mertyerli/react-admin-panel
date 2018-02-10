import React from "react";

const createRenderer = ({ input, meta, label }, render) => {
  return (

    <section>
      <label className="label">{label}</label>
      <label className="input">
        {" "}
        {render}
        {meta.error &&
          meta.touched && (
            <label className="error" >
              {meta.error}
            </label>
          )}
      </label>
    </section>

  );
};

export const renderUsernameInput = ({ input, meta, label, type }) => {
  const render = (
    <span>
      <i className="icon-append fa fa-user" />
      <input {...input} type={type} className="form-control" />
      <b className="tooltip tooltip-top-right">
        <i className="fa fa-user txt-color-teal" /> Please enter email
        address/username
      </b>
    </span>
  );
  return createRenderer({ input, meta, label }, render);
};

export const renderPasswordInput = ({ input, meta, label, type }) => {
  const render = (
    <span>
      <i className="icon-append fa fa-lock" />
      <input {...input} type={type} className="form-control" />
      <b className="tooltip tooltip-top-right">
        <i className="fa fa-lock txt-color-teal" /> Enter your password
      </b>
    </span>
  );
  return createRenderer({ input, meta, label }, render);
};

export const renderSelect = ({ input, meta, label, children }) => {
  const render = (
    <select {...input} className="form-control" placeholder={label}>
      {children}
    </select>
  );
  return createRenderer({ input, meta, label }, render);
};
