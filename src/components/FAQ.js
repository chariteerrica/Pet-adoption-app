import React from 'react';
import { cardStyle, wrapperStyle } from '../styles/sharedStyles';
import PageCard from '../components/PageCard';


const headingStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
  color: '#222',
};

const questionStyle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  marginTop: '1rem',
  marginBottom: '0.5rem',
  color: '#0077cc',
};

const answerStyle = {
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '#444',
};

export default function FAQ() {
  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem', ...cardStyle, ...wrapperStyle }}>
        <PageCard>
      <h2 style={headingStyle}>Frequently Asked Questions</h2>

      <div>
        <h3 style={questionStyle}>Q: When will I hear back about my application?</h3>
        <p style={answerStyle}>A: We will email you within 48 hours of submission.</p>

        <h3 style={questionStyle}>Q: Do I need an account to apply?</h3>
        <p style={answerStyle}>A: No, you can apply without signing up or logging in.</p>

        <h3 style={questionStyle}>Q: How will I be contacted?</h3>
        <p style={answerStyle}>A: We will use the phone number and email you provide in your application.</p>

        <h3 style={questionStyle}>Q: How does the adoption process work?</h3>
        <p style={answerStyle}>
          A: Browse available pets, fill out an adoption application form for the pet you’re interested in,
          and submit it. Our team will review your application and get back to you within 48 hours.
        </p>

        <h3 style={questionStyle}>Q: Can I adopt multiple pets?</h3>
        <p style={answerStyle}>A: Yes! You can submit separate adoption applications for as many pets as you like.</p>

        <h3 style={questionStyle}>Q: What information is required in the adoption application?</h3>
        <p style={answerStyle}>
          A: We ask for basic contact info, details about your home environment, experience with pets,
          and your reason for adopting.
        </p>

        <h3 style={questionStyle}>Q: What if my application is denied?</h3>
        <p style={answerStyle}>
          A: If your application is not approved, you’ll receive a notification with possible reasons and suggestions for next steps.
        </p>

        <h3 style={questionStyle}>Q: Are the pets vaccinated and spayed/neutered?</h3>
        <p style={answerStyle}>
          A: Yes, all pets listed have up-to-date vaccinations and are spayed/neutered when appropriate.
        </p>
      </div>
      </PageCard>
    </div>
  );
}
