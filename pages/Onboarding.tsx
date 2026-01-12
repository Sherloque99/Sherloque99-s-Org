import React, { useState } from 'react';
import { ViewState, Role, Rank, Game, PlayerProfile, RecruiterProfile } from '../types';
import { Button, Card, Input, Label, Select } from '../components/ui/Common';
import { User, Briefcase, ChevronRight, Check } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // Simulating ID generation

interface OnboardingProps {
  onCompletePlayer: (player: PlayerProfile) => void;
  onCompleteRecruiter: (recruiter: RecruiterProfile) => void;
  onCancel: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onCompletePlayer, onCompleteRecruiter, onCancel }) => {
  const [type, setType] = useState<'PLAYER' | 'RECRUITER' | null>(null);
  const [step, setStep] = useState(1);

  // Player State
  const [playerForm, setPlayerForm] = useState<Partial<PlayerProfile>>({
    game: Game.LOL,
    role: Role.MID,
    rank: Rank.DIAMOND,
    isLFT: true,
    languages: [],
    champions: [],
    experience: []
  });

  // Recruiter State
  const [recruiterForm, setRecruiterForm] = useState<Partial<RecruiterProfile>>({
    verified: false,
    games: [Game.LOL]
  });

  const handlePlayerSubmit = () => {
    // Construct final player object
    const finalPlayer: PlayerProfile = {
      id: `p-${Date.now()}`,
      game: playerForm.game || Game.LOL,
      summonerName: playerForm.summonerName || 'Unknown',
      realName: playerForm.realName || 'Unknown',
      age: playerForm.age || 18,
      country: playerForm.country || 'EU',
      role: playerForm.role || Role.MID,
      rank: playerForm.rank || Rank.EMERALD,
      lp: playerForm.lp || 0,
      champions: playerForm.champions || ['Ahri', 'Sylas', 'Orianna'], // Mock defaults if empty
      languages: playerForm.languages?.length ? playerForm.languages : ['Anglais'],
      isLFT: true,
      bio: playerForm.bio || '',
      contractStatus: 'Agent Libre',
      experience: []
    };
    onCompletePlayer(finalPlayer);
  };

  const handleRecruiterSubmit = () => {
    const finalRecruiter: RecruiterProfile = {
        id: `r-${Date.now()}`,
        name: recruiterForm.name || 'Unknown',
        organization: recruiterForm.organization || 'Unknown Org',
        position: recruiterForm.position || 'Manager',
        verified: false,
        league: recruiterForm.league,
        logoUrl: recruiterForm.logoUrl
    }
    onCompleteRecruiter(finalRecruiter);
  };

  if (!type) {
    return (
      <div className="min-h-screen bg-nexus-950 flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <Card className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-12 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-xl border border-nexus-800 bg-nexus-900/50 hover:bg-nexus-800/50 transition-colors cursor-pointer group" onClick={() => setType('PLAYER')}>
            <div className="w-20 h-20 bg-nexus-800 rounded-full flex items-center justify-center group-hover:bg-nexus-500 transition-colors">
              <User size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Je suis un Joueur</h3>
              <p className="text-slate-400">Crée ton CV, affiche tes stats et fais-toi repérer par les meilleures structures.</p>
            </div>
            <Button variant="outline" className="mt-auto">Commencer</Button>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-xl border border-nexus-800 bg-nexus-900/50 hover:bg-nexus-800/50 transition-colors cursor-pointer group" onClick={() => setType('RECRUITER')}>
            <div className="w-20 h-20 bg-nexus-800 rounded-full flex items-center justify-center group-hover:bg-val-red transition-colors">
              <Briefcase size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Je suis une Structure</h3>
              <p className="text-slate-400">Accédez à la base de données de talents, filtrez les profils et recrutez efficacement.</p>
            </div>
            <Button variant="outline" className="mt-auto">Créer un compte Structure</Button>
          </div>
          
          <div className="md:col-span-2 text-center mt-4">
             <span onClick={onCancel} className="text-slate-500 text-sm hover:text-white cursor-pointer underline">Retour à l'accueil</span>
          </div>
        </Card>
      </div>
    );
  }

  // PLAYER FLOW
  if (type === 'PLAYER') {
    return (
      <div className="min-h-screen bg-nexus-950 flex items-center justify-center p-6">
        <Card className="max-w-xl w-full">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold text-white">Création Profil Joueur</h2>
            <div className="text-nexus-500 font-mono text-sm">Étape {step}/3</div>
          </div>

          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Pseudo (Summoner Name)</Label>
                  <Input 
                    placeholder="Ex: Faker" 
                    value={playerForm.summonerName || ''}
                    onChange={e => setPlayerForm({...playerForm, summonerName: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Vrai Prénom (Privé)</Label>
                  <Input 
                    placeholder="Ex: Lee" 
                    value={playerForm.realName || ''}
                    onChange={e => setPlayerForm({...playerForm, realName: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <Label>Âge</Label>
                    <Input 
                      type="number" 
                      placeholder="18"
                      value={playerForm.age || ''}
                      onChange={e => setPlayerForm({...playerForm, age: parseInt(e.target.value)})}
                    />
                 </div>
                 <div>
                    <Label>Pays de résidence</Label>
                    <Input 
                       placeholder="France"
                       value={playerForm.country || ''}
                       onChange={e => setPlayerForm({...playerForm, country: e.target.value})}
                    />
                 </div>
              </div>
               <div>
                  <Label>Bio (Rapide présentation)</Label>
                  <Input 
                     placeholder="Je cherche une équipe sérieuse..."
                     value={playerForm.bio || ''}
                     onChange={e => setPlayerForm({...playerForm, bio: e.target.value})}
                  />
               </div>
              <Button fullWidth onClick={() => setStep(2)} className="mt-6">Suivant <ChevronRight size={16} /></Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <Label>Jeu Principal</Label>
                <Select 
                   value={playerForm.game}
                   onChange={e => setPlayerForm({...playerForm, game: e.target.value as Game})}
                >
                  <option value={Game.LOL}>League of Legends</option>
                  <option value={Game.VALORANT}>Valorant</option>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Rôle Principal</Label>
                  <Select
                    value={playerForm.role}
                    onChange={e => setPlayerForm({...playerForm, role: e.target.value as Role})}
                  >
                     {Object.values(Role).map(r => <option key={r} value={r}>{r}</option>)}
                  </Select>
                </div>
                <div>
                   <Label>Rang Actuel (Peak)</Label>
                   <Select
                     value={playerForm.rank}
                     onChange={e => setPlayerForm({...playerForm, rank: e.target.value as Rank})}
                   >
                      {Object.values(Rank).map(r => <option key={r} value={r}>{r}</option>)}
                   </Select>
                </div>
              </div>
              <div>
                  <Label>LP / RR Actuel</Label>
                  <Input 
                    type="number" 
                    placeholder="Ex: 450"
                    value={playerForm.lp || ''}
                    onChange={e => setPlayerForm({...playerForm, lp: parseInt(e.target.value)})}
                  />
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="secondary" onClick={() => setStep(1)}>Retour</Button>
                <Button fullWidth onClick={() => setStep(3)}>Suivant <ChevronRight size={16} /></Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fadeIn text-center py-8">
               <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                 <Check size={32} />
               </div>
               <h3 className="text-xl font-bold text-white">Profil Prêt !</h3>
               <p className="text-slate-400 text-sm">Votre CV esport est généré. Vous pouvez maintenant accéder à votre tableau de bord et postuler aux offres.</p>
               
               <div className="bg-nexus-900 p-4 rounded border border-nexus-800 text-left mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                     <span className="text-slate-500">Pseudo</span>
                     <span className="text-white font-bold">{playerForm.summonerName}</span>
                  </div>
                   <div className="flex justify-between mb-1">
                     <span className="text-slate-500">Rang</span>
                     <span className="text-nexus-400 font-bold">{playerForm.rank}</span>
                  </div>
                   <div className="flex justify-between">
                     <span className="text-slate-500">Rôle</span>
                     <span className="text-white">{playerForm.role}</span>
                  </div>
               </div>

               <Button fullWidth onClick={handlePlayerSubmit} className="mt-6">Accéder au Dashboard</Button>
            </div>
          )}
        </Card>
      </div>
    );
  }

  // RECRUITER FLOW
  if (type === 'RECRUITER') {
    return (
      <div className="min-h-screen bg-nexus-950 flex items-center justify-center p-6">
        <Card className="max-w-xl w-full">
          <div className="mb-8 flex items-center justify-between">
             <h2 className="text-2xl font-display font-bold text-white">Inscription Structure</h2>
             <div className="text-nexus-500 font-mono text-sm">Étape {step}/2</div>
          </div>

          {step === 1 && (
             <div className="space-y-4 animate-fadeIn">
                <div>
                   <Label>Nom de l'Organisation</Label>
                   <Input 
                      placeholder="Ex: Karmine Corp"
                      value={recruiterForm.organization || ''}
                      onChange={e => setRecruiterForm({...recruiterForm, organization: e.target.value})}
                   />
                </div>
                 <div>
                   <Label>URL Logo (Optionnel)</Label>
                   <Input 
                      placeholder="https://..."
                      value={recruiterForm.logoUrl || ''}
                      onChange={e => setRecruiterForm({...recruiterForm, logoUrl: e.target.value})}
                   />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <Label>Votre Nom</Label>
                      <Input 
                         placeholder="Ex: Kameto"
                         value={recruiterForm.name || ''}
                         onChange={e => setRecruiterForm({...recruiterForm, name: e.target.value})}
                      />
                   </div>
                   <div>
                      <Label>Votre Poste</Label>
                      <Input 
                         placeholder="Ex: CEO, Head Coach..."
                         value={recruiterForm.position || ''}
                         onChange={e => setRecruiterForm({...recruiterForm, position: e.target.value})}
                      />
                   </div>
                </div>
                <Button fullWidth onClick={() => setStep(2)} className="mt-6">Suivant <ChevronRight size={16} /></Button>
             </div>
          )}

          {step === 2 && (
             <div className="space-y-4 animate-fadeIn">
                <div>
                   <Label>Ligue Principale</Label>
                   <Input 
                      placeholder="Ex: LFL, Div 2, Open Tour..."
                      value={recruiterForm.league || ''}
                      onChange={e => setRecruiterForm({...recruiterForm, league: e.target.value})}
                   />
                </div>
                <div className="p-4 bg-nexus-900 border border-nexus-800 rounded mb-4">
                   <Label>Jeux Recrutés</Label>
                   <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2 text-white cursor-pointer">
                         <input type="checkbox" checked readOnly className="accent-nexus-500" /> League of Legends
                      </label>
                      <label className="flex items-center gap-2 text-white cursor-pointer">
                         <input type="checkbox" checked readOnly className="accent-nexus-500" /> Valorant
                      </label>
                   </div>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-800/50 p-4 rounded text-xs text-yellow-200 mb-6">
                   ⚠️ Pour accéder à la base de données complète, votre structure devra être vérifiée manuellement par nos équipes sous 24h. L'accès "Invité" est limité.
                </div>

                <div className="flex gap-4">
                  <Button variant="secondary" onClick={() => setStep(1)}>Retour</Button>
                  <Button fullWidth onClick={handleRecruiterSubmit}>Créer Compte</Button>
                </div>
             </div>
          )}
        </Card>
      </div>
    );
  }

  return null;
};