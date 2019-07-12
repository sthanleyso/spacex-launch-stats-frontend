import React from 'react';

import { Navbar } from './styles';
import logo from '../../assets/spacex-logo.png'

export default function Header() {
  return (
    <Navbar>
      <div>
        <img src={logo} alt="SpaceX" />
      </div>
    </Navbar>
  );
}
