import styled from "styled-components"
const Button = ({ buttonText, textColor }) => {
    const StyledButton = styled.button`
        background-color: #86ba8a;
        border-radius: 8px;
        font-size: 24pt;
        padding: 15px 50px;
        width: 300px;
        color: ${textColor};
    `

    return (
        <StyledButton>{buttonText }</StyledButton>
    )
}
export default Button