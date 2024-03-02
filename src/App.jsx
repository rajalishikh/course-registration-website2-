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

  const notify = () => {
    toast('Your credit limit is only 20')
  }

  

  const handleClick = (nameCourse,Course_Credit) => {
    const newBookMarks = [...bookmarks, nameCourse];

    setBookmarks(newBookMarks);
    console.log(nameCourse, Course_Credit, creditHour);

    // condition part
    if ((creditHour+Course_Credit) <= 20) {
      
      setCreditHour(creditHour + Course_Credit);
      if (remainingHour-Course_Credit >=0) {
        setRemainingHour(remainingHour - Course_Credit);
      } else {
        setCreditHour(notify);
      }
      

    } else {
      setCreditHour(notify)
      
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
