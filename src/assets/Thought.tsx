import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    aria-labelledby="Outros"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M38 14.875a7 7 0 0 0-7-7c-1.167 0-2.265.29-3.232.794C25.686 5.842 22.343 4 18.563 4 13.431 4 9.088 7.38 7.64 12.036A5.997 5.997 0 0 0 3 17.875a5.996 5.996 0 0 0 5.021 5.913c.216 3.949 3.477 7.087 7.479 7.087 2.176 0 4.13-.933 5.5-2.413a7.472 7.472 0 0 0 5.5 2.413c4.143 0 7.5-3.357 7.5-7.5a7.5 7.5 0 0 0-.289-2.045A7.001 7.001 0 0 0 38 14.875ZM7 36.875a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="#85C8F8"
    />
  </svg>
)

export default SvgComponent
