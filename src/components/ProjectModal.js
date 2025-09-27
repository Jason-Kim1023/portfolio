import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export const ProjectModal = ({ show, onHide, project }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  const handleClose = () => {
    setShowModal(false);
    onHide();
  };

  if (!project) return null;

  return (
    <Modal 
      show={showModal} 
      onHide={handleClose} 
      size="md" 
      centered
      className="project-modal"
      style={{ 
        backdrop: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999
      }}
      dialogStyle={{
        marginTop: '2rem',
        marginBottom: '2rem'
      }}
    >
      <Modal.Header 
        style={{ 
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #333',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          padding: '1.5rem',
          border: 'none',
          textAlign: 'center'
        }}
      >
        <Modal.Title style={{ 
          color: '#fff', 
          fontSize: '1.8rem', 
          fontWeight: '700',
          background: 'linear-gradient(45deg, #B8B8B8, #fff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
          width: '100%',
          textShadow: '0 0 20px rgba(184, 184, 184, 0.5)',
          margin: '0.5rem 0 0 0'
        }}>
          {project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '2rem',
        maxHeight: '60vh',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            {project.video && (
              <div style={{
                background: 'linear-gradient(135deg, #333 0%, #444 100%)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #555',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <video 
                  src={project.video} 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    borderRadius: '8px',
                    border: '2px solid #555'
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div style={{
              background: 'linear-gradient(135deg, #333 0%, #444 100%)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #555',
              marginBottom: '1.5rem'
            }}>
              <h5 style={{ 
                color: '#B8B8B8', 
                marginBottom: '0.5rem', 
                fontSize: '1.2rem',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {project.description}
              </h5>
            </div>
            {project.details && (
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #444'
              }}>
                <h6 style={{ 
                  color: '#fff', 
                  marginBottom: '1rem', 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  Key Details:
                </h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {project.details.map((detail, index) => (
                    <li 
                      key={index}
                      style={{ 
                        color: '#B8B8B8', 
                        marginBottom: '0.75rem', 
                        paddingLeft: '1.5rem', 
                        position: 'relative',
                        lineHeight: '1.6',
                        fontSize: '0.95rem',
                        background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span style={{ 
                        position: 'absolute', 
                        left: '0.5rem', 
                        top: '0.5rem',
                        color: '#B8B8B8',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        lineHeight: '1'
                      }}>
                        •
                      </span>
                      <span style={{ marginLeft: '0.5rem' }}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ 
        backgroundColor: '#1a1a1a', 
        borderTop: '1px solid #333',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        padding: '1.5rem',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {project.githubUrl && (
          <Button 
            variant="outline-light" 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              borderColor: '#333', 
              color: '#fff',
              backgroundColor: '#333',
              border: '2px solid #333',
              borderRadius: '8px',
              padding: '0.5rem 2rem',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.color = '#1a1a1a';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View on GitHub
          </Button>
        )}
        <Button 
          variant="outline-light" 
          onClick={handleClose}
          style={{ 
            borderColor: '#B8B8B8', 
            color: '#B8B8B8',
            backgroundColor: 'transparent',
            border: '2px solid #B8B8B8',
            borderRadius: '8px',
            padding: '0.5rem 2rem',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#B8B8B8';
            e.target.style.color = '#1a1a1a';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(184, 184, 184, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#B8B8B8';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};