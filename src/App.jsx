
import './App.css'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Cards from './Component/Cards/Cards'
import Header from './Component/Header/Header'

function App() {
  

  return (
    <>
     
      <Header></Header>
      <div className='flex '>
        <Cards></Cards>
        <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
