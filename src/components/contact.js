import React from "react";
import "./contact.css";

function chatApp() {
  return (
    <div className="Contact">
      <img
        class="avatar"
        src="https://randomuser.me/api/portraits/men/76.jpg"
      />
      <div class="status-text">
        <h4 class="name">Brice De Nice</h4>
        <div class="status">
          <span class="status-online"></span>
          <p class>online</p>
        </div>
      </div>
    </div>
  );
}

export default chatApp;