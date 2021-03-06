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
  viewBox: "0 0 512 512",
  xmlSpace: "preserve",
})`
  width: 20%;
  padding-left: 20px;
`;

const PathsArray = [
  {
    d: `M139.327,118.114L96.901,75.688c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.426,42.426
  c5.857,5.858,15.356,5.858,21.213,0C145.185,133.469,145.185,123.972,139.327,118.114z`,
  },
  {
    d: `M76,241H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S84.284,241,76,241z`,
  },
  {
    d: `M497,241h-61c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S505.284,241,497,241z`,
  },
  {
    d: `M436.312,75.688c-5.857-5.858-15.355-5.858-21.213,0l-42.426,42.426c-5.858,5.858-5.858,15.355,0,21.213
    c5.857,5.858,15.356,5.858,21.213,0l42.426-42.426C442.17,91.043,442.17,81.546,436.312,75.688z`,
  },
  {
    d: `M256,0c-8.284,0-15,6.716-15,15v61c0,8.284,6.716,15,15,15s15-6.716,15-15V15C271,6.716,264.284,0,256,0z`,
  },
  {
    d: `M339.867,150.205c-32.508-25.801-74.844-35.074-116.148-25.445c-48.028,11.198-86.69,49.285-98.495,97.031
    c-11.843,47.898,1.711,96.721,36.258,130.601C173.886,364.556,181,382.921,181,402.777V406c0,13.296,5.801,25.26,15,33.505V467
    c0,24.813,20.187,45,45,45h30c24.813,0,45-20.187,45-45v-27.495c9.199-8.245,15-20.208,15-33.505v-3.282
    c0-19.545,7.495-38.266,20.563-51.361C376.994,325.87,391,292.005,391,256C391,214.557,372.363,175.996,339.867,150.205z M286,467
    c0,8.271-6.729,15-15,15h-30c-8.271,0-15-6.729-15-15v-16h60V467z M330.326,330.166C311.689,348.843,301,375.288,301,402.718V406
    c0,8.271-6.729,15-15,15h-15v-91.898c25.849-6.678,45-30.195,45-58.102c0-8.284-6.716-15-15-15s-15,6.716-15,15
    c0,16.542-13.458,30-30,30s-30-13.458-30-30c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,27.906,19.151,51.424,45,58.102V421h-15
    c-8.271,0-15-6.729-15-15v-3.223c0-27.863-10.393-54.035-28.513-71.805c-26.889-26.371-37.409-64.494-28.14-101.981
    c9.125-36.908,39.029-66.353,76.184-75.015c8.414-1.962,16.874-2.926,25.235-2.926c23.774,0,46.738,7.801,65.451,22.653
    C346.5,193.77,361,223.766,361,256C361,284.004,350.106,310.343,330.326,330.166z`,
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

export const ConfirmedEmailRouteHeader = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper adaptive={adaptive}>
      <Svg>
        {PathsArray.map((e, index) => (
          <Path key={`path_${index}`} d={e.d} />
        ))}
      </Svg>
      <Title>{t("unauthorized.confirmed-email-route.header.h1")}</Title>
    </Wrapper>
  );
};
