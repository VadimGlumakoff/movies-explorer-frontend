import React from "react";
import "./Preloader.css";

const Preloader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="preloader__container">
            <span className="preloader__round"></span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Preloader;
