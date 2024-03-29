import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleClick,}) => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setCards(data))
        
    },[])
    return (
        <div className=" lg:w-2/3  lg:grid lg:grid-cols-3  lg:gap-5 ">
            {
                cards.map((item,idx)=><Card key={idx} Card={item}  handleClick={ handleClick} ></Card>)
            }
            
        </div>
    );
};

export default Cards;
Cards.propTypes = {
    handleClick: PropTypes.func.isRequired,
    
    
}