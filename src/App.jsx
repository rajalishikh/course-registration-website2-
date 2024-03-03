import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Bookmarks from './Component/Bookmarks/Bookmarks';
import Cards from './Component/Cards/Cards';
import Header from './Component/Header/Header';


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  // one toast for course credit 

  
  

  

  const handleClick = (nameCourse, Course_Credit, id) => {
   
    const newBookMarks = [...bookmarks, nameCourse];
    // start the show name part of course in only one time 
    
    const findId = bookmarks.find(item => item.id == id);
 
    console.log(findId);
    if (findId ) {
     return toast.success('All ready take this course')
    } else {
      
      setBookmarks(newBookMarks);
      
    }
      
    // end the show name part of course in only one time 
    
    

    
    

    // condition part
    if ((creditHour+Course_Credit) <= 20) {
      
      setCreditHour(creditHour + Course_Credit);
      if (remainingHour-Course_Credit >=0) {
        setRemainingHour(remainingHour - Course_Credit);
      } else {
        return toast.success('Your Course Limit is Over ')
      }
      

    } else {
      return toast.success('Your Limit is 20 Credit')
      
    }
    
    
    
  }

  

  return (
    <div className='lg:max-w-8xl  lg:ml-32'>
     
      <Header></Header>
      <div className='lg:flex   lg:max-w-8xl  lg:ml-32 gap-24  '>
        <Cards handleClick={handleClick}></Cards>
        <Bookmarks bookmarks={bookmarks} creditHour={creditHour} setRemainingHour={remainingHour}></Bookmarks>
        <ToastContainer></ToastContainer>
      </div>
      
      
    </div>
  )
}

export default App
