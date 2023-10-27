import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import JobView from './JobView';
import jobSelector from '../../../dlt-object-base/dlt-job/selector/jobSelector';

const JobContainer = (props) => {
    const { jobId } = props;

    const jobData = useSelector((state) => jobSelector.get(state, jobId));

    return (
        <JobView jobData={jobData}/>
    );
};

JobContainer.propTypes = {
    jobId: PropTypes.string,
};

export default JobContainer;
