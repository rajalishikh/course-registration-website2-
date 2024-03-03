import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css';

const Bookmarks = ({ bookmarks, creditHour,setRemainingHour }) => {
    
    
   

    return (
        <div className='div '>
            <h2 className='Credit mt-2 mb-4 border-b-2'>Credit Hour Remaining :{setRemainingHour} </h2>

            <h2 className=" text ">Course Name   </h2>
            {
                bookmarks.map((item2,idx)=><Bookmark key={idx} bookmark={item2}></Bookmark>)
            }
            <p className='border-t-2 mt-2'>
            Total Credit hour{ creditHour}
            </p>
            
            

            
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    creditHour: PropTypes.object.isRequired,
    setRemainingHour:PropTypes.object.isRequired
}