import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, theme } from 'antd';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';

const EmployerView = (props) => {
    const { data } = props;

    const { token } = theme.useToken();

    const { id, name, status, logo, address } = data;

    return (
        <Button
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

EmployerView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        status: PropTypes.number,
        logo: PropTypes.string,
        address: PropTypes.string,
    }),
};

EmployerView.defaultProps = {};

export default EmployerView;
