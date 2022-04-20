import React from "react";
import "./ImageSection.css";

export default function ImageSection() {
  return (
    <section className="image_section">
      <div className="image_container">
        <div className="image_frame image_one">
          <div className="text_box">
            <div className="text">
              <h2>Cat</h2>
              <p>Polite cat</p>
            </div>
          </div>
        </div>
        <div className="image_frame image_two">
          <div className="text_box">
            <div className="text">
              <h2>Rob</h2>
              <p>Rob Pat drip</p>
            </div>
          </div>
        </div>
        <div className="image_frame image_three">
          <div className="text_box">
            <div className="text">
              <h2>Mike</h2>
              <p>Mike Wazowski</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
