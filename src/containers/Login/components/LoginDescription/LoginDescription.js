import "./LoginDescription.css";

export const LoginDescription = (props) => {
  return (
    <div
      className="login-description"
      style={{ paddingTop: `${props.padding_top}` }}
    >
      <props.tag>{props.text}</props.tag>
    </div>
  );
};
