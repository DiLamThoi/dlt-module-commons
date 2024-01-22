import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import { InfoBarInstant } from '@dlt-components/components/inforBar/global/infoBarGlobal';
import { useGroupEmployerContext } from '@dlt-components/context/GroupEmployerContext';
import { useHover, useToken } from '@dlt-components/hooks';

const EmployerButtonView = (props) => {
    const { data } = props;

    const token = useToken();
    const [ref, hovering] = useHover();
    const { selectedEmployerId } = useGroupEmployerContext();

    const { id, name, status, logo, address } = data;

    const onShowEmployerDetail = useCallback(() => {
        InfoBarInstant.showEmployerInfoBar(id);
    }, [id]);

    return (
        <div
            ref={ref}
            onClick={onShowEmployerDetail}
            style={{
                width: '100%',
                minWidth: 200,
                height: 'max-content',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                paddingLeft: token.paddingContentHorizontalSM,
                paddingRight: token.paddingContentHorizontalSM,
                paddingTop: token.paddingContentVerticalSM,
                paddingBottom: token.paddingContentVerticalSM,
                borderRadius: token.borderRadiusLG,
                backgroundColor: (id === selectedEmployerId || hovering) ? token.colorBgTextActive : token.colorBgContainer,
            }}
        >
            <div style={{ width: 80 }}>
                <EmployerLogoContainer employerId={id} width={80} height={80} style={{ objectFit: 'contain' }} />
            </div>
            <span
                style={{
                    color: token.colorTextSecondary,
                    fontWeight: token.fontWeightStrong,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                <EmployerNameContainer employerId={id} />
            </span>
        </div>
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
