// PrimaryButton.js
import Link from 'next/link';
import React from 'react';
import styles from "./primaryButton.module.css"
const PrimaryButton = ({
  children,
  onClick,
  href,
  className = '',
  isLink = false,
  ...props
}) => {
  if (isLink && href) {
    return (
      <Link
        href={href}
        className={`${styles.btn} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.btn} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
