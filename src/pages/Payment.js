import { Link } from "react-router-dom";

const Payment = () => {
    return(
        <div className="payment-page-body">
            <img src="https://cashfreelogo.cashfree.com/website/landings/instant-settlements/payment-done.png" alt="" />
            <Link to={"/"}><button className="error-button">Continue Shopping</button></Link>
        </div>
    )
}
export default Payment;