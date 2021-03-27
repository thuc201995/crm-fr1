import Page from 'components/Page';
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Input,
  Form,
  Collapse,
  FormGroup,
  Label,
} from 'reactstrap';
import IconTooltip from 'components/IconTooltip';
import { MdEdit } from 'react-icons/md';

const AdminSecurityPage = () => {
  const [isOpenEditUsername, setIsOpenEditUsername] = useState(false);
  const [isOpenEditPassword, setIsOpenEditPassword] = useState(false);
  return (
    <Page
      title="Admin Security"
      breadcrumbs={[{ name: 'Admin Security', active: true }]}
    >
      <Row>
        <Col>
          <Card className="mb-3 ">
            <CardHeader className="text-center border-bottom-0 mb-5">
              <h4>
                <u>Admin Security</u>
              </h4>
            </CardHeader>
            <CardBody className="mvh-50">
              <Row className="justify-content-center mt-5 mb-3">
                <Col xs="12" md="6" className="d-flex">
                  <span>
                    <b className="mr-2">UserName:</b> Sally
                  </span>
                  <IconTooltip
                    icon={MdEdit}
                    className="text-primary ml-auto"
                    tooltip="Edit Username"
                    id="editUsername"
                    onClick={() => setIsOpenEditUsername(!isOpenEditUsername)}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center ">
                <Col xs="12" md="6">
                  <Collapse isOpen={isOpenEditUsername}>
                    <Card>
                      <CardBody>
                        <Form>
                          <FormGroup row>
                            <Label for="oldPassword" sm={4}>
                              Old Username
                            </Label>
                            <Col sm={8}>
                              <Input
                                type="text"
                                name="oldPassword"
                                id="oldPassword"
                                placeholder="Old username"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label for="newUserName" sm={4}>
                              New Username
                            </Label>
                            <Col sm={8}>
                              <Input
                                type="text"
                                name="newUserName"
                                id="newUserName"
                                placeholder="New username"
                              />
                            </Col>
                          </FormGroup>
                          <Row>
                            <Col className="justify-content-end d-flex">
                              <Button
                                size="sm"
                                className="mr-3"
                                onClick={() =>
                                  setIsOpenEditUsername(!isOpenEditUsername)
                                }
                              >
                                Cancel
                              </Button>
                              <Button
                                size="sm"
                                color="primary"
                                onClick={() =>
                                  setIsOpenEditUsername(!isOpenEditUsername)
                                }
                              >
                                Confirm
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Collapse>
                </Col>
              </Row>
              <Row className="justify-content-center mb-5">
                <Col xs="12" md="6" className="d-flex">
                  <span>
                    <b className="mr-2">Password:</b> *****
                  </span>
                  <IconTooltip
                    icon={MdEdit}
                    className="text-primary ml-auto"
                    tooltip="Edit Password"
                    id="editPassword"
                    onClick={() => setIsOpenEditPassword(!isOpenEditPassword)}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center ">
                <Col xs="12" md="6">
                  <Collapse isOpen={isOpenEditPassword}>
                    <Card>
                      <CardBody>
                        <Form>
                          <FormGroup row>
                            <Label for="oldPassword" sm={4}>
                              Old Password
                            </Label>
                            <Col sm={8}>
                              <Input
                                type="text"
                                name="oldPassword"
                                id="oldPassword"
                                placeholder="Old Password"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label for="newPassword" sm={4}>
                              New Password
                            </Label>
                            <Col sm={8}>
                              <Input
                                type="text"
                                name="newPassword"
                                id="newPassword"
                                placeholder="New Password"
                              />
                            </Col>
                          </FormGroup>
                          <Row>
                            <Col className="justify-content-end d-flex">
                              <Button
                                size="sm"
                                className="mr-3"
                                onClick={() =>
                                  setIsOpenEditPassword(!isOpenEditPassword)
                                }
                              >
                                Cancel
                              </Button>
                              <Button
                                size="sm"
                                color="primary"
                                onClick={() =>
                                  setIsOpenEditPassword(!isOpenEditPassword)
                                }
                              >
                                Confirm
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Collapse>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default AdminSecurityPage;
