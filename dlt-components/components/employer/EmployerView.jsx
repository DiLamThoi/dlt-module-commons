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

    const { name, status, logo, address } = data;

    return (
        <Button style={{ width: '100%', minWidth: 300, height: 'max-content', padding: '12px 8px' }}>
            {data.id}
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
