import React, { useState } from 'react';
import { ViewState, PlayerProfile, RecruiterProfile } from './types';
import { MOCK_PLAYERS, MOCK_RECRUITER } from './services/mockData';
import { LandingPage } from './pages/Landing';
import { PlayerDashboard } from './pages/PlayerDashboard';
import { RecruiterDashboard } from './pages/RecruiterDashboard';
import { Onboarding } from './pages/Onboarding';
import { Button, Card, Input, Label } from './components/ui/Common';

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);
  const [currentUser, setCurrentUser] = useState<PlayerProfile | null>(null);
  const [currentRecruiter, setCurrentRecruiter] = useState<RecruiterProfile | null>(null);

  // Login Demo State
  const [loginTab, setLoginTab] = useState<'PLAYER' | 'RECRUITER'>('PLAYER');

  const handleMockLogin = () => {
    if (loginTab === 'PLAYER') {
      setCurrentUser(MOCK_PLAYERS[0]); // Load mock player
      setView(ViewState.PLAYER_DASHBOARD);
    } else {
      setCurrentRecruiter(MOCK_RECRUITER); // Load mock recruiter
      setView(ViewState.RECRUITER_DASHBOARD);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentRecruiter(null);
    setView(ViewState.LANDING);
  };

  const handleOnboardingPlayer = (player: PlayerProfile) => {
    setCurrentUser(player);
    setView(ViewState.PLAYER_DASHBOARD);
  };

  const handleOnboardingRecruiter = (recruiter: RecruiterProfile) => {
    setCurrentRecruiter(recruiter);
    setView(ViewState.RECRUITER_DASHBOARD);
  };

  if (view === ViewState.LANDING) {
    return <LandingPage onNavigate={setView} />;
  }

  if (view === ViewState.ONBOARDING) {
    return (
      <Onboarding 
        onCompletePlayer={handleOnboardingPlayer}
        onCompleteRecruiter={handleOnboardingRecruiter}
        onCancel={() => setView(ViewState.LANDING)}
      />
    );
  }

  if (view === ViewState.LOGIN) {
    return (
      <div className="min-h-screen bg-nexus-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-nexus-500/10 blur-[100px] rounded-full pointer-events-none" />

        <Card className="w-full max-w-md bg-nexus-900/90 backdrop-blur border-nexus-800 shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Bon retour</h2>
            <p className="text-slate-400 text-sm">Connectez-vous pour accéder au réseau professionnel.</p>
          </div>

          <div className="flex p-1 bg-nexus-950 rounded-lg mb-6 border border-nexus-800">
            <button 
              onClick={() => setLoginTab('PLAYER')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${loginTab === 'PLAYER' ? 'bg-nexus-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Joueur
            </button>
            <button 
              onClick={() => setLoginTab('RECRUITER')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${loginTab === 'RECRUITER' ? 'bg-nexus-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Recruteur
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Adresse Email</Label>
              <Input type="email" placeholder="nom@team.gg" />
            </div>
            <div>
              <Label>Mot de passe</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            
            <Button fullWidth onClick={handleMockLogin} className="mt-6">
              Se Connecter (Démo)
            </Button>
            
            <p className="text-center text-xs text-slate-500 mt-4">
              Pas de compte ? <span className="text-nexus-400 cursor-pointer hover:underline" onClick={() => setView(ViewState.ONBOARDING)}>Créer un profil</span>.
            </p>
            <div className="text-center mt-4">
              <span onClick={() => setView(ViewState.LANDING)} className="text-xs text-slate-600 cursor-pointer hover:text-white transition-colors">
                ← Retour à l'accueil
              </span>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (view === ViewState.PLAYER_DASHBOARD && currentUser) {
    return <PlayerDashboard player={currentUser} logout={handleLogout} />;
  }

  if (view === ViewState.RECRUITER_DASHBOARD && currentRecruiter) {
    return <RecruiterDashboard recruiter={currentRecruiter} logout={handleLogout} />;
  }

  // Fallback if state is weird
  return <LandingPage onNavigate={setView} />;
}