import { FC, SVGProps } from 'react'
import { IconProps } from '@components/Icons/interface'
import EmailSVG from './icons/EmailSVG.svg'

const Icon = (
  SvgComponent: FC<SVGProps<SVGSVGElement>>
): React.FC<IconProps> => {
  return ({ height = '20px', width = '20px', className }: IconProps) => {
    const svgProps = { height, width, viewBox: '0 0 20 20', className }
    return <SvgComponent {...svgProps} />
  }
}

export const EmailIcon = Icon(EmailSVG)
