import React from "react";

const SvgLock = props => (
  <svg height={26.53} width={21.5} {...props}>
    <defs>
      <path
        id="lock_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M19.25 9.795h-3.03v-4.5c0-3.12-2.51-5.56-5.72-5.56s-5.72 2.44-5.72 5.56v4.5H1.75c-1.1 0-2 .9-2 2v12.47c0 1.1.9 2 2 2h17.5c1.1 0 2-.9 2-2v-12.47c0-1.1-.9-2-2-2zm-13.09-4.5c0-2.34 1.91-4.17 4.34-4.17 2.43 0 4.34 1.83 4.34 4.17v4.5H6.16v-4.5zm13.09 19.59c.34 0 .62-.28.62-.62v-12.47c0-.34-.28-.62-.62-.62H1.75c-.34 0-.62.28-.62.62v12.47c0 .34.28.62.62.62h17.5z"
      />
      <path
        id="lock_svg__b"
        opacity={1}
        fillRule="evenodd"
        d="M8.02 16.595a2.48 2.48 0 1 1 4.96 0c0 1.12-.76 2.07-1.79 2.37v2.28c0 .38-.31.69-.69.69-.38 0-.69-.31-.69-.69v-2.28a2.472 2.472 0 0 1-1.79-2.37zm1.38 0c0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1-.61 0-1.1.49-1.1 1.1z"
      />
    </defs>
    <use
      xlinkHref="#lock_svg__a"
      fill="#1489CB"
      transform="translate(.25 .265)"
    />
    <use
      xlinkHref="#lock_svg__b"
      fill="#1489CB"
      transform="translate(.25 .265)"
    />
  </svg>
);

export default SvgLock;
