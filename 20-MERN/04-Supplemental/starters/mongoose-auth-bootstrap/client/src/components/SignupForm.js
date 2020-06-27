import React from "react";
import { Form, Button } from "react-bootstrap";

function SignupForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Form>
                <Form.Group controlId="formUserEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={formObject.email}
                        name="email"
                        onChange={handleInputChange}
                        as="input"
                        type="email"
                        placeholder="Enter your Email" />
                    <Form.Text className="text-muted">
                        This will be public!
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formUserPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={formObject.password}
                        name="password"
                        onChange={handleInputChange}
                        as="input"
                        type="password"
                        placeholder="Enter your password" />
                    <Form.Text className="text-muted">
                        This will be your password (we won't share it with anyone!)
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SignupForm;