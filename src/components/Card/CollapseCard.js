import React, { useState } from 'react';
import { Collapse, Row, CardBody, Card, CardHeader, Col } from 'reactstrap';
import { AiOutlineCaretDown, AiOutlineCaretRight } from 'react-icons/ai';
import PropTypes from 'utils/propTypes';
import classnames from 'classnames';
const CollapseCard = ({ title, className, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Card className={classnames('border-0', className)}>
        <CardHeader>
          <Row className="pointer" onClick={() => setIsOpen(!isOpen)}>
            <Col className="d-flex">
              <span>{title}</span>
              <span className="ml-auto">
                {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}
              </span>
            </Col>
          </Row>
        </CardHeader>
        <Collapse isOpen={isOpen}>
          <CardBody>{children}</CardBody>
        </Collapse>
      </Card>
    </>
  );
};

CollapseCard.propsType = {
  title: PropTypes.string,
};
export default CollapseCard;
