import * as React from "react";

// Simple, lightweight inline SVG icon set (stroke inherits currentColor)
// Each icon accepts standard SVG props so size & className can be customized via props.

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
    width: size || 24,
    height: size || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    role: "img",
    "aria-hidden": true,
});

export const GridIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
);

export const FileTextIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M6 2.75h6.5L18 8.25v13a.75.75 0 0 1-.75.75H6.75A.75.75 0 0 1 6 21.25V2.75Z" />
        <path d="M12.5 2.75V8h5.5" />
        <path d="M9 13h6M9 17h4" />
    </svg>
);

export const PaletteIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M12 21c4.97 0 9-3.61 9-8.06C21 7.48 17.42 4 12.5 4 7.58 4 4 7.48 4 12.94c0 2.07 1.11 3.21 2.64 3.21 1.2 0 1.76-.57 2.27-1.59.57-1.13 1.4-1.82 2.59-1.82 1.53 0 2.5 1.05 2.5 2.47 0 1.31-.49 2.09-.49 2.79 0 .78.55 1.5 1.99 1.5Z" />
        <circle cx="9" cy="8.5" r="1" />
        <circle cx="13" cy="7.5" r="1" />
        <circle cx="16" cy="10.5" r="1" />
    </svg>
);

export const GlobeIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 3.5 2.5 14 0 18" />
        <path d="M12 3c-2.5 3.5-2.5 14 0 18" />
    </svg>
);

export const RocketIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M14.5 9.5 9 15l-4.5 1.5L6 12l5.5-5.5M14.5 9.5l2.86-.57a2 2 0 0 0 1.58-1.58L20.5 4.5l-2.85-.57a2 2 0 0 0-1.58 1.58L15.5 8.5l-1 1Z" />
        <path d="m5.5 18.5 3-3" />
        <path d="M16 16a2 2 0 1 1-4 0c0-1.1 2-3.5 2-3.5s2 2.4 2 3.5Z" />
    </svg>
);

export const PuzzleIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M9 3H5.8a.8.8 0 0 0-.8.8V9h2.1a1.9 1.9 0 0 1 0 3.8H5v5.4a.8.8 0 0 0 .8.8H11v-2.1a1.9 1.9 0 0 1 3.8 0V19h4.2a.8.8 0 0 0 .8-.8V15h-2.1a1.9 1.9 0 0 1 0-3.8H20V5.8a.8.8 0 0 0-.8-.8h-5.4v2.1a1.9 1.9 0 0 1-3.8 0V3Z" />
    </svg>
);

export const LightningIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
);

export const LayersIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="m12 3-9 5 9 5 9-5-9-5Z" />
        <path d="m3 13 9 5 9-5" />
        <path d="m3 18 9 5 9-5" />
    </svg>
);

export const CpuIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M3 10v4M21 10v4M10 3h4M10 21h4M6 3v2M6 19v2M18 3v2M18 19v2M3 6h2M19 6h2M3 18h2M19 18h2" />
    </svg>
);

export const SparkleIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M12 4.5 13.8 9l4.7 1-4.7 1L12 15.5 10.2 11l-4.7-1 4.7-1L12 4.5Z" />
        <path d="M5 5.5 5.8 7l1.7.4L5.8 7 5 5.5 4.2 7l-1.7.4L4.2 7 5 5.5Z" />
        <path d="M19 16.5 19.8 18l1.7.4-1.7.4-.8 1.5-.8-1.5-1.7-.4 1.7-.4.8-1.5Z" />
    </svg>
);

export const SunIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

export const MoonIcon = ({ size, ...rest }: IconProps) => (
    <svg {...base(size)} {...rest}>
        <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
);

export const icons = {
    grid: GridIcon,
    fileText: FileTextIcon,
    palette: PaletteIcon,
    globe: GlobeIcon,
    rocket: RocketIcon,
    puzzle: PuzzleIcon,
    lightning: LightningIcon,
    layers: LayersIcon,
    cpu: CpuIcon,
    sparkle: SparkleIcon,
    sun: SunIcon,
    moon: MoonIcon,
};

export type IconKey = keyof typeof icons;

export function Icon({ name, size = 24, className }: { name: IconKey; size?: number; className?: string }) {
    const C = icons[name];
    return <C size={size} className={className} />;
}
