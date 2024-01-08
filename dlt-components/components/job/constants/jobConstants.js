const JOB_FIELD = {
    TITLE: 'title',
    METHOD: 'methodId',
    // LEVEL: 'levelId',
    DEGREE: 'degreeId',
    EXPERIENCE: 'experienceId',
    AGE_MIN: 'ageMin',
    AGE_MAX: 'ageMax',
    GENDER: 'genderId',
    QUANTITY: 'quantity',
    PROBATION: 'probationTime',
    // APPLY_START_TIME: 'applyStartTime',
    APPLY_END_TIME: 'applyEndTime',
    APPLY_COUNT: 'applyCount',
    // SALARY_UNIT: 'salaryUnit', // Default = triệu VND
    SALARY_MIN: 'salaryMin',
    SALARY_MAX: 'salaryMax',
    DESCRIPTION: 'description',
    TOTAL_VIEW: 'totalView',
    // EMPLOYER: 'employerId',
};

// TruongNBN: hiện tại fix cứng các phương thức làm việc. Xử lý server sau
const JOB_METHOD = {
    FULLTIME_FIXED: 'JOB_METHOD.FULLTIME_FIXED',
    FULLTIME_TEMP: 'JOB_METHOD.FULLTIME_TEMP',
    PARTIME_FIXED: 'JOB_METHOD.PARTIME_FIXED',
    PARTIME_TEMP: 'JOB_METHOD.PARTIME_TEMP',
    CONTRACT: 'JOB_METHOD.CONTRACT',
    INTERN: 'JOB_METHOD.INTERN',
    OTHER: 'JOB_METHOD.OTHER',
};

// TruongNBN: hiện tại fix cứng các trình độ học vấn. Xử lý server sau
const JOB_DEGREE = {
    NONE: 'JOB_DEGREE.NONE',
    CERTIFICATE: 'JOB_DEGREE.CERTIFICATE',
    HIGH_SCHOOL: 'JOB_DEGREE.HIGH_SCHOOL',
    INTERMEDIATE: 'JOB_DEGREE.INTERMEDIATE',
    COLLEGE: 'JOB_DEGREE.COLLEGE',
    UNIVERSITY: 'JOB_DEGREE.UNIVERSITY',
    AFTER_UNIVERSITY: 'JOB_DEGREE.AFTER_UNIVERSITY',
};

// TruongNBN: hiện tại fix cứng các kinh nghiệm. Xử lý server sau
const JOB_EXPERIENCE = {
    NONE: 'JOB_EXPERIENCE.NONE',
    UNDER_1_YEAR: 'JOB_EXPERIENCE.UNDER_1_YEAR',
    ABOUT_1_YEAR: 'JOB_EXPERIENCE.ABOUT_1_YEAR',
    ABOUT_2_YEAR: 'JOB_EXPERIENCE.ABOUT_2_YEAR',
    ABOUT_3_YEAR: 'JOB_EXPERIENCE.ABOUT_3_YEAR',
    ABOUT_4_YEAR: 'JOB_EXPERIENCE.ABOUT_4_YEAR',
    ABOUT_5_YEAR: 'JOB_EXPERIENCE.ABOUT_5_YEAR',
    OVER_5_YEAR: 'JOB_EXPERIENCE.OVER_5_YEAR',
};

// TruongNBN: hiện tại fix cứng các giới tính. Xử lý server sau
const JOB_GENDER = {
    NONE: 'JOB_GENDER.NONE',
    MALE: 'JOB_GENDER.MALE',
    FEMALE: 'JOB_GENDER.FEMALE',
};

const JOB_TYPE_VIEW = {
    BUTTON: 'JOB_TYPE_VIEW.BUTTON',
    DETAIL: 'JOB_TYPE_VIEW.DETAIL',
};

export {
    JOB_FIELD,
    JOB_METHOD,
    JOB_DEGREE,
    JOB_EXPERIENCE,
    JOB_GENDER,
    JOB_TYPE_VIEW,
};
