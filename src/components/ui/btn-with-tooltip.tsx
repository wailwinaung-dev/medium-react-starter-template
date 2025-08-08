import { Button } from './button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

interface BtnWithTooltipProps {
  tooltip: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'default'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
}
export function BtnWithTooltip({
  tooltip,
  onClick,
  children,
  ...props
}: BtnWithTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={onClick} {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
