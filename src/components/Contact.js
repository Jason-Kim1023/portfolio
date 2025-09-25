import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/codingguy.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const handleResumeDownload = () => {
    // Import the resume from assets
    const resumeUrl = require('../assets/Z-JasonKimResume.docx.pdf');
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Jason_Kim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Resume Download"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Download Resume</h2>
                <p>Get a copy of my resume to learn more about my experience and qualifications.</p>
                <div className="resume-download-section">
                  <button onClick={handleResumeDownload} className="resume-download-btn">
                    <span>📄 Download Resume</span>
                  </button>
                  <p className="resume-note">PDF format • Updated regularly</p>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
