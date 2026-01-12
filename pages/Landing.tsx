import React from 'react';
import { ViewState } from '../types';
import { Button, Card } from '../components/ui/Common';
import { Shield, Target, Users, Search, Lock, ChevronRight, Zap, FileText, CheckCircle2, XCircle, Crosshair, Sword } from 'lucide-react';

interface LandingProps {
  onNavigate: (view: ViewState) => void;
}

export const LandingPage: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-nexus-950 font-sans selection:bg-nexus-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-nexus-800/50 bg-nexus-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onNavigate(ViewState.LANDING)}>
            <div className="w-10 h-10 bg-gradient-to-br from-nexus-500 to-indigo-700 skew-x-[-10deg] flex items-center justify-center shadow-lg shadow-nexus-500/20 group-hover:shadow-nexus-500/40 transition-all">
              <span className="font-display font-bold text-white text-xl skew-x-[10deg]">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tighter text-white leading-none">NEXUS</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-nexus-500 uppercase">Réseau Scouting</span>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <span className="text-slate-400 hover:text-white text-sm font-medium cursor-pointer transition-colors">Pour les Joueurs</span>
            <span className="text-slate-400 hover:text-white text-sm font-medium cursor-pointer transition-colors">Pour les Structures</span>
            <div className="h-4 w-px bg-nexus-800"></div>
            <span className="text-white hover:text-nexus-400 text-sm font-bold cursor-pointer transition-colors" onClick={() => onNavigate(ViewState.LOGIN)}>Connexion</span>
            <Button onClick={() => onNavigate(ViewState.ONBOARDING)} variant="primary" className="glitch-hover">
              Rejoindre
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements - Lisibilité améliorée */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 grayscale mix-blend-overlay"></div>
        {/* Gradient plus agressif pour le contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-nexus-950 via-nexus-950/95 to-nexus-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-nexus-950 via-transparent to-transparent"></div>
        
        {/* Orbs décoratifs */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-nexus-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-val-red/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-nexus-900/80 border-l-2 border-nexus-500 backdrop-blur mb-8 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <span className="text-nexus-200 font-mono text-xs uppercase tracking-widest font-bold">En ligne pour EUW & EMEA</span>
            </div>
            
            <h1 className="font-display font-bold text-7xl md:text-9xl text-white leading-[0.85] tracking-tighter uppercase mb-8 drop-shadow-2xl">
              Ne laisse pas ton <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-400 via-white to-nexus-400 bg-300% animate-gradient filter drop-shadow-lg">Talent pourrir</span> <br/>
              <span className="text-slate-400 filter drop-shadow-lg">dans les DMs</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 max-w-xl leading-relaxed border-l-2 border-nexus-700 pl-6 drop-shadow-md bg-nexus-950/30 py-2 rounded-r">
              L'infrastructure professionnelle pour la prochaine génération de talents. 
              CVs centralisés, stats vérifiées et contrats directs pour <strong className="text-white">League of Legends</strong> et <strong className="text-white">Valorant</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-nexus-500 to-purple-600 rounded blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
                <Button onClick={() => onNavigate(ViewState.ONBOARDING)} className="relative h-14 px-10 text-lg bg-black border border-nexus-700/50">
                  Créer mon CV Joueur
                </Button>
              </div>
              <Button variant="outline" onClick={() => onNavigate(ViewState.ONBOARDING)} className="h-14 px-10 text-lg bg-nexus-950/50 backdrop-blur">
                Recruter des Talents
              </Button>
            </div>

            {/* Game Supported Badges */}
            <div className="mt-16 flex items-center gap-6 opacity-80 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-3 border-r border-slate-700 pr-6">
                <div className="w-8 h-8 rounded bg-lol-dark border border-lol-blue flex items-center justify-center shadow-lg shadow-lol-blue/20">
                  <Sword size={16} className="text-lol-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-400 text-xs uppercase tracking-wider">League of</span>
                  <span className="font-display font-bold text-lg text-white leading-none">LEGENDS</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded bg-val-dark border border-val-red flex items-center justify-center shadow-lg shadow-val-red/20">
                  <Crosshair size={16} className="text-val-red" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-400 text-xs uppercase tracking-wider">Riot Games</span>
                  <span className="font-display font-bold text-lg text-white leading-none">VALORANT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Abstract UI Element */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/6 w-[800px] h-[600px] bg-nexus-900/60 border border-nexus-800 backdrop-blur-xl rounded-l-3xl shadow-2xl p-8 rotate-[-2deg] hover:rotate-0 transition-transform duration-700 z-0">
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4">
             {/* Mock Player Card inside Hero */}
             <div className="bg-nexus-950 border border-nexus-800 p-4 rounded flex items-center gap-4 shadow-lg">
                <div className="w-16 h-16 bg-nexus-800 rounded flex items-center justify-center text-nexus-500 font-bold text-2xl">C</div>
                <div className="flex-1">
                   <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-white">CapsLock</h4>
                      <span className="text-xs text-green-400 bg-green-950/50 px-2 py-0.5 rounded border border-green-900">À L'ÉCOUTE</span>
                   </div>
                   <div className="flex gap-3 text-xs text-slate-400 font-mono">
                      <span>MID LANE</span>
                      <span>•</span>
                      <span className="text-yellow-500">CHALLENGER 1250LP</span>
                   </div>
                </div>
                <div className="px-4 py-2 bg-nexus-500 text-white font-bold text-xs rounded hover:bg-nexus-400 cursor-pointer shadow-lg shadow-nexus-500/20">
                  CONTACT
                </div>
             </div>
             {/* Mock Message */}
             <div className="bg-nexus-950 border border-nexus-800 p-4 rounded ml-8 border-l-4 border-l-nexus-500 shadow-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">Vitality • Head Scout</span>
                  <span className="text-[10px] text-slate-500">10:42</span>
                </div>
                <p className="text-sm text-slate-300">"On a vu ta performance récente en qualifications Prime League. Serais-tu disponible pour un bloc de scrims mardi prochain ?"</p>
             </div>
          </div>
        </div>
      </section>

      {/* The "Why" - Comparison Section */}
      <section className="py-24 bg-nexus-900 border-y border-nexus-800 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-5xl text-white mb-6 uppercase">L'écosystème est <span className="text-red-500 line-through decoration-4">Cassé</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Les joueurs talentueux sont invisibles. Les scouts sont submergés. Le processus de recrutement actuel repose sur le "piston" et des DMs Twitter chaotiques.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4 opacity-50">
                    <XCircle className="text-red-500 shrink-0 mt-1" />
                    <div>
                       <h4 className="text-white font-bold text-lg">La "Loterie Twitter"</h4>
                       <p className="text-sm text-slate-500">Poster des tweets "LFT" et espérer qu'un RT vous mette sous les yeux de la bonne personne.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 opacity-50">
                    <XCircle className="text-red-500 shrink-0 mt-1" />
                    <div>
                       <h4 className="text-white font-bold text-lg">Tryouts non suivis</h4>
                       <p className="text-sm text-slate-500">Des Google Sheets perdus, des stats non vérifiées et du "ghosting" fréquent.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-nexus-400 shrink-0 mt-1" />
                    <div>
                       <h4 className="text-white font-bold text-lg">Le Standard Nexus</h4>
                       <p className="text-sm text-slate-400">Une plateforme vérifiée et orientée data où seule la performance compte.</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-nexus-500 to-transparent opacity-10 blur-2xl"></div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-nexus-950 border border-nexus-800 p-6 rounded-lg shadow-2xl">
                     <div className="flex items-center justify-between mb-4 border-b border-nexus-800 pb-4">
                        <span className="font-display font-bold text-xl text-white">CV NEXUS</span>
                        <Shield className="text-nexus-500" size={20} />
                     </div>
                     <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                           <span className="text-slate-500">Rang Vérifié</span>
                           <span className="text-yellow-500">CHALLENGER</span>
                        </div>
                         <div className="flex justify-between">
                           <span className="text-slate-500">Rôle</span>
                           <span className="text-white">JUNGLE</span>
                        </div>
                         <div className="flex justify-between">
                           <span className="text-slate-500">Disponibilité</span>
                           <span className="text-green-400">IMMÉDIATE</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="bg-nexus-800/30 border border-nexus-700/50 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                     <Lock className="text-slate-500 mb-2" />
                     <span className="text-slate-400 text-sm font-bold">CONTACTS PRIVÉS</span>
                  </div>
                  <div className="bg-nexus-800/30 border border-nexus-700/50 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                     <FileText className="text-slate-500 mb-2" />
                     <span className="text-slate-400 text-sm font-bold">ARCHIVE CONTRATS</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-nexus-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nexus-500/20 to-val-red/20 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display font-bold text-6xl text-white mb-6 uppercase tracking-tighter">
            Prêt à passer <span className="text-nexus-400">Pro ?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Rejoignez 2,000+ joueurs et 150+ organisations qui construisent le futur de l'esport européen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button onClick={() => onNavigate(ViewState.ONBOARDING)} className="h-16 px-12 text-xl shadow-2xl shadow-nexus-500/30">
                Créer Profil Joueur
             </Button>
             <Button variant="secondary" onClick={() => onNavigate(ViewState.ONBOARDING)} className="h-16 px-12 text-xl">
                Inscrire ma Structure
             </Button>
          </div>
          <p className="mt-8 text-xs text-slate-500 font-mono">
             VERSION MVP 1.0 • AUCUNE CARTE BANCAIRE REQUISE POUR LES JOUEURS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nexus-950 border-t border-nexus-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-sm font-mono">
            © 2024 NEXUS SCOUT. NON AFFILIÉ À RIOT GAMES.
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};