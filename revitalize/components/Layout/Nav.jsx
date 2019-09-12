import React from 'react'
import Link from 'next/link'
import './Nav.scss';


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
    <div className="logo">
      <img src='../../static/assets/LandingPage/Logo.png' />
      <h2> Revitalize</h2>
    </div>
    <ul>
      <li>
        <Link href='/'>
          <a></a>
        </Link>
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
