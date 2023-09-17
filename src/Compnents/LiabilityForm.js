import React from 'react';
import "./LiabilityForm.css";
import firebase from "../firebase.js";
import { Container, Row, Col, Card } from "react-bootstrap";

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
                    <Col md="auto">
                        <Card>
                            <Card.Header className="text-center">
                                Header
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Doggo ipsum big ol aqua doggo vvv noodle horse doing me a frighten, most angery pupper I have ever seen fat boi doggorino mlem, heckin good boys maximum borkdrive shoob.  Heckin good boys and girls bork heckin good boys and girls woofer mlem smol doge, blep clouds you are doing me the shock much ruin diet. Yapper stop it fren heckin good boys fluffer borkf ruff pupper, doge long woofer very good spot long bois. Doge very jealous pupper length boy, doggorino.
                                    what a nice floof long woofer. Long bois aqua doggo bork woofer heckin, many pats big ol pupper many pats. Stop it fren blop aqua doggo puggorino, shooberino. Adorable doggo very hand that feed shibe pats thicc wow such tempt much ruin diet shooberino, much ruin diet adorable doggo length boy super chub borkdrive, noodle horse such treat very good spot shibe noodle horse. Bork doge heckin puggo porgo, you are doin me a concern heck long woofer. Smol borking doggo with a long snoot for pats wow such tempt big ol pupper puggo most angery pupper I have ever seen, super chub vvv. Blop most angery pupper I have ever seen puggorino blep very hand that feed shibe, doge pupper. Dat tungg tho blop pupperino wow such tempt heckin fluffer waggy wags, tungg shoob fluffer shibe fluffer. Doggorino shooberino blop maximum borkdrive yapper very hand that feed shibe, woofer heckin good boys and girls porgo h*ck.
                                    Fluffer dat tungg tho heckin good boys long bois boofers I am bekom fat thicc, big ol floofs shoober snoot you are doin me a concern. shibe puggorino. H*ck doge borking doggo waggy wags boof, maximum borkdrive dat tungg tho doge, aqua doggo doing me a frighten I am bekom fat. Boofers wow such tempt doge you are doing me the shock porgo, shoober most angery pupper I have ever seen. Bork heckin long woofer long bois, super chub. Pupper very taste wow doggo you are doing me the shock woofer smol, clouds the neighborhood pupper adorable doggo. Boofers very jealous pupper borking doggo tungg corgo noodle horse shibe, corgo noodle horse big ol pupper h*ck borking doggo. Very good spot borkf stop it fren boofers h*ck, most angery pupper I have ever seen big ol pupper borkdrive porgo boofers, snoot doggo such treat.
                                    Long water shoob woofer boofers mlem vvv heck thicc, borkf lotsa pats vvv heckin. Bork sub woofer waggy wags doggo clouds, super chub shoober very taste wow, blop what a nice floof pats. Length boy fat boi long bois big ol much ruin diet, pats smol much ruin diet. What a nice floof wow very biscit doggo long doggo big ol pupper, shoober pupper pats noodle horse, very hand that feed shibe floofs dat tungg tho. Wrinkler much ruin diet length boy maximum borkdrive big ol pupper lotsa pats blop super chub, pupperino heck length boy floofs fat boi.
                                    Long doggo yapper doggo yapper, heckin good boys. Wow such tempt doggo blep, waggy wags. Doggorino smol borking doggo with a long snoot for pats doggo borking doggo shooberino what a nice floof blop, big ol pupper woofer fluffer waggy wags. Shooberino smol ur givin me a spook what a nice floof, wrinkler. Much ruin diet I am bekom fat pupperino fluffer, corgo porgo, clouds lotsa pats.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    };
};



export default LiabilityForm