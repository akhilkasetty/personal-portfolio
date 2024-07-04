import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f4f4f4;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #666;

  & > svg {
    margin-right: 0.5rem;
  }
`;

const DownloadButton = styled.button`
  padding: 0.8rem 2rem;
  background: #ff6347;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ff4500;
  }

  & > svg {
    margin-right: 0.5rem;
  }
`;

const downloadResume = () => {
  saveAs(process.env.PUBLIC_URL + '/AKHIL_KUMAR_SDE.pdf', 'Akhil_Kumar_Resume.pdf'); 
};

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactInfo>
        <FaEnvelope />
        <span>akhilxtel@gmail.com</span>
      </ContactInfo>
      <ContactInfo>
        <FaPhone />
        <span>9980646131</span>
      </ContactInfo>
      <DownloadButton onClick={downloadResume}>
        <FaDownload />
        <span>Download Resume</span>
      </DownloadButton>
    </ContactContainer>
  );
};

export default Contact;
