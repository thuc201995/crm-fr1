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
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import IconTooltip from 'components/IconTooltip';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { AiFillStop } from 'react-icons/ai';
import SearchInput from 'components/SearchInput';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const dummyData = [
  { userName: 'Andrew', createdAt: new Date(), userNo: 1 },
  { userName: 'Sally', createdAt: new Date(), userNo: 2 },
  { userName: 'Lisa', createdAt: new Date(), userNo: 3 },
  { userName: 'Matthew', createdAt: new Date(), userNo: 4 },
];

const filterList = [
  ['person', 'health', 'apparels', 'automotive', 'games'],
  ['apps & website', 'cryptocurrency', 'places', 'gadets', 'movie'],
];
const CreateOrEditAdminModal = ({
  isOpen,
  toggle,
  isEdit,
  onSubmit,
  editValue,
}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (isEdit) setUsername(editValue.userName);
  }, [editValue]);

  const handleSubmit = () => {
    onSubmit({ userName, password });
    toggle();
    setUsername('');
    setPassword('');
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Add New Admin</ModalHeader>
      <ModalBody>
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="adminUsername">Username</Label>
                <Input
                  invalid={false}
                  value={userName}
                  onChange={e => setUsername(e.target.value)}
                />
                <FormFeedback>
                  shows invalid-feedback with is-valid inputs.
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="adminPassword">Password</Label>
                <Input
                  valid={false}
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const ConfirmSuspendAdminModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Suspend Admin</ModalHeader>
      <ModalBody>You are going to suspend this admin.</ModalBody>
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

const SubjectManagerPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [
    isOpenConfirmSupendAdminModal,
    setOpenConfirmSupendAdminModal,
  ] = useState(false);
  const [data, setData] = useState(dummyData);
  const [editIndex, seteditIndex] = useState('');
  const isEdit = editIndex !== '';
  useEffect(() => {
    if (isEdit) {
      setIsOpenModal(true);
    }
  }, [editIndex]);
  const handleAddOrEditData = ({ userName }) => {
    if (isEdit) {
      setData([
        ...data.slice(0, editIndex),
        { ...data[editIndex], userName },
        ...data.slice(editIndex + 1),
      ]);
      seteditIndex('');
    } else {
      setData([
        ...data,
        { userName, createdAt: new Date(), userNo: data.length + 1 },
      ]);
    }
  };

  return (
    <Page
      title="Subject Manager"
      breadcrumbs={[{ name: 'Subject Manager', active: true }]}
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Row className="align-items-center">
                <Col className="no-margin-bottom ">
                  <SearchInput />
                </Col>
                <Col className="d-flex justify-content-end no-margin-bottom ">
                  <UncontrolledDropdown>
                    <DropdownToggle caret>Manager Filter</DropdownToggle>
                    <DropdownMenu right className="overflow-auto ">
                      {filterList.map((filters, index) => {
                        return (
                          <div key={index} className="subject-filter-menu-item">
                            {filters.map(item => {
                              return (
                                <Button
                                  outline
                                  color="primary"
                                  className="mr-1 text-capitalize "
                                  key={item}
                                >
                                  {item}
                                </Button>
                              );
                            })}
                          </div>
                        );
                      })}
                    </DropdownMenu>
                  </UncontrolledDropdown>
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
                    <th rowSpan="2">Subject ID</th>
                    <th rowSpan="2">Subject Title</th>
                    <th rowSpan="2">Category</th>
                    <th rowSpan="2">Date & Time Joined (SGT)</th>
                    <th rowSpan="2">Rating</th>
                    <th rowSpan="2">Review</th>
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
                        <td>
                          <div className="d-inline-flex">
                            <IconTooltip
                              icon={MdEdit}
                              className="text-primary  mr-1"
                              tooltip="Edit"
                              id="editAdmin"
                              onClick={() => seteditIndex(index)}
                            />
                            <IconTooltip
                              icon={AiFillStop}
                              className="text-warning  mr-1"
                              tooltip="Suspense"
                              id="suspendAdmin"
                              onClick={() =>
                                setOpenConfirmSupendAdminModal(true)
                              }
                            />
                            <IconTooltip
                              icon={MdDeleteForever}
                              className="text-danger"
                              tooltip="Delete"
                              id="deleteAdmin"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Row className="mt-4">
                <Col xs="12" lg="6" className="no-margin-bottom">
                  <b>Total Record found:</b> 100
                </Col>
                <Col
                  xs="12"
                  lg="6"
                  className="no-margin-bottom d-flex justify-content-end"
                >
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
      <CreateOrEditAdminModal
        isOpen={isOpenModal}
        toggle={() => setIsOpenModal(!isOpenModal)}
        onSubmit={handleAddOrEditData}
        isEdit={isEdit}
        editValue={data[editIndex]}
      />
      <ConfirmSuspendAdminModal
        isOpen={isOpenConfirmSupendAdminModal}
        toggle={() =>
          setOpenConfirmSupendAdminModal(!isOpenConfirmSupendAdminModal)
        }
      />
    </Page>
  );
};

export default SubjectManagerPage;
