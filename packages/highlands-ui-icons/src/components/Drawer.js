import React from "react";

const SvgDrawer = props => (
  <svg height={14.5} width={24.6} {...props}>
    <defs>
      <path
        id="drawer_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M23.8 1.4H.7c-.4 0-.7-.3-.7-.7C0 .3.3 0 .7 0h23.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"
      />
      <path
        id="drawer_svg__b"
        opacity={1}
        fillRule="evenodd"
        d="M23.8 7.9H.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h23.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"
      />
      <path
        id="drawer_svg__c"
        opacity={1}
        fillRule="evenodd"
        d="M23.8 14.5H12.3c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h11.6c.4 0 .7.3.7.7 0 .4-.4.7-.8.7z"
      />
    </defs>
    <use xlinkHref="#drawer_svg__a" fill="#FFF" />
    <use xlinkHref="#drawer_svg__b" fill="#FFF" />
    <use xlinkHref="#drawer_svg__c" fill="#FFF" />
  </svg>
);

export default SvgDrawer;
