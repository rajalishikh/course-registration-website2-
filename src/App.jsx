
import './App.css'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Cards from './Component/Cards/Cards'
import Header from './Component/Header/Header'

function App() {
  

  return (
    <>
     
      <Header></Header>
      <div className='lg:flex   lg:max-w-8xl  lg:ml-32 gap-24  '>
        <Cards></Cards>
        <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
