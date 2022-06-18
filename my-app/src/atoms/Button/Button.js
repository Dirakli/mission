export const Button = ({className, onClick, text, type='Button', disabled, children }) => {
    const buttonContent = children ? children : text
    return <button className={className} onClick={onClick} type={type} disabled={disabled} > {buttonContent} </button>;
}