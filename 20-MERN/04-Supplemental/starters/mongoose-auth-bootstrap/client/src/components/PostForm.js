import React from "react";
import { Form, Button } from "react-bootstrap";

function PostForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Form>
                <Form.Group controlId="formPostTitle">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control
                        value={formObject.title}
                        name="title"
                        onChange={handleInputChange}
                        as="input"
                        placeholder="Enter the Post Title" />
                    <Form.Text className="text-muted">
                        This will be the header of your post
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formPostBody">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control
                        value={formObject.body}
                        name="body"
                        onChange={handleInputChange}
                        as="textarea"
                        placeholder="Enter the Post Body" />
                    <Form.Text className="text-muted">
                        This will be the body of your post
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default PostForm;