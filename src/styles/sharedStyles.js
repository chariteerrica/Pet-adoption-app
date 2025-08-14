// styles/sharedStyles.js

// Key modern button style with hover-ready props
export const buttonStyle = {
  display: 'inline-block',
  padding: '0.85rem 1.25rem',
  backgroundColor: '#0077cc',
  color: '#fff',
  borderRadius: '12px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.05rem',
  boxShadow: '0 4px 12px rgba(0, 119, 204, 0.25)',
  transition: 'transform 0.25s ease, background-color 0.3s ease, box-shadow 0.3s ease',
};

// Card with subtle entrance animation
export const cardStyle = {
  background: '#fff',
  padding: '3rem 2rem',
  borderRadius: '16px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
  maxWidth: '800px',
  width: '100%',
  textAlign: 'center',
};


// Full-page wrapper with light overlay
export const wrapperStyle = {
  position: 'relative',
  backgroundImage: 'url("/paw-background.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
};

export const overlayStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  width: '100%',
  height: '100%',
  gap: '1.5rem',
  padding: '2rem 0',
};

export const imageContainerStyle = {
  marginBottom: '2rem',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
};
export const twoColumnListStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.5rem 2rem',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'left',
  color: '#444',
  fontSize: '1rem',
};


