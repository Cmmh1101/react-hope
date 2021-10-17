import React from "react";

const Gallery = () => {
  const images = [
    {
      original: "../images/hunger2.png",
    },
    {
      original: "../images/farming4.png",
    },
    {
      original: "../images/farming1.png",
    },
    {
      original: "../images/fish1.png",
    },
    {
      original: "../images/sport3.png",
    },
    {
      original: "../images/sports3.png",
    },
  ];

  return (
    <div className="jumbotron jumbotron-fluid gallery">
      <div className="row m-0 d-flex">
        {images.map((img, key) => (
          <div class="col-6 col-md-4 m-0 p-0" key={key}>
            <div className="box">
              <img src={img.original} className="box img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
