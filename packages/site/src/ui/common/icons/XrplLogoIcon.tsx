import type { SvgIconProps } from '@peersyst/react-components';
import { SvgIcon } from '@peersyst/react-components';
import clsx from 'clsx';

export default function XrplLogoIcon({ className, ...rest }: Omit<SvgIconProps, 'children'>): JSX.Element {
  return (
    <SvgIcon {...rest} data-testid="XrplLogoIcon" className={clsx(undefined, 'Icon', className)} fill="none">
      <path
        d="M10.093 0.522461H11.7616L8.2841 3.7817C7.6601 4.3463 6.8487 4.6589 6.0073 4.6589C5.1658 4.6589 4.3544 4.3463 3.73049 3.7817L0.25293 0.522461H1.92153L4.557 2.98639C4.9505 3.3476 5.4653 3.548 5.9995 3.548C6.5337 3.548 7.0484 3.3476 7.442 2.98639L10.093 0.522461Z"
        fill="black"
      />
      <path
        d="M1.9069 9.56598H0.238281L3.73145 6.29108C4.3519 5.71958 5.1647 5.40228 6.0082 5.40228C6.8518 5.40228 7.6645 5.71958 8.285 6.29108L11.7782 9.56598H10.1096L7.4585 7.07088C7.065 6.70958 6.5502 6.50918 6.016 6.50918C5.4819 6.50918 4.9671 6.70958 4.5736 7.07088L1.9069 9.56598Z"
        fill="black"
      />
      <path d="M10.7695 9H1L0.5 9.5H11.5L10.7695 9Z" fill="black" stroke="black" strokeWidth="0.25" />
    </SvgIcon>
  );
}
