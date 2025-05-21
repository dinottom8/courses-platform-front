import InputField from '../elements/InputField';
import Button from '../elements/Button'

export default function LoginForm({ inputs, onSubmit, method = 'post' }) {
  return (
    <form method={method} onSubmit={onSubmit}>
      {inputs.map((input, index) => {
        const id = input.label
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '');

        return (
          <InputField
            key={id || index}
            id={id}
            label={input.label}
            type={input.type}
            placeholder={input.placeHolder}
            ariaLabel={input.ariaLabel}
          />
        );
      })}
      <div className="lost-password-wrapper">
        <a href="/lost-password">Esqueceu sua senha?</a>
        <Button type="submit" content="Submit"></Button>
      </div>
    </form>
  );
}
