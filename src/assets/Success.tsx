import * as React from "react"

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M38 34a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28Z"
      fill="#77B255"
    />
    <path
      d="M31.28 8.362a2.502 2.502 0 0 0-3.458.736L16.936 25.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665.673 0 1.534-.282 2.099-1.139.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent