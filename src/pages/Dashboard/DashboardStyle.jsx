import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 50px;
    font-family: var(--font-Poppins);
    display: flex;
    flex-wrap: wrap;
`

const  KpisContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`

const ReviewsContainer = styled.div`
    margin-top: 30px;
    background-color: white;
    width: 100%;
    border-radius: 12px;
    padding: 20px;

    h3{
        font-size: 20px;
        color: #393939;
        font-weight: 400;
    }
`

const MessagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 20px;
`

export{
    MainContainer,
    KpisContainer,
    ReviewsContainer,
    MessagesContainer
}