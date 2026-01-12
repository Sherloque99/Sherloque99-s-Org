import React, { useState } from 'react';
import { PlayerProfile, Role, Rank } from '../types';
import { Button, Card, Label, Badge, RankBadge, Input } from '../components/ui/Common';
import { User, Edit2, Shield, MessageSquare, Briefcase, Settings } from 'lucide-react';

interface PlayerDashboardProps {
  player: PlayerProfile;
  logout: () => void;
}

export const PlayerDashboard: React.FC<PlayerDashboardProps> = ({ player, logout }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'messages'>('profile');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-nexus-950">
      {/* Sidebar */}
      <div className="w-64 bg-nexus-900 border-r border-nexus-800 flex flex-col">
        <div className="p-6 border-b border-nexus-800">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <div className="w-6 h-6 bg-nexus-500 rounded-sm"></div>
            NEXUS
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-nexus-800 text-white' : 'text-slate-400 hover:text-white hover:bg-nexus-800/50'}`}
          >
            <User size={18} />
            Mon CV
          </button>
          <button 
             onClick={() => setActiveTab('messages')}
             className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'messages' ? 'bg-nexus-800 text-white' : 'text-slate-400 hover:text-white hover:bg-nexus-800/50'}`}
          >
            <MessageSquare size={18} />
            Messagerie
            <span className="ml-auto bg-nexus-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
          </button>
        </nav>

        <div className="p-4 border-t border-nexus-800">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-slate-700"></div>
              <div className="text-xs">
                <p className="text-white font-medium">{player.summonerName}</p>
                <p className="text-slate-500">Compte Joueur</p>
              </div>
           </div>
           <Button variant="outline" fullWidth onClick={logout} className="text-xs h-8">Déconnexion</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="h-16 border-b border-nexus-800 flex items-center justify-between px-8 bg-nexus-950/80 backdrop-blur sticky top-0 z-10">
          <h1 className="text-xl font-bold text-white capitalize">{activeTab === 'profile' ? 'Mon Profil' : 'Mes Messages'}</h1>
          <div className="flex items-center gap-4">
             <span className={`flex items-center gap-2 text-xs font-mono uppercase px-3 py-1 rounded-full border ${player.isLFT ? 'border-green-800 bg-green-950/30 text-green-400' : 'border-red-800 bg-red-950/30 text-red-400'}`}>
                <span className={`w-2 h-2 rounded-full ${player.isLFT ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                {player.contractStatus}
             </span>
          </div>
        </header>

        <main className="p-8 max-w-5xl mx-auto">
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Profile Overview Card */}
              <div className="md:col-span-2 space-y-6">
                <Card className="relative overflow-hidden">
                   <div className="flex justify-between items-start mb-6">
                      <div className="flex items-start gap-4">
                         <div className="w-20 h-20 bg-nexus-800 rounded-lg flex items-center justify-center border border-nexus-700">
                            <span className="text-2xl font-bold text-nexus-500">{player.summonerName[0]}</span>
                         </div>
                         <div>
                            <h2 className="text-2xl font-bold text-white mb-1">{player.summonerName}</h2>
                            <p className="text-slate-400 text-sm mb-3">{player.realName} • {player.age} Ans • {player.country}</p>
                            <div className="flex gap-2">
                               <RankBadge rank={player.rank} lp={player.lp} />
                               <Badge text={player.role} type="info" />
                            </div>
                         </div>
                      </div>
                      <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                        <Edit2 size={16} /> Éditer
                      </Button>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 border-t border-nexus-800 pt-6">
                      <div>
                        <Label>Meilleurs Champions</Label>
                        <div className="flex gap-2 mt-2">
                          {player.champions.map(c => (
                            <span key={c} className="text-sm bg-nexus-950 border border-nexus-800 px-2 py-1 rounded text-slate-300">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label>Langues</Label>
                        <div className="text-slate-300 text-sm mt-2">
                          {player.languages.join(", ")}
                        </div>
                      </div>
                   </div>
                </Card>

                <Card>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={18} className="text-nexus-500" />
                    <h3 className="font-bold text-white">Historique de Carrière</h3>
                  </div>
                  <div className="space-y-4">
                    {player.experience.map((exp, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded bg-nexus-950/50 border border-nexus-800/50">
                        <div className="w-1 bg-nexus-700 rounded-full h-full"></div>
                        <div>
                           <h4 className="text-white font-medium">{exp.teamName}</h4>
                           <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
                           {exp.achievement && <p className="text-sm text-nexus-400 mt-1">{exp.achievement}</p>}
                        </div>
                      </div>
                    ))}
                    {player.experience.length === 0 && (
                      <p className="text-slate-500 italic text-sm">Aucune expérience d'équipe officielle listée.</p>
                    )}
                  </div>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card>
                   <div className="flex items-center gap-2 mb-4">
                    <Settings size={18} className="text-nexus-500" />
                    <h3 className="font-bold text-white">Paramètres de Statut</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Statut Contractuel</Label>
                      <select className="w-full bg-nexus-950 border border-nexus-800 text-slate-200 text-sm p-2 rounded mt-1">
                        <option>Agent Libre</option>
                        <option>Sous Contrat</option>
                        <option>À l'écoute</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-nexus-950 rounded border border-nexus-800">
                       <span className="text-sm text-slate-300">Profil Public</span>
                       <div className="w-8 h-4 bg-green-900 rounded-full relative cursor-pointer">
                          <div className="w-4 h-4 bg-green-500 rounded-full absolute right-0 top-0 shadow"></div>
                       </div>
                    </div>
                  </div>
                </Card>

                <div className="bg-blue-950/20 border border-blue-900/50 p-4 rounded-md">
                   <div className="flex gap-3">
                     <Shield className="text-blue-400 shrink-0" size={20} />
                     <div>
                       <h4 className="text-blue-200 font-medium text-sm mb-1">Joueur Vérifié</h4>
                       <p className="text-blue-400/70 text-xs leading-relaxed">
                         Votre compte est lié à l'API Riot. Le rang est mis à jour quotidiennement.
                       </p>
                     </div>
                   </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'messages' && (
            <Card className="h-[600px] flex flex-col p-0 overflow-hidden">
               <div className="flex-1 flex items-center justify-center text-slate-500 flex-col gap-4">
                 <div className="w-16 h-16 rounded-full bg-nexus-800 flex items-center justify-center">
                    <MessageSquare size={24} />
                 </div>
                 <p>Sélectionnez une conversation pour négocier.</p>
                 <Button variant="outline">Actualiser</Button>
               </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};