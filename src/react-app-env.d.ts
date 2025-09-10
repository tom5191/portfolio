/// <reference types="react-scripts" />

declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns';
    lineColor?: string;
    children?: React.ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string | React.ReactNode;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    intersectionObserverProps?: Record<string, any>;
    onTimelineElementClick?: () => void;
    position?: 'left' | 'right';
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: React.ReactNode;
  }

  export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
  export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}
}

declare module 'react-vertical-timeline-component/style.min.css' {
  const content: { [className: string]: string };
  export default content;
}