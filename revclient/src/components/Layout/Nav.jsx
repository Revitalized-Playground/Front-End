import React from 'react'
import logo from "../../assets/LandingPage/Logo.png";

const links = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Trades' },
  { href: '#', label: 'Donate'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    
    <a href="/" title="Home" >
      <div className="logo">
        <img src={logo} alt="Revitalize logo" />
        <h2>Revitalize </h2>
      </div>
    </a>
    
    <ul>
      <li>
        
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
      <button className="login">Login!</button>
      <button className="register">Get Started!</button>
    </ul>

  </nav>
)

export default Nav
