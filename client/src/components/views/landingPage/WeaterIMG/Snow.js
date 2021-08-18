import React from 'react';
import "./Weather.scss";

function Snow() {
    return (
        <>
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
        </>
    );
}
export default Snow;
