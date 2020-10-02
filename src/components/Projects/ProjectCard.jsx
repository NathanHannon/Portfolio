import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

export const ProjectCard = props => {
    return (
        <Link to={"/Details/" + props.projects.project_id} className="text-dark">
            <Card outline className="projectCard">
                <CardImg className='project-card' src={props.projects.image_url} width='220px' height='100px' />
                <CardBody>
                    <CardTitle className="text-dark">{props.projects.name}</CardTitle>
                </CardBody>
            </Card>
        </Link>
    );
}