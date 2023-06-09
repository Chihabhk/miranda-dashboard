import styled from 'styled-components';

const MainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: 'Poppins', 'sans-serif';
`;

const Form = styled.form`
    height: 60%;
    width: 50%;
    box-shadow: 0px 10px 24px rgba(126, 126, 126, 0.25);
    align-self: center;
    padding: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 100px;

    @media (max-width: 850px){
        width: 90%;
    }
`

const Message = styled.h2`
    margin-bottom: 30px;
`

const Label = styled.label`
    margin-bottom: 10px;
`

const Input = styled.input`
    width: min(320px, 80%);
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background: none;
`

const Button = styled.input`
    padding: 20px;
    font-family: 'Poppins', 'sans-serif';
    margin-top: 20px;
    max-width: 120px;
    margin: 20px auto;
    background: none;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 10px;
`

export {
    MainContainer,
    Form,
    Message,
    Label,
    Input,
    Button

};