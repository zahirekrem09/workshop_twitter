import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import cn from "classnames";

const LinkButton = ({ href, children, selected, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const BaseButton = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

function Button({ full = false, xl = false, className, children, ...props }) {
  const CustomBtn = props.href ? LinkButton : BaseButton;
  return (
    <CustomBtn
      className={cn(
        styles.button,
        full && styles.fullButton,
        xl && styles.xlButton,
        className
      )}
      {...props}
    >
      {children}
    </CustomBtn>
  );
}

export default Button;
