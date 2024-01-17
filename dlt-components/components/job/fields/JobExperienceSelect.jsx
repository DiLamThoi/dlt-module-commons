import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Select, theme } from 'antd';
import { JOB_EXPERIENCE } from '../constants/jobConstants';

const JobExperienceSelect = (props) => {
    const { jobId, ...other } = props;
    const { token } = theme.useToken();

    const JobExperienceOptions = useMemo(() => ([
        { value: JOB_EXPERIENCE.NONE, label: 'Chưa có kinh nghiệm' },
        { value: JOB_EXPERIENCE.UNDER_1_YEAR, label: 'Dưới 1 năm' },
        { value: JOB_EXPERIENCE.ABOUT_1_YEAR, label: '1 năm' },
        { value: JOB_EXPERIENCE.ABOUT_2_YEAR, label: '2 năm' },
        { value: JOB_EXPERIENCE.ABOUT_3_YEAR, label: '3 năm' },
        { value: JOB_EXPERIENCE.ABOUT_4_YEAR, label: '4 năm' },
        { value: JOB_EXPERIENCE.ABOUT_5_YEAR, label: '5 năm' },
        { value: JOB_EXPERIENCE.OVER_5_YEAR, label: 'Trên 5 năm' },
    ]), []);

    return <Select options={JobExperienceOptions} {...other} />;
};

JobExperienceSelect.propTypes = {
    jobId: PropTypes.string,
};

JobExperienceSelect.defaultProps = {};

export default JobExperienceSelect;
