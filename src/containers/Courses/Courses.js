import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';
import FullCourse from '../FullCourse/FullCourse';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide', author: 'Nitesh' },
            { id: 2, title: 'Vue - The Complete Guide', author: 'Sameer' },
            { id: 3, title: 'PWA - The Complete Guide', author: 'Dipali' }
        ]
    }

    fullCourseHandler = id => {
        this.props.history.push(`${this.props.match.url}/${id}`);
    }

    render () {
        let course = <p style={{ textAlign: "center" }}>Something went wrong</p>
        course = this.state.courses.map(
            course =>
                <Course key={course.id}
                    title={course.title} 
                    author={course.author}
                    clicked={() => this.fullCourseHandler(course.id)}/>
        );
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {course}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullCourse}/>
            </div>
        );
    }
}

export default Courses;