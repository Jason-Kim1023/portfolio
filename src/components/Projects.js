import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import metlifeImg from "../assets/img/metlife.jpeg";
import rangerImg from "../assets/img/ranger.png";
import uvaImg from "../assets/img/UVA.png";
import aslImg from "../assets/img/asl.png";
import originImg from "../assets/img/origintrail.png";
import quordleImg from "../assets/img/quordle.png";
import quordleVideo from "../assets/img/quordle-demo.webm";
import newhopeImg from "../assets/img/newhope.png";
import jasonImg from "../assets/img/jason.jpg";
import 'animate.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "UVA Tour Guide App",
      description: "Full Stack Web Application",
      imgUrl: uvaImg,
      details: [
        "Built a UVA Tour Guide app used by 500+ students, integrating the Google Maps API for interactive navigation.",
        "Developed a REST API with Django to handle locations, reviews, and authentication, backed by PostgreSQL on Heroku Cloud.",
        "Used Git/GitHub Actions CI/CD for version control and automated pipeline management.",
        "Delivered a responsive interface with Python, HTML, CSS, and Bootstrap, enabling 200+ user reviews and a 200% traffic increase in the first month via Google Analytics insights."
      ]
    },
    {
      title: "ASL Alphabet Detector & AI Translation System",
      description: "AI/ML Application",
      imgUrl: aslImg,
      githubUrl: "https://github.com/Jason-Kim1023/signLanguage",
      details: [
        "Built a real-time ASL alphabet detector with Python, scikit-learn, and OpenCV; trained an MLPClassifier on hand landmark data using MediaPipe, achieving ~85% accuracy across 26 letters at ~30 FPS with debouncing and confidence thresholds.",
        "Extended into an agentic AI prototype by integrating gesture recognition with LLMs (LangChain + Ollama/LLaMA 3) and gTTS, enabling autonomous sign-to-text and sign-to-speech translation with natural language processing for word segmentation and spelling correction.",
        "Mission-driven: advancing accessibility by bridging communication barriers for the Deaf and hard-of-hearing through inclusive, real-time AI translation tools that leverage LLMs to convert sign language into fluent, natural English for broader understanding."
      ]
    },
    {
      title: "Trulinko Authentication App",
      description: "Blockchain Application",
      imgUrl: originImg,
      details: [
        "Helped develop Trulunko, a platform to authenticate products and build trust through OriginTrail Decentralized Knowledge Graph (DKG).",
        "Deployed with Azure Kubernetes Service (AKS), Docker, and RabbitMQ for high uptime, low latency, and scalable services.",
        "Designed React Native frontend with Expo framework using TypeScript/JavaScript. Created custom REST API on Linux for backend operations and safe testing."
      ]
    },
    {
      title: "Quordle CSP Solver",
      description: "AI/ML Application",
      imgUrl: quordleImg,
      video: quordleVideo,
      githubUrl: "https://github.com/Jason-Kim1023/CSP-Quordle",
      details: [
        "Developed and tested a Constraint Satisfaction Problem (CSP) solver for the Quordle game, achieving a 98% win rate in simulations with 9 guesses.",
        "Implemented helper functions and forward-checking algorithms in Python to optimize word selection and solution efficiency.",
        "Designed and integrated a visual interface (QuordleUI) to simulate and demonstrate AI solutions, processing up to 96 games per second."
      ]
    },
    {
      title: "New Hope Ministry App",
      description: "Full Stack Web Application",
      imgUrl: newhopeImg,
      githubUrl: "https://github.com/Jason-Kim1023/UpperRoomApp",
      details: [
        "Built a Flask (Python) web app with role-based authentication (Admin & Welcomer) for managing church greeting workflows.",
        "Developed Admin dashboard (Flask + Jinja2 + HTML/CSS) to manage users, assign members, and set weekly topics/activities.",
        "Implemented Welcomer dashboard with member check-ins and progress tracking, using Flask routing + SQLite ORM models.",
        "Engineered ISO week–based auto-reset logic in Python to refresh weekly engagement automatically."
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "Full Stack Web Application",
      imgUrl: jasonImg,
      githubUrl: "https://github.com/Jason-Kim1023/portfolio",
      details: [
        "Built a modern, responsive portfolio website using React.js with React-Bootstrap components and custom CSS animations.",
        "Implemented dynamic animations with animate.css, react-on-screen, and custom keyframe animations for engaging user experience.",
        "Developed a contact form with Express.js backend, Nodemailer integration, and environment variable configuration for secure email handling.",
        "Designed responsive layouts with React Router navigation, carousel components, and mobile-first design principles for optimal cross-device performance."
      ]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects/Work Experience</h2>
              <p>I've gained hands-on experience through roles at MetLife and Ranger, where I strengthened my skills as a software engineer in professional settings. Alongside my internships, I've built impactful projects such as mobile apps, web platforms, and AI-driven tools that showcase my passion for solving problems with technology. These experiences reflect my ability to contribute in both collaborative industry environments and independent project work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="projects">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="experience">Work Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="projects">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="experience">
                      <Row>
                        <Col size={12} sm={6} md={6}>
                          <div className="proj-imgbx experience-card clickable-card" onClick={() => handleProjectClick({
                            title: "Software Engineer Intern",
                            description: "MetLife Inc. - May 2023 - August 2023",
                            imgUrl: metlifeImg,
                            details: [
                              "Tech: Java, Oracle SQL, Azure DevOps, Docker",
                              "Launched report creation tool for MetLife's ledger system in Agile environment with cross-functional teams.",
                              "Results: Processed 1M+ data points for $19.2B VALE project, 20% efficiency improvement, 15% faster provisioning."
                            ]
                          })}>
                            <img src={metlifeImg} alt="MetLife Experience" />
                            <div className="proj-txtx">
                              <h4>Software Engineer Intern</h4>
                              <span>MetLife Inc. - May 2023 - August 2023</span>
                              <div className="click-hint">
                                <small>Click to view details</small>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={6}>
                          <div className="proj-imgbx experience-card clickable-card" onClick={() => handleProjectClick({
                            title: "Contract Forward Deployed Test Engineer",
                            description: "Ranger - June 2025 - July 2025",
                            imgUrl: rangerImg,
                            details: [
                              "Tech: TypeScript, JavaScript, Playwright, Github Actions",
                              "QA Engineer leading E2E testing for $100K+ contracts. Developed 20+ Playwright tests boosting test coverage to 75%.",
                              "Results: Automated test suites via Github Actions, seamless CI pipelines, accelerated deployment cycles."
                            ]
                          })}>
                            <img src={rangerImg} alt="Ranger Experience" />
                            <div className="proj-txtx">
                              <h4>Contract Forward Deployed Test Engineer</h4>
                              <span>Ranger - June 2025 - July 2025</span>
                              <div className="click-hint">
                                <small>Click to view details</small>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <ProjectModal 
        show={showModal} 
        onHide={handleCloseModal} 
        project={selectedProject} 
      />
    </section>
  )
}
