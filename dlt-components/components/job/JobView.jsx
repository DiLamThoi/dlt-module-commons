
const JobView = (props) => {
    const { jobData } = props;

    const { 
        title,
        description,
        educationLevel,
        generalTitle,
        level,
        salary,
        location,
        type,
        hours,
        startTime,
        applicationDeadline,
        employerId,
    } = jobData

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span>{title}</span>
                <span>{description}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
                {salary}
            </div>
        </div>
    )
}

export default JobView;
