import React from 'react';
import { withRouter } from 'react-router-dom';
import './Course.css';

const course = (props) => {
        return(
            <article className="Course" onClick={props.clicked}>
                <h1>{props.title}</h1>
                <div className="Info">
                    <div className="Author">{props.author}</div>
                </div>
            </article>
        );
}

export default withRouter(course);