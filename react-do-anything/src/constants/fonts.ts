/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const Text = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.5px;
  font-feature-settings: "pnum" on, "lnum" on;
`;

export default {
  BD: {
    MD: {
      10: styled(Text)`
        font-size: 10px;
        line-height: 14px;
      `,
      12: styled(Text)`
        font-size: 12px;
        line-height: 14px;
      `,
      13: styled(Text)`
        font-size: 13px;
        line-height: 160%;
      `,
      14: styled(Text)`
        font-size: 14px;
        line-height: 160%;
      `,
      15: styled(Text)`
        font-size: 15px;
        line-height: 160%;
      `,
      15.5: styled(Text)`
        font-size: 15.5px;
        line-height: 22px;
      `,
      16: styled(Text)`
        font-size: 16px;
        line-height: 160%;
      `,
      17: styled(Text)`
        font-size: 17px;
        line-height: 160%;
      `,
      18: styled(Text)`
        font-size: 18px;
        line-height: 24px;
      `,
      20: styled(Text)`
        font-size: 20px;
        line-height: 160%;
      `,
      22: styled(Text)`
        font-size: 22px;
        line-height: 160%;
      `,
      24: styled(Text)`
        font-size: 24px;
        line-height: 160%;
      `,

      43: styled(Text)`
        font-size: 43px;
        line-height: 160%;
      `,
    },
  },
  TT: {
    SBD: {
      24: styled(Text)`
        font-size: 24px;
        line-height: 160%;
        font-weight: 600;
      `,
    },
    BD: {
      17: styled(Text)`
        font-size: 17px;
        line-height: 160%;
        font-weight: bold;
      `,
    },
  },
  placeholder: styled(Text)`
    &::-webkit-input-placeholder {
      color: #828282;
    }
  `,
};
