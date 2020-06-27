import React from "react";
import { Row, Table, Col } from "react-bootstrap";

function Requirements() {

    const requirements = [
        "Must use ReactJS in some way (even if minimal)",
        "Must use a Node and Express Web Server",
        "Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM",
        "Must have both GET and POST routes for retrieving and adding new data",
        "Must be deployed using Heroku (with Data)",
        "Must utilize at least two libraries, packages, or technologies that we haven’t discussed",
        "Must allow for or involve the authentication of users in some way",
        "Must have a polished frontend/UI ",
        "Must have folder structure that meets MVC Paradigm",
        "Must meet good quality coding standards (indentation, scoping, naming)",
        "Must not expose sensitive API key information on the server]",
    ];

    return (
        <>
            <Row>
                <Col>
                    <h2>The following are the coding requirements for the project</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Requirement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requirements.map((requirement, idx) => (
                                <tr>
                                    <td>{idx + 1}</td>
                                    <td>{requirement}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default Requirements;