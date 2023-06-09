import styled from 'styled-components';

const HeaderStyled = styled.div`
    width: 100%;
    padding: 20px;
    font-family: var(--font-Poppins);
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-content: center;
    box-shadow: 0px 3px 10px #00000005;

`

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
    svg{
        margin-right: 30px;
        cursor: pointer;
    }
`
const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    color: #135846;
    gap: 30px;
    margin: 0 20px;
    font-size: 24px;
    svg{
        cursor: pointer;
    }
`

export {
    HeaderStyled,
    MenuContainer,
    IconsContainer,
}