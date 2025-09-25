import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const technologies = [
    { name: "Python", category: "Programming Languages" },
    { name: "Java", category: "Programming Languages" },
    { name: "C", category: "Programming Languages" },
    { name: "JavaScript", category: "Programming Languages" },
    { name: "SQL", category: "Database" },
    { name: "Heroku", category: "Cloud" },
    { name: "Tensorflow", category: "AI/ML" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Git/Github/Github Actions", category: "Version Control" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Technologies and tools I've worked with</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {technologies.map((tech, index) => (
                                <div key={index} className="item">
                                    <div className="tech-badge">
                                        <h5>{tech.name}</h5>
                                        <span className="tech-category">{tech.category}</span>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
