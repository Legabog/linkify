import "./WeatherSwitcherTemperatureItem.css";

import { SwitcherItemHelp } from "containers/Weather/components/SwitcherItemHelp";
import { useHelpMessage } from "hooks/useHelpMessage";

export const WeatherSwitcherTemperatureItem = (props) => {
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  const clickHandler = (units) => {
    props.setUnitsOfMeasure(units)
    hideHelpMessage();
  }
  return (
    <>
      <div
        className={
          props.unitsOfMeasure === props.units
            ? "weather-switcher-temperature__item_active"
            : "weather-switcher-temperature__item"
        }
        onClick={() => clickHandler(props.units)}
        onMouseEnter={showHelpMessage}
        onMouseLeave={hideHelpMessage}
      >
        <span>{props.units}</span>
        <p>
          <sup>o</sup>
        </p>
      </div>
      <SwitcherItemHelp
        title={props.helpTitle}
        marginLeft={props.helpMarginLeft}
        marginTop={props.helpMarginTop}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />
    </>
  );
};
