import {FaStar} from "react-icons/fa";
import "./style.css";

const RaitingCard = ({fullname,rate=0,desc}) => {
    return ( 
        <div id="container">	
            <div class="product-details">
                
                <h1>{fullname}</h1>
                <div className="rate">
                    {[...Array(5)].map((star,index) => {
                        return (
                        <label>
                            <FaStar size={20} color={rate > index ? "orange" : "gray"} />
                        </label>
                        )
                    })}
                </div>
                
                <p class="information">{desc}</p>  
            </div>
        </div>
    );
}
 
export default RaitingCard;