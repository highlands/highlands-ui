import React from "react";

const SvgUser = props => (
  <svg height={25.2} width={20.5} {...props}>
    <defs>
      <path
        id="user_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M17 6.6c0 3.7-3 6.6-6.6 6.6-3.6 0-6.5-2.9-6.5-6.5C3.9 3 6.8.1 10.4 0 14.1 0 17 3 17 6.6zm-1.5.1c0-2.8-2.3-5.1-5.1-5.1s-5 2.3-5.1 5.1c0 2.8 2.3 5.1 5.1 5.1s5.1-2.3 5.1-5.1z"
      />
      <path
        id="user_svg__b"
        opacity={1}
        fillRule="evenodd"
        d="M17.9 17.8c-1.7-1.7-4.2-2.7-7.3-2.8H10c-3.1.1-5.5 1-7.2 2.8C0 20.6.2 24.4.2 24.5c0 .4.4.7.7.7.4 0 .7-.4.7-.8 0 0-.1-3.3 2.1-5.6 1.5-1.5 3.6-2.3 6.5-2.4 2.8 0 5 .8 6.5 2.4 2.2 2.3 2.1 5.6 2.1 5.6 0 .4.3.8.7.8.4 0 .7-.3.7-.7.1-.1.3-3.9-2.3-6.7z"
      />
    </defs>
    <use xlinkHref="#user_svg__a" fill="#1489CB" />
    <use xlinkHref="#user_svg__b" fill="#1489CB" />
  </svg>
);

export default SvgUser;
