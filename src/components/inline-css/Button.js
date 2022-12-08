const Button = ({ buttonText, backgroundColor }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        borderRadius: '8px',
        color: '#fff',
        fontSize: '24pt',
        padding: '15px 50px',
        width: '300px'
    }
    return (
        <button style={buttonStyle}>{buttonText}</button>
    )
}
export default Button