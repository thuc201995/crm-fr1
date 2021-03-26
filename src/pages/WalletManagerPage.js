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
const ResetHoldingModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Set amount of RV in holding</ModalHeader>
      <ModalBody>
        <Input type="number" />
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

const WalletManagerPage = () => {
  const [isOpenResetHodingModal, setIsOpenResetHodingModal] = useState(false);
  return (
    <Page
      title="Wallet Manager"
      breadcrumbs={[{ name: 'Wallet Manager', active: true }]}
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader className="text-center border-bottom-0 mb-5">
              <h4>
                <u>Wallet Manager</u>
              </h4>
            </CardHeader>
            <CardBody>
              <Table borderless responsive>
                <thead>
                  <tr>
                    <th className="border-bottom">Total in Holding</th>
                    <th className="border-bottom">Value in (MYR)</th>
                    <th className="border-bottom">Total Value in</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1,000,000 <span className="ml-3">RV</span>
                    </td>
                    <td>0.01</td>
                    <td>
                      10,000.00 <span>MYR</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      3,000.00 <span>SGD</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      2,500.00 <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr className="hr-dashed" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <Button
                        size="sm"
                        outline
                        color="primary"
                        onClick={() => setIsOpenResetHodingModal(true)}
                      >
                        Reset Holding
                      </Button>
                    </td>
                  </tr>
                </tbody>
                {/* total payout */}
                <thead>
                  <tr>
                    <th className="border-bottom">Total Payout</th>
                    <th className="border-bottom">Value in (MYR)</th>
                    <th className="border-bottom">Total Value in</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      500,000 <span className="ml-3">RV</span>
                    </td>
                    <td>0.01</td>
                    <td>
                      5,000.00 <span>MYR</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      1,500.00 <span>SGD</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      1,250.00 <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr className="hr-dashed" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <Button size="sm" outline color="primary">
                        All Payout
                      </Button>
                    </td>
                  </tr>
                </tbody>

                {/* total balance */}
                <thead>
                  <tr>
                    <th className="border-bottom">Total Balance</th>
                    <th className="border-bottom">Value in (MYR)</th>
                    <th className="border-bottom">Total Value in</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      500,000 <span className="ml-3">RV</span>
                    </td>
                    <td>0.01</td>
                    <td>
                      5,000.00 <span>MYR</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      1,500.00 <span>SGD</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      1,250.00 <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr className="hr-dashed" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ResetHoldingModal
        isOpen={isOpenResetHodingModal}
        toggle={() => setIsOpenResetHodingModal(!isOpenResetHodingModal)}
      />
    </Page>
  );
};

export default WalletManagerPage;
