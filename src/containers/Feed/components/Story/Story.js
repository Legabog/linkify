import "./Story.css";
import { Avatar } from "@material-ui/core";

export const Story = ({ image, profileSrc, title }) => {
  const storyStyle = { backgroundImage: `url(${image})` }

  return (
    <div className="story" style={storyStyle}>
      <Avatar className="story__avatar" src={profileSrc} alt={title}/>
      <h4>{title}</h4>
    </div>
  );
};
