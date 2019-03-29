import React from "react";

const SvgEmail = props => (
  <svg height={21.08} width={26.18} {...props}>
    <defs>
      <path
        id="email_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M24.04 0H1.97C.89 0 0 .89 0 1.97v17.14c0 1.09.89 1.97 1.97 1.97h22.06c1.09 0 1.97-.89 1.97-1.97V1.97C26.01.89 25.13 0 24.04 0zM1.97 1.38h22.06c.29 0 .53.22.57.5L13 11.13 1.4 1.89c.05-.29.28-.51.57-.51zm0 18.32h22.07c.32 0 .59-.26.58-.59V3.64l-11.19 8.92c-.13.1-.28.15-.43.15-.15 0-.3-.05-.43-.15L1.38 3.64v15.47c0 .32.26.59.59.59z"
      />
    </defs>
    <use xlinkHref="#email_svg__a" fill="#1489CB" />
  </svg>
);

export default SvgEmail;
