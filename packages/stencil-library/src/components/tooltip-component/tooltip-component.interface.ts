export interface ToolTipProps {
  text: string;
  alignment?: TooltipAlignment;
}

export enum TOOLTIP_ALIGNMENT {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export type TooltipAlignment = `${TOOLTIP_ALIGNMENT}`;
