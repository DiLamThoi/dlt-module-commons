// import React, { useState } from 'react';

import JobContainer from "../../components/job/JobContainer";

const JobListScreen = () => {
  const jobIds = ['job1', 'job2', 'job3']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: "24px 16px" }}>
      {jobIds.map((jobId) => (
        <div  style={{ width: '100%', padding:'12px 8px', backgroundColor: '#fff' , borderRadius: 10 }}>
          <JobContainer jobId={jobId}/>
        </div>
      ))}
    </div>
  );
};

export default JobListScreen;
