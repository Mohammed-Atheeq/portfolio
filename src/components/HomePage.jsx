import React, { useEffect, useState } from "react";
import pic from "../images/Pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import tourManagementApp from "../images/Tour Management Application.jpg";
import cyberFort from "../images/cyber-fort.jpg";

function HomePage() {
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     emailjs
  //       .sendForm("service_qyi98bc", "template_2fylzdh", form.current, {
  //         publicKey: "CDAiXezorZRs0cmk_",
  //       })
  //       .then(
  //         () => {
  //           setPopupMessage("Email sent successfully!");
  //           setTimeout(() => setPopupMessage(""), 3000);
  //         },
  //         (error) => {
  //           setPopupMessage("Failed to send email. Please try again.");
  //           setTimeout(() => setPopupMessage(""), 3000);
  //         }
  //       );
  //   };

  useEffect(() => {
    const sections = ["about-section", "project-section", "contact-section"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        return (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        );
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Tour Management Application",
      description:
        "A Tour management application built with Java Spring Boot, React and MySQL using Microservice architecture. It provides REST APIs to automate management tasks.",
      imageUrl: tourManagementApp,
      projectLink: "https://github.com/Mohammed-Atheeq/Tour-Mangement-Web-App",
    },
    {
      id: 2,
      title: "Cyber-Fort",
      description:
        "A secure web platform designed for tech enthusiasts to share, discuss, and engage with posts, with a focus on protecting user data and preventing common vulnerabilities.",
      imageUrl: cyberFort,
      projectLink: "https://github.com/Mohammed-Atheeq/Cyber-Fort",
    },
  ];
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="home">
      <div className="header">
        <div className="profile">
          <div className="profile-name">Mohammed Atheeq</div>

          <div className="role">Full-Stack Web Developer</div>
          <div className="profile-content">
            <div className="profile-image">
              <img src={pic} alt="Mohammed-Atheeq" />
            </div>
            {/* <div className="discription">
              <p>
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
            </div> */}
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <a
                href="#about-section"
                onClick={() => handleNavClick("about-section")}
                className={activeSection === "about-section" ? "active" : ""}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#project-section"
                onClick={() => handleNavClick("project-section")}
                className={activeSection === "project-section" ? "active" : ""}
              >
                PROJECTS
              </a>
            </li>
            {/* <li>
              <a
                href="#contact-section"
                onClick={() => handleNavClick("contact-section")}
                className={activeSection === "contact-section" ? "active" : ""}
              >
                CONTACT ME
              </a>
            </li> */}
          </ul>
        </nav>

        {/* <div className="footer">
          <ul>
            <a href="https://github.com/Mohammed-Atheeq" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-atheeq/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/athxxq__/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/mohammed.atheeq.1675"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </ul>
        </div> */}
      </div>

      <div className="content">
        <section id="about-section" className="about-section">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <p>
            I am a Full-Stack Web Developer and a BSc Software Engineering
            undergraduate at the National Institute of Business Management
            (NIBM). My expertise spans both frontend and backend development,
            where I focus on building scalable, high-performance web
            applications.
          </p>

          <p>
            With hands-on experience in Java, Spring Boot, React, Node.js,
            Express, MongoDB and SQL, I have developed multiple web applications
            that emphasize performance, security, and seamless user experiences.
            My expertise lies in designing robust backend architectures, RESTful
            APIs, and database management, ensuring smooth data flow across
            applications.
          </p>

          <p>
            I have worked on projects involving microservices, authentication
            systems, and business process automation, leveraging Spring Boot for
            backend efficiency and React for dynamic user interfaces.
            Additionally, I have focused extensively on secure coding practices
            by identifying and mitigating security vulnerabilities in
            applications. This experience has significantly enhanced my
            understanding of threat modeling, application hardening, and
            ensuring software resilience against potential attacks.
          </p>

          <p>
            My approach focuses on clean code, maintainability, and optimized
            performance, creating solutions that are both scalable and reliable.
            Beyond technical expertise, I thrive on solving complex problems,
            collaborating in teams, and continuously refining my skills to stay
            ahead in the ever-evolving tech landscape.
          </p>

          <div className="resume">
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Resume{" "}
              <FontAwesomeIcon icon={faArrowUp} className="resume-icon" />
            </a>
          </div>
        </section>

        <section id="project-section" className="projects">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <div className="project-cards">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project.projectLink)}
              >
                <div className="card-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="card-content">
                  <h3>
                    {project.title}{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="project-arrow"
                    />
                  </h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact-section" className="contact-section">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>

          <div className="contact-me">
            <h2>Get in Touch</h2>
            <h1>Contact Me</h1>

            <div className="email">
              <FontAwesomeIcon icon={faEnvelopeSquare} className="email-icon" />
              <a href="mailto:m.atheeq15196@gmail.com">
                {/* <a href=""> */}
                m.atheeq15196@gmail.com
              </a>
            </div>

            <div className="footer">
              <ul>
                <a
                  href="https://github.com/Mohammed-Atheeq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-atheeq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://www.instagram.com/athxxq__/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.facebook.com/mohammed.atheeq.1675"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
