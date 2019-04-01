import React from "react";

const SvgNavMediaIcon = props => (
  <svg height={28} width={28} {...props}>
    <defs>
      <path
        id="nav-media-icon_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M9.91 7.326a.793.793 0 0 1 .788.02l9.246 5.78a.783.783 0 0 1 .363.664c0 .27-.135.52-.363.664l-9.246 5.78a.797.797 0 0 1-.789.02.798.798 0 0 1-.404-.684V8.01c0-.29.156-.55.405-.684zM11.06 9.41v8.748l6.994-4.379-6.994-4.369z"
      />
      <path
        id="nav-media-icon_svg__b"
        opacity={1}
        fillRule="evenodd"
        d="M0 13.78C0 6.184 6.184 0 13.78 0c7.606 0 13.79 6.184 13.79 13.78 0 7.596-6.194 13.78-13.79 13.78C6.184 27.56 0 21.376 0 13.78zm1.556.01c0 6.735 5.48 12.224 12.224 12.224 6.745 0 12.234-5.5 12.234-12.234S20.514 1.556 13.78 1.556 1.556 7.056 1.556 13.79z"
      />
    </defs>
    <use xlinkHref="#nav-media-icon_svg__a" fill="#FFF" />
    <use xlinkHref="#nav-media-icon_svg__b" fill="#FFF" />
  </svg>
);

export default SvgNavMediaIcon;
