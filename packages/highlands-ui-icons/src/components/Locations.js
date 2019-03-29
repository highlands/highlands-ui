import React from "react";

const SvgLocations = props => (
  <svg height={25.6} width={25.7} {...props}>
    <defs>
      <path
        id="locations_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M13.5 24.96c0 .3.3.6.6.6h.1c.3 0 .5-.1.6-.4l10.8-24.1c.1-.2 0-.5-.2-.8-.2-.3-.5-.3-.8-.2L.4 10.76c-.3.1-.4.5-.4.8 0 .3.3.6.6.6l11.3 1.6 1.6 11.2zm-.8-12.6l-9.2-1.3 20-8.9-8.9 20-1.3-9.2c0-.3-.3-.6-.6-.6z"
      />
    </defs>
    <use
      xlinkHref="#locations_svg__a"
      fill="#1489CB"
      transform="translate(0 .04)"
    />
  </svg>
);

export default SvgLocations;
