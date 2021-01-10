import React from 'react';
import headshot from '../../../assets/headshot.jpg'

function About() {
    return (
      <section className="my-5">
        <h1 id="about" className="about">About Me</h1>
        <img src={headshot} className="my-2" style={{ width: "30%" }} alt="headshot of victoria"/>
        <p>My name is Victoria Landron and I am a recent graduate of Florida State University with a Bachelor of Science in Information, Communication & Technology and Editing, Writing and Media.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui repellendus rem, veritatis amet commodi nemo molestias asperiores totam, ab beatae accusamus ex animi ea voluptates excepturi ad veniam enim. Molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non nihil omnis inventore, totam et dolorem unde architecto. Et nam eius exercitationem repellat odit at doloremque possimus ipsam numquam nisi?</p>
      </section>
    );
  }
  
  export default About;