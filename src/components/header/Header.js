import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import navStyle from '../../style/Header.module.css'

const Header = () => {
  return (
    <Router>
      <nav className={navStyle.nav}>
        <Link to='/' className={navStyle.logo}>Shop</Link>
        <ul>
          <Link to='/' className={navStyle.navList}>
            Shop
          </Link>
          <Link to='/' className={navStyle.navList}>
            Amazone
          </Link>
        </ul>
      </nav>
    </Router>
  )
}

export default Header
