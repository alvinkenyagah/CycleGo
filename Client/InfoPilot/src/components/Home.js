import React from "react";
import "./home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div id="home-container">
      <div id="home-page">
        <div className="heading">
          <p>
            Welcome <br /> to CycleGo
          </p>
        </div>

        <div className="summary">
          <p>Source for rental bicycles</p>
          <p>
            at affordable rates.
            <br />
            <Link to="/search">
              <button id="home">Get started</button>
            </Link>
          </p>
        </div>
      </div>


    


    </div>
  );
}
