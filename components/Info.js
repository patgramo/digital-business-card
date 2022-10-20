import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="../professional-photo.jpg" alt="professional-photo" />
            <h1>Patrick Morrison</h1>
            <p className="job-title">Frontend Web Developer</p>
            <a href="http://codebypat.com" target="_blank" className="website">codebypat.com</a>
            <div className="buttons">
                <a href="" className="email-button"><i className="fa-solid fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/patrickmorrison33/" target="_blank" className="linkedin-button"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}