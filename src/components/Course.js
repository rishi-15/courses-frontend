import React from "react"
import { Jumbotron, Card, CardBody, CardText, CardImg, CardSubtitle, CardFooter, Button, CardTitle, CardHeader, Container } from "reactstrap"
import axios from "axios"
import base_url from "../api/bootapi"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"


const Course=({course, update})=>{

    const navigate = useNavigate();

    //for delete button
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/api/v1/courses/${id}`).then(
            (response)=>{
                toast.success("Course deleted", {
                    position: "bottom-left",
                    toastId:"success2"
                })
                update(id);
            },
            (error)=>{
                toast.error("course not deleted ! Something went wrong", {
                    position: "bottom-left",
                    toastId: "error2"
                })
            }
        )
    }

    //for update button
    const handleClick=(course)=>{
        console.log(course.id);
        navigate("/update-course", { state: { id: course.id }})
    }

    return (

        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                        <Button color="warning ms-3" onClick={()=>{
                            handleClick(course);
                        }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;