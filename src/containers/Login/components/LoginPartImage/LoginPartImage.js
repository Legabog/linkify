import "./LoginPartImage.css";
import part_image from "../../../../assets/backgrounds/login-background/login-background.jpg";

export const LoginPartImage = (props) => {
  return (
    <div className="login-part-image">
      <img src={part_image} alt="part-iamge" />
    </div>
  );
};
