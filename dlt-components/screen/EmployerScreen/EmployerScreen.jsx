import React, { useEffect } from 'react';

// Components
import { Col, Row } from 'antd';

// Selector + Action
import { useDispatch, useSelector } from 'react-redux';
import employerAction from '@dlt-object-base/dlt-employer/actions/employerActions';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';
import EmployerContainer from '@dlt-components/components/employer/EmployerContainer';

const EmployerScreen = () => {
    const dispatch = useDispatch();
    const employerIds = useSelector((state) => employerSelector.getItemIds(state));

    useEffect(() => {
        dispatch(employerAction.fetchEmployer());
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 8 }}>
            <Row gutter={[16, 16]}>
                {employerIds.map((employerId) => (
                    <Col key={employerId} xs={24} sm={24} md={24} lg={12} xl={8}>
                        <EmployerContainer key={employerId} employerId={employerId}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default EmployerScreen;
