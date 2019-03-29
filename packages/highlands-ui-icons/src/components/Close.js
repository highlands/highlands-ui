import React from "react";

const SvgClose = props => (
  <svg height={17.9} width={18} {...props}>
    <defs>
      <path
        id="close_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M9.9 9l7.7-7.7c.3-.3.3-.7 0-1-.3-.3-.7-.3-1 0L9 8 1.3.3C1 0 .6 0 .3.3c-.3.3-.3.7 0 1L8 9 .3 16.7c-.3.3-.3.7 0 1 .1.1.3.2.5.2s.4-.1.5-.2L9 10l7.7 7.7c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.7 0-1L9.9 9z"
      />
    </defs>
    <use xlinkHref="#close_svg__a" />
  </svg>
);

export default SvgClose;
