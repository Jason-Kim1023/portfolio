import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [hasAnimated, setHasAnimated] = useState(false);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = [ "Recent Graduate from UVA", "Full Stack Developer" ];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text.length, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={isVisible && !hasAnimated ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Jason a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Recent Graduate from UVA", "Full Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>Hi, I'm Jason Kim — a software engineer with a B.A. in Computer Science from the University of Virginia. I've gained professional experience at MetLife and Ranger, and I'm also a 6x Presidential Volunteer Service Award recipient and Prudential Spirit of Community Award honoree. I'm passionate about building scalable technology, learning continuously, and contributing to meaningful projects.</p>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={isVisible && !hasAnimated ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
