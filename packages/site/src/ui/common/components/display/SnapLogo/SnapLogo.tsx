import type { SvgIconProps } from '@peersyst/react-components';
import clsx from 'clsx';

export type SnapLogoProps = {
  className?: string;
  style?: React.CSSProperties;
  width?: SvgIconProps['width'];
  height?: SvgIconProps['height'];
};

function SnapLogo({ className, ...rest }: SnapLogoProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('SnapLogo', className)}
      {...rest}
    >
      <rect width="60" height="60" rx="30" fill="black" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M 249,260 248,261 245,261 244,262 242,262 241,263 240,263 239,264 238,264 237,265 236,265 235,266 234,266 232,268 231,268 221,278 220,278 208,290 207,290 195,302 194,302 193,303 192,303 191,304 191,310 192,311 192,312 317,312 318,311 319,311 319,304 316,301 315,301 303,289 302,289 292,279 291,279 281,269 280,269 277,266 276,266 274,264 272,264 271,263 270,263 269,262 267,262 266,261 263,261 262,260 Z M 191,205 191,206 192,206 203,217 204,217 217,230 218,230 230,242 231,242 234,245 235,245 236,246 237,246 239,248 241,248 242,249 244,249 245,250 250,250 251,251 260,251 261,250 265,250 266,249 268,249 269,248 271,248 272,247 273,247 274,246 275,246 276,245 277,245 280,242 281,242 286,237 287,237 304,220 305,220 317,208 318,208 319,207 319,205 302,205 296,211 295,211 285,221 284,221 275,230 274,230 268,236 267,236 266,237 264,237 263,238 260,238 259,239 251,239 250,238 248,238 247,237 245,237 244,236 243,236 241,234 240,234 227,221 226,221 216,211 215,211 209,205 Z"
        fill="white"
      />
      <g transform="translate(24, 25)">
        <path
          d="M10.093 0.522461H11.7616L8.2841 3.7817C7.6601 4.3463 6.8487 4.6589 6.0073 4.6589C5.1658 4.6589 4.3544 4.3463 3.73049 3.7817L0.25293 0.522461H1.92153L4.557 2.98639C4.9505 3.3476 5.4653 3.548 5.9995 3.548C6.5337 3.548 7.0484 3.3476 7.442 2.98639L10.093 0.522461Z"
          fill="white"
        />
        <path
          d="M1.9069 9.56598H0.238281L3.73145 6.29108C4.3519 5.71958 5.1647 5.40228 6.0082 5.40228C6.8518 5.40228 7.6645 5.71958 8.285 6.29108L11.7782 9.56598H10.1096L7.4585 7.07088C7.065 6.70958 6.5502 6.50918 6.016 6.50918C5.4819 6.50918 4.9671 6.70958 4.5736 7.07088L1.9069 9.56598Z"
          fill="white"
        />
        <path d="M10.7695 9H1L0.5 9.5H11.5L10.7695 9Z" fill="white" stroke="white" stroke-width="0.25" />
      </g>
    </svg>
  );
}

export default SnapLogo;
