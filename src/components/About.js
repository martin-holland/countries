import React from "react";

function About(props) {
  return (
    <div className="about">
      <h2>Countries App</h2>
      <p>
        The purpose of this application was to demonstrate the use of fetching
        data using axios within react and using the data in several class
        components to customise the view. The important point to note here is
        that we are fetching only single entries of data for the single country
        pages.
      </p>
      <p>This page was created through CSS / HTML / React / npm</p>
      <p>This page was published using netlify</p>
    </div>
  );
}

export default About;
