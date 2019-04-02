import React from "react";

const SvgPhoneIcon = props => (
  <svg height={27.11} width={15.92} {...props}>
    <defs>
      <path
        id="phone-icon_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M2.58 0h10.76c1.42 0 2.58 1.16 2.58 2.58v21.95c0 1.42-1.16 2.58-2.58 2.58H2.58C1.16 27.11 0 25.95 0 24.53V2.58C0 1.16 1.16 0 2.58 0zm0 1.38h10.76c.66 0 1.2.54 1.2 1.19v1.06H1.38V2.58c0-.66.54-1.2 1.2-1.2zm11.95 3.64H1.38v15.53h13.15V5.02zM2.58 25.73h10.76c.66 0 1.19-.54 1.19-1.19v-2.59H1.38v2.59c0 .65.54 1.19 1.2 1.19z"
      />
      <path
        id="phone-icon_svg__b"
        opacity={1}
        fillRule="evenodd"
        d="M8.02 22.73c-.62-.03-1.14.44-1.18 1.05-.04.61.44 1.14 1.05 1.18.62.03 1.14-.44 1.18-1.05.04-.62-.43-1.15-1.05-1.18z"
      />
    </defs>
    <use xlinkHref="#phone-icon_svg__a" fill="#1489CB" />
    <use xlinkHref="#phone-icon_svg__b" fill="#1489CB" />
  </svg>
);

export default SvgPhoneIcon;
