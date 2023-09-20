import React, { useState, useEffect, useRef } from 'react';
import "./ActualForm.css";
import Canvas from './Canvas';
import firebase from "../firebase.js";
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Draw your signature.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Canvas
                        formData={props.formData}
                        signature={props.signature}
                        width={'100%'}
                        height={'100px'}
                        className="signature" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function ActualForm() {
    const date = new Date();
    const [formData, setFormData] = useState({ formNameCertify: '', formName: '', formDate: `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`, formSignature: '' })
    const [modalShow, setModalShow] = useState(false);
    const handleFormChange = async (field, e) => {
        setFormData({ ...formData, [field]: e.target.value })
    }

    const handleFormSubmit = async () => {
        console.log(formData);
    }
    const styles = {
        display: modalShow ? '' : 'none'
    }
    return (
        <Container>
            <MyVerticallyCenteredModal
                formData={formData}
                signature={setFormData}
                show={modalShow}
                style={styles}
                onHide={() => setModalShow(false)}
            />
            <Row>
                <Col>
                    <Card>
                        <Form>
                            <p>
                                I, <Form.Control className="form-input" size="sm" type="text" placeholder="Your Name" id="formName" onChange={(e) => handleFormChange("formName", e)} /> 
                                , understand that Elvira Coronado Molina,
                                also known as “OWNER,” has offered to allow me to enter onto their property to harvest or retrieve fruit
                                with the purpose of purchasing the harvested fruit. In exchange for this privilege, I agree to:
                            </p>
                            <ul>
                                <li>I. Abide by any rules or guidelines provided by Owner;</li>
                                <li>II. Use care to avoid damaging Owner’s property or trees;</li>
                                <li>III. Respect Owner’s privacy;</li>
                                <li>IV. Use care to avoid injury to myself; and</li>
                                <li>V. Release Owner from any liability for loss, injury, or death that I may experience in connection
                                    with entering Owner’s property and harvesting or eating Owner’s fruit.</li>
                            </ul>
                            <p>In particular, I understand and agree to the following:</p>
                            <ol>
                                <li>Acknowledgment of Risks Involved in Harvesting Fruit on Another’s Property: I acknowledge and
                                    understand that there are risks and dangers involved in entering onto the property of another and to
                                    retrieve or harvest fruit. This includes, but is not limited to: risk of injury from falling branches or fruit,
                                    insect or animal bites, falling or tripping on uneven surfaces or debris, and falling from heights, risk of
                                    food borne illness arising from eating fruit, and so on. I understand that Owner makes no warranty or
                                    representation with regard to the safety of entering his/her property and of eating the fruit. I assume all
                                    risk of loss, illness, injury, or death, however caused, arising in connection with entering Owner’s
                                    property and the harvest of Owner’s fruit.</li><br />

                                <li>Agreement to Use Care and Caution, and Respect Owner’s Privacy: I agree to use care and caution
                                    both to protect myself and to protect the property of Owner. I will not enter any part of Owner’s home or
                                    yard unless and until I am authorized by Owner to do so. I will walk carefully in Owner’s yard, and will
                                    not climb Owner’s trees or fence in order to retrieve fruit. I will not share the name, address, or any
                                    other private information of the Owner with others. I will pick only fruit that appears
                                    ready to be harvested.</li><br />

                                {/* <li>Agreement Regarding Use of Ladders: [Please initial one.]
                                    ______ I will not use a ladder to pick fruit that is beyond my reach.
                                    ______ I have been given permission by the Owner to use a ladder to harvest fruit. I will use great care
                                    and caution when using a ladder. I will inspect any ladder before I use it. If I have any doubt or question
                                    about the safety or stability of a ladder, I will not use it. I expressly assume all risk of injury or death,
                                    however caused, arising out of the use of a ladder, including but not limited to, injury or death from
                                    tipping or falling, caused by a condition of the ladder, caused by how or where the ladder is positioned
                                    or placed, either by myself or others, or caused by act or conduct of mine while using the ladder.</li><br /> */}

                                <li>Additional Guidelines: I agree to abide by the following additional guidelines when I enter onto
                                    Owner’s property:</li><br />

                                <ol type="a">
                                    <li>I will respect property boundary lines and be careful not to enter neighboring
                                        orchards/farms/properties. I will not pick fruit from undesignated trees.</li><br />
                                </ol>

                                <li>Agreement to Release Owner from Liability: In exchange for receiving Owner’s permission to enter
                                    onto Owner’s property and harvest fruit from Owner’s yard, I agree not to make a claim against or
                                    sue Owner for loss, illness, injury, or death that I may experience during the fruit harvest and/or
                                    consumption of Owner’s fruit, including loss, illness, injury, or death arising from the active or
                                    passive negligence of Owner. I agree to indemnify, hold harmless, and defend Owner from all claims,
                                    liability, or demands that I or any third party may have or in the future make against Owner for loss,
                                    illness, injury or death arising from entering Owner’s property or from harvesting and/or consuming
                                    fruit from Owner’s trees. This is intended to be a complete release, discharge, and waiver of any and all
                                    actions, causes of action, or lawsuits against Owner arising in connection with my presence on Owner’s
                                    property now and in the future.</li><br />

                                <li>Owner’s Right to Revoke Permission to Harvest: I understand that the Owner may, for any reason
                                    and at any time before or after the signing of this Agreement, revoke permission for me to enter onto his
                                    or her property and/or harvest fruit.</li><br />

                                <li>Dispute Resolution: If a dispute arises between Owner and myself, I agree to attempt to resolve it
                                    through verbal or written discussion, or through confidential mediation.</li><br />

                                <li>Additional Terms: If any portion of this Agreement is held by a court to be invalid, it shall be severed
                                    and the remaining provisions of the Agreement shall remain in full force and effect. I further agree that
                                    this Agreement is binding on my heirs, successors, and assigns.</li><br />

                                I have carefully read this Agreement and fully understand it. I am aware that this is a legally binding
                                release of liability and a contract between Owner, and myself and I sign it of my own free will.
                            </ol>
                            <div className="form-bottom">
                                <div>
                                    Print Name: <Form.Control className="form-input" size="sm" type="text" placeholder="Print Name" id="formNameCertify" onChange={(e) => handleFormChange("formNameCertify", e)} />
                                </div>
                                <div>
                                    Date: <input type="date" id="chooseDate" name="trip-start"
                                        value={`${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`} min="2022-01-01" max="2026-12-31" onChange={(e) => handleFormChange("formDate", e)} />
                                </div>
                                <br></br>
                                <div>
                                    Harvester Signature: <Form.Control className="form-input" size="sm" type="text" value={formData.formSignature} placeholder="Signature" id="formSignature" onClick={() => setModalShow(true)} />
                                </div>
                            </div>

                            <Button onClick={() => handleFormSubmit()} disabled={formData.formName === "" || formData.formNameCertify === "" || formData.formSignature === "" || formData.formName !== formData.formNameCertify ? true : false} >
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ActualForm



//onChange={(e)=>handleFormChange("formSignature",e)}