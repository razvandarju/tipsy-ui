import React from 'react';
import { Card, Container } from 'react-bootstrap';
import SportCard from '../card/sportCard';
import './sportList.css'

function SportList(props) {

    return (
        <Container className="sport-list">
            <Card className="title">{props.title}</Card>

            {
                props.elements.length == 0 ? <Card className="empty">There are no picks</Card>
                    : props.elements.map((el) => <SportCard key={el._id} bet={el} />)

            }
        </Container>
    )
}

export default SportList;