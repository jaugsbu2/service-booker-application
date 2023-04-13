import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import AddComment from './UserTicketComments.js';
import TicketCommentList from './TicketCommentList.js';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../utils/queries';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';

const TicketDetails = ({ props }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [comment, setComment] = useState(false);
    const hideDetails = () => {
        setShowDetails(false);
    };
    const { loading, error, data } = useQuery(GET_COMMENTS, {
        variables: {
            ticketId: props._id,
        },
    });
    const tryComment = (val) => {
        console.log(val);
        setComment(val);
    };
    console.log('comment log', comment);
    console.log(loading);
    console.log(data);
    if (loading) {
        return <h2>loading</h2>;
    }
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Ticket Details: {props.ticketTitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 style={{ 'fontSize': '16px' }}>Ticket Content: </h3>
                <p style={{ 'textAlign': 'center' }}>{props.ticketContent}</p>

                <ul style={{ 'listStyle': 'none' }}>
                    <li>Budget: {props.ticketBudget}</li>
                    <li>Status: {props.ticketStatus ? 'open' : 'closed'}</li>
                </ul>
                <TicketCommentList
                    props={data.getSingleTicket.ticketComments}
                />
                <AddComment props={props._id} tryComment={tryComment} />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </div>
    );
};

export default TicketDetails;
// const { loading, error, data } = useQuery(GET_COMMENTS, {
//     variables: {
//         ticketId: props._id,
//     },
// });
// console.log(loading);
// console.log(data);
// if (loading) {
//     return <h2>loading</h2>;
// }

// const showComments = () => {
//     const commentList = data.getSingleTicket.ticketComments;
//     console.log('comment list', commentList);
//     if (commentList.length == 0) {
//         return <h4>no comments</h4>;
//     } else {
//         return;
//         commentList.map((comment, index) => {
//             <div>
//                 <h6>{comment.username}</h6>
//                 <p>{comment.commentText}</p>
//             </div>;
//         });
//     }
// };
