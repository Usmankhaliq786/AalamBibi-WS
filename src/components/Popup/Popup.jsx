// Popup.jsx
'use client';
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM for rendering to the body

const Popup = ({ id, children }) => {
  const [isBrowser, setIsBrowser] = useState(false); // State to track if we're in the browser

  useEffect(() => {
    setIsBrowser(true); // Set to true after component mounts
  }, []);

  // Render nothing if not in the browser
  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    // Use createPortal to render the modal in the body
    <Fragment>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby={id}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>,
    document.body // Renders the modal as a direct child of the body
  );
};

export default Popup;
