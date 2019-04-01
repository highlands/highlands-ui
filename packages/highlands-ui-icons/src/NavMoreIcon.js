import React from "react";

const SvgNavMoreIcon = props => (
  <svg height={26} width={29} {...props}>
    <defs>
      <path
        id="nav-more-icon_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M27.75 20.4c-.2 0-.4-.1-.5-.2L14.45 7.4 1.75 20.2c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1l13.3-13.3c.3-.3.8-.3 1.1 0l13.3 13.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"
      />
    </defs>
    <use xlinkHref="#nav-more-icon_svg__a" fill="#FFF" />
  </svg>
);

export default SvgNavMoreIcon;
