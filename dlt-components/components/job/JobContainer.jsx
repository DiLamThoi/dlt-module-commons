import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import jobSelector from '@dlt-module-job/selector/jobSelector';
import JobButtonView from './JobButtonView';
import JobDetailView from './JobDetailView';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';
import { JOB_TYPE_VIEW } from './constants/jobConstants';
import useAccount from '@dlt-components/hooks/useAccount';

const JobContainer = (props) => {
    const { jobId, typeView } = props;
    const dispatch = useDispatch();

    const jobData = useSelector((state) => jobSelector.getInfo(state, jobId, 'data'));
    const { meId, role, isEmployer } = useAccount();

    const onFollowJob = useCallback(() => {
        // Dispath Folowjob action here
    }, []);

    const onDeleteJob = useCallback((id) => {
        dispatch(jobApiAction.deleteJob(id));
    }, [dispatch]);

    const JobViewComponent = useMemo(() => {
        switch (typeView) {
        case JOB_TYPE_VIEW.BUTTON:
            return JobButtonView;
        case JOB_TYPE_VIEW.DETAIL:
            return JobDetailView;
        default: 
            return JobButtonView;
        }
    }, [typeView]);

    return jobData && (
        <JobViewComponent data={jobData} onFollow={onFollowJob} onDelete={onDeleteJob} />
    );
};

JobContainer.propTypes = {
    jobId: PropTypes.string,
    typeView: PropTypes.oneOf([JOB_TYPE_VIEW.BUTTON, JOB_TYPE_VIEW.DETAIL]),
};

JobContainer.defaultProps = {
    typeView: JOB_TYPE_VIEW.DETAIL,
};

export default JobContainer;
