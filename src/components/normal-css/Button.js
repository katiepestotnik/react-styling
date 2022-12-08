import './button.css'

const Button = ({ buttonText, colorChange }) => {
    return (
        <button className={colorChange}>{buttonText }</button>
    )
}
export default Button