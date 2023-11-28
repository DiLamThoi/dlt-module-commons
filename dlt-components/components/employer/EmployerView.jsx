import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from 'antd';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';

const EmployerView = (props) => {
    const { data } = props;

    const { id, name, status, logo, address } = data;

    return (
        <Button style={{ width: '100%', minWidth: 100, height: 'max-content', padding: '12px 8px' }}>
            <span style={{ marginBottom: 16 }}>
                <EmployerLogoContainer employerId={id} width={100} height={100} style={{ objectFit: 'contain' }} />
            </span>
            <div style={{ maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center' }}>
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
