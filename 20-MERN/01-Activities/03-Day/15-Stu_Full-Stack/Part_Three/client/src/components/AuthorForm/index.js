import React from "react";
import { Input, FormBtn } from "../Form";

function AuthorForm(props) {
    const {handleInputChange, formObject, handleFormSubmit} = props;
    const {name} = formObject;
    return (
        <>
            <form>
                <Input
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Name (required)"
                    value={name}
                />
            
                <FormBtn
                    disabled={!(name)}
                    onClick={handleFormSubmit}
                >
                    Submit Author
              </FormBtn>
            </form>
        </>
    )
}

export default AuthorForm;