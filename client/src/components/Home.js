import React from 'react';
import StyledButton from './styles/StyledButton';
import PageCard from '../components/PageCard';
import { wrapperStyle, cardStyle, imageContainerStyle, twoColumnListStyle } from './styles/sharedStyles';

function Home() {
  return (
    <div style={wrapperStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '900px' }}>
        
        {/* Welcome */}
        <PageCard>
          <h1 style={headingStyle}>🐾 Welcome to Petting! 🐾</h1>
          <p style={subheadingStyle}>Helping you find the perfect match—one paw at a time.</p>
          {/* Animal photo */}
        <div style={imageContainerStyle}>
          <img
            src="/images/pets/grouppets.jpg" 
            
          />
        </div>
          <div style={{ display: 'inline-flex', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
            <StyledButton to="/pets">🐶 Browse Pets</StyledButton>
          </div>
        </PageCard>

        {/* About Us */}
        <PageCard style={cardStyle} className="card-animated">
          <h2 style={sectionTitle}>About Us</h2>
          <p style={paragraph}>
            Our mission is simple: connect loving families with pets in need of a forever home. 
            Every adoption goes through a vetting process to ensure the best match for both the 
            pet and the adopter.
          </p>
        </PageCard>

        {/* Why Choose Us */}
        <PageCard style={cardStyle} className="card-animated">
          <h2 style={sectionTitle}>Why Choose Us?</h2>
          <ul style={twoColumnListStyle}>
            <li>✅ Verified adoption applications</li>
            <li>🐕 Find pets that match your lifestyle</li>
            <li>💌 Direct communication with shelters</li>
            <li>📅 Easy tracking for application status</li>
          </ul>
        </PageCard>

        {/* Fun Facts */}
        <PageCard style={cardStyle} className="card-animated">
          <h2 style={sectionTitle}>Did You Know?</h2>
          <p style={paragraph}>
            Adopting a pet saves two lives — the one you bring home, and the one that takes its place 
            in the shelter. Studies show pets can reduce stress, lower blood pressure, and boost happiness.
          </p>
        </PageCard>
        

      </div>
    </div>
  );
}

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#333',
};

const subheadingStyle = {
  fontSize: '1.25rem',
  marginBottom: '2.5rem',
  color: '#555',
};

const sectionTitle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#222',
};

const paragraph = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#444',
};

const listStyle = {
  textAlign: 'left',
  lineHeight: '1.6',
  color: '#444',
  paddingLeft: '1.5rem',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem 0',
};


export default Home;