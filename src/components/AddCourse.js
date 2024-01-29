import React, { Fragment, useEffect, useState } from 'react'
import {Button, Container, Form, FormGroup, Input} from 'reactstrap'
import axios from "axios";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';


const AddCourse=()=>{

    useEffect(() => {
        document.title="Add Course";
    }, [])

    const [course,setCourse]= useState({});

    //form handler function

    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    //creating function for posting data on server

    const postDatatoServer= (data) => {
        axios.post(`${base_url}/api/v1/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success")
                toast.success("Course added successfully", {
                    position: 'bottom-left',
                    toastId: "success1"
                })
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error ! something went wrong",{
                    position: 'bottom-left',
                    toastId: "error1"
                })
            })
    };



    return(

        <Fragment>
            <h3 className='text-center my-3'>Fill Course Details</h3>
            <Form onSubmit={handleForm}>
                {/* <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" 
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value})
                    }}/>
                </FormGroup> */}

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" 
                    onChange={(e)=>{
                        setCourse({...course, title: e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}} 
                    onChange={(e)=>{
                        setCourse({...course, description: e.target.value})
                    }}/>
                </FormGroup>

                <Container className='text-center'>
                    <Button color="success" type="submit">Add Course</Button>
                    <Button color="warning ms-2" type='reset'>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;