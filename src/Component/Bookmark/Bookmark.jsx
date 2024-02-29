import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { Course_Name } = bookmark;

    return (
        <div >
            <p > {Course_Name}</p>
           
            
        </div>
    );
};

export default Bookmark;
Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}