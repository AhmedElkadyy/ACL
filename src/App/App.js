import './App.css'
import Contract from '../Contract/contract'
import Admin from '../Admin/Admin'
import Instructor from '../Instrcutor/Instructor'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Quiz from '../Quiz/Quiz'
import Profile from '../Profile/Profile'
import Home from '../Home/Home'
import Trainee from '../Trainee/Trainee'
import ShowCourses from '../ShowCourses/ShowCourse'
import Reviews from '../Reviews/Reviews'
import AddAdmin from '../AddAdmin/AddAdmin'
import AddInstructor from '../AddInstructor/AddInstructor'
import AddTrainee from '../AddTrainee/AddTrainee'
import AddCourse from '../AddCourse/AddCourse'


function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    ›<Route path='/' element={<Home />} />
                    <Route path='/Instructor' element={<Instructor />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/Contract' element={<Contract />} />
                    <Route path='/Quiz' element={<Quiz />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/Trainee' element={<Trainee />} />
                    <Route path='/ShowCourses' element={<ShowCourses />} />
                    <Route path='/Reviews' element={<Reviews />} />
                    <Route path='/AddAdmin' element={<AddAdmin />} />
                    <Route path='/AddInstructor' element={<AddInstructor />} />
                    <Route path='/AddTrainee' element={<AddTrainee />} />
                    <Route path='/AddCourse' element={<AddCourse />} />



                </Routes>

            </Router>

        </div>

    );
}
export default App;