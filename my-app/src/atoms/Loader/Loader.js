import PropTypes from 'prop-types';

export const Loader = ({message = 'loading...'}) => {
    return (
    <div className="spinner-border" 
    style={{
        width: '3rem',
        height: '3rem'
    }}
    role="status">
  <span className="visually-hidden">{message}</span>
</div>
)
}

Loader.propTypes = {
    message: PropTypes.string,
}