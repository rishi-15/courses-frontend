import React, { useEffect } from "react"
import { Jumbotron, Card, CardBody,CardTitle,CardHeader, CardText } from "reactstrap"
import {Button} from "reactstrap"
import {toast} from "react-toastify"

function Home(){
    useEffect(() => {
        document.title="Home || Rishabh"
    }, [])

    const btnHandler = () => {
        toast.success("this is my first message", {position:'bottom-left'})
      };

    return(

        <div class="container-fluid bg-light text-dark p-4 text-center">
             <div class="container bg-light p-4">
                <h4 class="fw-bold">Welcome to Courses Application</h4>
                <p>with this application, you can show, add, update and delete aby course/courses</p>
                <Button color='warning' outline  onClick={btnHandler}>Start Using</Button>
            </div>
        </div>
    );
}

export default Home;