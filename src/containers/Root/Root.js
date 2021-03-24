import { Preloader } from "pres-components/Preloader";
import "./Root.css";

export const Root = (props) => {
  return (
    <div className="app">
      {props.Fetching ? (
        <Preloader />
      ) : (
        <>
          {props.children}
          {props.rightBottomComponent}
          {props.leftBottomComponent}
        </>
      )}
    </div>
  );
};
