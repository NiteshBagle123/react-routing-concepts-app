import React, { Component } from 'react';
import './FullCourse.css';

class FullCourse extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide', author: 'Nitesh' },
            { id: 2, title: 'Vue - The Complete Guide', author: 'Sameer' },
            { id: 3, title: 'PWA - The Complete Guide', author: 'Dipali' }
        ],
        fullCourse: {}
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        const courseId = this.props.match.params.id;
        this.setState({
            fullCourse: this.state.courses.filter(course => course.id === courseId)[0]
        });
    }
    render () {
        let course = <p style={{ textAlign: "center" }}>Please select a Course!</p>;
        const courseId = this.props.match.params.id;
        if(courseId){
            course = <p style={{ textAlign : "center" }}>Loading...</p>
        }
        if(this.state.fullCourse){
            course = (
                <div className="FullCourse">
                    <h1>{this.state.fullCourse.title}</h1>
                    <p>{this.state.fullCourse.author}</p>
                </div>
            );
        }
        return course;
    }
}

export default FullCourse;