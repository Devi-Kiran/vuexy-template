import React from 'react';
import { Row, Col } from 'reactstrap';

function DetailsBox() {
  return (
    <div className="bg-primary text-white py-1 px-1 px-md-2 rounded font-weight-bold mb-2">
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Portfolio :
              </div>
              <div className="flex-grow-1">Jan Test</div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Total Target :
              </div>
              <div className="flex-grow-1 text-capitalize">27</div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                ExpireDate :
              </div>
              <div className="flex-grow-1 text-capitalize">
                2024-01-31
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                POS :
              </div>
              <div className="flex-grow-1 text-capitalize">
                5535728.333
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Target POS :
              </div>
              <div className="flex-grow-1 text-capitalize">
                7537435.33
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Leads :
              </div>
              <div className="flex-grow-1 text-capitalize">
                925
              </div>
            </div>
          </Col>
         
        </Row>
      </div>
  )
}

export default DetailsBox