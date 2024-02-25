import PropTypes from 'prop-types';
const Card = ({ Card }) => {
    console.log(Card)
    const { Cover_images, Course_Name, Course_details, Course_price, Course_Credit } = Card;
    return (
        <div >
            <img src={Cover_images} alt="" />
            {/* course heading and details  */}
            <div>
                <h3>{Course_Name}</h3>
                <p>{ Course_details}</p>
            </div>
            {/* The price section  */}
            <div>
                <p>price : {Course_price}</p>
                <p>Credit : {Course_Credit}hr</p>
                
            </div>
            {/* The Button section  */}
            <button>Select</button>
            
        </div>
    );
};

export default Card;
Card.propTypes = {
    Card:PropTypes.object.isRequired
}