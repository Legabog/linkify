import "./LoginRouteDescription.css";

export const LoginRouteDescription = (props) => {
  return (
    <div className="login-route-description">
      <props.tag>{props.text}</props.tag>
    </div>
  );
};
