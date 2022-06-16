import React from "react";
import CustomCard from "../components/card";

export default function products() {
  const elements = Array.from(Array(9).keys());
  return (
    <>
      <section className="py-5 text-center container-fluid bodybackground-bg">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Products List</h1>
            <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt molestias aspernatur laboriosam similique officiis et itaque doloremque sunt veniam vitae culpa velit, voluptatibus nulla, quod cumque aut inventore natus.</p>
          </div>
        </div>
      </section>
      <br />
      <div className="py-2 bg-light mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {elements.map((value, index) => {
              return <CustomCard key={index}></CustomCard>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
