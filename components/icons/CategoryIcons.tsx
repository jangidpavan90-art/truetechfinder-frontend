import React from "react";

interface IconProps {
  className?: string;
}

export const IconFrontend = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="14" rx="2"/>
    <path d="M3 9h18" />
  </svg>
);

export const IconBackend = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="8"/>
    <path d="M8 15l4-3 4 3" />
  </svg>
);

export const IconCMS = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="5" width="16" height="14" rx="2"/>
    <path d="M4 9h16" />
  </svg>
);

export const IconHosting = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);

export const IconCDN = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="12" cy="12" r="8"/>
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
  </svg>
);

export const IconAnalytics = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M4 16l4-4 4 4 4-6 4 2" />
    <circle cx="4" cy="16" r="1"/>
    <circle cx="8" cy="12" r="1"/>
    <circle cx="12" cy="16" r="1"/>
    <circle cx="16" cy="10" r="1"/>
    <circle cx="20" cy="12" r="1"/>
  </svg>
);

export const IconMarketing = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M4 12l16-6v12l-16-6z" />
    <circle cx="4" cy="12" r="1.5"/>
  </svg>
);

export const IconSecurity = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"/>
  </svg>
);

export const IconPayments = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="6" width="18" height="12" rx="2"/>
    <path d="M3 10h18" />
  </svg>
);

export const IconOther = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8v4l3 3" />
  </svg>
);

export function getCategoryIcon(categoryName: string): React.FC<IconProps> {
  const c = categoryName?.toLowerCase() || "";

  if (c.includes("front")) return IconFrontend;
  if (c.includes("back")) return IconBackend;
  if (c.includes("cms")) return IconCMS;
  if (c.includes("host")) return IconHosting;
  if (c.includes("cdn")) return IconCDN;
  if (c.includes("analytic")) return IconAnalytics;
  if (c.includes("market")) return IconMarketing;
  if (c.includes("secu")) return IconSecurity;
  if (c.includes("pay")) return IconPayments;

  return IconOther;
}
