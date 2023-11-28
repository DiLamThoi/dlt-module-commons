import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import EmployerAddressContainer from '@dlt-components/components/employer/employerAddress/EmployerAddressContainer';

const EmployerView = (props) => {
    const { data } = props;

    const { id, name, status, logo, address } = data;

    return (
        <Button style={{ width: '100%', flexDirection: 'column', minWidth: 200, height: 'max-content', padding: '12px 8px' }}>
            <EmployerLogoContainer employerId={id} width={100} height={100} style={{ objectFit: 'contain' }} />
            {/* <EmployerNameContainer employerId={id} /> */}
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
