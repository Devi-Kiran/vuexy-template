import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

function Dashboard() {
  const [picker, setPicker] = useState(new Date())

  return (
    <div>
      {/* card container start*/}
      <div>
        <Row>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="PTP"
              color="primary"
              stats={`0`}
              statTitle="Promise To Pay"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="CBK"
              color="success"
              stats={`0`}
              statTitle="Call Back"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="BPTP"
              color="danger"
              stats={`0`}
              statTitle="Broken Promise To Pay"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="LPTP"
              color="warning"
              stats={`0`}
              statTitle="Long Promise To Pay"
            />
          </Col>
        </Row>
      </div>
      {/* card container end*/}

      <Card>
      <CardHeader>
        <CardTitle tag='h4'>Multiple Column</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>First Name</Label>
                <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                {/* <Input type='text' name='name' id='nameMulti' placeholder='First Name' /> */}
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Last Name</Label>
                <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>City</Label>
                <Input type='text' name='city' id='cityMulti' placeholder='City' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Country</Label>
                <Input type='text' name='country' id='CountryMulti' placeholder='Country' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CompanyMulti'>Company</Label>
                <Input type='text' name='company' id='CompanyMulti' placeholder='Company' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='EmailMulti'>Email</Label>
                <Input type='email' name='Email' id='EmailMulti' placeholder='Email' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>

      {/* filters container start */}
      <div>
        <Row>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>
              
            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
          <Col sm="6" md="3">
            <div style={{border: "1px solid red"}}>

            </div>
          </Col>
        </Row>
      </div>
      {/* filters container end */}

    </div>
  );
}

export default Dashboard;