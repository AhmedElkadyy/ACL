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
import SearchCourse from '../SearchCourse/SearchCourse'
import FilterCourses from '../FilterCourses/FilterCourse'
import Results from '../Results/Results'

import ViewCourse from '../ViewCourse/ViewCourse'
import SearchCourseR from '../SearchCourseR/SearchCourseR'
import ViewDetails from '../ViewDetails/ViewDetails'
import FilterCourse from '../FilterCourse/FilterCourse'
import Subtitle from '../Subtittle/Subtitle'
import FilterResults from '../FilterResults/FilterResults'
import FilterPar from '../FilterPar'
import Exercise from '../Exercise'
import Login from '../loginPage/Login'
import SignUp from '../signupPage/signup'
import SigninOrLogin from '../signinOrLogin/signinOrLogin'
import Auth from '../Auth'
import { useState } from 'react';  
import { Navigate } from 'react-router-dom';
import TraineeLogin from '../loginPage/loginTrainee';
import InstructorLogin from '../loginPage/loginInstructor';
import AdminLogin from '../loginPage/loginAdmin';
import AdminSignUp from '../signupPage/signupAdmin';
import InstructorSignUp from '../signupPage/signupInstructor';
import TraineeSignUp from '../signupPage/signupTrainee';
import  SignupHome from '../Home/signupHome';
import CorporateLogin from '../loginPage/loginCorporate';
import CorporateSignUp from '../signupPage/signupCorporate';
import PaymentTerms from '../paymentTerms/paymentTerms' 
import ForgetPassword from '../ForgetPassword/ForgetPassword'   ;
import VerficationCode from '../verficationCode/verficationCode'
import ChangePassword from '../ChangePassword/changePassword'







function App() {
    const [auth, setAuth] = useState(false);
    return (
        <div className='App'>
            <Auth.Provider value={{auth,setAuth}}>
            <Router>
                <Routes>
                    <Route path='/' element={<SigninOrLogin/>} />

                    ›<Route path='/Home' element={<Home />} />
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
                    <Route path='/SearchCourse' element={<SearchCourse />} />
                    <Route path='/FilterCourses' element={<FilterCourses />} />
                    <Route path='/Results' element={<Results />} />
                    <Route path='/ViewCourse' element={<ViewCourse />} />
                    <Route path='/SearchCourseR' element={<SearchCourseR />} />
                    <Route path='/ViewDetails' element={<ViewDetails />} />
                    <Route path='/FilterCourse' element={<FilterCourse />} />
                    <Route path='/Subtitles' element={<Subtitle />} />
                    <Route path='/FilterResults' element={<FilterResults />} />
                    <Route path='/FilterPar' element={<FilterPar />} />
                    <Route path='/Exercise' element={<Exercise />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/loginTrainee' element={<TraineeLogin />} />
                    <Route path='/loginInstructor' element={<InstructorLogin />} />
                    <Route path='/loginAdmin' element={<AdminLogin />} />
                    
                    <Route path='/signupTrainee' element={<TraineeSignUp />} />
                    <Route path='/signupInstructor' element={<InstructorSignUp />} />
                    <Route path='/signupAdmin' element={<AdminSignUp />} />
                    <Route path='/signupHome' element={<SignupHome />} />


                    <Route path='/loginCorporate' element={<CorporateLogin />} />
                    <Route path='/signupCorporate' element={<CorporateSignUp />} />
                    <Route path='/paymentTerms' element={<PaymentTerms />} />
                    <Route path='/forgotPassword' element={<ForgetPassword />} />

                    <Route path='/verficationCode' element={<VerficationCode />} />


                    <Route path='/changePassword' element={<ChangePassword />} />

                    









                    




                </Routes>

            </Router>
            </Auth.Provider>

        </div>

    );
}
export default App;