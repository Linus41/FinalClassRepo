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
                        <tr key={post._id}>
                            <td>{post.user.email}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.date}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default PostTable