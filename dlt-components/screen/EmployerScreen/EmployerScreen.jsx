import React, { useEffect } from 'react';

// Components
import { Col, Row } from 'antd';

// Selector + Action
import { useDispatch, useSelector } from 'react-redux';
import { employerApiAction } from '@dlt-object-base/dlt-employer/actions/employerActions';
import hasEmployerSelector from '@dlt-object-base/dlt-employer/selector/hasEmployerSelector';
import EmployerContainer from '@dlt-components/components/employer/EmployerContainer';
import { EMPLOYER_TYPE_VIEW } from '@dlt-components/components/employer/constants/employerConstants';
import WrapperScreen from '../WrapperScreen';

const EmployerScreen = () => {
    const dispatch = useDispatch();
    const employerIds = useSelector((state) => hasEmployerSelector.getItemIds(state, '-1'));

    useEffect(() => {
        dispatch(employerApiAction.fetchEmployer('meId'));
    }, [dispatch]);

    return (
        <WrapperScreen>
            <Row gutter={[16, 16]}>
                {employerIds.map((employerId) => (
                    <Col key={employerId} xs={24} sm={24} md={12} lg={8} xl={6}>
                        <EmployerContainer key={employerId} employerId={employerId} typeView={EMPLOYER_TYPE_VIEW.BUTTON}/>
                    </Col>
                ))}
            </Row>
        </WrapperScreen>
    );
};

export default EmployerScreen;
