import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import EmployerButtonView from './EmployerButtonView';
import EmployerDetailView from './EmployerDetailView';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';
import { EMPLOYER_TYPE_VIEW } from './constants/employerConstants';
import hasJobSelector from '@dlt-object-base/dlt-job/selector/hasJobSelector';

const EmployerContainer = (props) => {
    const { employerId, typeView } = props;

    const employerData = useSelector((state) => employerSelector.getInfo(state, employerId, 'data'));
    const jobIds = useSelector((state) => hasJobSelector.getItemIds(state, employerId));

    const EmployerViewComponent = useMemo(() => {
        switch (typeView) {
        case EMPLOYER_TYPE_VIEW.BUTTON:
            return EmployerButtonView;
        case EMPLOYER_TYPE_VIEW.DETAIL:
            return EmployerDetailView;
        default: 
            return EmployerDetailView;
        }
    }, [typeView]);

    return employerData && (
        <EmployerViewComponent data={employerData} jobIds={jobIds}/>
    );
};

EmployerContainer.propTypes = {
    employerId: PropTypes.string,
    typeView: PropTypes.oneOf([EMPLOYER_TYPE_VIEW.BUTTON, EMPLOYER_TYPE_VIEW.DETAIL]),
};

EmployerContainer.defaultProps = {
    typeView: EMPLOYER_TYPE_VIEW.DETAIL,
};

export default EmployerContainer;
