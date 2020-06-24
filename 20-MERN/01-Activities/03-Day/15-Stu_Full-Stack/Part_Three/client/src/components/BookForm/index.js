import React from "react";
import { Input, TextArea, FormBtn } from "../Form";

function BookForm(props) {
    const { handleInputChange, formObject, handleFormSubmit, authors } = props;
    const { title, AuthorId, synopsis } = formObject;

    return (
        <>
            <form>
                <Input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                    value={title}
                />
                <select
                    className="form-control"
                    name="AuthorId"
                    value={AuthorId}
                    onChange={handleInputChange}
                    placeholder={"Author (required)"}
                >
                    {authors.map(author => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
                <TextArea
                    onChange={handleInputChange}
                    name="synopsis"
                    placeholder="Synopsis (Optional)"
                    value={synopsis}
                />
                <FormBtn
                    disabled={!(title)}
                    onClick={handleFormSubmit}
                >
                    Submit Book
              </FormBtn>
            </form>
        </>
    )
}

export default BookForm;