import React from "react";
import { Input, TextArea, FormBtn } from "../Form";

function BookForm(props) {
    const {handleInputChange, formObject, handleFormSubmit} = props;
    const {title, author, synopsis} = formObject;
    return (
        <>
            <form>
                <Input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                    value={title}
                />
                <Input
                    onChange={handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                    value={author}
                />
                <TextArea
                    onChange={handleInputChange}
                    name="synopsis"
                    placeholder="Synopsis (Optional)"
                    value={synopsis}
                />
                <FormBtn
                    disabled={!(author && title)}
                    onClick={handleFormSubmit}
                >
                    Submit Book
              </FormBtn>
            </form>
        </>
    )
}

export default BookForm;