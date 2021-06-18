import styled, { css } from "styled-components";

import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(p) => p.adaptive}
`;

var Svg = styled.svg.attrs({
  version: 1.1,
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 326.21 326.21",
  xmlSpace: "preserve",
})`
  width: 20%;
  padding-left: 20px;
`;

const PathsArray = [
  {
    d: `M325.637,189.233l-56.043-135.3c-0.761-1.838-2.221-3.298-4.059-4.059c-1.838-0.762-3.902-0.762-5.74,0L73.176,127.176
		c-1.838,0.761-3.298,2.221-4.059,4.059c-0.761,1.838-0.761,3.903,0.001,5.74l56.051,135.3c1.196,2.889,3.989,4.632,6.932,4.632
		c0.957,0,1.929-0.185,2.867-0.573l186.611-77.302C325.405,197.447,327.222,193.06,325.637,189.233z M208.674,190.361
		L94.596,134.539l155.26-64.312L208.674,190.361z M209.716,207.57c1.038,0.509,2.166,0.764,3.296,0.764
		c0.974,0,1.95-0.189,2.871-0.571c1.988-0.823,3.526-2.461,4.224-4.497l16.07-46.881l64.599,35.028l-156.488,64.824l20.911-70.45
		L209.716,207.57z M303.949,176.07l-62.838-34.073l22.064-64.365L303.949,176.07z M90.414,149.191l61.124,29.91l-20.342,68.533
		L90.414,149.191z`,
  },
  {
    d: `M7.5,166.616h43.536c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5
		C0,163.258,3.358,166.616,7.5,166.616z`,
  },
  {
    d: `M82.073,236.893H7.5c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h74.573c4.142,0,7.5-3.357,7.5-7.5
		C89.573,240.25,86.215,236.893,82.073,236.893z`,
  },
  {
    d: `M436.312,75.688c-5.857-5.858-15.355-5.858-21.213,0l-42.426,42.426c-5.858,5.858-5.858,15.355,0,21.213
    c5.857,5.858,15.356,5.858,21.213,0l42.426-42.426C442.17,91.043,442.17,81.546,436.312,75.688z`,
  },
  {
    d: `M7.5,209.254h59.059c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5
		C0,205.897,3.358,209.254,7.5,209.254z`,
  },
];

const Path = styled.path`
  fill: #7fc8ff;
`;

const Title = styled.h1`
  color: #7fc8ff;
  padding-left: 40px;
  font-size: 36px;
`;

const adaptive = css`
  @media only screen and (max-width: 850px) {
    ${Title} {
      padding-left: 30px;
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 740px) {
    ${Title} {
      padding-left: 20px;
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 500px) {
    ${Svg} {
      width: 30%;
    }
    ${Title} {
      font-size: 26px;
      padding-left: 20px;
    }
  }
  @media only screen and (max-width: 350px) {
    ${Svg} {
      width: 35%;
    }
    ${Title} {
      font-size: 22px;
      padding-left: 10px;
    }
  }
`;

export const ConfirmEmailRouteHeader = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper adaptive={adaptive}>
      <Svg>
        {PathsArray.map((e, index) => (
          <Path key={`path_${index}`} d={e.d} />
        ))}
      </Svg>
      <Title>{t("unauthorized.confirm-email-route.header.h1")}</Title>
    </Wrapper>
  );
};
