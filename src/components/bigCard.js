import React from "react";

export default function bigCard() {
  return (
    <div class="row featurette py-2">
      <div class="col-md-7 order-md-2 ">
        <h2 class="featurette-heading pb-2">
          Headding <span class="text-muted">One</span>
        </h2>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, a accusantium fuga vel iste, perspiciatis corporis ipsam perferendis animi aliquam nulla in? Sit, porro neque? Dicta esse eius consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, a accusantium fuga vel iste, perspiciatis corporis ipsam perferendis animi aliquam nulla in? Sit, porro neque? Dicta esse eius consequuntur.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img src={require("../assests/card4.jpg")} alt="" class="img-fluid rounded" width="500" height="300" />
      </div>
    </div>
  );
}
