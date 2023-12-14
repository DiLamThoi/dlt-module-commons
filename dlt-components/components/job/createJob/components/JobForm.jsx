import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, theme } from 'antd';
import { JOB_DEGREE, JOB_EXPERIENCE, JOB_FIELD, JOB_GENDER, JOB_METHOD } from '../../constants/jobConstants';
import viDatePickerLocate from 'antd/es/date-picker/locale/vi_VN';
import { noop } from 'lodash/util';

const JobForm = (props) => {
    const { style, onFinish, onFinishFailed } = props;

    const [form] = Form.useForm();
    const { token } = theme.useToken();

    const JobMethodOptions = useMemo(() => ([
        { value: JOB_METHOD.FULLTIME_FIXED, label: 'Toàn thời gian cố định' },
        { value: JOB_METHOD.FULLTIME_TEMP, label: 'Toàn thời gian tạm thời' },
        { value: JOB_METHOD.PARTIME_FIXED, label: 'Bán thời gian cố định' },
        { value: JOB_METHOD.PARTIME_TEMP, label: 'Bán thời gian cố định' },
        { value: JOB_METHOD.CONTRACT, label: 'Theo hợp đồng' },
        { value: JOB_METHOD.INTERN, label: 'Thực tập' },
        { value: JOB_METHOD.OTHER, label: 'Khác' },
    ]), []);

    const JobDegreeOptions = useMemo(() => ([
        { value: JOB_DEGREE.NONE, label: 'Không yêu cầu' },
        { value: JOB_DEGREE.CERTIFICATE, label: 'Chứng chỉ' },
        { value: JOB_DEGREE.HIGH_SCHOOL, label: 'Trung học' },
        { value: JOB_DEGREE.INTERMEDIATE, label: 'Trung cấp' },
        { value: JOB_DEGREE.COLLEGE, label: 'Cao đẳng' },
        { value: JOB_DEGREE.UNIVERSITY, label: 'Đại học' },
        { value: JOB_DEGREE.AFTER_UNIVERSITY, label: 'Trên đại học' },
    ]), []);

    const JobExperienceOptions = useMemo(() => ([
        { value: JOB_EXPERIENCE.NONE, label: 'Chưa có kinh nghiệm' },
        { value: JOB_EXPERIENCE.UNDER_1_YEAR, label: 'Dưới 1 năm' },
        { value: JOB_EXPERIENCE.ABOUT_1_YEAR, label: '1 năm' },
        { value: JOB_EXPERIENCE.ABOUT_2_YEAR, label: '2 năm' },
        { value: JOB_EXPERIENCE.ABOUT_3_YEAR, label: '3 năm' },
        { value: JOB_EXPERIENCE.ABOUT_4_YEAR, label: '4 năm' },
        { value: JOB_EXPERIENCE.ABOUT_5_YEAR, label: '5 năm' },
        { value: JOB_EXPERIENCE.OVER_5_YEAR, label: 'Trên 5 năm' },
    ]), []);

    const JobGenderOptions = useMemo(() => ([
        { value: JOB_GENDER.NONE, label: 'Không yêu cầu' },
        { value: JOB_GENDER.MALE, label: 'Nam' },
        { value: JOB_GENDER.FEMALE, label: 'Nữ' },
    ]), []);

    return (
        <Form
            style={{ width: '100%' }}
            form={form}
            labelCol={{ span: 8, style: { fontWeight: token.fontWeightStrong, textAlign: 'start' } }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="middle"
        >
            <Form.Item name={JOB_FIELD.TITLE} label="Chức vụ - Nghề nghiệp">
                <Input placeholder="Vd: Nhân viên Marketing"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.METHOD} label="Hình thức làm việc">
                <Select placeholder="Chọn" options={JobMethodOptions}/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.DEGREE} label="Trình độ học vấn">
                <Select placeholder="Chọn" options={JobDegreeOptions}/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.EXPERIENCE} label="Kinh nghiệm">
                <Select placeholder="Chọn" options={JobExperienceOptions}/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.AGE_MIN} label="Độ tuổi tối thiểu">
                <Input type="number" placeholder="Nhập số"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.AGE_MAX} label="Độ tuổi tối đa">
                <Input type="number" placeholder="Nhập số"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.GENDER} label="Yêu cầu giới tính">
                <Select placeholder="Chọn" options={JobGenderOptions}/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.QUANTITY} label="Số lượng cần tuyển">
                <Input type="number" placeholder="Nhập số"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.PROBATION} label="Thời gian thử việc">
                <Input type="number" placeholder="Nhập số"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.APPLY_END_TIME} label="Hạn nộp hồ sơ">
                <DatePicker locale={viDatePickerLocate} />
            </Form.Item>
            <Form.Item name={JOB_FIELD.SALARY_MIN} label="Mức lương tối thiểu">
                <Input type="number" placeholder="Nhập số"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.SALARY_MAX} label="Mức lương tối đa">
                <Input type="number" placeholder="Nhập số"/>
            </Form.Item>
            <Form.Item name={JOB_FIELD.DESCRIPTION} label="Mô tả công việc">
                <Input placeholder="Vị trí công việc yêu cầu, trách nhiệm của ứng viên, ..."/>
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#42b72a' }}>
                    Đăng
                </Button>
            </Form.Item>
        </Form>
    );
};

JobForm.propTypes = {
    style: PropTypes.object,
    onFinish: PropTypes.func,
    onFinishFailed: PropTypes.func,
};

JobForm.defaultProps = {
    onFinish: noop,
    onFinishFailed: noop,
};

export default JobForm;
