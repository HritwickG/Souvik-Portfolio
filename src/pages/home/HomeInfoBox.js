import React from 'react';
import{FaCameraRetro, FaShippingFast, FaSmileBeam, FaUserFriends} from "react-icons/fa";
import{BsCameraReels, BsFillCreditCardFill} from "react-icons/bs";
import{BsCartCheck} from "react-icons/bs";
import{BsClockHistory} from "react-icons/bs";
import { AiOutlineFieldTime } from 'react-icons/ai';
const data = [
  {
    icon: <BsCameraReels size={30} color="#76dbd1" />,
    heading: "Artistic Vision",
    // text: "Bringing a unique artistic vision to capture your unforgettable moments with style."
  },
  {
    icon: <AiOutlineFieldTime size={30} color="#f78ae0" />,
    heading: "Timely Delivery",
    // text: "Receive your beautifully edited photos on time, every time."
  },
  
  {
    icon: <FaCameraRetro size={30} color="#8cb4f5" />,
    heading: "Creative Photography",
    // text: "Capturing your moments with a creative and artistic touch."
  },
  {
    icon: <FaSmileBeam size={30} color="#fa82ea" />,
    heading: "Memorable Experiences",
    // text: "Creating enjoyable and memorable photoshoot experiences."
  },
  
  
  ];

const HomeInfoBox = ()=>{
    return(
        <div className="infoboxes --mb2">
           {data.map((item,index) =>{
                const {icon,heading, text} = item
                return(
                    <div className="infobox" key ={index}>
                        <div className="icon">{icon}</div>
                        <div className="text">
                            <h4>{heading}</h4>
                            <p className="--text-sm">{text}</p>
                        </div>
                        </div>
                )
           })}
        </div>
    )
}
export default HomeInfoBox