import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Index';

import '../assets/css/Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Escolha uma função</h1>

        <section className="section">
          <Link to="lists">
            <button type="button">
              <AiOutlineFileAdd className="icon-btn" />
              Nova Lista
            </button>
          </Link>
          <Link to="/new-list">
            <button type="button">
              <FaClipboardList className="icon-btn" />
              Listas
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
