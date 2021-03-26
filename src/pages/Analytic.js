import Page from 'components/Page';
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from 'reactstrap';

const Analytic = () => {
  const [isOpenResetHodingModal, setIsOpenResetHodingModal] = useState(false);
  return (
    <Page
      title="Wallet Manager"
      breadcrumbs={[{ name: 'Wallet Manager', active: true }]}
    >
      <Row className="justify-content-around">
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>App User monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>User Review monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>Subject creation monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>Lading page visitor statistic</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>User Like monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>User Unlike monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>Gender Statistic</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>Membership Statistic</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>Review Static monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
        <Col md="5" xs="12">
          <Card className="text-center card-with-border">
            <CardHeader>User Review monthly/daily</CardHeader>
            <CardBody>10000</CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default Analytic;
