// src/components/CallButton.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { FaPhone } from 'react-icons/fa';

const CallButton = () => {
  return (
    <a href="tel:+37493483814" className="call-button">
      <FaPhone />
    </a>
  );
};

export default CallButton;
