import React from "react";

interface IconProps {
  className?: string;
}

export const IconFallback = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12h6" />
  </svg>
);

export const IconReact = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <g stroke="currentColor" strokeWidth="1.2" fill="none">
      <ellipse cx="12" cy="12" rx="7" ry="3.5" transform="rotate(0 12 12)"/>
      <ellipse cx="12" cy="12" rx="7" ry="3.5" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="7" ry="3.5" transform="rotate(120 12 12)"/>
    </g>
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);

export const IconNext = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 12h6l3-6v12l3-6h6" stroke="currentColor" />
  </svg>
);

export const IconVue = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 3L19.5 6v12L12 21l-7.5-3V6L12 3z"/>
  </svg>
);

export const IconAngular = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.5l6 3v9l-6 3-6-3v-9l6-3z"/>
  </svg>
);

export const IconWordPress = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.4 17.9L7.1 11.1h2.2l.8 2.4 1.2 4.4L9.4 17.9zM12 6.4c.7 0 1.4.4 1.8 1l-1.8 5.6-1.8-5.6c.4-.6 1.1-1 1.8-1z" />
  </svg>
);

export const IconShopify = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M15.3 5.55c-.07-.4-.37-.6-.62-.64-.25-.03-5.05-.3-5.05-.3s-3.35-3.37-3.72-3.75c-.36-.38-1.08-.26-1.36-.18-.08 0-1.46.46-3.6 1.12C.54 2.1.33 2.95.33 2.95L4.5 18.9l6.6 1.5s1.86-4.35 1.93-4.5c.04-.1.04-.16.08-.22l2.88-9.35c.08-.3.13-.54.06-.78z"/>
  </svg>
);

export const IconCloudflare = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 3a6 6 0 0 1 5.657 4.03A4 4 0 0 1 20 11a4 4 0 0 1-3 3.873V16a4 4 0 0 1-4 4H9a6 6 0 0 1 0-12h3z"/>
  </svg>
);

export const IconAws = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M3 20h18v-2H3v2zM7 8l2 5h6l2-5H7z"/>
  </svg>
);

export const IconVercel = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L2 19.5h20L12 2z"/>
  </svg>
);

export const IconNginx = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect x="3" y="6" width="18" height="12" rx="2"/>
  </svg>
);

export const IconNode = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5L18 8v8l-6 3.5L6 16V8l6-3.5z"/>
  </svg>
);

export const IconPython = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2c-2.5 0-4 1.5-4 4v2h4v1H6c-2 0-4 1.5-4 4s2 4 4 4h2v-3c0-1.5 1.5-3 3-3h4c1.5 0 3-1.5 3-3V6c0-2.5-3-4-6-4zm-2 2a1 1 0 110 2 1 1 0 010-2z"/>
  </svg>
);

export const IconStripe = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
  </svg>
);

export const IconPaypal = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
  </svg>
);

export const IconAnalytics = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3v18h18"/>
    <path d="M7 14l4-4 4 4 5-6"/>
  </svg>
);

export const IconSecurity = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export const IconMarketing = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

export const IconCdn = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

export const IconTailwind = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
  </svg>
);

export const IconBootstrap = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M5.5 3h13A2.5 2.5 0 0121 5.5v13a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13A2.5 2.5 0 015.5 3zM8 7v10h4.5c2.5 0 4-1.5 4-3.5 0-1.5-.8-2.5-2-2.9 1-.4 1.5-1.4 1.5-2.6 0-1.7-1.3-3-3.5-3H8z"/>
  </svg>
);

export const IconJquery = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
  </svg>
);

const mapping: Array<{ test: RegExp; icon: React.FC<IconProps> }> = [
  { test: /react/i, icon: IconReact },
  { test: /next/i, icon: IconNext },
  { test: /vue/i, icon: IconVue },
  { test: /angular/i, icon: IconAngular },
  { test: /tailwind/i, icon: IconTailwind },
  { test: /bootstrap/i, icon: IconBootstrap },
  { test: /jquery/i, icon: IconJquery },
  { test: /wordpress|wp-engine|wpcom|wp-admin/i, icon: IconWordPress },
  { test: /shopify/i, icon: IconShopify },
  { test: /cloudflare/i, icon: IconCloudflare },
  { test: /vercel|now|vercel\.app/i, icon: IconVercel },
  { test: /aws|amazon/i, icon: IconAws },
  { test: /nginx/i, icon: IconNginx },
  { test: /node/i, icon: IconNode },
  { test: /python|django|flask/i, icon: IconPython },
  { test: /stripe/i, icon: IconStripe },
  { test: /paypal/i, icon: IconPaypal },
  { test: /analytics|gtm|tag manager|hotjar|mixpanel/i, icon: IconAnalytics },
  { test: /ssl|security|captcha|auth0|okta/i, icon: IconSecurity },
  { test: /pixel|ads|facebook|hubspot|mailchimp/i, icon: IconMarketing },
  { test: /cdn|fastly|akamai/i, icon: IconCdn },
];

export function getTechIcon(techName: string): React.FC<IconProps> {
  if (!techName) return IconFallback;
  for (const m of mapping) {
    if (m.test.test(String(techName))) return m.icon;
  }
  return IconFallback;
}
