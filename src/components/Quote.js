import React from "react";

const Quote = () => {
  return (
    <div className="py-5 quote-section content-container">
      {/* <!--  Bible section --> */}
      <div className="container">
        <div className="row mb-2">
          <div
            id="ourmanna-verse"
            className="col-lg-10 mx-auto section5 quote-text my-5 text-center"
          >
            Loading...
          </div>
          <script
            src="https://www.ourmanna.com/verses/api/js/?order=random"
            type="text/javascript"
          ></script>
        </div>
      </div>
      <div className="col-6 mx-auto mb-5">
        <img
          className="bible-img"
          src="../images/open-bible.png"
          alt="Open bible silhouete"
        />
      </div>
      {/* <!-- End of bible section --> */}
      <img
        className="waves-divider wave mt-5"
        src="../images/wavy-loops-bottom.svg"
        alt="waves bottom"
      />
    </div>
  );
};

export default Quote;
