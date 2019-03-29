import React from "react";

const SvgPlus = props => (
  <svg height={12} width={12} {...props}>
    <defs>
      <path
        id="plus_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M0 6c0-3.346 2.654-6 6-6 3.23 0 6 2.654 6 6s-2.654 6-6 6-6-2.654-6-6zm6.62.629h1.239c.371 0 .743-.249.743-.622 0-.372-.372-.745-.743-.745H6.743V4.144c0-.373-.371-.746-.743-.746s-.743.373-.743.746v.994H4.14c-.371 0-.743.372-.743.745s.372.746.743.746h1.116V7.87c0 .373.371.621.62.621.37 0 .743-.372.743-.745V6.629z"
      />
    </defs>
    <use xlinkHref="#plus_svg__a" fill="#AFD35F" />
  </svg>
);

export default SvgPlus;
