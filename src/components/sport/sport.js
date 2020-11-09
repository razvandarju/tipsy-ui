import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import client from '../../client.js';

import './sport.css'
import SportList from './sportList';


function Sport() {

    const [sport, setSport] = useState("");
    const [live, setLive] = useState("");
    const [activePage, setActivePage] = useState(1);
    const [oldPage, setOldPage] = useState(1);

    const [activeBets, setActiveBets] = useState([]);
    const [oldBets, setOldBets] = useState([]);

    // var activeBets = [];
    useEffect(() => {
        loadActiveBets();
        loadOldBets();
        return () => { }
    }, [sport, live]);

    const loadActiveBets = () => {

        let params = { page: activePage }

        if (sport != "") params.sport = sport;
        if (live != "") params.live = live;

        client.get('/bet/pending/', { params })

            .then(res => setActiveBets(res.data));
    }

    const loadOldBets = () => {
        let params = { page: oldPage }

        if (sport != "") params.sport = sport;
        if (live != "") params.live = live;

        client.get('/bet/old/', { params })

            .then(res => setOldBets(res.data));
    }

    const liveChange = (event) => setLive(event.target.value)
    const sportChange = (event) => setSport(event.target.value)

    return (
        <Container className="main-container">
            <Row>
                <Col xs={2} className="menu-col">
                    <Container className="sport-filter">
                        <Row>
                            <h2>Sport picks</h2>
                        </Row>
                        <Row className="filter-row">
                            <label htmlFor="sportFilter">Sport:</label>
                            <select id="sportFilter" className="sport form-control" value={sport} onChange={sportChange}>
                                <option value="">All</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Soccer">Football</option>
                            </select>
                        </Row>

                        <Row className="filter-row">
                            <label htmlFor="live">Prematch/Live</label>
                            <select id="live" className="sport form-control" value={live} onChange={liveChange}>
                                <option value="">All</option>
                                <option value="live">Live</option>
                                <option value="prematch">Prematch</option>
                            </select>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <SportList elements={activeBets} title="Active picks" />
                    <SportList elements={oldBets} title="Older picks" />
                </Col>
            </Row>
        </Container>
    )
}

export default Sport;