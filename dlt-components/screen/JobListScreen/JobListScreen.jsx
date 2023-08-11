// import React, { useState } from 'react';

import JobContainer from "../../components/job/JobContainer";

const JobListScreen = () => {
  return (
    <div>
      <JobContainer jobId={'job1'} />
      <JobContainer jobId={'job2'} />
      <JobContainer jobId={'job3'} />
    </div>
  );
};

export default JobListScreen;
