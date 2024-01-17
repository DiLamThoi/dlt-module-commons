import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Select, theme } from 'antd';
import { JOB_DEGREE } from '../constants/jobConstants';

const JobDegreeSelect = (props) => {
    const { jobId, ...other } = props;
    const { token } = theme.useToken();

    const JobDegreeOptions = useMemo(() => ([
        { value: JOB_DEGREE.NONE, label: 'Không yêu cầu' },
        { value: JOB_DEGREE.CERTIFICATE, label: 'Chứng chỉ' },
        { value: JOB_DEGREE.HIGH_SCHOOL, label: 'Trung học' },
        { value: JOB_DEGREE.INTERMEDIATE, label: 'Trung cấp' },
        { value: JOB_DEGREE.COLLEGE, label: 'Cao đẳng' },
        { value: JOB_DEGREE.UNIVERSITY, label: 'Đại học' },
        { value: JOB_DEGREE.AFTER_UNIVERSITY, label: 'Trên đại học' },
    ]), []);

    return <Select options={JobDegreeOptions} {...other} />;
};

JobDegreeSelect.propTypes = {
    jobId: PropTypes.string,
};

JobDegreeSelect.defaultProps = {};

export default JobDegreeSelect;
