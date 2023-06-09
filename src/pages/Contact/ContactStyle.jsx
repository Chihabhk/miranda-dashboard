import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 50px 20px;
    font-family: var(--font-Poppins);
    color: #393939;
`

const OptionsContainer = styled.div`
    margin-top: 85px;
    display: flex;
    justify-content: space-between;
`
const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

const ReviewsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 20px;
`

const Archived = styled.div`
    color: #939393;
    p:nth-child(2n){
        color: #afafaf;
        font-size: 12px
    }
`

const ButtonArchived = styled.button`
    cursor: pointer;
    color: red;
    border: none;
    background: none;
    font-size: 16px;
`

const Comment = styled.p`
    height: 55px;
    max-width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-top: 15px;
`

export {
    MainContainer,
    OptionsContainer,
    ButtonsContainer,
    ReviewsContainer,
    Archived,
    ButtonArchived,
    Comment
}