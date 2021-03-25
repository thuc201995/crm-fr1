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
} from 'reactstrap';
import IconTooltip from 'components/IconTooltip';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { AiFillStop } from 'react-icons/ai';
const dummyData = [
  { userName: 'Andrew', createdAt: new Date(), userNo: 1 },
  { userName: 'Sally', createdAt: new Date(), userNo: 2 },
  { userName: 'Lisa', createdAt: new Date(), userNo: 3 },
  { userName: 'Matthew', createdAt: new Date(), userNo: 4 },
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

const AdminManagerPage = () => {
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
      title="Admin Manager"
      breadcrumbs={[{ name: 'Admin Manager', active: true }]}
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Button
                outline
                color="primary"
                onClick={() => setIsOpenModal(true)}
              >
                Add New Admin
              </Button>
            </CardHeader>
            <CardBody>
              <Table size="sm" bordered>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Admin Username</th>
                    <th>Date & Time Added (SGT)</th>
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
                        <td>
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
                            onClick={() => setOpenConfirmSupendAdminModal(true)}
                          />
                          <IconTooltip
                            icon={MdDeleteForever}
                            className="text-danger"
                            tooltip="Delete"
                            id="deleteAdmin"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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

export default AdminManagerPage;
