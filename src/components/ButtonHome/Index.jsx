import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './ButtonHome.css';

export default function Index() {
  return (
    <Link to="/" className="home-btn">
      <FaHome />
    </Link>
  );
}
