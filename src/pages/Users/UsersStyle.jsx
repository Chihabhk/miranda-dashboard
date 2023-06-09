import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 50px;
    font-family: var(--font-Poppins);
    color: #393939;
`
const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`
const AddEmployee = styled.button`
    border: none;
    border-radius: 12px;
    background-color: #135846;
    color: white;
    font-family: var(--font-Poppins);
    cursor: pointer;
    a{
        text-decoration: none;
        color: white;
        display: block;
        padding: 10px 35px;
    }
`

const UserContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const UserImg = styled.div`
    width: 88px;
    height: 88px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;

    p{
        &:first-child{
            color: #212121;
            font-weight: 600;
        }

        &:nth-child(2n+1){
            color: #393939;
            font-size: 14px;
        }
    }
`

const UserActive = styled.p`
    color: #5AD07A;
    font-weight: 600;
`

const UserInactive = styled.p`
    color: #E23428;
    font-weight: 600;
`

const DeleteButton = styled.button`
    padding: 5px 10px;
    color: red;
    background-color: #FFEDEC;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export {
    MainContainer,
    OptionsContainer,
    ButtonsContainer,
    AddEmployee,
    UserContainer,
    UserImg,
    UserInfo,
    UserActive,
    UserInactive,
    DeleteButton
}