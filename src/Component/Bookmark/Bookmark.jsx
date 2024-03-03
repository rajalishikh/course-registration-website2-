import PropTypes from 'prop-types';
import './Bookmark.css';
const Bookmark = ({ bookmark }) => {
    const { Course_Name } = bookmark;

    return (
        <div >
            <p className='Book ' > {Course_Name}</p>
           
            
        </div>
    );
};

export default Bookmark;
Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}