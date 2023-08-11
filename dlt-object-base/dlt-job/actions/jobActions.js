import { createAction } from "@reduxjs/toolkit";

export const JOB_ACTION = {
    GET_JOB: "jobAction.getJob",
}

const jobAction = {
    getJob: (jobId) => createAction(JOB_ACTION.GET_JOB)
}

export default jobAction;
