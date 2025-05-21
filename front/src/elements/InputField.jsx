import PropTypes from 'prop-types';
import '../styles/inputField.css'

export default function InputField({
  id,
  label,
  type,
  placeholder,
  ariaLabel,
}) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  ariaLabel: '',
};
