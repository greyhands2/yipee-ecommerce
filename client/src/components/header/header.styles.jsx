import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

// const OptionContainerStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;  
// `;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 40px;
`;

export const ImageStyles = styled.img`
    height: 45px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px;
      
`;

export const OptionLink = styled(Link)`
     padding: 10px 15px;
     cursor: pointer;    
`;

export const OptionsContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end; 

`;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;
