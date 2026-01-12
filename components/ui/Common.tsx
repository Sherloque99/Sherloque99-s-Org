import React from 'react';
import { Rank, Role, Game } from '../../types';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-nexus-900/80 backdrop-blur-md border border-nexus-800 rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'valorant';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}> = ({ children, variant = 'primary', onClick, className = '', fullWidth = false, disabled = false }) => {
  const baseStyle = "px-6 py-2.5 rounded font-display font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-nexus-500 hover:bg-nexus-400 text-white shadow-lg shadow-nexus-500/20 border-t border-white/10",
    secondary: "bg-nexus-800 hover:bg-nexus-700 text-slate-200 border border-nexus-700",
    outline: "border-2 border-nexus-700 hover:border-nexus-500 text-slate-300 hover:text-white bg-transparent",
    danger: "bg-red-900/50 text-red-200 border border-red-800 hover:bg-red-900/80",
    valorant: "bg-val-red hover:bg-red-600 text-white shadow-lg shadow-red-900/20"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export const Badge: React.FC<{ text: string; type?: 'neutral' | 'success' | 'warning' | 'info' }> = ({ text, type = 'neutral' }) => {
  const styles = {
    neutral: "bg-nexus-800 text-slate-400 border-nexus-700",
    success: "bg-green-950/50 text-green-400 border-green-800",
    warning: "bg-amber-950/50 text-amber-400 border-amber-800",
    info: "bg-blue-950/50 text-blue-400 border-blue-800",
  };
  return (
    <span className={`text-[10px] px-2 py-1 rounded border ${styles[type]} uppercase tracking-widest font-bold font-mono`}>
      {text}
    </span>
  );
};

export const RankBadge: React.FC<{ rank: Rank; lp: number }> = ({ rank, lp }) => {
  const colors = {
    [Rank.CHALLENGER]: "text-yellow-400 border-yellow-900/50 bg-yellow-950/30",
    [Rank.GRANDMASTER]: "text-red-400 border-red-900/50 bg-red-950/30",
    [Rank.MASTER]: "text-purple-400 border-purple-900/50 bg-purple-950/30",
    [Rank.DIAMOND]: "text-blue-400 border-blue-900/50 bg-blue-950/30",
    [Rank.EMERALD]: "text-emerald-400 border-emerald-900/50 bg-emerald-950/30",
    [Rank.RADIANT]: "text-yellow-100 border-yellow-200/50 bg-yellow-900/50",
    [Rank.IMMORTAL]: "text-red-500 border-red-900/50 bg-red-950/30",
    [Rank.ASCENDANT]: "text-emerald-500 border-emerald-900/50 bg-emerald-950/30",
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded border ${colors[rank]}`}>
      <span className="font-bold font-display uppercase tracking-wider">{rank}</span>
      <span className="text-slate-400 text-xs font-mono">{lp} {rank === Rank.RADIANT || rank === Rank.IMMORTAL ? 'RR' : 'LP'}</span>
    </div>
  );
};

export const GameBadge: React.FC<{ game: Game }> = ({ game }) => {
    if (game === Game.LOL) {
        return <span className="text-[10px] font-bold bg-lol-dark border border-lol-blue/30 text-lol-blue px-2 py-1 rounded tracking-widest uppercase">LoL</span>
    }
    return <span className="text-[10px] font-bold bg-val-dark border border-val-red/30 text-val-red px-2 py-1 rounded tracking-widest uppercase">VAL</span>
}

export const RoleIcon: React.FC<{ role: Role }> = ({ role }) => {
  return (
    <span className="text-xs font-bold text-nexus-accent bg-nexus-950 border border-nexus-800 px-2 py-1 rounded">
      {role}
    </span>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="w-full bg-nexus-950 border border-nexus-800 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-nexus-500 transition-colors placeholder-slate-700 font-medium disabled:opacity-50"
  />
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
  <div className="relative">
    <select
      {...props}
      className="w-full bg-nexus-950 border border-nexus-800 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-nexus-500 transition-colors appearance-none font-medium cursor-pointer"
    >
      {props.children}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);

export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
    {children}
  </label>
);