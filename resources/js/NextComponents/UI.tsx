/**
 * PageHero — Reusable hero/header section for static pages in PCP Sikar Brand Theme
 */

import React from 'react';

interface PageHeroProps {
  badge?: string;
  badgeIcon?: React.ElementType;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  children,
  className = '',
}) => {
  const isCentered = className.includes('text-center');

  return (
    <section className={`relative pt-12 md:pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2e0854] via-[#240642] to-[#14032a] text-white overflow-hidden ${className}`}>
      {/* Decorative ambient lighting blobs matching Home Page */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5b40cf]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-28 -left-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white dark:from-[#09090b] to-transparent pointer-events-none" />

      <div className={`max-w-[1600px] w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10 ${isCentered ? 'flex flex-col items-center' : ''}`}>
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 border border-white/15 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-amber-400" />}
            <span>{badge}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal leading-snug sm:leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className={`text-purple-100/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed ${isCentered ? 'text-center mx-auto' : ''}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};


/**
 * SectionHeader — Reusable section header with badge + title + description
 */

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ElementType;
  badgeColor?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  badgeColor = 'bg-[#f7e8fc] text-[#2e0854] border-[#eed3f8]',
  title,
  description,
  action,
  className = '',
  center = false,
}) => {
  return (
    <div className={`flex flex-col ${center ? 'items-center text-center' : 'sm:flex-row sm:items-end'} justify-between gap-4 mb-10 ${className}`}>
      <div className={center ? 'flex flex-col items-center' : ''}>
        {badge && (
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border mb-3 ${badgeColor}`}>
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-[#5b40cf]" />}
            <span>{badge}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-normal leading-snug">
          {title}
        </h2>
        {description && (
          <p className="text-slate-600 dark:text-zinc-300 mt-2 text-sm sm:text-base max-w-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};


/**
 * AmberPillButton / BrandButton — Unified CTA buttons in PCP Sikar Brand Palette
 */

interface AmberPillButtonProps {
  as?: React.ElementType;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'purple' | 'amber';
}

export const AmberPillButton: React.FC<AmberPillButtonProps> = ({
  as: Tag = 'button',
  href,
  onClick,
  disabled,
  className = '',
  children,
  type = 'button',
  variant = 'purple',
}) => {
  const gradientClass = variant === 'amber'
    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-amber-500/25'
    : 'bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#492ea3] shadow-purple-950/25';

  return (
    <Tag
      href={href}
      onClick={onClick}
      disabled={disabled}
      type={Tag === 'button' ? type : undefined}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed ${gradientClass} ${className}`}
    >
      {children}
    </Tag>
  );
};
export const BrandButton = AmberPillButton;


/**
 * PillBadge — Small inline badge/tag
 */

interface PillBadgeProps {
  icon?: React.ElementType;
  color?: 'amber' | 'blue' | 'purple' | 'green' | 'rose' | 'violet' | 'slate';
  children: React.ReactNode;
  className?: string;
}

const colorMap: Record<string, string> = {
  purple: 'bg-purple-100 text-[#2e0854] border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
  amber:  'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
  blue:   'bg-purple-50 text-[#5b40cf] border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
  green:  'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400',
  rose:   'bg-rose-500/10 text-rose-700 border-rose-500/20 dark:text-rose-400',
  violet: 'bg-purple-100 text-[#2e0854] border-purple-200',
  slate:  'bg-slate-100 text-slate-700 border-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700',
};

export const PillBadge: React.FC<PillBadgeProps> = ({
  icon: Icon,
  color = 'purple',
  children,
  className = '',
}) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border ${colorMap[color]} ${className}`}>
      {Icon && <Icon className="w-3 h-3 text-[#5b40cf]" />}
      {children}
    </span>
  );
};


/**
 * InfoCard — Contact/info card with icon, label, value and sub-text
 */

interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  color?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  sub, 
  color = 'bg-purple-100 text-[#2e0854]' 
}) => {
  return (
    <div className="bg-white dark:bg-[#0c1428] rounded-2xl p-5 border border-purple-100/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200">
      <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-extrabold text-slate-800 dark:text-white text-sm mb-1">{label}</h3>
      <p className="text-[#2e0854] dark:text-purple-300 font-bold text-sm mb-1">{value}</p>
      {sub && <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">{sub}</p>}
    </div>
  );
};
