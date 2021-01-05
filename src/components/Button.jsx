import React from "react";
import classNames from "classnames";

const Button = (props) => {
  const { onClick, outline, children, className } = props;
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
