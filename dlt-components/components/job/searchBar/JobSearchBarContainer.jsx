import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import JobSearchBarView from './JobSearchBarView';

const JobSearchBarContainer = (props) => {
    const dispatch = useDispatch();

    const onSearchJob = useCallback(() => {
        // Dispatch SearchJob action
    }, []);

    return <JobSearchBarView onSearch={onSearchJob} />;
};

JobSearchBarContainer.propTypes = {};

JobSearchBarContainer.defaultProps = {};

export default JobSearchBarContainer;
