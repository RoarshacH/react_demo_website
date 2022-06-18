import React from "react";
import "../App.css";
function About() {
  return (
    <>
      <section className="py-5 text-center container-fluid bodybackground-bg">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">About Me</h1>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <section className="body-section p-3 p-lg-5 d-flex justify-content-center">
          <div className="w-100">
            <div className="row pt-4">
              <div className="col-md-4 custom-img">
                <img src={require("../assests/user.png")} className="img-thumbnail img-responsive" alt="" />
              </div>
              <div className="col-md-6 custom-table-container">
                <table className="table table-borderless custom-table fw-normal">
                  <tbody>
                    <tr>
                      <td className="fw-bold">Name</td>
                      <td>Vidusha Dilshan</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Age</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Address</td>
                      <td>787 Dola Mine Road, North Carolina</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Email</td>
                      <td>
                        <a href="mailto:wowigis539@duetube.com">tempemail@tempmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Mobile</td>
                      <td>(289) 654-9xxx</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
        </section>
      </div>
    </>
  );
}

export default About;
