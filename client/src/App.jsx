import { Route, Routes } from "react-router-dom"
import AddCourse from "./components/add-course"
import Course from "./components/course"
import Detail from "./components/detail"
import Footer from "./layouts/footer"
import Header from "./layouts/header"


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Course />}/>
        <Route path="/:id" element={<Detail />} />
        <Route path="/add-course" element={<AddCourse />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
