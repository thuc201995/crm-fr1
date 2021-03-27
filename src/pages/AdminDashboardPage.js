import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from 'reactstrap';
import IconTooltip from 'components/IconTooltip';
import { MdEdit } from 'react-icons/md';
const SUBJECT = 'SUBJECT';
const REVIEW = 'REVIEW';
const LIKE_UNLIKE = 'LIKE_UNLIKE';
const EditReward = ({ isOpen, toggle, modalName }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Set amount of RV in holding</ModalHeader>
      <ModalBody>
        {modalName === SUBJECT && (
          <div className="d-flex text-center align-items-center">
            Reward
            <Col xs={3}>
              <Input type="number" defaultValue={20} />
            </Col>
            RV per unit creation
          </div>
        )}
        {modalName === REVIEW && (
          <div className="d-flex text-center align-items-center">
            Reward
            <Col xs={3}>
              <Input type="number" defaultValue={20} />
            </Col>
            RV per unit review
          </div>
        )}

        {modalName === LIKE_UNLIKE && (
          <>
            <div className="d-flex text-center align-items-center">
              Reward
              <Col xs={3}>
                <Input type="number" defaultValue={20} />
              </Col>
              RV per unit like
            </div>
            <div className="d-flex text-center align-items-center mt-2">
              Reward
              <Col xs={3}>
                <Input type="number" defaultValue={20} />
              </Col>
              RV per unit unlike
            </div>
          </>
        )}
      </ModalBody>
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

const AdminDashboardPage = () => {
  const [isOpenRewardModal, setIsOpenRewardModal] = useState(false);
  const [editModalName, setEditModalName] = useState('');
  useEffect(() => {
    if (editModalName !== '') setIsOpenRewardModal(true);
  }, [editModalName]);
  return (
    <Page title="Dashboard" breadcrumbs={[{ name: 'Dashboard', active: true }]}>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardBody className="mt-3 ml-md-5">
              {/* 1 */}
              <Row>
                <Col>
                  <span className="mr-2">1.</span>
                  <u>Reward to subject creator</u>
                  <IconTooltip
                    icon={MdEdit}
                    className="text-primary ml-3"
                    tooltip="Modify"
                    id="modifyRewardSubject"
                    onClick={() => setEditModalName(SUBJECT)}
                  />
                </Col>
              </Row>
              <Row className="ml-2">
                <Col>
                  <p>
                    A user will be rewarded with RV for creating a subject for
                    reviewing.
                  </p>
                  <p>
                    Current reward is
                    <Badge color="info" className="ml-1 mr-1">
                      20
                    </Badge>
                    RV per unit creation
                  </p>
                </Col>
              </Row>
              {/* 2 */}
              <Row>
                <Col>
                  <span className="mr-2">2.</span>
                  <u>Reward to subject reviewer</u>
                  <IconTooltip
                    icon={MdEdit}
                    className="text-primary ml-3"
                    tooltip="Modify"
                    id="modifyRewardReviewer"
                    onClick={() => setEditModalName(REVIEW)}
                  />
                </Col>
              </Row>
              <Row className="ml-2">
                <Col>
                  <p>
                    A user will be rewarded with RV for reviewing a subject.
                  </p>
                  <p>
                    Current reward is
                    <Badge color="warning" className="ml-1 mr-1">
                      1
                    </Badge>
                    RV per unit review
                  </p>
                </Col>
              </Row>
              {/* 3 */}
              <Row>
                <Col>
                  <span className="mr-2">3.</span>
                  <u>Reward to review liker/unliker</u>
                  <IconTooltip
                    icon={MdEdit}
                    className="text-primary ml-3"
                    tooltip="Modify"
                    id="modifyRewardLikeUnlike"
                    onClick={() => setEditModalName(LIKE_UNLIKE)}
                  />
                </Col>
              </Row>
              <Row className="ml-2">
                <Col>
                  <p>
                    A user will be rewarded with RV for like/unlike a review.
                  </p>
                  <p>
                    Current reward is
                    <Badge color="primary" className="ml-1 mr-1">
                      0
                    </Badge>
                    RV per unit like
                  </p>
                  <p>
                    Current reward is
                    <Badge color="secondary" className="ml-1 mr-1">
                      0
                    </Badge>
                    RV per unit unlike
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <EditReward
        isOpen={isOpenRewardModal}
        toggle={() => setIsOpenRewardModal(!isOpenRewardModal)}
        modalName={editModalName}
      />
    </Page>
  );
};

export default AdminDashboardPage;
