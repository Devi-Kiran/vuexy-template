import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const ViewPortfolioCard = () => {
  const [isOpenViewDetails, setIsOpenViewDetails] = useState(false);
  const [isOpenStartModal, setIsOpenStartModal] = useState(false);

  const toggleViewDetailsModal = () => {
    setIsOpenViewDetails((prev) => !prev);
  };

  const toggleStartModal = () => {
    setIsOpenStartModal((prev) => !prev);
  };

  return (
    <>
      <Card className="card-statistics">
        <CardHeader className="pb-0">
          <CardTitle className="text-primary" style={{ fontSize: "25px" }}>
            tttt (217)
          </CardTitle>
          <CardText className="card-text font-small-2 mr-25 mb-0">
            <div className="mb-1 d-none d-md-block">
              <span>Product / Service: </span>
              <span className="text-dark font-weight-bold">BUSINESS LOAN</span>
            </div>
          </CardText>
        </CardHeader>
        
        <CardBody className="statistics-body">
          <Row>
            <Col className="d-sm-none">
              <div className="mb-1">
                <span className="">Start Date: </span>
                <span className="text-dark font-weight-bold">
                  16 January, 2024
                </span>
              </div>
              <div className="mb-1">
                <span>Expiry Date: </span>
                <span className="text-dark font-weight-bold">
                  16 January, 2025
                </span>
              </div>
              <div className="mb-1">
                <span>Role: </span>
                <span className="text-dark font-weight-bold">admin</span>
              </div>
              <div className="mb-1">
                <span>Source: </span>
                <span className="text-dark font-weight-bold">TEST Bank</span>
              </div>
              <div className="mb-1">
                <span>Target POS: </span>
                <span className="text-dark font-weight-bold">
                  6320.6 (33.8%)
                </span>
              </div>
              <div className="mb-1">
                <span>Actioned: </span>
                <span className="text-dark font-weight-bold">1 (16.67)%</span>
              </div>
              <div className="mb-1">
                <span>Un-Actioned: </span>
                <span className="text-dark font-weight-bold">5 (83.33)%</span>
              </div>
              <div className="mb-1">
                <span>Type: </span>
                <span className="text-dark font-weight-bold">FLOW</span>
              </div>
              <div className="mb-1">
                <span>Total Count: </span>
                <span className="text-dark font-weight-bold">6</span>
              </div>
              <div className="mb-1">
                <span>TOT POS: </span>
                <span className="text-dark font-weight-bold">18700</span>
              </div>
              <div className="mb-1">
                <span>Achieved POS: </span>
                <span className="text-dark font-weight-bold">0 (0)%</span>
              </div>
              <div className="mb-1">
                <span>Difference: </span>
                <span className="text-dark font-weight-bold">6320.6</span>
              </div>
              <div className="mb-1">
                <span>Product / Service: </span>
                <span className="text-dark font-weight-bold">
                  BUSINESS LOAN
                </span>
              </div>
            </Col>
            {/* small screen start */}
            <Col className="d-none d-sm-block d-md-none">
              <div className="mb-1">
                <span className="">Start Date: </span>
                <span className="text-dark font-weight-bold">
                  16 January, 2024
                </span>
              </div>
              <div className="mb-1">
                <span>Expiry Date: </span>
                <span className="text-dark font-weight-bold">
                  16 January, 2025
                </span>
              </div>
              <div className="mb-1">
                <span>Role: </span>
                <span className="text-dark font-weight-bold">admin</span>
              </div>
              <div className="mb-1">
                <span>Source: </span>
                <span className="text-dark font-weight-bold">TEST Bank</span>
              </div>
              <div className="mb-1">
                <span>Target POS: </span>
                <span className="text-dark font-weight-bold">
                  6320.6 (33.8%)
                </span>
              </div>
              <div className="mb-1">
                <span>Actioned: </span>
                <span className="text-dark font-weight-bold">1 (16.67)%</span>
              </div>
              <div className="mb-1">
                <span>Un-Actioned: </span>
                <span className="text-dark font-weight-bold">5 (83.33)%</span>
              </div>
            </Col>
            <Col className="d-none d-sm-block d-md-none">
              <div className="mb-1">
                <span>Type: </span>
                <span className="text-dark font-weight-bold">FLOW</span>
              </div>
              <div className="mb-1">
                <span>Total Count: </span>
                <span className="text-dark font-weight-bold">6</span>
              </div>
              <div className="mb-1">
                <span>TOT POS: </span>
                <span className="text-dark font-weight-bold">18700</span>
              </div>
              <div className="mb-1">
                <span>Achieved POS: </span>
                <span className="text-dark font-weight-bold">0 (0)%</span>
              </div>
              <div className="mb-1">
                <span>Difference: </span>
                <span className="text-dark font-weight-bold">6320.6</span>
              </div>
              <div className="mb-1">
                <span>Product / Service: </span>
                <span className="text-dark font-weight-bold">
                  BUSINESS LOAN
                </span>
              </div>
            </Col>
            {/* small screen end */}

            {/* large screen start */}
            <Col className="d-none d-md-block">
              <div className="mb-1">
                <span className="">Start Date: </span>
                <span className="text-dark font-weight-bold">
                  16 January, 2024
                </span>
              </div>
              <div className="mb-1">
                <span>Expiry Date: </span>
                <span className="text-dark font-weight-bold">
                  16 January, 2025
                </span>
              </div>
              <div className="mb-1">
                <span>Role: </span>
                <span className="text-dark font-weight-bold">admin</span>
              </div>
              <div className="mb-1">
                <span>Source: </span>
                <span className="text-dark font-weight-bold">TEST Bank</span>
              </div>
            </Col>
            <Col className="d-none d-md-block">
              <div className="mb-1">
                <span>Target POS: </span>
                <span className="text-dark font-weight-bold">
                  6320.6 (33.8%)
                </span>
              </div>
              <div className="mb-1">
                <span>Actioned: </span>
                <span className="text-dark font-weight-bold">1 (16.67)%</span>
              </div>
              <div className="mb-1">
                <span>Un-Actioned: </span>
                <span className="text-dark font-weight-bold">5 (83.33)%</span>
              </div>
              <div className="mb-1">
                <span>Type: </span>
                <span className="text-dark font-weight-bold">FLOW</span>
              </div>
            </Col>
            <Col className="d-none d-md-block">
              <div className="mb-1">
                <span>Total Count: </span>
                <span className="text-dark font-weight-bold">6</span>
              </div>
              <div className="mb-1">
                <span>TOT POS: </span>
                <span className="text-dark font-weight-bold">18700</span>
              </div>
              <div className="mb-1">
                <span>Achieved POS: </span>
                <span className="text-dark font-weight-bold">0 (0)%</span>
              </div>
              <div className="mb-1">
                <span>Difference: </span>
                <span className="text-dark font-weight-bold">6320.6</span>
              </div>
              {/* <div className="mb-1">
              <span>Product / Service: </span>
              <span className="text-dark font-weight-bold">BUSINESS LOAN</span>
            </div> */}
            </Col>
            {/* large screen end */}
          </Row>
          <div className="text-center">
            <Button color="success" className="mr-1" onClick={toggleStartModal}>
              Start
            </Button>
            <Button color="primary" onClick={() => toggleViewDetailsModal()}>
              View Details
            </Button>
          </div>
        </CardBody>
      </Card>

      <Modal
        isOpen={isOpenViewDetails}
        toggle={() => toggleViewDetailsModal()}
        className="modal-xl"
      >
        <ModalHeader toggle={() => toggleViewDetailsModal()}>
          Portfolio Details
        </ModalHeader>
        <ModalBody>
          Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie
          roll sesame snaps jelly-o marshmallow marshmallow jelly jujubes candy.
          Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet
          roll.
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => toggleViewDetailsModal()}
            outline
          >
            Accept
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={isOpenStartModal}
        toggle={toggleStartModal}
        className="modal-xl"
      >
        <ModalHeader toggle={toggleStartModal}>Start Portfolio</ModalHeader>
        <ModalBody>
          Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie
          roll sesame snaps jelly-o marshmallow marshmallow jelly jujubes candy.
          Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet
          roll.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleStartModal} outline>
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ViewPortfolioCard;
