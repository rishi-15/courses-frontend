import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import UpdateCourse from './components/UpdateCourse';

function App() {

  return (
    <div>
      <Router>
      <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>

            <Col md={8}>
              <Routes>
              <Route path="/" Component={Home} exact/>
              <Route path="/add-course" Component={AddCourse} exact/>
              <Route path="/view-courses" Component={Allcourses} exact/>
              <Route path="/update-course" Component={UpdateCourse} exact/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
