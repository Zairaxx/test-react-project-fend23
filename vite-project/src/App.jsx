import './App.css'
import MyComponent from './components/MyComponent'


function App() {


  let myData = [1,2,3,4,5];

  return (
    <>
      <h1>React projekt</h1>
      <MyComponent test={myData}/>
    </>
  )
}

export default App
