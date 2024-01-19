import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { JOB_GENDER } from '../constants/jobConstants';
import { useToken } from '@dlt-components/hooks';

const JobGenderSelect = (props) => {
    const { jobId, ...other } = props;
    const token = useToken();

    const JobGenderOptions = useMemo(() => ([
        { value: JOB_GENDER.NONE, label: 'Không yêu cầu' },
        { value: JOB_GENDER.MALE, label: 'Nam' },
        { value: JOB_GENDER.FEMALE, label: 'Nữ' },
    ]), []);

    return <Select options={JobGenderOptions} {...other} />;
};

JobGenderSelect.propTypes = {
    jobId: PropTypes.string,
};

JobGenderSelect.defaultProps = {};

export default JobGenderSelect;
