import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, details, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx clickable-card" onClick={onClick}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="click-hint">
            <small>Click to view details</small>
          </div>
        </div>
      </div>
    </Col>
  )
}
