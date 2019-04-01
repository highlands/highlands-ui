import React from "react";

const SvgLogoIcon = props => (
  <svg height={49.9} width={62.6} {...props}>
    <defs>
      <path
        id="logo-icon_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M17.5 11.228l-10.8 15.8c5.1 5.1 11.4 3.2 17.9-.1-.7-1-1.1-2.2-1.1-3.5 0-3.5 2.9-6.4 6.5-6.4 2.7 0 5 1.6 6 3.9 5.2-2.4 10.2-3.8 14.7-1.3l-6.4-9.6c-8.9-14.9-18.6-12.1-26.8 1.2zm15.3-.3l-.3 3.4c-.2 1.9-2.4 2-2.1.1l.7-4c.2-1.4 1.8-1.5 1.7.5zm-6.5 4.1l-2.1-2.8c-1.2-1.6-1.8-.3-1.2.9l1.6 3.2c.9 1.7 2.9.2 1.7-1.3zm14.3-.3l-3.2 3.2c-1.4 1.3-3-.3-1.6-1.4l3.7-2.8c1.1-.8 2.5-.3 1.1 1zm-19.2 3.7l-3-1.4c-1.7-.9-2.2.6-1.1 1.3l3.5 2.1c1.6.9 2.3-1.2.6-2zm-1 6l-3.3 1.1c-1.9.6-.9 1.6.4 1.4l3.6-.5c1.8-.2 1.1-2.6-.7-2z"
      />
      <path
        id="logo-icon_svg__b"
        opacity={1}
        fillRule="evenodd"
        d="M62.6 37.528c-5.6-2.4-15-3.1-34.2 2.3-18.4 5.2-26.4-.3-28.4-2.3l4.9-7.6c15.5 13.6 32-15.4 47.8-7.4l9.9 15z"
      />
    </defs>
    <use
      xlinkHref="#logo-icon_svg__a"
      fill="#FFF"
      transform="translate(0 4.872)"
    />
    <use
      xlinkHref="#logo-icon_svg__b"
      fill="#FFF"
      transform="translate(0 4.872)"
    />
  </svg>
);

export default SvgLogoIcon;
