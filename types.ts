export enum Game {
  LOL = 'LEAGUE_OF_LEGENDS',
  VALORANT = 'VALORANT'
}

export enum Role {
  // LoL
  TOP = 'TOP',
  JUNGLE = 'JUNGLE',
  MID = 'MID',
  ADC = 'ADC',
  SUPPORT = 'SUPPORT',
  
  // Valorant
  DUELIST = 'DUELIST',
  INITIATOR = 'INITIATOR',
  SENTINEL = 'SENTINEL',
  CONTROLLER = 'CONTROLLER',
  
  COACH = 'COACH'
}

export enum Rank {
  CHALLENGER = 'CHALLENGER',
  GRANDMASTER = 'GRANDMASTER',
  MASTER = 'MASTER',
  DIAMOND = 'DIAMOND',
  EMERALD = 'EMERALD',
  RADIANT = 'RADIANT', // Val
  IMMORTAL = 'IMMORTAL', // Val
  ASCENDANT = 'ASCENDANT' // Val
}

export interface PlayerProfile {
  id: string;
  game: Game;
  summonerName: string; // or Riot ID
  realName: string; // Private
  age: number;
  country: string;
  role: Role;
  rank: Rank;
  lp: number; // or RR for Valorant
  champions: string[]; // Top 3 mastery or Agents
  languages: string[];
  isLFT: boolean; // Looking For Team
  bio: string;
  contractStatus: 'Agent Libre' | 'Sous Contrat' | 'À l\'écoute';
  experience: {
    teamName: string;
    duration: string;
    achievement?: string;
  }[];
}

export interface RecruiterProfile {
  id: string;
  name: string;
  organization: string;
  position: string;
  verified: boolean;
  logoUrl?: string; // New
  league?: string; // New
  games?: Game[]; // New
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export enum ViewState {
  LANDING = 'LANDING',
  PLAYER_DASHBOARD = 'PLAYER_DASHBOARD',
  RECRUITER_DASHBOARD = 'RECRUITER_DASHBOARD',
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING' // New view state
}