import { SvgIcon, SvgIconProps } from '@peersyst/react-components';
import clsx from 'clsx';

export default function XRPLogoIcon({
  className,
  ...rest
}: Omit<SvgIconProps, 'children'>): JSX.Element {
  return (
    <SvgIcon
      {...rest}
      data-testid="XRPLogoIcon"
      className={clsx('Filled', 'Icon', className)}
      fill="none"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#23292F"
      />
      <path
        d="M17.3025 6H19.47L14.9587 10.4677C14.17 11.2448 13.1072 11.6804 12 11.6804C10.8928 11.6804 9.82998 11.2448 9.04125 10.4677L4.52625 6H6.6975L10.125 9.39225C10.6241 9.88489 11.2972 10.1611 11.9985 10.1611C12.6998 10.1611 13.3729 9.88489 13.872 9.39225L17.3025 6ZM6.67125 18.4222H4.5L9.04125 13.9275C9.82998 13.1504 10.8928 12.7148 12 12.7148C13.1072 12.7148 14.17 13.1504 14.9587 13.9275L19.5 18.4215H17.3287L13.875 15C13.3759 14.5074 12.7028 14.2311 12.0015 14.2311C11.3002 14.2311 10.6271 14.5074 10.128 15L6.6705 18.4222H6.67125Z"
        fill="white"
      />
    </SvgIcon>
  );
}
