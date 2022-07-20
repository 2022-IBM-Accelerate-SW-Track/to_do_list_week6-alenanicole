import React, { Component } from 'react';
import "./About.css"
import profile_pic_Alena from "../assets/profile_pic_Alena.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src = {profile_pic_Alena}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Alena Durel</div>
        <div className="brief_description">
          Hello! I am a rising junior at Charleston Southern University studying
          Computer Science and Cybersecurity. I'm interested in learning more
          about full stack development, software development, and digital
          forensics.
        </div>
      </div>
    </div>
  </div>

  </div>
    )
  }
}