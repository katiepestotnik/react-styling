import { createUseStyles } from "react-jss"

const Button = ({ buttonText, styleText, weight }) => {
    const buttonStyle = createUseStyles({
        button: {
            backgroundColor: '#24292e',
            borderRadius: '8px',
            color: '#f7df1c',
            fontSize: styleText,
            padding: '15px 50px',
            width: '300px',
            fontWeight: weight
        }
    })
    const classes = buttonStyle()
    return (
        <button className={classes.button}>{buttonText}</button>
    )
}
export default Button