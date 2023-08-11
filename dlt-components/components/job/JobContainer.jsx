import { connect } from 'react-redux';
import JobView from './JobView';
import jobAction from '../../../dlt-object-base/dlt-job/actions/jobActions';

const JobController = (props) => {
    const { id, getJob } = props;
    
    const job = getJob(id)
    console.log(job)

    return (
        <JobView />
    )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        getJob: (jobId) => dispatch(jobAction.getJob(jobId))
    }
}

const JobContainer = connect(mapStateToProps,mapDispatchToProps)(JobController);

export default JobContainer;
