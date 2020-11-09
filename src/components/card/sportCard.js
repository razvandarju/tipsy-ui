import React from 'react'
import { Card } from 'react-bootstrap';
import './sportCard.css'



function SportCard(props) {

    const bet = props.bet

    const lockedClassname = bet.locked ? "locked" : "";

    return (

        <Card key={bet._id} className={`sport-card ${lockedClassname}`}>
            <Card.Title>{bet.teamsName}</Card.Title>
            <Card.Subtitle><small>{bet.tip}</small></Card.Subtitle>
            <Card.Body><span>{bet.tip}</span></Card.Body>
            <Card.ImgOverlay>{locked(bet)}</Card.ImgOverlay>
        </Card>

    )
}

function locked(bet) {

    const unlock = () => console.log("unlocking", bet._id);

    return (
        <div className={"unlock-button"}>
            <button id="unlock" onClick={unlock}>Unlock it for 1 token!</button>
        </div>
    )
}

export default SportCard;