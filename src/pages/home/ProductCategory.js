import React from "react";
import "./ProductCategory.scss";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/slider/Slider";

// https://i.ibb.co/fNkBYgr/c3.jpg
// https://i.ibb.co/5GVkd3m/c1.jpg
// https://i.ibb.co/nQKLjrW/c2.jpg

const categories = [
  
  {
    id: 1,
    title: "Pre-Wedding",
    image: "https://i.ibb.co/vBGD9FQ/1.jpg",
  },
  {
    id: 2,
    title: "Bridal Potrait",
    image: "https://i.ibb.co/7X7hkp7/15.jpg",
  },
  {
    id: 3,
    title: "Couple Shoot",
    image: "https://i.ibb.co/FB88vpY/16.jpg",
  },
  
];

const Category = ({ title, image }) => {
  const navigate = useNavigate();
  return (
    
    <div className="category">
      <h3>{title}</h3>
      <img src={image} alt="img" />
     
       <a
            href="https://wa.me/<917044910991>?text=I%20am%20interested%20in%20your%20photography%20services."
            className="--btn"
            target="_blank"
             rel="noopener noreferrer"
          >
          <button className="--btn" onClick={() => navigate("/")}>
        {"Book Now >>>"}
      </button>
          </a>
    </div>
  );
};

const ProductCategory = () => {
  return (
    
    <div className="categories">
      {categories.map((cat) => {
        return (
          <div key={cat.id} className="--flex-center">
            <Category title={cat.title} image={cat.image} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategory;
