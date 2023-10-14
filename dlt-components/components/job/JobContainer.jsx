import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import JobView from './JobView';

const JobContainer = (props) => {
    const { jobId } = props;

    const jobData = useSelector((state) => state.Job[jobId]);

    return (
        <JobView jobData={jobData}/>
    )
}

JobContainer.propTypes = {
    jobId: PropTypes.string,
}

export default JobContainer;
