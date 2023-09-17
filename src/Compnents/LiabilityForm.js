import React from 'react';
import "./LiabilityForm.css";
import firebase from "../firebase.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import ActualForm from './ActualForm';

class LiabilityForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rightsRelinquished: false
        };
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col lg="auto">
                        <Card>
                            <Card.Header className="text-center">
                                Header
                            </Card.Header>
                            {
                                this.state.rightsRelinquished === false ?
                                    <Card.Body>
                                        <Card.Text>
                                            <ActualForm />
                                        </Card.Text>
                                    </Card.Body>
                                    :
                                    <Card.Body>
                                        <Card.Text>
                                        Thank you for signing your life away
                                        </Card.Text>
                                    </Card.Body>
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default LiabilityForm