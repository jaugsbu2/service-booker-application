import { CardColumns, Container, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import TicketDetails from './UserTicketDetails.js';
function UserTicketList(tickets) {
    // const styles = {
    //   "secondary"
    // }
    const [showDetails, setShowDetails] = useState(false);
    const openDetails = (ticket) => {
        const { _id, ticketTitle, ticketContent, ticketBudget, ticketStatus } =
            ticket;
        console.log('attempting to grab id', _id);
        // setData(ticket);
        setShowDetails(true);
    };
    const hideDetails = () => setShowDetails(false);
    const [data, setData] = useState({
        _id: null,
        ticketTitle: null,
        ticketContent: null,
        ticketBudget: null,
        ticketStatus: null,
    });

    if (!tickets.tickets.length) {
        return (
            <h1>
                No Tickets Yet! Press the "Create Ticket" button to get started.
            </h1>
        );
    }

    return (
        <>
            <Container>
                <CardColumns>
                    {tickets &&
                        tickets.tickets.map((ticket) => (
                            <Card
                                ref={ticket}
                                key={ticket._id}
                                style={{ width: '18rem' }}
                                bg={ticket.ticketStatus ? '' : 'secondary'}
                            >
                                <Card.Header>{ticket.ticketTitle}</Card.Header>
                                <Card.Body>
                                    {/* <Card.Title>{ticket.ticketTitle}</Card.Title> */}
                                    <Card.Text>
                                        {ticket.ticketContent}
                                    </Card.Text>
                                    <Card.Text>
                                        Budget: {ticket.ticketBudget}
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={openDetails}
                                    >
                                        View Details
                                    </Button>
                                    {/*this may be where i call my child function*/}
                                </Card.Body>
                            </Card>
                        ))}
                </CardColumns>
            </Container>
            <>
                <Modal show={showDetails} onHide={hideDetails}>
                    <Modal.Body>
                        <TicketDetails props={data} />
                    </Modal.Body>
                </Modal>
            </>
        </>
    );
}

export default UserTicketList;
