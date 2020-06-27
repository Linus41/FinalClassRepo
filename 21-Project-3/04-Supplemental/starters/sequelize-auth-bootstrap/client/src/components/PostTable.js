import React from "react";
import { Table } from "react-bootstrap";

function PostTable(props) {
    const { posts } = props;
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {posts.length > 0 && 
                    posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.User.email}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.createdAt}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default PostTable