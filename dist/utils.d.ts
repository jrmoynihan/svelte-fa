export type IconSize = 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | `${number}x` | '';
export declare const icon_sizes: string[];
export type PullDirection = 'left' | 'right' | '';
export type FlipDirection = 'horizontal' | 'vertical' | 'both' | false;
export declare function joinCss(obj: any, separator?: string): string;
export declare function getStyles(style: string, size: IconSize, pull?: PullDirection, fw?: boolean): string;
export declare function getTransform(scale: string | number, translateX: string | number, translateY: string | number, rotate: number | string, flip: FlipDirection, translateTimes?: number, translateUnit?: string, rotateUnit?: string): string;
