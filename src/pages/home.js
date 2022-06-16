import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import BigCard from "../components/bigCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBook, faComputer, faAnchor } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <header className="jumbotron-custom">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="font-weight-bold header-animated">Welcome</h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-jumbo mb-5"></p>
              <a className="" href="#about">
                <i className="fa-solid fa-circle-chevron-down fs-1"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section py-4" id="features">
        <div className="container py-4 px-4 px-lg-5 text-center">
          <h1 className="font-weight-bold header-animated ">What We Offer</h1>
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <FontAwesomeIcon className="fs-2" icon={faCoffee} />
                </div>
                <h3 className="h4 mb-2">Relax!</h3>
                <p className="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, a accusantium fuga vel iste</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <FontAwesomeIcon className="fs-2" icon={faBook} />
                </div>
                <h3 className="h4 mb-2">Take a look at our Books</h3>
                <p className="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, a accusantium fuga vel iste</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <FontAwesomeIcon className="fs-2" icon={faAnchor} />
                </div>
                <h3 className="h4 mb-2">No Money For Books?</h3>
                <p className="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, a accusantium fuga vel iste!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <FontAwesomeIcon className="fs-2" icon={faComputer} />
                </div>
                <h3 className="h4 mb-2">They Are Free!</h3>
                <p className="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, a accusantium fuga vel iste!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/card2.jpg")} alt="" />
              <div className="card-custom-caption">
                <div className="project-category text-white-50">Book of</div>
                <div className="card-name">Any Type</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/card3.jpg")} alt="" />
              <div className="card-custom-caption">
                <div className="project-category text-white-50">Books At</div>
                <div className="card-name">Price Point</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/card1.jpg")} alt="" />
              <div className="card-custom-caption">
                <div className="project-category text-white-50">Books Near</div>
                <div className="card-name">Your Location</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/card4.jpg")} alt="" />
              <div className="card-custom-caption">
                <div className="project-category text-white-50"></div>
                <div className="card-name"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/card5.jpg")} alt="" />
              <div className="card-custom-caption">
                <div className="project-category text-white-50"></div>
                <div className="card-name"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/card6.jpg")} alt="" />
              <div className="card-custom-caption p-3">
                <div className="project-category text-white-50"></div>
                <div className="card-name"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <h2 className="pt-4 header-animated"> Other Content</h2>
        <br />
        {Array.from({ length: 4 }).map((_, idx) => (
          <BigCard />
        ))}
      </div>
    </>
  );
}
