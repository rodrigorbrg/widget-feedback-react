import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    aria-labelledby="Image de um balão de pensamento"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31 13.92c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C13.914 21.36 9 20.36 9 13.92 9 7.889 14.285 3 20.083 3 25.883 3 31 7.889 31 13.92Z"
      fill="#FFD983"
    />
    <path
      d="M24.167 35.36c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5Z"
      fill="#CCD6DD"
    />
    <path
      d="M24.707 13.153a.999.999 0 0 0-1.414 0L20 16.446l-3.293-3.293a.999.999 0 1 0-1.414 1.414L19 18.274V28.86a1 1 0 1 0 2 0V18.274l3.707-3.707a.999.999 0 0 0 0-1.414Z"
      fill="#FFCC4D"
    />
    <path
      d="M26 33.86a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-6h12v6Z"
      fill="#99AAB5"
    />
    <path
      d="M13.999 34.86a1 1 0 0 1-.163-1.986l12-2a.994.994 0 0 1 1.15.822.999.999 0 0 1-.822 1.15l-12 2a.927.927 0 0 1-.165.014Zm0-4a1 1 0 0 1-.163-1.986l12-2a.995.995 0 0 1 1.15.822.999.999 0 0 1-.822 1.15l-12 2a.927.927 0 0 1-.165.014Z"
      fill="#CCD6DD"
    />
  </svg>
)

export default SvgComponent
