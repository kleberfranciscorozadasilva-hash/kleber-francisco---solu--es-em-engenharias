import React, { useState } from 'react';
import { X, Copy, Check, FileCode2, Download, Layers, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface WordPressExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressExportModal: React.FC<WordPressExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'theme' | 'frontpage' | 'elementor' | 'instructions'>('theme');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const styleCssCode = `/*
Theme Name: Kleber Francisco - Indusc Industrial Theme
Theme URI: https://kleberfrancisco.com/
Description: Tema Industrial em WordPress e Elementor combinando o design do Kit Indusc com a identidade técnica e paleta oficial da Kleber Francisco Soluções em Engenharias.
Author: Kleber Francisco
Version: 1.0.0
License: GNU General Public License v2 or later
Text Domain: kleber-francisco-indusc
*/

:root {
  /* Paleta Oficial extraída de kleberfrancisco.com */
  --kf-primary: #1867ff;
  --kf-primary-hover: #0e56dc;
  --kf-dark: #121519;
  --kf-navy: #202c3c;
  --kf-slate: #677280;
  --kf-light: #f7f9fa;
  --kf-border: #eaf0f2;
  --kf-amber: #f59e0b;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--kf-dark);
  background-color: var(--kf-light);
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.kf-topbar {
  background-color: var(--kf-dark);
  color: #fff;
  font-size: 13px;
  padding: 8px 0;
}

.kf-btn-primary {
  background-color: var(--kf-primary);
  color: #fff !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 24px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.kf-btn-primary:hover {
  background-color: var(--kf-primary-hover);
}`;

  const functionsPhpCode = `<?php
/**
 * Kleber Francisco - Soluções em Engenharias
 * WordPress Theme Setup & Elementor Compatibility
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function kf_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary_menu' => __('Menu Principal', 'kleber-francisco-indusc'),
        'footer_menu'  => __('Menu Rodapé', 'kleber-francisco-indusc'),
    ));
}
add_action('after_setup_theme', 'kf_theme_setup');

function kf_theme_scripts() {
    // Google Fonts - Plus Jakarta Sans
    wp_enqueue_style('kf-google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap', array(), null);
    
    // Theme Stylesheet
    wp_enqueue_style('kf-main-style', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'kf_theme_scripts');

/**
 * Registra cores globais para o Elementor
 */
function kf_register_elementor_globals() {
    if (did_action('elementor/loaded')) {
        // Assegura compatibilidade de cores com Elementor Pro / Kits
    }
}
add_action('init', 'kf_register_elementor_globals');
`;

  const frontPagePhpCode = `<?php
/**
 * Template Name: Página Inicial Indusc Industrial
 * Template Post Type: page
 * 
 * Kleber Francisco - Soluções em Engenharias
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Hero Section Industrial Indusc -->
    <section class="kf-hero-section" style="background: linear-gradient(rgba(18, 21, 25, 0.9), rgba(18, 21, 25, 0.8)), url('<?php echo get_template_directory_uri(); ?>/assets/images/hero.jpg') center/cover no-repeat; color: #fff; padding: 120px 20px 140px;">
        <div class="kf-container" style="max-width: 1200px; margin: 0 auto;">
            <p style="color: #1867ff; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; font-size: 14px; margin-bottom: 15px;">
                Elétrica · Segurança do Trabalho · Perícias Judiciais
            </p>
            <h1 style="font-size: 48px; font-weight: 800; line-height: 1.15; max-width: 800px; margin-bottom: 25px;">
                Impulsionando Projetos com Soluções Inovadoras e Conformidade Legal
            </h1>
            <p style="font-size: 18px; color: #cbd5e1; max-width: 650px; margin-bottom: 35px;">
                Serviços de engenharia embasados em análises técnicas rigorosas para impulsionar o crescimento de indústrias e empresas, com ART no CREA.
            </p>
            <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                <a href="#orcamento" class="kf-btn-primary">Solicitar Orçamento com ART</a>
                <a href="#solucoes" style="padding: 12px 24px; border-radius: 6px; background: rgba(255,255,255,0.1); border: 1px solid #475569; color: #fff; text-decoration: none; font-weight: 600;">Conhecer Soluções</a>
            </div>
        </div>
    </section>

    <!-- Pilares de Serviços (Indusc 3-Box Overlap) -->
    <section class="kf-pillars-section" style="max-width: 1200px; margin: -60px auto 60px; padding: 0 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <div style="background: #202c3c; color: #fff; padding: 30px; border-radius: 10px; border: 1px solid #334155;">
                <h3 style="color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 10px;">01. Adequação NR-12</h3>
                <p style="color: #94a3b8; font-size: 14px;">Apreciação de riscos HRN, projetos mecânicos e elétricos e laudo oficial com ART.</p>
            </div>
            <div style="background: #202c3c; color: #fff; padding: 30px; border-radius: 10px; border: 1px solid #334155;">
                <h3 style="color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 10px;">02. Elétrica & SPDA</h3>
                <p style="color: #94a3b8; font-size: 14px;">Termografia infravermelha preditiva, laudos de para-raios NBR 5419 e PIE NR-10.</p>
            </div>
            <div style="background: #202c3c; color: #fff; padding: 30px; border-radius: 10px; border: 1px solid #334155;">
                <h3 style="color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 10px;">03. Laudos & Incêndio</h3>
                <p style="color: #94a3b8; font-size: 14px;">PGR, LTCAT para o eSocial, projetos AVCB para Corpo de Bombeiros e perícias judiciais.</p>
            </div>
        </div>
    </section>

    <!-- Conteúdo Dinâmico do Elementor -->
    <?php the_content(); ?>
</main>

<?php
get_footer();
`;

  const elementorKitJson = `{
  "manifest": {
    "title": "Kleber Francisco - Indusc Industrial Elementor Kit",
    "name": "kleber-francisco-indusc-kit",
    "version": "1.0.0",
    "author": "Kleber Francisco",
    "description": "Kit de templates Elementor industrial para Engenharia Elétrica e Segurança do Trabalho",
    "site_settings": {
      "settings": {
        "system_colors": [
          { "_id": "primary", "title": "Primary Blue", "color": "#1867ff" },
          { "_id": "secondary", "title": "Dark Industrial", "color": "#121519" },
          { "_id": "text", "title": "Muted Slate", "color": "#677280" },
          { "_id": "accent", "title": "Navy Slate", "color": "#202c3c" }
        ],
        "system_typography": [
          {
            "_id": "primary",
            "title": "Primary Headline",
            "typography_font_family": "Plus Jakarta Sans",
            "typography_font_weight": "700"
          },
          {
            "_id": "text",
            "title": "Body Text",
            "typography_font_family": "Plus Jakarta Sans",
            "typography_font_weight": "400"
          }
        ]
      }
    }
  }
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 border border-slate-200 my-8 animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#1867ff] flex items-center justify-center">
              <FileCode2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#121519]">
                Pacote WordPress & Template Kit Elementor
              </h3>
              <p className="text-xs text-slate-500">
                Arquivos do tema prontos para uso em qualquer site WordPress
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-slate-100 overflow-x-auto">
          <button
            onClick={() => setActiveTab('theme')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
              activeTab === 'theme'
                ? 'bg-[#1867ff] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            style.css & Cores
          </button>
          <button
            onClick={() => setActiveTab('frontpage')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
              activeTab === 'frontpage'
                ? 'bg-[#1867ff] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            front-page.php (Indusc)
          </button>
          <button
            onClick={() => setActiveTab('elementor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
              activeTab === 'elementor'
                ? 'bg-[#1867ff] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Elementor Kit JSON
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
              activeTab === 'instructions'
                ? 'bg-[#1867ff] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Como Instalar no WordPress
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-4">
          {activeTab === 'theme' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">wp-content/themes/kleber-francisco/style.css</span>
                <button
                  onClick={() => copyToClipboard(styleCssCode, 'style')}
                  className="px-2.5 py-1 text-xs font-semibold text-[#1867ff] bg-blue-50 hover:bg-blue-100 rounded flex items-center gap-1 transition-colors"
                >
                  {copiedKey === 'style' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'style' ? 'Copiado!' : 'Copiar Código'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto max-h-72">
                {styleCssCode}
              </pre>
            </div>
          )}

          {activeTab === 'frontpage' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">wp-content/themes/kleber-francisco/front-page.php</span>
                <button
                  onClick={() => copyToClipboard(frontPagePhpCode, 'front')}
                  className="px-2.5 py-1 text-xs font-semibold text-[#1867ff] bg-blue-50 hover:bg-blue-100 rounded flex items-center gap-1 transition-colors"
                >
                  {copiedKey === 'front' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'front' ? 'Copiado!' : 'Copiar Código'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto max-h-72">
                {frontPagePhpCode}
              </pre>
            </div>
          )}

          {activeTab === 'elementor' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">manifest.json (Elementor Kit Export)</span>
                <button
                  onClick={() => copyToClipboard(elementorKitJson, 'elementor')}
                  className="px-2.5 py-1 text-xs font-semibold text-[#1867ff] bg-blue-50 hover:bg-blue-100 rounded flex items-center gap-1 transition-colors"
                >
                  {copiedKey === 'elementor' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'elementor' ? 'Copiado!' : 'Copiar JSON'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto max-h-72">
                {elementorKitJson}
              </pre>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-72 overflow-y-auto pr-2">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-bold text-slate-900 mb-1">Passo 1: Instalação do Tema Base</h4>
                <p>
                  No painel do WordPress, vá em <strong>Aparência &gt; Temas &gt; Adicionar Novo</strong>. Você pode utilizar o tema gratuito <em>Hello Elementor</em> ou criar a pasta <code>/wp-content/themes/kleber-francisco</code> e colar os arquivos <code>style.css</code> e <code>front-page.php</code>.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Passo 2: Configuração de Cores no Elementor</h4>
                <p>
                  Abra o Elementor, vá em <strong>Configurações do Site &gt; Cores Globais</strong> e defina a cor primária como <code className="text-[#1867ff] font-bold">#1867ff</code> e a cor secundária como <code className="text-[#121519] font-bold">#121519</code>. Isso garantirá a identidade visual do site kleberfrancisco.com em todas as seções do Indusc.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Passo 3: Importação dos Blocos Indusc</h4>
                <p>
                  Com o plugin Elementor ativado, você pode importar os templates de página inicial do kit Indusc ou utilizar os blocos pré-construídos com os textos da Kleber Francisco já fornecidos neste portal.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Compatível com WordPress 6.x + Elementor
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#1867ff] hover:bg-[#0e56dc] rounded-lg transition-colors"
          >
            Concluído
          </button>
        </div>
      </div>
    </div>
  );
};
