import {Link} from "react-router-dom"
const Error = () => {
  return (
    <div className="error-page"><img className="error-img" src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1536x864.png" alt="" />
    <Link to={"./"}><button className="error-button">Return to Home Page</button></Link>
    </div>

  )
}

export default Error