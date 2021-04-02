import Link from 'next/link';
import { Component } from 'react';

export class Nav extends Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <nav className="nav">
        <div className="logo-cnt">
          <Link href="/">
            <a className="small-font">Logo</a>
          </Link>
        </div>
        <div className="cnt-link">
          <ul className={toggle ? 'toggle' : ''}>
            <li>
              <Link href="/textures">
                <a onClick={this.menuToggle} className="small-font">
                  Textures
                </a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a onClick={this.menuToggle} className="small-font">
                  Categories
                </a>
              </Link>
            </li>
            <li>
              <Link href="/methods">
                <a onClick={this.menuToggle} className="small-font">
                  Methods
                </a>
              </Link>
            </li>
            <li className="small-font">
              <a
                onClick={this.menuToggle}
                href="https://www.patreon.com/"
                target="_blank"
                rel="noopener"
              >
                Cahoot
              </a>
            </li>
            <li>
              <Link href="/contact">
                <a onClick={this.menuToggle} className="small-font">
                  Contact
                </a>
              </Link>
            </li>
            <li onClick={this.menuToggle} className="close">
              X
            </li>
          </ul>
          <div onClick={this.menuToggle} className="menu small-text">
            |||
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
