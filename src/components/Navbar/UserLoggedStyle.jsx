import styled from 'styled-components';

const UserCard = styled.div`
    box-shadow: 0px 20px 30px #00000014;
    padding: 20px;
    text-align: center;
    border-radius: 18px;
`

const UserImg = styled.div`
    width: 70px;
    height: 70px;
    margin: 0 auto;
    margin-bottom: 15px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

const UserName = styled.h2`
    font-size: 16px;
    color: #393939;
    margin-bottom: 10px;
`

const UserEmail = styled.p`
    font-size: 12px;
    color: #B2B2B2;
    margin-bottom: 15px;
`

const UserEdit = styled.button`
    background-color: ${props => props.variant? "#f1ebeb" : "#EBF1EF"};
    border: none;
    color: ${props => props.variant? "#581313": "#135846"} ;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 30px;
    border-radius: 8px;
    cursor: pointer;

    
`

export{
    UserCard,
    UserImg,
    UserName,
    UserEmail,
    UserEdit
}