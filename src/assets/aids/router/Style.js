import styled from 'styled-components'
import Colors from '../../aids/Colors'

const { mainColor, navColor, navColorHover, whiteColor } = Colors

export const RouterParent = styled.div`

    nav{
        left: 0;
        top: 0;
        bottom: 0;
        background-color: ${navColor};
        width: 250px; 
        position: fixed;
        z-index: 999;
        transition: all .2s ease;

        @media (max-width: 768px) {
            left: -100%;
        }

        &.open{
            left: 0 !important;
        }
    
        ul{
            height: 100%;
        }
    
        a{
            display: block;
            padding: 20px 15px;
            color: ${whiteColor};
            transition: all .2s linear;            

            &:hover{
                color: ${mainColor};
                background-color: ${navColorHover}
            }
        }
    }

    .humb{
        z-index: 998;
        right: 15px;
        top: 15px;
        background-color: ${mainColor};
        border-radius: 5px;
        width: 50px;
        height: 50px;
    }
`