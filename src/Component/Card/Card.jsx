import PropTypes from 'prop-types';
import { IoMdBook, } from "react-icons/io";
import { TfiMoney } from "react-icons/tfi";
import './Card.css';
const Card = ({ Card, handleClick, }) => {
    
   
    const { Cover_images, Course_Name, Course_details, Course_price, Course_Credit } = Card;
    return (
        <div className='bg-white rounded-md'  >
            <img className=' lg:w-full' src={Cover_images} alt="" />
            {/* course heading and details  */}
            <div className='mt-2'>
                <h3 className='h3 font-semibold'>{Course_Name}</h3>
                <p className='p line-clamp-3'>{ Course_details}</p>
            </div>
            {/* The price section  */}
            <div className='p flex mt-2'>
                <p className='mt-1'><TfiMoney></TfiMoney></p> <p>price :{Course_price}</p>
                <p className='mt-1 ml-2' ><IoMdBook></IoMdBook></p><p>Credit :{ Course_Credit}hr</p>
                
            </div>
            {/* The Button section  */}
            <div className='text-center  '>
            <button onClick={()=> handleClick(Card,Course_Credit)} className='lg:m-5  lg:p-2 bg-blue-700 text-white rounded-md mt-2 w-36'>Select</button>
            </div>
            
        </div>
    );
};

export default Card;
Card.propTypes = {
    Card: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    
    
    
}