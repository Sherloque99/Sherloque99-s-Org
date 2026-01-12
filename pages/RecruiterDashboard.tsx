import React, { useState } from 'react';
import { RecruiterProfile, PlayerProfile, Role, Rank } from '../types';
import { MOCK_PLAYERS } from '../services/mockData';
import { Button, Card, Label, Badge, RankBadge, Input } from '../components/ui/Common';
import { Search, Filter, Briefcase, ChevronRight, UserPlus, Bookmark } from 'lucide-react';

interface RecruiterDashboardProps {
  recruiter: RecruiterProfile;
  logout: () => void;
}

export const RecruiterDashboard: React.FC<RecruiterDashboardProps> = ({ recruiter, logout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<Role | 'ALL'>('ALL');
  const [rankFilter, setRankFilter] = useState<Rank | 'ALL'>('ALL');

  const filteredPlayers = MOCK_PLAYERS.filter(p => {
    const matchesSearch = p.summonerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'ALL' || p.role === roleFilter;
    const matchesRank = rankFilter === 'ALL' || p.rank === rankFilter;
    return matchesSearch && matchesRole && matchesRank;
  });

  return (
    <div className="min-h-screen bg-nexus-950 text-slate-200">
      {/* Top Navigation */}
      <nav className="border-b border-nexus-800 bg-nexus-900 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-bold text-xl tracking-tight text-white">NEXUS<span className="text-nexus-500">SCOUT</span></div>
            <div className="hidden md:flex gap-1">
              <a href="#" className="px-3 py-2 text-sm text-white font-medium bg-nexus-800 rounded-md">Recherche Talents</a>
              <a href="#" className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors">Ma Sélection</a>
              <a href="#" className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors">Messagerie</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium text-white">{recruiter.name}</div>
              <div className="text-xs text-nexus-400">{recruiter.organization}</div>
            </div>
            <Button variant="outline" onClick={logout} className="text-xs">Déconnexion</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-end mb-8">
           <div>
             <h1 className="text-2xl font-bold text-white mb-2">Base de Talents</h1>
             <p className="text-slate-400">Parcourez les profils vérifiés pour la saison à venir.</p>
           </div>
           <Button>
             <UserPlus size={16} /> Publier une Offre
           </Button>
        </div>

        {/* Filters */}
        <div className="bg-nexus-900 border border-nexus-800 rounded-lg p-4 mb-8 sticky top-20 z-10 shadow-xl shadow-nexus-950/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
              <Input 
                placeholder="Chercher un pseudo..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <select 
                className="w-full bg-nexus-950 border border-nexus-800 text-slate-200 px-3 py-2 rounded focus:outline-none focus:border-nexus-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as Role | 'ALL')}
              >
                <option value="ALL">Tous Rôles</option>
                {Object.values(Role).map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div>
              <select 
                className="w-full bg-nexus-950 border border-nexus-800 text-slate-200 px-3 py-2 rounded focus:outline-none focus:border-nexus-500"
                value={rankFilter}
                onChange={(e) => setRankFilter(e.target.value as Rank | 'ALL')}
              >
                <option value="ALL">Tous Rangs</option>
                {Object.values(Rank).map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <Button variant="secondary" className="justify-center">
              <Filter size={16} /> Plus de Filtres
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4">
          {filteredPlayers.map(player => (
            <div key={player.id} className="group bg-nexus-900 border border-nexus-800 rounded-lg p-5 transition-all hover:border-nexus-600 hover:shadow-lg hover:shadow-nexus-900/50 flex flex-col md:flex-row items-start md:items-center gap-6">
              
              {/* Rank & Role Visuals */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 w-24">
                 <div className="w-16 h-16 bg-nexus-800 rounded-full flex items-center justify-center text-xl font-bold text-nexus-400">
                    {player.role[0]}
                 </div>
              </div>

              {/* Main Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white truncate">{player.summonerName}</h3>
                  <Badge 
                    text={player.contractStatus} 
                    type={player.isLFT ? 'success' : 'neutral'} 
                  />
                  <span className="text-xs text-slate-500 border border-nexus-800 px-1 rounded">{player.age} ans</span>
                  <span className="text-xs text-slate-500 border border-nexus-800 px-1 rounded">{player.country}</span>
                </div>
                
                <div className="flex items-center gap-4 mb-3">
                  <RankBadge rank={player.rank} lp={player.lp} />
                  <span className="text-slate-500 text-sm flex gap-2">
                    {player.champions.map(c => <span key={c} className="text-slate-400">{c}</span>)}
                  </span>
                </div>

                <p className="text-sm text-slate-400 line-clamp-1">{player.bio}</p>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0">
                <Button className="flex-1 whitespace-nowrap">Contacter</Button>
                <Button variant="outline" className="flex-1">
                  <Bookmark size={16} /> Sauver
                </Button>
              </div>
            </div>
          ))}

          {filteredPlayers.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <Search size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">Aucun joueur trouvé correspondant à vos critères.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};