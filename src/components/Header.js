import { LOGO_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">
            <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <ul className="header-items">
            
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            
        </ul>

    </div>
  )
}

export default Header
