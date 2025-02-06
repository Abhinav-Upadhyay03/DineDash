import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">
            <Link to={"./"}><img className="logo" src={LOGO_URL} alt="" /></Link>
        </div>
        <ul className="header-items">
                <Link to={"./cart"}><li><i className="ri-shopping-cart-line"></i></li></Link>
        </ul>

    </div>
  )
}

export default Header
