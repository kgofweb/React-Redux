import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import navStyle from '../../style/Header.module.css'

const Header = () => {
  return (
    <Router>
      <nav className={navStyle.nav}>
        <Link className={navStyle.logo} to='/'>Shop</Link>
        <ul>
          <Link className={navStyle.navList}>
            Shop
          </Link>
          <Link className={navStyle.navList}>
            Amazone
          </Link>
        </ul>
      </nav>
    </Router>
  )
}

export default Header
