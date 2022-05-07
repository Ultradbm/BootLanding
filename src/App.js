/** @format */

import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Componenets/Card";
import { useScript } from "./Hooks/useScript";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoidWx0cmFkYm0iLCJhIjoiY2t4bndvcnZnMjF6NDJvcXcyNjV1cWZrZyJ9.RHWY61TCfzyK7bXMMiZDLA";

function App() {
  // useScript("https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"); //custom hook but moved to mapbox-gl react module

  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.0278, 40.6993],
      zoom: 12,
    });
  });

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            Frontend Bootcamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  What You'll Learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Showcase */}
      <section className="bg-dark text-light p-5 p-lg-0 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Start Your Journey
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="img/showcase.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
            <div className="input-group news-input">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
                aria-label="Enter email for newsletter"
              />
              <button className="btn btn-dark btn-lg" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Class Options Cards */}
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Virtual</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt voluptates aperiam iure accusamus id reprehenderit?
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square"></i>
                  </div>
                  <h3 className="card-title mb-3">Hybrid</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt voluptates aperiam iure accusamus id reprehenderit?
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">In Person</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt voluptates aperiam iure accusamus id reprehenderit?
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Learn Sections */}
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="img/fundamentals.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed
                cumque omnis facilis repellendus natus?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, quisquam quaerat consequatur eum aut deleniti
                architecto non quod, libero suscipit sed maiores optio fugiat
                recusandae obcaecati quia accusamus rerum.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn The Frameworks</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed
                cumque omnis facilis repellendus natus?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, quisquam quaerat consequatur eum aut deleniti
                architecto non quod, libero suscipit sed maiores optio fugiat
                recusandae obcaecati quia accusamus rerum.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img src="img/react.svg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Accordion */}
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-1"
                  aria-expanded="false"
                  aria-controls="question-1"
                >
                  Will I make a lot of money?
                </button>
              </h2>
              <div
                id="question-1"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">Yes.</div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-2"
                  aria-expanded="false"
                  aria-controls="question-2"
                >
                  Is it easy?
                </button>
              </h2>
              <div
                id="question-2"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Easy as Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Numquam voluptates quos suscipit dolorum nostrum ex sed
                  iure dolor odit, rem labore incidunt? Dignissimos et quo
                  officiis itaque fugiat totam quas quos, ducimus fuga dolorum,
                  consequatur expedita beatae! In culpa qui placeat odit ipsum.
                  Placeat id cupiditate quis culpa animi repellat.
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-3"
                  aria-expanded="false"
                  aria-controls="question-3"
                >
                  How much does it cost?
                </button>
              </h2>
              <div
                id="question-3"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <audio
                    controls
                    id="audio_everything"
                    controlsList="nodownload"
                    className="audio"
                  >
                    <source src="audio/everything.ogg" type="audio/ogg" />
                    Audio Element Not Supported.
                  </audio>
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-4"
                  aria-expanded="false"
                  aria-controls="question-4"
                >
                  What do I need to know?
                </button>
              </h2>
              <div
                id="question-4"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">More than we do.</div>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-5"
                  aria-expanded="false"
                  aria-controls="question-5"
                >
                  How do I sign up?
                </button>
              </h2>
              <div
                id="question-5"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">Send bitcoin.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Instructors */}
      <section id="instructors" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">Meet Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Not all heroes wear capes!
          </p>
          <div className="row g-4">
            {/* Instructor 1 */}
            <Card
              img="https://prod-cdn-06.storenvy.com/product_photos/69270780/file_32cd04be80_original.jpg"
              title="Optimus Prime"
              description="He's taught the autobots many things. Now it's your turn."
              base_scale="1.1"
            />
            {/* Instructor 2 */}
            <Card
              img="https://asset.vg247.com/dragon_ball_fighterz_bardock_dramatic_scene_3_1521195849.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/dragon_ball_fighterz_bardock_dramatic_scene_3_1521195849.jpg"
              title="Bardock"
              description="An average fighter but a brilliant scientist."
            />
            {/* Instructor 3 */}
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMTJkMjM1YTMtY2JhNy00YTlkLTlmNGUtNGY5ZjBmODdkYjc2L2ltYWdlXkEyXkFqcGdeQXVyMTk3OTMzOA@@._V1_FMjpg_UX1000_.jpg"
              title="Vegito"
              description="Petitioning to change the name of the tournament to The
              Vegito Games."
            />
            {/* Instructor 4 */}
            <Card
              img="https://i.pinimg.com/originals/fb/cf/cc/fbcfcc05b5cfa1aa79992dc38401bee1.jpg"
              title="Sasuke"
              description="He made a lot of bad choices and he's not sure why."
            />
          </div>
        </div>
      </section>
      {/* Contact and Map */}
      <section id="contact-section" className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold avoidwrap">Main Location: </span>

                  <span className="avoidwrap">
                    Rygol 7 - Home to Some Pretty Radical Weaponry
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold avoidwrap">
                    Phone Number (Available 24/7):{" "}
                  </span>
                  <span className="avoidwrap">(RAD)-WEA-PONS</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold avoidwrap">Email: </span>
                  <span className="avoidwrap">
                    Contact@RadicalWeaponry.Rygol
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div ref={mapContainer} id="map"></div>
              {/* {setTimeout(() => { Moved to mapbox-gl react module method
                //used iife here to run mapbox code
                window.mapboxgl.accessToken =
                  "pk.eyJ1IjoidWx0cmFkYm0iLCJhIjoiY2t4bndvcnZnMjF6NDJvcXcyNjV1cWZrZyJ9.RHWY61TCfzyK7bXMMiZDLA";
                var map = new window.mapboxgl.Map({
                  container: "map",
                  style: "mapbox://styles/mapbox/streets-v11",
                  center: [-71.060982, 42.35725],
                  zoom: 18,
                });
              }, 300)} */}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2021 Ultra Frontend Bootcamp</p>

          <a href="#" className="position-absolute top-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>

      {/* Modal */}
      <div
        class="modal fade"
        id="enroll"
        tabindex="-1"
        aria-labelledby="Enrollment Form"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="enrollment-title">
                Enroll Today!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="lead">
                Start the enrollment process by filling out this form!
              </p>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="First Name"
                  />
                  <label htmlFor="first-name" className="col-form-label">
                    First Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Last Name"
                  />
                  <label htmlFor="last-name" className="col-form-label">
                    Last Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="col-form-label">
                    Email
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="phone" className="col-form-label">
                    Phone Number
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
