import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container about">
      <div className="row">
        <div className="col-12 mt-5">
          <h2>About Us</h2>
        </div>
        <div className="col-12 mt-5">
          <h4>Hope For The Nations Mission</h4>
          <p>
            Hope for the Nations is a non-profit, Christian organization. We
            count on a ministry of ambassadors that serves children, older
            people, and families in Venezuela’s most impoverished area. As we
            help them, we bring the gospel nurturing not only with physical
            needs but we spiritual needs as well.
          </p>
          <p className="mb-3">
            All these projects aim to help people be sustainable because we do
            not want to treat the problem; we are looking for long-term
            solutions.
          </p>
          <div className="mt-5">
            <Link href="/aboutpage" class="button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
