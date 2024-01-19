import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import jobSelector from '@dlt-module-job/selector/jobSelector';
import JobButtonView from './JobButtonView';
import JobDetailView from './JobDetailView';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';
import { JOB_FIELD, JOB_TYPE_VIEW } from './constants/jobConstants';
import { useAccount } from '@dlt-components/hooks';
import { employerApiAction } from '@dlt-object-base/dlt-employer/actions/employerActions';
import employerSelector from '@dlt-object-base/dlt-employer/selector/employerSelector';

const JobContainer = (props) => {
    const { jobId, typeView } = props;
    const dispatch = useDispatch();
    const jobData = useSelector((state) => jobSelector.getInfo(state, jobId, 'data'));
    const employer = useSelector((state) => employerSelector.get(state, jobData && jobData[JOB_FIELD.EMPLOYER]));
    const { meId, isEmployer } = useAccount();

    const isOwn = useMemo(() => isEmployer && jobData && meId === jobData[JOB_FIELD.EMPLOYER], [isEmployer, jobData, meId]);

    useEffect(() => {
        if (jobData && jobData[JOB_FIELD.EMPLOYER] && !employer) dispatch(employerApiAction.fetchAnEmployer(jobData[JOB_FIELD.EMPLOYER]));
    }, [dispatch, employer, jobData]);

    const onFollowJob = useCallback(() => {
        // Dispath Folowjob action here
    }, []);

    const onDeleteJob = useCallback((id) => {
        if (isOwn) dispatch(jobApiAction.deleteJob(id));
    }, [dispatch, isOwn]);

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
        <JobViewComponent data={jobData} isOwn={isOwn} onFollow={onFollowJob} onDelete={onDeleteJob} />
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
