import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setCards(data))
        
    },[])
    return (
        <div className="w-1/3 grid grid-cols-3 gap-5">
            {
                cards.map((item,idx)=><Card key={idx} Card={item}></Card>)
            }
            
        </div>
    );
};

export default Cards;