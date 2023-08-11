import { createAction } from "@reduxjs/toolkit";

export const JOB_ACTION = {
    CREATE_JOB: "jobAction.createJob",
}

const jobAction = {
    createJob: (jobId, data) => {
        const action = createAction(JOB_ACTION.CREATE_JOB)
        return action({ id: jobId, data })
    }
}

export default jobAction;
