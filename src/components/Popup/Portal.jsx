// PopUp.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./portal.module.css";
const Portal = ({ children, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures the component is mounted on the client
    return () => setMounted(false);
  }, []);

  if (!mounted) return null; // Skip rendering on the server

  return ReactDOM.createPortal(
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.popupClose} onClick={onClose}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#C7C6FF" />
            <path
              d="M16.0007 14.5184L21.1861 9.33301L22.6673 10.8143L17.4819 15.9997L22.6673 21.1851L21.1861 22.6663L16.0007 17.4809L10.8152 22.6663L9.33398 21.1851L14.5194 15.9997L9.33398 10.8143L10.8152 9.33301L16.0007 14.5184Z"
              fill="black"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body // Mounts the portal to the body element
  );
};

export default Portal;
