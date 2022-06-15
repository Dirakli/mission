const sizes = {
    default: 'container',
    fluid: 'container-fluid',
};

export const Layout = ({ children, className, size = 'default' }) => {
    return <div className={`${sizes[size]} ${className}`} >{children}</div>
}