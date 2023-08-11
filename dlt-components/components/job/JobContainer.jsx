import { connect } from 'react-redux';
import JobView from './JobView';
import jobAction from '../../../dlt-object-base/dlt-job/actions/jobActions';

const JobController = (props) => {
    const { jobId, createJob } = props;

    return (
        <JobView />
    )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        createJob: (jobId, data) => dispatch(jobAction.createJob(jobId, data))
    }
}

const JobContainer = connect(mapStateToProps,mapDispatchToProps)(JobController);

export default JobContainer;
