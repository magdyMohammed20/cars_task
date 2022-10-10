import styled from 'styled-components'
import Colors from '../Colors'


const { mainColor } = Colors


export const Span = styled.span`
    color: ${mainColor}
`;

export const LoadingOverlay = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #191b22ed;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center
`;

