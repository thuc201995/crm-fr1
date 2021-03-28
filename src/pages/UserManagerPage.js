import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
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
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge,
} from 'reactstrap';
import CollapseCard from 'components/Card/CollapseCard';
import IconTooltip from 'components/IconTooltip';
import { AiFillStop, AiFillEye } from 'react-icons/ai';
import SearchInput from 'components/SearchInput';
import DefaultImg from 'assets/img/users/300_7.jpg';
const dummyData = [
  { userName: 'Andrew', createdAt: new Date(), userNo: 1 },
  { userName: 'Sally', createdAt: new Date(), userNo: 2 },
  { userName: 'Lisa', createdAt: new Date(), userNo: 3 },
  { userName: 'Matthew', createdAt: new Date(), userNo: 4 },
];

const ViewUserInfo = ({ isOpen, toggle, showSupendUserModal }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle} className="border-bottom-0"></ModalHeader>
      <ModalBody>
        <Row>
          <Col className="user_image_group">
            <img src={DefaultImg} alt="image"></img>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <div>@JohnDoe</div>
            <div>Sr Member</div>
            <div>Joined since Jan 2021</div>
          </Col>
        </Row>
        <Row className="mt-1">
          <div className="ml-auto">
            <Col xs="12">
              <b>Status: </b>
              <Badge color="success">Active</Badge>
            </Col>
            <Col xs="12">
              <b>Action:</b>
              <IconTooltip
                icon={AiFillStop}
                className="text-danger  ml-2"
                tooltip="Suspense"
                id="stopuser"
                onClick={showSupendUserModal}
              />
            </Col>
          </div>
        </Row>
        <Row>
          <Col>
            <CollapseCard title="Wallet">
              <Row>
                <Col>
                  <span className="mr-4">100</span>
                  <span>Rv</span>
                </Col>
              </Row>
              <Row>
                <Table responsive>
                  <thead>
                    <tr>
                      <th className="border-top-0">Total Rewards</th>
                      <th className="border-top-0">Value in (MyR)</th>
                      <th className="border-top-0">Total Value in</th>
                      <th className="border-top-0">USD</th>
                      <th className="border-top-0">SGD</th>
                      <th className="border-top-0">MYR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100</td>
                      <td>0.01</td>
                      <td></td>
                      <td>0.25</td>
                      <td>0.3</td>
                      <td>1.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </CollapseCard>
            <CollapseCard title="Bio">
              <Row>
                <Col>
                  <span>
                    Hi, I am an ordinary guy from Jakarta. I love writting,
                    reading and singing. I am excited about new techs. It's good
                    to meet you guys here.
                  </span>
                </Col>
              </Row>
            </CollapseCard>
            <CollapseCard title="User Infomation Details">
              <Row>
                <Col>
                  <b>UserName</b>
                  <div>@JohnDoe</div>
                </Col>
                <Col>
                  <b>Email</b>
                  <div>johnDoe@gmail.com</div>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <b>Phone No.</b>
                  <div>+62 8213135456</div>
                </Col>
                <Col>
                  <b>D.O.B</b>
                  <div>22.01.1990</div>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <b>Gender</b>
                  <div>Male</div>
                </Col>
                <Col>
                  <b>Country</b>
                  <div>Indonesia</div>
                </Col>
              </Row>
            </CollapseCard>
            <CollapseCard title="Activity Log">
              <Row>
                <Col>
                  <Button outline color="primary" className="mr-2">
                    Latest
                  </Button>
                  <Button outline color="primary">
                    Older
                  </Button>
                </Col>
              </Row>
            </CollapseCard>

            <CollapseCard title="Transaction History">
              <Row>
                <Col>
                  <Button outline color="primary" className="mr-2">
                    Latest
                  </Button>
                  <Button outline color="primary">
                    Older
                  </Button>
                </Col>
              </Row>
            </CollapseCard>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const ConfirmSuspendAdminModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Suspend User</ModalHeader>
      <ModalBody>You are going to suspend this user.</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const UserManagerPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [
    isOpenConfirmSupendUserModal,
    setOpenConfirmSupendUserModal,
  ] = useState(false);
  const [data, setData] = useState(dummyData);
  const [editIndex, seteditIndex] = useState('');
  const isEdit = editIndex !== '';
  useEffect(() => {
    if (isEdit) {
      setIsOpenModal(true);
    }
  }, [editIndex]);

  return (
    <Page
      title="User Manager"
      breadcrumbs={[{ name: 'User Manager', active: true }]}
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Row className="align-items-center">
                <Col className="d-flex justify-content-end no-margin-bottom ">
                  <SearchInput />
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Table
                size="sm"
                bordered
                responsive
                className="table-header-vertical-mid"
              >
                <thead>
                  <tr>
                    <th rowSpan="2">No.</th>
                    <th rowSpan="2">User ID</th>
                    <th rowSpan="2">User Email</th>
                    <th rowSpan="2">Username</th>
                    <th rowSpan="2">Date & Time Joined (SGT)</th>
                    <th rowSpan="2">Gender</th>
                    <th rowSpan="2">D.O.B</th>
                    <th rowSpan="2">Ranking</th>
                    <th rowSpan="2">Status</th>
                    <th colSpan="4" className="text-center">
                      Wallet
                    </th>
                  </tr>
                  <tr>
                    <th>Receive</th>
                    <th>Withdraw</th>
                    <th>Balance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    const { userNo, userName, createdAt } = item;
                    return (
                      <tr key={userNo}>
                        <th scope="row">{userNo}</th>
                        <td>{userName}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>{createdAt.toLocaleString()}</td>
                        <td>
                          <IconTooltip
                            icon={AiFillEye}
                            className="text-primary  mr-1"
                            tooltip="View"
                            id="viewUser"
                            onClick={() => seteditIndex(index)}
                          />
                          <IconTooltip
                            icon={AiFillStop}
                            className="text-danger  mr-1"
                            tooltip="Suspense"
                            id="suspendUser"
                            onClick={() => setOpenConfirmSupendUserModal(true)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Row className="mt-4">
                <Col xs="12" className="no-margin-bottom">
                  <b>Total Record found:</b> 100
                </Col>
                <Col xs="12" className="no-margin-bottom">
                  <b>Male:</b> 1
                </Col>
                <Col xs="12" className="no-margin-bottom">
                  <b>Femal:</b> 99
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="d-flex  justify-content-end">
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                  </Pagination>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ViewUserInfo
        isOpen={isOpenModal}
        toggle={() => {
          setIsOpenModal(!isOpenModal);
          seteditIndex('');
        }}
        isEdit={isEdit}
        editValue={data[editIndex]}
        showSupendUserModal={() => setOpenConfirmSupendUserModal(true)}
      />
      <ConfirmSuspendAdminModal
        isOpen={isOpenConfirmSupendUserModal}
        toggle={() =>
          setOpenConfirmSupendUserModal(!isOpenConfirmSupendUserModal)
        }
      />
    </Page>
  );
};

export default UserManagerPage;
