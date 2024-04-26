import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (<center>
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Welcome to PinkWheels</h1>
        <p>
        At PinkWheels, we're not just about providing a service; we're on a mission. Our journey started with a spark: to revolutionize transportation for women. We're here to make a real difference in your journey, offering a safe, reliable, and empowering cab service that's tailored to your needs.
        </p>
        <p>
        Our commitment extends beyond getting you from A to B. We're dedicated to creating a community where safety and trust are paramount. With PinkWheels, you're not just a passenger; you're part of a movement driving change and empowerment.
        </p>
        <h3>Our Mission</h3>
        <p>
        PinkWheels isn't just about getting you where you need to go. We're here to pave the way for women's safety and empowerment. By providing a secure and trustworthy cab service, we're not just changing rides; we're transforming lives.
        </p>
        <h3>Our Team</h3>
        <p>
          Our team consists of talented individuals from diverse backgrounds who share a common passion for excellence. With expertise in various fields, we collaborate seamlessly to tackle challenges and achieve remarkable results.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li><strong class="item">Quality:</strong> We are committed to delivering services of the highest quality.</li>
          <li><strong class="item">Innovation:</strong> We embrace innovation and constantly strive to improve and evolve.</li>
          <li><strong class="item">Customer Satisfaction:</strong> We prioritize our customers' needs and strive to exceed their expectations.</li>
          <li><strong class="item">Integrity:</strong> We conduct our business with honesty, transparency, and integrity.</li>
          <li><strong class="item">Teamwork:</strong> We value teamwork and collaboration, recognizing that together, we can achieve more.</li>
        </ul>
        <h3>Get in Touch</h3>
        <p>
          We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to <a href="/contact">contact us</a>. Our dedicated team is here to assist you.
        </p>
      </div>
    </div>
    </center>
  );
};

export default AboutUs;
