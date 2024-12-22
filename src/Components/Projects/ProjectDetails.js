import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    //const id = props.match.params.id;
    const { id } = useParams();
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum similique neque obcaecati vitae accusantium, voluptas blanditiis! Excepturi, dolorum suscipit, magni dolore cumque vel optio, necessitatibus quia odit ipsam distinctio facere?</p>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Abhi</div>
                    <div>21st December, 5pm</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails