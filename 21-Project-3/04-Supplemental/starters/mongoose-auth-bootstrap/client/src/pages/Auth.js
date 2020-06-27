import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation, Redirect } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

function Auth(props) {
    const { user, loginUser, signupUser } = props;
    const initialFormState = { email: "", password: "" };
    const [formObject, setFormObject] = useState(initialFormState)

    const location = useLocation();

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formObject;
        loginUser(email, password);
        setFormObject(initialFormState);
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formObject;
        signupUser(email, password);
        setFormObject(initialFormState);
    }

    return (
        <>
            <Row>
                <Col>
                    {user.email ?
                        <Redirect to="/home" />
                        :
                        location.pathname === "/login" ?
                            <>
                                <LoginForm
                                    formObject={formObject}
                                    handleInputChange={handleInputChange}
                                    handleFormSubmit={handleLoginSubmit} />

                            </>
                            :
                            <>
                                <SignupForm
                                    formObject={formObject}
                                    handleInputChange={handleInputChange}
                                    handleFormSubmit={handleSignupSubmit} />
                            </>
                    }
                </Col>
            </Row>
        </>
    )
}

export default Auth;