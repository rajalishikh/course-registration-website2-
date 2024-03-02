
import { useState } from 'react'
import './App.css'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Cards from './Component/Cards/Cards'
import Header from './Component/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);

  

  const handleClick = (nameCourse,Course_Credit) => {
    const newBookMarks = [...bookmarks, nameCourse];
    setBookmarks(newBookMarks);
    console.log(nameCourse, Course_Credit, creditHour);
    if (creditHour < 20) {
      
      setCreditHour(creditHour + Course_Credit);
      if (creditHour>0) {
        setRemainingHour(remainingHour - creditHour);
      } else {
        console.log('you can data');
      }
      

    } else {
      setCreditHour('No data ')
    }
    
    
    
  }

  

  return (
    <div className='lg:max-w-8xl  lg:ml-32'>
     
      <Header></Header>
      <div className='lg:flex   lg:max-w-8xl  lg:ml-32 gap-24  '>
        <Cards handleClick={handleClick}></Cards>
        <Bookmarks bookmarks={bookmarks} creditHour={creditHour} setRemainingHour={remainingHour}></Bookmarks>
      </div>
      
      
    </div>
  )
}

export default App
