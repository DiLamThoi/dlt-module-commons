import { connect } from 'react-redux';
import JobView from './JobView';

const JobController = (props) => {
    const { id } = props;

    return (
        <JobView />
    )
}

const mapStateToProps = () => {};

const JobContainer = connect(mapStateToProps, null)(JobController);

export default JobContainer;
