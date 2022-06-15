export const Button = ({className, onClick, text, type='Button', children }) => {
    const buttonContent = children ? children : text
    return <button className={className} onClick={onClick} type={type} > {buttonContent} </button>;
}