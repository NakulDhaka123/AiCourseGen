"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items to the start */
  height: 100vh;
  padding: 1rem;
  background: transparent; /* Changed to transparent */
  margin-top: 60px; /* Adjust this value to bring the content down if needed */
  
  /* Media query for mobile screens */
  @media (max-width: 768px) {
    margin-top: 80px; /* More space on mobile to avoid overlap */
  }
`;

const Heading = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(270deg, #FF5C00, #FFBD00);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18rem;
  height: 24rem;
  padding: 1.5rem;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.2); /* Optional: can adjust the opacity */
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Upgrade = () => {
  return (
    <Container>
      <Heading>Choose Your Plan</Heading>
      <div className="flex flex-wrap justify-center items-center">
        {[
          {
            price: 399,
            features: [
              '24/7 Customer Support',
              'Access to Basic Features',
              'Monthly Updates',
            ],
            description: 'Basic plan with essential features tailored for individuals.',
          },
          {
            price: 599,
            features: [
              'All Basic Features',
              'Weekly Webinars',
              'Exclusive Resources',
            ],
            description: 'Standard plan with additional features for growing teams.',
          },
          {
            price: 799,
            features: [
              'All Standard Features',
              'Dedicated Account Manager',
              'Advanced Analytics Tools',
              'Priority Support',
            ],
            description: 'Premium plan with all features included for enterprises.',
          },
        ].map((plan, index) => (
          <Card key={index}>
            <h3 className='text-2xl font-bold text-white text-center'>{`₹${plan.price}`}</h3>
            <p className='text-sm text-white text-center mb-4'>{plan.description}</p>
            <ul className="flex flex-col space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-white">{feature}</li>
              ))}
            </ul>
            <button className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300'>
              Select Plan
            </button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Upgrade;
