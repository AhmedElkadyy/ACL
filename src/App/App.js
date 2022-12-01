import './App.css'
import Contract from '../Contract/contract'
import Admin from '../Admin/Admin'
import Instructor from '../Instrcutor/Instructor'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Quiz from '../Quiz/Quiz'
import Profile from '../Profile/Profile'
import Home from '../Home/Home'
import Trainee from '../Trainee/Trainee'

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



                </Routes>

            </Router>

        </div>

    );
}
export default App;