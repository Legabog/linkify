import i18n from "i18next";

export const colorValidation = (color) => {
  let errorMessage = "";

  const colorTitles = [
    // red tones
    "indianred",
    "lightcoral",
    "salmon",
    "darksalmon",
    "lightsalmon",
    "crimson",
    "red",
    "firebrick",
    "darkred",
    // pink tones
    "pink",
    "lightpink",
    "hotpink",
    "deeppink",
    "mediumvioletred",
    "palevioletred",
    // orange tones
    "lightsalmon",
    "coral",
    "tomato",
    "orangered",
    "darkorange",
    "orange",
    // yellow tones
    "gold",
    "yellow",
    "lightyellow",
    "lemonchiffon",
    "lightgoldenrodyellow",
    "papayawhip",
    "moccasin",
    "peachpuff",
    "palegoldenrod",
    "khaki",
    "darkkhaki",
    // purple tones
    "lavender",
    "thistle",
    "plum",
    "violet",
    "orchid",
    "fuchsia",
    "magenta",
    "mediumorchid",
    "mediumpurple",
    "blueviolet",
    "darkviolet",
    "darkorchid",
    "darkmagenta",
    "purple",
    "indigo",
    "stateblue",
    "darkslateblue",
    // brown tones
    "cornsilk",
    "blanchedalmond",
    "bisque",
    "navajowhite",
    "wheat",
    "burlywood",
    "tan",
    "rosybrown",
    "sandybrown",
    "goldenrod",
    "darkgoldenrod",
    "peru",
    "chocolate",
    "saddlebrown",
    "sienna",
    "brown",
    "maroon",
    // green tones
    "greenyellow",
    "chartreuse",
    "lawngreen",
    "lime",
    "limegreen",
    "palegreen",
    "lightgreen",
    "mediumspringgreen",
    "springgreen",
    "mediumseagreen",
    "seagreen",
    "forestgreen",
    "green",
    "darkgreen",
    "yellowgreen",
    "olivedrab",
    "olive",
    "darkolivegreen",
    "mediumaquamarine",
    "darkseagreen",
    "lightseagreen",
    "darkcyan",
    "teal",
    // blue tones
    "aqua",
    "cyan",
    "lightcyan",
    "paleturquoise",
    "aquamarine",
    "turquoise",
    "mediumturquoise",
    "darkturquoise",
    "cadetblue",
    "steelblue",
    "lightsteelblue",
    "powderblue",
    "lightblue",
    "skyblue",
    "lightskyblue",
    "deepskyblue",
    "dodgerblue",
    "cornflowerblue",
    "mediumstateblue",
    "royalblue",
    "blue",
    "mediumblue",
    "darkblue",
    "navy",
    "midnightblue",
    // white tones
    "white",
    "snow",
    "honeydew",
    "mintcream",
    "azure",
    "aliceblue",
    "ghostwhite",
    "whitesmoke",
    "seashell",
    "beige",
    "oldlace",
    "floralwhite",
    "ivory",
    "antiquewhite",
    "linen",
    "lavenderblush",
    "mistyrose",
    // gray tones
    "gainsboro",
    "lightgray",
    "silver",
    "darkgray",
    "gray",
    "dimgray",
    "lightslategray",
    "slategray",
    "darkslategray",
    "black",
  ];

  if (color.slice(0, 1) === "#") {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
      errorMessage = i18n.t("authorized.terminal.invalid-hex-color");
    }
  } else {
    if (color.slice(0, 4) === "rgba") {
      if (
        /^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/
      ) {
        errorMessage = i18n.t("authorized.terminal.invalid-rgba-color");
      }
    } else {
      if (color.slice(0, 3) === "rgb") {
        if (
          !/^rgb\s*\(\s*[012]?[0-9]{1,2}\s*,\s*[012]?[0-9]{1,2}\s*,\s*[012]?[0-9]{1,2}\s*\)$/i.test(
            color
          )
        ) {
          errorMessage = i18n.t("authorized.terminal.invalid-rgb-color");
        }
      } else {
        if (colorTitles.indexOf(color) === -1) {
          errorMessage = i18n.t("authorized.terminal.invalid-color");
        }
      }
    }
  }

  return errorMessage;
};
