import "./StoryReel.css";
import { Story } from "../Story";
import { useTranslation } from "react-i18next";

export const StoryReel = (props) => {
  const { t } = useTranslation();
  return (
    <div className="story-reel">
      <Story
        image="https://sun9-29.userapi.com/impg/c857036/v857036092/176b28/jzy3aIw-IEE.jpg?size=200x0&quality=90&crop=0,160,959,959&sign=eb547ed9a6f2201b6309749447d22b67&ava=1"
        profileSrc="https://sun9-29.userapi.com/impg/c857036/v857036092/176b28/jzy3aIw-IEE.jpg?size=200x0&quality=90&crop=0,160,959,959&sign=eb547ed9a6f2201b6309749447d22b67&ava=1"
        title={t("authorized.feed.story-reel.title-1")}
      />
      <Story
        image="https://sun9-34.userapi.com/impf/c637628/v637628612/d374/Gr_SaT2ATjc.jpg?size=200x0&quality=90&crop=761,112,1202,1202&sign=c57930b82fa39beda164aba515b1a23f&ava=1"
        profileSrc="https://sun9-34.userapi.com/impf/c637628/v637628612/d374/Gr_SaT2ATjc.jpg?size=200x0&quality=90&crop=761,112,1202,1202&sign=c57930b82fa39beda164aba515b1a23f&ava=1);"
        title={t("authorized.feed.story-reel.title-2")}
      />
      <Story
        image="https://sun9-47.userapi.com/impf/c840333/v840333606/5700f/QYUNXJlbqSE.jpg?size=200x0&quality=90&crop=412,0,1707,1707&sign=fa92c28048658567595c20cfc96d82a7&ava=1"
        profileSrc="https://sun9-47.userapi.com/impf/c840333/v840333606/5700f/QYUNXJlbqSE.jpg?size=50x0&quality=88&crop=412,0,1701,1701&sign=f110231607089e4e4188f3cadb5c32c2&ava=1"
        title={t("authorized.feed.story-reel.title-3")}
      />
      <Story
        image="https://sun9-37.userapi.com/impf/c852232/v852232227/123600/J6KwN7ciOV0.jpg?size=200x0&quality=90&crop=5,5,1144,1144&sign=b9d88d6332fab76ef55a97c76afe29fb&ava=1"
        profileSrc="https://sun9-37.userapi.com/impf/c852232/v852232227/123600/J6KwN7ciOV0.jpg?size=50x0&quality=88&crop=45,250,429,429&sign=1e4d5132f2dd33693eeb7dbe61d3c9a8&ava=1"
        title={t("authorized.feed.story-reel.title-4")}
      />
      <Story
        image="https://sun9-63.userapi.com/impf/c624529/v624529659/27c83/8aEx90Qi3Jc.jpg?size=200x0&quality=90&crop=0,0,576,1024&sign=ccd7b1bd0ade780154bbad6c15f02a14&ava=1"
        profileSrc="https://sun9-63.userapi.com/impf/c624529/v624529659/27c83/8aEx90Qi3Jc.jpg?size=100x0&quality=88&crop=0,216,576,576&sign=02788a2f57a505566152d84a87d5d13d&ava=1"
        title={t("authorized.feed.story-reel.title-5")}
      />
    </div>
  );
};
