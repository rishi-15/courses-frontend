import React, { useState, useEffect } from 'react'
import Course from './Course'
import base_url from '../api/bootapi'
import axios from "axios";
import { toast } from 'react-toastify';

const Allcourses=()=>{

    useEffect(() => {
        document.title="All Courses";
        getAllCoursesFromServer();
    }, [])

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/api/v1/courses`).then(
            (response)=>{
                console.log(response);
                toast.success("courses has been loaded", {
                    toastId: "success1",
                    position:'bottom-left'
                });
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong" , {
                    toastId: "error1",
                    position:'bottom-left'
                })
            }
        )
    }

    // const [courses,setCourses]=useState([
    //     {title:"java course", description:"this is java course"},
    //     {title:"python course", description:"this is python course"},
    //     {title:"java course", description:"this is java course"},
    //     {title:"python course", description:"this is python course"},
    // ])

    const [courses,setCourses]=useState([]);


    //logic for removing the deleted course from list
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id !== id));
    }

    return(

        <div>
            <h1>All Courses</h1>
            <p>below is the list of courses</p>

            {
                courses.length>0? courses.map((item) => (<Course course={item} update={updateCourses}/>)) : "No courses"
            }
        </div>
    )
}

export default Allcourses;