import React from "react";

const SvgCaret = props => (
  <svg height={8.308} width={5} {...props}>
    <defs>
      <path
        id="caret_svg__a"
        opacity={1}
        fillRule="evenodd"
        d="M.705 8.308a.594.594 0 0 1-.449-.185.579.579 0 0 1 0-.861l3.206-3.077L.256 1.108a.579.579 0 0 1 0-.862.638.638 0 0 1 .898 0l3.654 3.508a.548.548 0 0 1 .192.43.548.548 0 0 1-.192.431L1.154 8.123a.594.594 0 0 1-.449.185z"
      />
    </defs>
    <use xlinkHref="#caret_svg__a" fill="#FFF" />
  </svg>
);

export default SvgCaret;
