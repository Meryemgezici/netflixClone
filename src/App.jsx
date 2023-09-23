import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import MovieDetail from "./pages/MovieDetail"
import Header from "./components/header"

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="detail/:movieId" element={<MovieDetail/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
