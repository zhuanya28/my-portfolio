import React from "react";

function Home() {
  return (
    <div className="main introduction">
      <div>
        {/* <h5 className="introHey">hey there,</h5> */}
        <h1 className="introName">Hey, I'm Anya!</h1>
      </div>
      <div className="aboutMeDiv">
        {/* <p className="segment">about me</p> */}
        <h4 className="aboutMeText">
          Welcome to my portfolio website! I am an{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inTextA"
            href="https://shanghai.nyu.edu/academics/majors/interactive-media-arts"
          >
            Interactive Media Arts student
          </a>{" "}
          at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inTextA"
            href="https://shanghai.nyu.edu"
          >
            New York University Shanghai
          </a>
          , currently based in {" "}<span className="boldText">📍 New York.</span>{" "}
        </h4>
        <br />
        <h4 className="aboutMeText">
          This Portfolio Website includes cross-medium projects I have worked on
          throughout last couple of years. Right now I am actively searching for{" "}
          <span className="boldText">internships</span> and part-time positions
          in the field of
          <span className="boldText">
            {" "}
            Web Design, UX/UI and Front-End Development{" "}
          </span>
          .
        </h4>
        <br />
        <h4 className="aboutMeText">
          If you would like to know more about me, you can check out my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inTextA"
            href="https://drive.google.com/file/d/1buCv93p1V7oeaK_rX7KVqS-qsrAj1Ppy/view?usp=share_link"
          >
            CV
          </a>
          , or email me:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inTextA"
            href="mailto:zhuanya@nyu.edu"
          >
            zhuanya@nyu.edu
          </a>
          .
        </h4>
      </div>
      <div className="skillsDiv">
        {/* <p className="segment">skills</p> */}
        <h4 class="aboutMeText">My skillset includes:</h4>
        <ul>
          <li class="skillsSet">
            HTML, CSS, JS, React.js, Bootstrap, Node.js, p5.js
          </li>
          <h5 class="skillsSetText">I use these to create stuff on the web.</h5>
          <li class="skillsSet">
            Figma, Adobe Illustrator, Adobe Photoshop, Adobe Premier Pro,
            Audition
          </li>
          <h5 class="skillsSetText">
            I use these to create engaging designs, posters and short films.
          </h5>
        </ul>
      </div>
    </div>
  );
}

export default Home;
