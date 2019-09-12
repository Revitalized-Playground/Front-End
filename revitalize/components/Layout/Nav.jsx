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

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: flex-end;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      .Logo {
        border: 3px solid black,
      }
    `}</style>
  </nav>
)

export default Nav
