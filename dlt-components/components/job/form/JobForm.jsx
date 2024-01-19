import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Typography, theme } from 'antd';
import { JOB_DEGREE, JOB_EXPERIENCE, JOB_FIELD, JOB_GENDER, JOB_METHOD } from '../constants/jobConstants';
import viDatePickerLocate from 'antd/es/date-picker/locale/vi_VN';
import { noop } from 'lodash/util';
import JobMethodSelect from '../fields/JobMethodSelect';
import JobDegreeSelect from '../fields/JobDegreeSelect';
import JobExperienceSelect from '../fields/JobExperienceSelect';
import JobGenderSelect from '../fields/JobGenderSelect';

const FORM_ITEM_TYPE = {
    INPUT: 'FORM_ITEM_TYPE.INPUT',
    SELECT: 'FORM_ITEM_TYPE.SELECT',
    DATE: 'FORM_ITEM_TYPE.DATE',
};

const JobForm = (props) => {
    const { style, onFinish, onClose } = props;

    const [form] = Form.useForm();
    const { token } = theme.useToken();

    const onResetForm = useCallback(() => {
        form.resetFields();
    }, [form]);

    const onFinishForm = useCallback((values) => {
        const jobData = { ...values };
        if (jobData[JOB_FIELD.APPLY_END_TIME]) {
            jobData[JOB_FIELD.APPLY_END_TIME] = jobData[JOB_FIELD.APPLY_END_TIME].valueOf();
        }
        onFinish(jobData);
        onResetForm();
    }, [onFinish, onResetForm]);

    const onFinishFailed = useCallback(({ values, errorFields, outOfDate }) => {
        const firstErrorField = errorFields[0].name[0];
        form.scrollToField(firstErrorField);
    }, [form]);

    const horizontal = useMemo(() => ({
        labelCol: {
            span: 8,
            style: {
                width: '100%',
                fontWeight: token.fontWeightStrong,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'start',
            },
        },
        wrapperCol: { span: 16 },
    }), [token]);

    const vertical = useMemo(() => ({
        labelCol: {
            span: 24,
            style: {
                paddingRight: token.paddingXS,
                paddingBottom: 0,
                fontWeight: token.fontWeightStrong,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'start',
            },
        },
        wrapperCol: { span: 24, style: { paddingRight: token.paddingXS } },
    }), [token]);
    
    const getRuleByKey = useCallback((key) => {
        switch (key) {
        case JOB_FIELD.TITLE:
            return [
                { required: true, message: 'Vui lòng nhập Chức vụ - Nghề nghiệp' },
                { max: 100, message: 'Độ dài tối đa là 100 ký tự' },
            ];
        case JOB_FIELD.METHOD:
        case JOB_FIELD.DEGREE:
        case JOB_FIELD.EXPERIENCE:
        case JOB_FIELD.GENDER:
        case JOB_FIELD.QUANTITY:
        case JOB_FIELD.APPLY_END_TIME:
            return [
                { required: true, message: '' },
            ];
        case JOB_FIELD.AGE_MIN:
        case JOB_FIELD.AGE_MAX:
            return [
                { required: true, message: '' },
                { validator(_, value) {
                    const age = parseInt(value, 10);
                    if (!isNaN(age) && age >= 16 && age <= 60) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('Độ tuổi từ 16 đến 60'));
                } },
            ];
        case JOB_FIELD.PROBATION:
        case JOB_FIELD.SALARY_MIN:
        case JOB_FIELD.SALARY_MAX:
            return [
                { required: true, message: '' },
                { validator(_, value) {
                    const probation = parseInt(value, 10);
                    if (!isNaN(probation) && probation >= 0) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error(''));
                } },
            ];
        case JOB_FIELD.DESCRIPTION:
            return [
                { max: 1000, message: 'Độ dài tối đa là 1000 ký tự' },
            ];
        default:
            return null;
        }
    }, []);

    return (
        <Form
            style={{ width: '100%', margin: '0 auto' }}
            form={form}
            onFinish={onFinishForm}
            onFinishFailed={onFinishFailed}
            onReset={onResetForm}
            autoComplete="off"
            size="middle"
            colon={false}
            {...horizontal}
        >
            {/* ----- Thông tin cơ bản -----  */}
            <Typography.Title level={4} style={{ margin: 0, marginBottom: token.marginXS }}>Thông tin cơ bản</Typography.Title>
            <Form.Item name={JOB_FIELD.TITLE} label="Chức vụ - Nghề nghiệp" rules={getRuleByKey(JOB_FIELD.TITLE)}>
                <Input placeholder="Vd: Nhân viên Marketing" autoFocus maxLength={100}/>
            </Form.Item>
            <Row gutter={[0, 0]} >
                <Col key={JOB_FIELD.METHOD} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.METHOD} label="Hình thức làm việc" {...vertical} rules={getRuleByKey(JOB_FIELD.METHOD)}>
                        <JobMethodSelect placeholder="Chọn" />
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.DEGREE} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.DEGREE} label="Trình độ học vấn" {...vertical} rules={getRuleByKey(JOB_FIELD.DEGREE)}>
                        <JobDegreeSelect placeholder="Chọn" />
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.EXPERIENCE} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.EXPERIENCE} label="Kinh nghiệm" {...vertical} rules={getRuleByKey(JOB_FIELD.EXPERIENCE)}>
                        <JobExperienceSelect placeholder="Chọn" />
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.AGE_MIN} xs={12} sm={12} md={12} lg={6} xl={4}>
                    <Form.Item name={JOB_FIELD.AGE_MIN} label="Độ tuổi tối thiểu" {...vertical} rules={getRuleByKey(JOB_FIELD.AGE_MIN)}>
                        <Input type="number" placeholder="Nhập số" />
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.AGE_MAX} xs={12} sm={12} md={12} lg={6} xl={4}>
                    <Form.Item name={JOB_FIELD.AGE_MAX} label="Độ tuổi tối đa" {...vertical} rules={getRuleByKey(JOB_FIELD.AGE_MAX)}>
                        <Input type="number" placeholder="Nhập số" />
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.GENDER} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.GENDER} label="Yêu cầu giới tính" {...vertical} rules={getRuleByKey(JOB_FIELD.GENDER)}>
                        <JobGenderSelect placeholder="Chọn" />
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.QUANTITY} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.QUANTITY} label="Số lượng cần tuyển" {...vertical} rules={getRuleByKey(JOB_FIELD.QUANTITY)}>
                        <Input type="number" placeholder="Nhập số"/>
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.PROBATION} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.PROBATION} label="Thời gian thử việc (tháng)" {...vertical} rules={getRuleByKey(JOB_FIELD.PROBATION)}>
                        <Input type="number" placeholder="Nhập số" min={0} max={10}/>
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.APPLY_END_TIME} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.APPLY_END_TIME} label="Hạn nộp hồ sơ" {...vertical} rules={getRuleByKey(JOB_FIELD.APPLY_END_TIME)}>
                        <DatePicker locale={viDatePickerLocate} style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            {/* ----- Địa chỉ làm việc (ToDo (TruongNBN): Cập nhật chọn theo employer) -----  */}
            {/* <Typography.Title level={4} style={{ margin: 0, marginBottom: token.marginXS }}>Địa chỉ làm việc</Typography.Title> */}
            {/* ----- Mức lương & Kỹ năng -----  */}
            <Typography.Title level={4} style={{ margin: 0, marginBottom: token.marginXS }}>Mức lương</Typography.Title>
            <Row gutter={[0, 0]}>
                <Col key={JOB_FIELD.SALARY_MIN} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.SALARY_MIN} label="Mức lương tối thiểu (triệu VND)" {...vertical} rules={getRuleByKey(JOB_FIELD.SALARY_MIN)}>
                        <Input type="number" placeholder="Nhập số"/>
                    </Form.Item>
                </Col>
                <Col key={JOB_FIELD.METHOD} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Form.Item name={JOB_FIELD.SALARY_MAX} label="Mức lương tối đa (triệu VND)" {...vertical} rules={getRuleByKey(JOB_FIELD.SALARY_MAX)}>
                        <Input type="number" placeholder="Nhập số"/>
                    </Form.Item>
                </Col>
            </Row>
            {/* ----- Mô tả công việc -----  */}
            <Typography.Title level={4} style={{ margin: 0, marginBottom: token.marginXS }}>Mô tả công việc</Typography.Title>
            <Form.Item name={JOB_FIELD.DESCRIPTION} label="Mô tả công việc" rules={getRuleByKey(JOB_FIELD.DESCRIPTION)}>
                <Input.TextArea placeholder="Vị trí công việc yêu cầu, trách nhiệm của ứng viên, ..." autoSize={{ minRows: 2, maxRows: 5 }} maxLength={1000}/>
            </Form.Item>
            {/* ----- Chức năng: CANCEL - RESET - SUBMIT -----  */}
            <Space style={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', gap: 8 }}>
                <Form.Item>
                    <Button type="primary" htmlType="button" style={{ backgroundColor: token.colorError }} onClick={onClose}>Huỷ</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="reset" style={{ backgroundColor: token.colorWarning }}>Làm mới</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: token.colorSuccess }}>Đăng</Button>
                </Form.Item>
            </Space>
        </Form>
    );
};

JobForm.propTypes = {
    style: PropTypes.object,
    onClose: PropTypes.func,
    onFinish: PropTypes.func,
};

JobForm.defaultProps = {
    onClose: noop,
    onFinish: noop,
};

export default JobForm;
