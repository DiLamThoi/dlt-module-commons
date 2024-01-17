import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { theme, Input, Button } from 'antd';
import { noop } from 'lodash/util';
import JobDegreeSelect from '../fields/JobDegreeSelect';
import JobGenderSelect from '../fields/JobGenderSelect';
import JobMethodSelect from '../fields/JobMethodSelect';
import JobExperienceSelect from '../fields/JobExperienceSelect';

const JobSearchBarView = (props) => {
    const { onSearch } = props;
    const { token } = theme.useToken();

    const [isShowFilter, setIsShowFilter] = useState(false);
    const [filterHeight, setFilterHeight] = useState(0);

    const onClickFilterButton = useCallback((e) => {
        setIsShowFilter((prev) => !prev);
    }, []);

    const onSetFilterRef = useCallback((ref) => {
        if (ref) setFilterHeight(ref.offsetHeight);
        else setFilterHeight(0);
    }, []);

    return (
        <div style={{ position: 'relative', marginBottom: filterHeight }}>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    backgroundColor: token.yellow2,
                    padding: token.padding,
                    borderRadius: token.borderRadius,
                    gap: 8,
                }}
            >
                <Input size="large" onPressEnter={onSearch} placeholder="Tìm kiếm việc làm" style={{ flex: 1 }} />
                <Button type="primary" size="large" onClick={onSearch} >Tìm kiếm</Button>
                <Button type="primary" size="large" onClick={onClickFilterButton} style={{ backgroundColor: token.blue8 }}>
                    Lọc nâng cao
                </Button>
            </div>
            {isShowFilter && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: - filterHeight + 10,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: token.colorBgBase,
                        padding: token.padding,
                        borderRadius: token.borderRadius,
                        boxShadow: token.boxShadowSecondary,
                        gap: 8,
                    }}
                    ref={onSetFilterRef}
                >
                    <span style={{ fontSize: token.fontSizeXS, color: token.colorTextDisabled, fontWeight: token.fontWeightStrong }}>
                        Bộ lọc:
                    </span>
                    <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        <JobMethodSelect placeholder="Hình thức làm việc" style={{ minWidth: 100 }} />
                        <JobDegreeSelect placeholder="Trình độ học vấn" style={{ minWidth: 100 }} />
                        <JobExperienceSelect placeholder="Kinh nghiệm" style={{ minWidth: 100 }} />
                        <JobGenderSelect placeholder="Yêu cầu giới tính" style={{ minWidth: 100 }} />
                    </div>
                </div>
            )}
        </div>
    );
};

JobSearchBarView.propTypes = {
    onSearch: PropTypes.func,
};

JobSearchBarView.defaultProps = {
    onSearch: noop,
};

export default JobSearchBarView;
