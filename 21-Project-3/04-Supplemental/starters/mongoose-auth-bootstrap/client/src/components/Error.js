import React from "react";
import { Alert } from "react-bootstrap";

function Error(props) {
    const { error, clearError } = props

    return (
        <Alert variant="danger" onClose={() => {
            clearError();
        }} dismissible>
            <Alert.Heading>An Error has occurred</Alert.Heading>
            <p>
                {error}
            </p>
        </Alert>
    );
}

export default Error;