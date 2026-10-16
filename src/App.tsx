import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Headset,
  ArrowRight, 
  Zap, 
  Send, 
  Menu, 
  X, 
  FileText, 
  GraduationCap,
  Activity, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Shield, 
  PhoneCall, 
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX 
} from 'lucide-react';
import { COMPANY_INFO } from './data/content';
import logo from './assets/images/logo.png';

// Ícone Oficial do WhatsApp (Vetor SVG Autêntico)
const WhatsAppIcon = ({ className = "w-5 h-5", fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill={fill}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Player com controles customizados (apenas Play, Pausa, Volume e Mudo, sem detalhes/chrome do YouTube)
const YouTubePlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [playerError, setPlayerError] = useState<number | null>(null);
  const controlsTimeoutRef = useRef<any>(null);

  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    let isMounted = true;
    let timer: any = null;

    const forceDisableCaptions = (player: any) => {
      try {
        if (!player) return;
        if (typeof player.unloadModule === 'function') {
          player.unloadModule('captions');
        }
        if (typeof player.setOption === 'function') {
          player.setOption('captions', 'track', {});
          player.setOption('captions', 'fontSize', 0);
          player.setOption('cc', 'track', {});
        }
      } catch (e) {}
    };

    const initPlayer = () => {
      if (!containerRef.current || !(window as any).YT || !(window as any).YT.Player) return;
      if (playerRef.current) return;

      playerRef.current = new (window as any).YT.Player(containerRef.current, {
        videoId: 'uqUvMDoLbNs',
        width: '100%',
        height: '100%',
        playerVars: {
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          cc_load_policy: 3,
          cc_lang_pref: 'none',
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            forceDisableCaptions(event.target);
            if (isMounted) {
              setIsReady(true);
              setDuration(event.target.getDuration() || 0);
              setIsMuted(event.target.isMuted() || false);
              setVolume(event.target.getVolume() || 100);
            }
          },
          onStateChange: (event: any) => {
            forceDisableCaptions(event.target);
            if (isMounted) {
              const state = event.data;
              if (state === 1) {
                setIsPlaying(true);
              } else {
                setIsPlaying(false);
                setShowControls(true);
              }
            }
          },
          onError: (event: any) => {
            if (isMounted) {
              setPlayerError(event.data);
              setIsPlaying(false);
              setShowControls(true);
            }
          },
        },
      });

      timer = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          try {
            setCurrentTime(playerRef.current.getCurrentTime() || 0);
            const dur = playerRef.current.getDuration() || 0;
            if (dur > 0) setDuration(dur);
          } catch (e) {}
        }
      }, 500);
    };

    if (!(window as any).YT || !(window as any).YT.Player) {
      const existingScript = document.getElementById('youtube-iframe-api');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
      
      const prevCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        if (isMounted) initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      isMounted = false;
      if (timer) clearInterval(timer);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (err) {}
    resetControlsTimeout();
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (err) {}
    resetControlsTimeout();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (!playerRef.current) return;
    try {
      playerRef.current.setVolume(val);
      if (val === 0) {
        playerRef.current.mute();
        setIsMuted(true);
      } else if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    } catch (err) {}
    resetControlsTimeout();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCurrentTime(val);
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      try {
        playerRef.current.seekTo(val, true);
      } catch (err) {}
    }
    resetControlsTimeout();
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <div 
      className="relative w-full h-full aspect-video bg-black rounded-2xl overflow-hidden group select-none"
      onMouseMove={resetControlsTimeout}
      onMouseEnter={() => setShowControls(true)}
      onClick={togglePlay}
    >
      {/* Container do Iframe (pointer-events-none oculta interação com links do YouTube) */}
      <div className="absolute inset-0 pointer-events-none">
        <div ref={containerRef} className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0" />
      </div>

      {/* Botão Central de Play quando pausado */}
      {playerError ? (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#070b14] p-6 text-center">
          <p className="text-sm font-semibold text-white">
            Não foi possível reproduzir o vídeo incorporado (erro {playerError}).
          </p>
          <a
            href="https://www.youtube.com/watch?v=uqUvMDoLbNs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#ff6600] px-4 py-2 text-xs font-bold text-white hover:bg-[#ea580c]"
          >
            Assistir no YouTube
          </a>
        </div>
      ) : !isPlaying && isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs transition-opacity z-20">
          <button
            onClick={togglePlay}
            aria-label="Reproduzir vídeo"
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#ff6600] hover:bg-[#ea580c] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
          </button>
        </div>
      )}

      {/* Controles Exclusivos (Apenas Play, Pausa, Volume e Mudo) */}
      <div 
        className={`absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-black/95 via-black/75 to-transparent pt-8 pb-4 px-4 sm:px-6 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de Progresso / Linha do Tempo */}
        <div className="mb-3 flex items-center gap-3 text-[11px] font-medium text-slate-300">
          <span>{formatTime(currentTime)}</span>
          <div className="flex-1 relative flex items-center">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-[#ff6600] focus:outline-none"
            />
          </div>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Botões Play, Pausa, Volume e Mudo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play / Pausa */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Volume e Mudo */}
            <div className="flex items-center gap-2 group/vol">
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
                className="w-9 h-9 rounded-lg hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-red-400" />
                ) : (
                  <Volume2 className="w-5 h-5 text-slate-200" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Controle de volume"
                className="w-20 sm:w-28 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#ff6600] focus:outline-none"
              />
            </div>
          </div>

          <div className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase">
            {isPlaying ? 'Reproduzindo' : 'Pausado'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Compact Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Engenharia Elétrica');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const openWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg || `Olá Eng. Kleber Francisco! Gostaria de um orçamento para soluções em engenharia.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor, informe seu nome e telefone.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          service,
          message,
          _subject: `Nova solicitação de orçamento - ${COMPANY_INFO.name}`,
          _template: 'table',
        }),
      });
      const result = await response.json() as { success?: boolean | string; message?: string };

      if (!response.ok || result.success === false || result.success === 'false') {
        if (result.message?.toLowerCase().includes('needs activation')) {
          throw new Error(`Confirme a ativação do formulário pelo e-mail enviado para ${COMPANY_INFO.email}. Verifique também a caixa de spam.`);
        }
        throw new Error(result.message || 'O serviço de e-mail recusou o envio. Tente novamente mais tarde.');
      }

      setSentSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Falha de conexão. Tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const solutions = [
    {
      id: 'eletrica',
      title: 'Engenharia Elétrica',
      norma: 'Projetos & Instalações',
      shortText: 'Projetos elétricos, laudos, consultorias e instalação de carregadores para veículos elétricos em instalações residenciais, comerciais e industriais.',
      items: [
        'Instalação de carregadores para veículos elétricos',
        'Projetos elétricos comerciais, prediais e industriais',
        'Padrão de entrada (Neoenergia/Elektro)',
        'Laudo de instalações elétricas (NR-10)',
        'Laudo de termografia infravermelha em painéis elétricos',
        'Inspeções e consultorias técnicas',
      ],
      image: '/src/assets/images/engenharia_eletrica_paineis_1792129773302.jpg',
      icon: Zap,
    },
    {
      id: 'projetos',
      title: 'Projetos Elétricos',
      norma: 'Projetos industriais e comerciais',
      shortText: 'Desenvolvimento de projetos elétricos para novas instalações e adequações, conforme o escopo e as normas aplicáveis.',
      items: [
        'Levantamento de necessidades e dados de entrada',
        'Diagramas e documentação técnica',
        'Dimensionamento de circuitos e dispositivos',
        'Projetos para instalações prediais e industriais',
      ],
      image: '/src/assets/images/projetos-luminotecnico.png',
      icon: FileText,
    },
    {
      id: 'montagem-paineis',
      title: 'Montagem de Painéis Elétricos',
      norma: 'Comando e distribuição',
      shortText: 'Montagem de painéis de comando e distribuição conforme o projeto e a aplicação da instalação.',
      items: [
        'Montagem e organização de componentes',
        'Identificação de circuitos e dispositivos',
        'Painéis de comando, força e distribuição',
        'Verificação da montagem conforme o projeto',
      ],
      image: '/src/assets/images/montagem-paineis.jpg',
      icon: Zap,
    },
    {
      id: 'nr12',
      title: 'Adequação à NR-12',
      norma: 'NR-12 / Safety WEG',
      shortText: 'Adequação completa de máquinas e equipamentos à NR-12. Capacitação técnica na linha Safety da WEG e outras marcas líderes.',
      items: [
        'Apreciação e quantificação de riscos (Matriz HRN)',
        'Projetos mecânicos e elétricos de segurança',
        'Dispositivos de parada de emergência e intertravamento',
        'Laudo técnico conclusivo com ART válida nacionalmente',
      ],
      image: '/src/assets/images/adequacao_nr12_weg_maquinas_1792129814570.jpg',
      icon: ShieldCheck,
    },
    {
      id: 'solar',
      title: 'Energia Solar Fotovoltaica',
      norma: 'Projetos & Instalações',
      shortText: 'Projetos e instalação de sistemas fotovoltaicos e garagens solares, com venda de equipamentos para residências, comércios e indústrias.',
      items: [
        'Projeto e dimensionamento de sistemas fotovoltaicos',
        'Instalação de sistemas de energia solar',
        'Venda de equipamentos para sistemas fotovoltaicos',
        'Projetos de garagens solares (carports fotovoltaicos)',
      ],
      image: '/src/assets/images/solar-panels-public-domain.jpg',
      icon: Zap,
    },
    {
      id: 'seguranca',
      title: 'Segurança do Trabalho & PPCI',
      norma: 'Corpo de Bombeiros / PGR',
      shortText: 'Prevenção e combate a incêndio, atendimento às exigências do Corpo de Bombeiros e gerenciamento ocupacional.',
      items: [
        'PPCI (prevenção e combate a incêndio)',
        'Projetos para o Corpo de Bombeiros (AVCB/CLCB)',
        'PTS (projeto técnico simplificado)',
        'PGR (gerenciamento de riscos) e perícias técnicas',
      ],
      image: '/src/assets/images/ppci_combate_incendio_1792129787205.jpg',
      icon: Shield,
    },
    {
      id: 'nr1',
      title: 'Adequação à NR-1',
      norma: 'NR-1 / GRO / PGR',
      shortText: 'Apoio à gestão de riscos ocupacionais, com orientação para organizar e atualizar o PGR conforme a realidade da empresa.',
      items: [
        'Identificação de perigos e avaliação de riscos ocupacionais',
        'Inventário de riscos e plano de ação',
        'Orientação para implantação e acompanhamento do PGR',
        'Integração da gestão de riscos à rotina da empresa',
      ],
      image: '/src/assets/images/nr1-mundorh.jpg',
      icon: ShieldCheck,
    },
    {
      id: 'treinamentos',
      title: 'Treinamentos de NRs In Company',
      norma: 'Treinamentos In Company',
      shortText: 'Treinamentos presenciais de Normas Regulamentadoras, com conteúdo alinhado às atividades e aos riscos da operação.',
      items: [
        'Conteúdo conforme a NR e o escopo contratados',
        'Exemplos relacionados à rotina da equipe',
        'Realização nas instalações da empresa',
        'Formato e agenda alinhados à operação',
      ],
      image: '/src/assets/images/treinamentos-nrs.png',
      icon: GraduationCap,
    },
    {
      id: 'spda',
      title: 'Laudo de SPDA & Para-Raios',
      norma: 'ABNT NBR 5419',
      shortText: 'Inspeção e medição de resistência do sistema de proteção contra descargas atmosféricas obrigatória para AVCB.',
      items: [
        'Medição ôhmica de aterramento com terrômetro calibrado',
        'Inspeção da malha captora e descidas estruturais',
        'Verificação de DPS (Dispositivos contra Surtos)',
        'Documentação oficial assinada com emissão de ART',
      ],
      image: '/src/assets/images/processospda.png',
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b111e] text-[#f1f5f9] selection:bg-[#ff6600] selection:text-white">
      
      {/* 1. TOPO DISCRETO (Dark Navy) */}
      <div className="bg-[#070b14] text-slate-400 text-xs border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-[#ff7a00] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#ff7a00] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-[#ff7a00] uppercase tracking-wide">
              {COMPANY_INFO.crea}
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 text-[11px]">Três Lagoas - MS · Atendimento Nacional</span>
          </div>
        </div>
      </div>

      {/* 2. CABEÇALHO ESCURO (Estilo kleberfrancisco.com) */}
      <header className="sticky top-0 z-40 bg-[#0e1626]/95 backdrop-blur-md border-b border-slate-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between gap-4">
          
          {/* Logo Oficial com Capacete Laranja e Raio */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img src={logo} alt="" className="h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                KLEBER FRANCISCO
              </span>
              <span className="text-[11px] font-semibold text-[#ff7a00] uppercase tracking-wider mt-0.5">
                Soluções em Engenharias
              </span>
            </div>
          </a>

          {/* Navegação Simples */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            {/* Botão HOME em caixa branca como no screenshot */}
            <a 
              href="#inicio" 
              className="px-3.5 py-1.5 bg-white text-[#0e1626] font-extrabold rounded shadow-xs"
            >
              HOME
            </a>
            <a 
              href="#sobre" 
              className="text-[#ff7a00] hover:text-white transition-colors"
            >
              SOBRE
            </a>
            <a 
              href="#solucoes" 
              className="text-[#ff7a00] hover:text-white transition-colors"
            >
              SOLUÇÕES
            </a>
            <a 
              href="#contato" 
              className="text-[#ff7a00] hover:text-white transition-colors"
            >
              CONTATO
            </a>
          </nav>

          {/* Botão de Orçamento no WhatsApp */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp()}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#ff6600] hover:bg-[#ea580c] text-white rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>Orçamento</span>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a101b] border-t border-slate-800 px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white"
            >
              Home
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#ff7a00]"
            >
              Sobre
            </a>
            <a 
              href="#solucoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#ff7a00]"
            >
              Soluções
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#ff7a00]"
            >
              Contato
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO ESCURO & DIRETO */}
      <section id="inicio" className="relative py-20 md:py-24 bg-[#0e1626] border-b border-slate-800/80 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_industrial_engineering_1792124516783.jpg"
            alt="Engenharia Elétrica e Segurança do Trabalho - Kleber Francisco"
            className="w-full h-full object-cover object-[center_35%] opacity-45"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-[#0e1626]/55 to-[#0e1626]/25" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 h-[60px] leading-[50px] text-[13px] bg-[#ff6600]/15 border border-[#ff6600]/30 rounded-md font-bold uppercase tracking-wider text-[#ff7a00] mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Engenharia Elétrica & Segurança do Trabalho</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
            Impulsionando Projetos com <span className="text-[#ff6600]">Soluções Inovadoras</span> e Conformidade Legal
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-sm font-medium">
            Projetos elétricos e fotovoltaicos, carregadores para veículos elétricos, laudos, adequações às NRs e treinamentos in company em todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openWhatsApp('Olá Eng. Kleber Francisco! Gostaria de solicitar um orçamento.')}
              className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-wider bg-[#ff6600] hover:bg-[#ea580c] text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>

            <a
              href="#solucoes"
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors text-center"
            >
              Ver Soluções
            </a>
          </div>

          {/* Selos Simples de Garantia */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ff7a00]" />
              <span>Emissão de ART em 100% dos Laudos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ff7a00]" />
              <span>Sem Paralisar a Produção</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#ff7a00]" />
              <span>Perito Judicial & Professor</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16 md:py-20 bg-[#0b111e] border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#131c2e]">
              <img
                src="/src/assets/images/hero_creative_workspace_1792124218829.jpg"
                alt="Engenheiro analisando um projeto técnico"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#ff7a00] mb-2">
                Sobre a empresa
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                Engenharia elétrica e segurança do trabalho com responsabilidade técnica
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                A {COMPANY_INFO.brandName} oferece projetos, laudos, adequações e treinamentos para empresas, com soluções alinhadas às necessidades de cada operação.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Com atendimento em todo o Brasil, as soluções são desenvolvidas com foco em segurança, conformidade normativa e continuidade operacional.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-7 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#ff7a00] shrink-0" />
                  Engenharia elétrica
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff7a00] shrink-0" />
                  Segurança do trabalho
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#ff7a00] shrink-0" />
                  Laudos e projetos com ART
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#ff7a00] shrink-0" />
                  Treinamentos in company
                </div>
              </div>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-lg bg-[#ff6600] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#ea580c]"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÕES EM ENGENHARIA (CARDS ESCUROS COM FOTOS E ITENS) */}
      <section id="solucoes" className="py-16 md:py-20 bg-[#0b111e] border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ff6600] mb-1">
              Soluções Especializadas
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Nossos Serviços de Engenharia
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Projetos, adequações e laudos técnicos em conformidade com as Normas Regulamentadoras e emissão de ART.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-[#131c2e] border border-slate-800 rounded-xl overflow-hidden hover:border-[#ff6600] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131c2e] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold text-[#ff7a00] bg-[#0e1626]/90 backdrop-blur-xs px-2.5 py-1 rounded border border-[#ff6600]/30 shadow-xs">
                        {svc.norma}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#ff6600]/90 backdrop-blur-xs flex items-center justify-center text-white shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#ff7a00] transition-colors">
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {svc.shortText}
                      </p>

                      {svc.items && svc.items.length > 0 && (
                        <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                          {svc.items.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                              <span className="text-[#ff6600] font-bold select-none">-</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end">
                      <button
                        onClick={() => openWhatsApp(`Olá Eng. Kleber Francisco! Gostaria de um orçamento para: ${svc.title}.`)}
                        className="w-full sm:w-auto px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#ff6600] hover:bg-[#ea580c] text-white rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>Orçar Serviço</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VÍDEO EXCLUSIVO / CANAL TÉCNICO */}
      <section id="video" className="py-16 md:py-20 bg-[#0e1626] border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-md text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
              <Youtube className="w-4 h-4 text-red-500" />
              <span>Conteúdo Técnico & Especializado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Engenharia e Segurança em Foco
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Assista à análise técnica e explicações sobre riscos elétricos, adequações normativas e segurança industrial apresentadas pelo Eng. Kleber Francisco.
            </p>
          </div>

          {/* Player de Vídeo em Moldura High-Tech */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black aspect-video max-w-4xl mx-auto group">
            <YouTubePlayer />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Problemas para reproduzir?{' '}
            <a
              href="https://www.youtube.com/watch?v=uqUvMDoLbNs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#ff7a00] hover:text-white transition-colors"
            >
              Assista diretamente no YouTube
            </a>
          </p>
        </div>
      </section>

      {/* 6. CONTATO SIMPLES E ENXUTO (NÃO EXAGERADO) */}
      <section id="contato" className="py-16 md:py-20 bg-[#0e1626]">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center max-w-lg mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ff6600] mb-1">
              Fale Conosco
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Solicite um Orçamento
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Envie sua mensagem abaixo ou clique para falar diretamente no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Canais Diretos (Compactos) */}
            <div className="md:col-span-5 space-y-3">
              <div 
                onClick={() => openWhatsApp()} 
                className="p-4 bg-[#131c2e] border border-emerald-500/30 rounded-xl cursor-pointer hover:border-emerald-500 transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-400 uppercase">WhatsApp Direto</div>
                  <div className="text-sm font-bold text-white">{COMPANY_INFO.phone}</div>
                </div>
              </div>

              <div className="p-4 bg-[#131c2e] border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#ff7a00]" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff7a00]" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="pt-1 flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <Headset className="w-3.5 h-3.5 text-[#ff7a00]" />
                  <span>{COMPANY_INFO.contactApproach}</span>
                </div>
              </div>
            </div>

            {/* Formulário Compacto e Simples */}
            <div className="md:col-span-7 bg-[#131c2e] border border-slate-800 p-6 rounded-2xl">
              {sentSuccess ? (
                  <div className="text-center py-6 space-y-2" role="status">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-lg font-bold">
                    ✓
                  </div>
                  <h4 className="font-bold text-white text-base">Solicitação enviada!</h4>
                  <p className="text-xs text-slate-400">Sua mensagem foi encaminhada para {COMPANY_INFO.email}.</p>
                  <button
                    onClick={() => setSentSuccess(false)}
                    className="text-xs text-[#ff7a00] font-bold underline mt-2 cursor-pointer"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0b111e] border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff6600]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (67) 99916-6740"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0b111e] border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff6600]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Serviço Desejado
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0b111e] border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff6600]"
                    >
                      <option value="Engenharia elétrica">Engenharia elétrica (Projetos, SPDA, Padrão Elektro)</option>
                      <option value="Laudos técnicos">Laudos técnicos (NR-10, SPDA, Aterramento, Eficiência)</option>
                      <option value="Segurança do trabalho">Segurança do trabalho (PPCI, Bombeiros, PGR)</option>
                      <option value="Adequação NR-12">Adequação NR-12 (Máquinas e Linha Safety WEG)</option>
                      <option value="Outro Serviço">Outro Serviço</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Quantidade de máquinas ou prazo..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#0b111e] border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff6600]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#ff6600] hover:bg-[#ea580c] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitação de Orçamento'}</span>
                  </button>
                  {submitError && <p role="alert" className="text-xs text-red-400">{submitError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* 7. RODAPÉ OFICIAL (Idêntico ao screenshot) */}
      <footer className="bg-[#070b14] text-slate-400 pt-8 pb-12 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Linha Central de Ícones Sociais Laranjas Pequenos (Exatamente como no screenshot) */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="text-[#ff7a00] hover:text-white transition-colors"
              title="Telefone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="text-[#ff7a00] hover:text-white transition-colors"
              title="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button 
              onClick={() => openWhatsApp()} 
              className="text-[#ff7a00] hover:text-white transition-colors cursor-pointer"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </button>
            <a 
              href="https://www.linkedin.com/company/kleber-francisco-solu%C3%A7%C3%B5es-em-engenharias" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#ff7a00] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/kleberfranciscosolucoeseng/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#ff7a00] hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/@kleberfranciscoeng" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#ff7a00] hover:text-white transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Divisória Sutil e 3 Colunas (Como no screenshot) */}
          <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-slate-400">
            
            {/* Coluna Esquerda: Selo Navegação Segura Google */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-slate-500">Navegação Segura</div>
                <a
                  href="https://transparencyreport.google.com/safe-browsing/search?url=kleberfrancisco.com&hl=pt_BR"
                  target="_blank"
                  rel="noreferrer"
                  title="Relatório de Navegação Segura do Google"
                >
                  <img
                    src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                    alt="Google"
                    className="h-9 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Coluna Central: Copyright */}
            <div className="text-center text-slate-400 text-xs">
              Copyright © {new Date().getFullYear()} {COMPANY_INFO.brandName}
            </div>

            {/* Coluna Direita: Links Legais empilhados (Como no print) */}
            <div className="flex flex-col md:items-end gap-1 text-xs text-slate-400">
              <a
                href="/politica-de-privacidade.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-de-uso.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 8. BOTÃO VOLTAR AO TOPO (Canto inferior esquerdo, como no screenshot) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 left-5 z-40 w-10 h-10 bg-[#1867ff] hover:bg-[#0e56dc] text-white rounded flex items-center justify-center shadow-lg transition-all hover:scale-105 cursor-pointer"
        aria-label="Voltar ao Topo"
        title="Voltar ao início"
      >
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* 9. WIDGET FLUTUANTE WHATSAPP (Canto inferior direito, como no screenshot) */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={() => openWhatsApp()}
          className="hidden sm:inline-flex items-center px-4 py-2.5 bg-[#1867ff] hover:bg-[#0e56dc] text-white text-xs font-bold rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
        >
          Dúvidas? Entre em contato!
        </button>

        <div className="relative">
          <button
            onClick={() => openWhatsApp()}
            className="w-13 h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            aria-label="WhatsApp"
            title="Falar no WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6 fill-white" />
          </button>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md">
            1
          </span>
        </div>
      </div>

    </div>
  );
}
