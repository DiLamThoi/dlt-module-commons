import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Select, theme } from 'antd';
import { JOB_METHOD } from '../constants/jobConstants';

const JobMethodSelect = (props) => {
    const { jobId, ...other } = props;
    const { token } = theme.useToken();

    const JobMethodOptions = useMemo(() => ([
        { value: JOB_METHOD.FULLTIME_FIXED, label: 'Toàn thời gian cố định' },
        { value: JOB_METHOD.FULLTIME_TEMP, label: 'Toàn thời gian tạm thời' },
        { value: JOB_METHOD.PARTIME_FIXED, label: 'Bán thời gian cố định' },
        { value: JOB_METHOD.PARTIME_TEMP, label: 'Bán thời gian tạm thời' },
        { value: JOB_METHOD.CONTRACT, label: 'Theo hợp đồng' },
        { value: JOB_METHOD.INTERN, label: 'Thực tập' },
        { value: JOB_METHOD.OTHER, label: 'Khác' },
    ]), []);

    return <Select options={JobMethodOptions} {...other} />;
};

JobMethodSelect.propTypes = {
    jobId: PropTypes.string,
};

JobMethodSelect.defaultProps = {};

export default JobMethodSelect;
