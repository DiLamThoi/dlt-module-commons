import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, theme } from 'antd';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import { showEmployerInfoBar } from '@dlt-components/components/inforBar/global/infoBarGlobal';

const EmployerButtonView = (props) => {
    const { data } = props;

    const { token } = theme.useToken();

    const { id, name, status, logo, address } = data;

    const onShowEmployerDetail = useCallback(() => {
        showEmployerInfoBar(id);
    }, [id]);

    return (
        <Button
            onClick={onShowEmployerDetail}
            style={{
                width: '100%',
                minWidth: 200,
                height: 'max-content',
                paddingLeft: token.paddingContentHorizontalSM,
                paddingRight: token.paddingContentHorizontalSM,
                paddingTop: token.paddingContentVerticalSM,
                paddingBottom: token.paddingContentVerticalSM,
            }}
        >
            <span style={{ marginBottom: token.margin }}>
                <EmployerLogoContainer employerId={id} width={100} height={100} style={{ objectFit: 'contain' }} />
            </span>
            <div
                style={{
                    color: token.colorTextSecondary,
                    fontWeight: token.fontWeightStrong,
                    maxWidth: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'center',
                }}
            >
                <EmployerNameContainer employerId={id} />
            </div>
        </Button>
    );
};

EmployerButtonView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        status: PropTypes.number,
        logo: PropTypes.string,
        address: PropTypes.string,
    }),
};

EmployerButtonView.defaultProps = {};

export default EmployerButtonView;
