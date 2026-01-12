import { PlayerProfile, Rank, Role, RecruiterProfile, Message, Game } from '../types';

export const MOCK_PLAYERS: PlayerProfile[] = [
  {
    id: 'p1',
    game: Game.LOL,
    summonerName: 'CapsLock',
    realName: 'Lucas M.',
    age: 19,
    country: 'FR',
    role: Role.MID,
    rank: Rank.CHALLENGER,
    lp: 1250,
    champions: ['Sylas', 'Ahri', 'Azir'],
    languages: ['Français', 'Anglais'],
    isLFT: true,
    contractStatus: 'Agent Libre',
    bio: 'Ancien Midlaner académie cherchant opportunités LFL/Div2. Fortes mécaniques, vocal et shotcaller.',
    experience: [
      { teamName: 'Solary Academy', duration: '2023-2024', achievement: 'Playoffs Div 2' }
    ]
  },
  {
    id: 'p2',
    game: Game.LOL,
    summonerName: 'JungleDiff',
    realName: 'Erik S.',
    age: 21,
    country: 'DE',
    role: Role.JUNGLE,
    rank: Rank.GRANDMASTER,
    lp: 650,
    champions: ['Lee Sin', 'Viego', 'Sejuani'],
    languages: ['Allemand', 'Anglais'],
    isLFT: true,
    contractStatus: 'À l\'écoute',
    bio: 'Jungler constant avec grand champion pool. Prêt à déménager pour gaming house.',
    experience: []
  },
  {
    id: 'p3',
    game: Game.VALORANT,
    summonerName: 'Headhunter',
    realName: 'Kai O.',
    age: 18,
    country: 'UK',
    role: Role.DUELIST,
    rank: Rank.RADIANT,
    lp: 850,
    champions: ['Jett', 'Reyna', 'Raze'],
    languages: ['Anglais'],
    isLFT: true,
    contractStatus: 'Agent Libre',
    bio: 'Entry fragger avec aim T1. Top 50 ladder peak.',
    experience: [
      { teamName: 'Project V', duration: '2024', achievement: 'Vainqueur Beacon Open' }
    ]
  },
  {
    id: 'p4',
    game: Game.LOL,
    summonerName: 'TopGapOrLose',
    realName: 'Jakub K.',
    age: 17,
    country: 'PL',
    role: Role.TOP,
    rank: Rank.CHALLENGER,
    lp: 980,
    champions: ['Jax', 'Fiora', 'Camille'],
    languages: ['Polonais', 'Anglais'],
    isLFT: true,
    contractStatus: 'Agent Libre',
    bio: 'Carry top laner. Prodigy de 17 ans. Cherche environnement structuré pour progresser.',
    experience: []
  }
];

export const MOCK_RECRUITER: RecruiterProfile = {
  id: 'r1',
  name: 'Julien D.',
  organization: 'Vitality',
  position: 'Head Scout',
  verified: true
};

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'm1',
    senderId: 'r1',
    receiverId: 'p1',
    content: 'Bonjour, nous sommes intéressés par ton profil pour nos tryouts LFL Division 2.',
    timestamp: '2024-05-20T10:00:00Z',
    read: true
  },
  {
    id: 'm2',
    senderId: 'p1',
    receiverId: 'r1',
    content: 'Salut Julien, merci pour le contact. Je suis dispo pour des scrims la semaine prochaine.',
    timestamp: '2024-05-20T10:30:00Z',
    read: true
  }
];