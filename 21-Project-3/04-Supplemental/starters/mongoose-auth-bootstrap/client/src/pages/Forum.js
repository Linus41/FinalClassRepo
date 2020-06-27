import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import API from "../utils/API";
import { PostTable, PostForm } from "../components";

function Forum(props) {
    const initialFormState = { title: "", body: "" };
    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState(initialFormState)


    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = () => {
        API.Post.getAll().then(res => {
            setPosts(res.data);
        })
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: formObject.title,
            body: formObject.body
        }
        API.Post.create(data).then(res => {
            setFormObject(initialFormState);
            loadPosts();
        })
    }

    return (
        <>
            <Row>
                <Col>
                    <PostForm
                        formObject={formObject}
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PostTable posts={posts} />
                </Col>
            </Row>
        </>
    )
}


export default Forum;