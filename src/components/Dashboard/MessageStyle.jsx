import styled from 'styled-components';

const MessagesCard = styled.div`
    border-radius: 20px;
    border: 1px solid #EBEBEB;
    max-width: 431px;
    padding: 20px;
    background-color: white;
    transition: all .2s;

    &:hover{
        box-shadow: 0px 16px 30px #00000014;
        transform: scale(1.02);
        transition: all .2s;
    }
`

const MessageText = styled.p`
    font-size: 16px;
    color: #4E4E4E;
    margin-bottom: 20px;
`

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const UserContainer = styled.div`
    display: flex;
    gap: 20px;
`

const PhotoContainer = styled.div`
    width: 55px;
    height: 55px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`

const UserData = styled.div`
    color: #799283;
    font-size: 14px;

    p:first-child{
        color: #262626;
        font-size: 16px;
        font-weight: 600;
    }
`

const Actions = styled.div`
    display: flex;
    gap: 20px;
    
    button{
        cursor: pointer;
        align-self: flex-end;
        width: 25px;
        height: 25px;
        background: none;
        border: 1px solid green;
        color: green;
        border-radius: 50%;

        &:nth-child(2n){
            color: red;
            border-color: red;
        }
    }
`

export{
    MessagesCard,
    OptionsContainer,
    MessageText,
    UserContainer,
    PhotoContainer,
    UserData,
    Actions
}