import React from 'react'
import Link from 'next/link'
import './Nav.scss';


const links = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Trades' },
  { href: '#', label: 'Donate'},
  { href: '#', label: 'Log In'},
  { href: '#', label: 'Get Started'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <div className="Logo">
    <img src='../../static/assets/LandingPage/Logo.png' />
    <h3> Revitalize</h3>
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
