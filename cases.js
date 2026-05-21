<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>STILLMISSING.US — West Virginia Missing Persons Database</title>
<meta name="description" content="A community-powered missing persons database for West Virginia. Submit cases, share tips, and help bring people home.">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --navy: #0a0e1a;
  --navy2: #0d1220;
  --navy3: #111829;
  --navy4: #162035;
  --blue: #1a56db;
  --blue2: #1e429f;
  --blue-soft: rgba(26,86,219,0.12);
  --amber: #f59e0b;
  --amber2: rgba(245,158,11,0.12);
  --teal: #0d9488;
  --teal2: rgba(13,148,136,0.12);
  --red: #ef4444;
  --red2: rgba(239,68,68,0.12);
  --text: #f1f5f9;
  --text2: rgba(241,245,249,0.65);
  --text3: rgba(241,245,249,0.35);
  --border: rgba(241,245,249,0.08);
  --border2: rgba(241,245,249,0.15);
  --mono: 'JetBrains Mono', monospace;
  --sans: 'Inter', sans-serif;
  --serif: 'DM Serif Display', serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: var(--navy); color: var(--text); font-family: var(--sans); min-height: 100vh; overflow-x: hidden; }

/* STICKY WRAP */
.sticky-wrap { position: sticky; top: 0; z-index: 100; }

/* ALERT BAR */
.alert-bar { background: var(--blue); padding: 7px 1.5rem; display: flex; align-items: center; gap: 1rem; overflow: hidden; }
.alert-bar-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #fff; white-space: nowrap; flex-shrink: 0; background: rgba(0,0,0,0.2); padding: 2px 8px; font-family: var(--mono); }
.alert-ticker { display: flex; overflow: hidden; flex: 1; }
.alert-text { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.9); white-space: nowrap; animation: ticker 90s linear infinite; letter-spacing: 0.03em; }
@keyframes ticker { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
.alert-time { font-size: 10px; font-family: var(--mono); color: rgba(255,255,255,0.6); white-space: nowrap; flex-shrink: 0; }

/* HEADER */
.site-header { background: var(--navy2); border-bottom: 1px solid var(--border2); padding: 0.75rem 1.5rem; display: flex; align-items: center; gap: 1.5rem; }
.logo-wrap { display: flex; flex-direction: column; }
.logo-title { font-family: var(--serif); font-size: 24px; color: var(--text); line-height: 1; letter-spacing: 0.01em; }
.logo-title span { color: var(--blue); }
.logo-sub { font-size: 9px; letter-spacing: 0.2em; color: var(--text3); margin-top: 3px; font-family: var(--mono); text-transform: uppercase; }
.header-search { flex: 1; max-width: 400px; position: relative; }
.header-search input { width: 100%; background: var(--navy3); border: 1px solid var(--border2); color: var(--text); font-family: var(--sans); font-size: 13px; padding: 8px 12px 8px 36px; outline: none; border-radius: 4px; }
.header-search input::placeholder { color: var(--text3); }
.header-search input:focus { border-color: var(--blue); }
.search-icon { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); color: var(--text3); font-size: 14px; pointer-events: none; }
.header-stats { display: flex; gap: 2rem; margin-left: auto; }
.hstat-num { font-family: var(--mono); font-size: 20px; font-weight: 500; line-height: 1; }
.hstat-num.blue { color: var(--blue); }
.hstat-num.amber { color: var(--amber); }
.hstat-num.teal { color: var(--teal); }
.hstat-label { font-size: 9px; letter-spacing: 0.15em; color: var(--text3); margin-top: 2px; text-transform: uppercase; }
.submit-btn { font-family: var(--sans); font-size: 13px; font-weight: 600; letter-spacing: 0.05em; padding: 9px 20px; background: var(--blue); color: #fff; border: none; cursor: pointer; border-radius: 4px; transition: all 0.15s; white-space: nowrap; flex-shrink: 0; }
.submit-btn:hover { background: var(--blue2); transform: translateY(-1px); }

/* FILTER BAR */
.filter-bar { background: var(--navy3); border-bottom: 1px solid var(--border); padding: 0.5rem 1.5rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.filter-label { font-size: 10px; letter-spacing: 0.15em; color: var(--text3); white-space: nowrap; font-family: var(--mono); margin-right: 4px; }
.fbtn { font-family: var(--sans); font-size: 12px; font-weight: 500; padding: 4px 12px; border: 1px solid var(--border2); background: transparent; color: var(--text2); cursor: pointer; transition: all 0.12s; border-radius: 20px; white-space: nowrap; display: flex; align-items: center; gap: 5px; }
.fbtn:hover { border-color: var(--text); color: var(--text); }
.fbtn.active { background: var(--blue); border-color: var(--blue); color: #fff; }
.fbtn-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.filter-divider { color: var(--border2); font-size: 16px; margin: 0 4px; flex-shrink: 0; }
.sort-wrap { margin-left: auto; display: flex; align-items: center; gap: 0.5rem; }
.sort-select { background: var(--navy3); border: 1px solid var(--border2); color: var(--text2); font-family: var(--sans); font-size: 12px; padding: 4px 10px; outline: none; cursor: pointer; border-radius: 4px; }

/* MAIN LAYOUT */
.main-layout { display: grid; grid-template-columns: 1fr 420px; height: calc(100vh - 118px); }

/* MAP */
.map-section { position: relative; background: var(--navy); overflow: hidden; border-right: 1px solid var(--border2); }
.map-header { position: absolute; top: 0; left: 0; right: 0; padding: 0.75rem 1rem; background: linear-gradient(to bottom, rgba(10,14,26,0.98), transparent); z-index: 10; display: flex; align-items: center; justify-content: space-between; }
.map-title { font-family: var(--mono); font-size: 10px; font-weight: 500; letter-spacing: 0.2em; color: var(--amber); text-transform: uppercase; }
.map-hint { font-size: 10px; color: var(--text3); letter-spacing: 0.08em; }
#map-container { width: 100%; height: 100%; }
#map-container svg { width: 100%; height: 100%; display: block; }
.state { fill: #0d1525; stroke: #1a2540; stroke-width: 0.5; cursor: pointer; transition: fill 0.15s; }
.state:hover { fill: #162035; }
.state.active { stroke: var(--amber); stroke-width: 1.5; }
.state-tooltip { position: absolute; background: rgba(10,14,26,0.96); border: 1px solid var(--border2); padding: 6px 12px; font-size: 11px; font-family: var(--sans); color: var(--text); pointer-events: none; z-index: 50; display: none; border-radius: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
.state-banner { position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); background: rgba(10,14,26,0.92); border: 1px solid var(--amber); padding: 7px 20px; font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; color: var(--amber); display: none; z-index: 10; cursor: pointer; white-space: nowrap; border-radius: 4px; }
.state-banner:hover { background: rgba(245,158,11,0.1); }
.map-legend { position: absolute; bottom: 1rem; left: 1rem; background: rgba(10,14,26,0.92); border: 1px solid var(--border2); padding: 0.6rem 0.75rem; z-index: 10; border-radius: 4px; }
.legend-title { font-size: 8px; letter-spacing: 0.2em; color: var(--text3); margin-bottom: 6px; font-family: var(--mono); text-transform: uppercase; }
.legend-items { display: flex; gap: 8px; align-items: center; }
.legend-item { display: flex; align-items: center; gap: 4px; font-size: 9px; color: var(--text3); }
.legend-swatch { width: 18px; height: 8px; border-radius: 2px; }

/* FEED */
.feed-panel { background: var(--navy2); display: flex; flex-direction: column; overflow: hidden; }
.feed-header { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0; }
.feed-header-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; }
.feed-title { font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; color: var(--text); text-transform: uppercase; }
.feed-count { font-size: 10px; color: var(--text3); font-family: var(--mono); }
.feed-search-wrap { position: relative; }
.feed-search { width: 100%; background: var(--navy3); border: 1px solid var(--border); color: var(--text); font-family: var(--sans); font-size: 12px; padding: 6px 10px 6px 30px; outline: none; border-radius: 4px; }
.feed-search::placeholder { color: var(--text3); }
.feed-search:focus { border-color: var(--blue); }
.feed-search-icon { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 13px; color: var(--text3); pointer-events: none; }
.feed-list { flex: 1; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--border2) transparent; }
.feed-empty { padding: 3rem 1.5rem; text-align: center; color: var(--text3); font-size: 12px; line-height: 1.8; }
.feed-empty-icon { font-size: 32px; margin-bottom: 1rem; opacity: 0.4; }

/* CASE CARDS */
.case-card { border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.1s; display: flex; gap: 0; overflow: hidden; }
.case-card:hover { background: var(--navy3); }
.case-photo { width: 80px; height: 100px; object-fit: cover; flex-shrink: 0; opacity: 0.9; }
.case-photo-placeholder { width: 80px; height: 100px; background: var(--navy4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 28px; opacity: 0.4; }
.case-info { padding: 0.75rem; flex: 1; min-width: 0; }
.case-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 3px; gap: 0.5rem; }
.case-name { font-family: var(--sans); font-size: 14px; font-weight: 600; color: var(--text); line-height: 1.2; }
.case-status { font-size: 9px; font-weight: 600; letter-spacing: 0.12em; padding: 2px 7px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; font-family: var(--mono); }
.case-status.active { background: var(--red2); color: var(--red); border: 1px solid rgba(239,68,68,0.3); }
.case-status.cold { background: var(--blue-soft); color: #93c5fd; border: 1px solid rgba(147,197,253,0.3); }
.case-status.endangered { background: var(--amber2); color: var(--amber); border: 1px solid rgba(245,158,11,0.3); }
.case-status.found-safe { background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3); }
.case-status.found-deceased { background: rgba(107,114,128,0.15); color: #9ca3af; border: 1px solid rgba(107,114,128,0.3); }
.case-meta { font-size: 11px; color: var(--text3); margin-bottom: 4px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.case-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--text3); flex-shrink: 0; }
.case-location { font-size: 11px; color: var(--text2); margin-bottom: 4px; }
.case-desc { font-size: 11px; color: var(--text3); line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.case-age-badge { display: inline-block; font-size: 9px; font-family: var(--mono); color: var(--text3); border: 1px solid var(--border); padding: 1px 6px; border-radius: 3px; margin-top: 4px; }

/* DETAIL MODAL */
.modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 1000; align-items: center; justify-content: center; padding: 1.5rem; }
.modal-overlay.open { display: flex; }
.case-modal { background: var(--navy2); border: 1px solid var(--border2); width: min(680px,100%); max-height: 92vh; overflow-y: auto; border-radius: 6px; animation: modalIn 0.2s ease; }
@keyframes modalIn { from{opacity:0;transform:scale(0.97);} to{opacity:1;transform:scale(1);} }
.modal-header { padding: 1rem 1.25rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: var(--navy2); z-index: 10; border-radius: 6px 6px 0 0; }
.modal-header-left { display: flex; align-items: center; gap: 0.75rem; }
.modal-case-id { font-family: var(--mono); font-size: 10px; color: var(--text3); letter-spacing: 0.15em; }
.modal-close { background: transparent; border: 1px solid var(--border2); color: var(--text2); font-family: var(--sans); font-size: 12px; padding: 5px 14px; cursor: pointer; transition: all 0.12s; border-radius: 4px; }
.modal-close:hover { border-color: var(--red); color: var(--red); }
.modal-photo { width: 100%; max-height: 320px; object-fit: cover; object-position: top; display: block; }
.modal-photo-placeholder { width: 100%; height: 200px; background: var(--navy4); display: flex; align-items: center; justify-content: center; font-size: 60px; opacity: 0.2; }
.modal-body { padding: 1.5rem; }
.modal-name { font-family: var(--serif); font-size: 32px; margin-bottom: 4px; line-height: 1.1; }
.modal-status-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
.modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--navy3); padding: 1rem; border-radius: 4px; border: 1px solid var(--border); }
.modal-field-label { font-size: 9px; letter-spacing: 0.2em; color: var(--text3); margin-bottom: 3px; text-transform: uppercase; font-family: var(--mono); }
.modal-field-val { font-size: 13px; color: var(--text); font-weight: 500; }
.modal-section-title { font-size: 10px; letter-spacing: 0.2em; color: var(--blue); text-transform: uppercase; font-family: var(--mono); margin-bottom: 0.6rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--blue-soft); }
.modal-description { font-size: 13px; line-height: 1.8; color: var(--text2); margin-bottom: 1.5rem; }
.modal-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.action-btn { font-family: var(--sans); font-size: 12px; font-weight: 600; padding: 9px 18px; border-radius: 4px; cursor: pointer; transition: all 0.15s; text-decoration: none; display: flex; align-items: center; gap: 6px; border: 1px solid; }
.action-btn.primary { background: var(--blue); border-color: var(--blue); color: #fff; }
.action-btn.primary:hover { background: var(--blue2); }
.action-btn.secondary { background: transparent; border-color: var(--border2); color: var(--text2); }
.action-btn.secondary:hover { border-color: var(--text); color: var(--text); }
.action-btn.danger { background: transparent; border-color: rgba(239,68,68,0.4); color: var(--red); }
.action-btn.danger:hover { background: var(--red2); }
.tip-form { background: var(--navy3); border: 1px solid var(--border); border-radius: 4px; padding: 1rem; margin-bottom: 1rem; }
.tip-form textarea { width: 100%; background: var(--navy); border: 1px solid var(--border2); color: var(--text); font-family: var(--sans); font-size: 12px; padding: 8px 10px; outline: none; border-radius: 4px; resize: vertical; min-height: 80px; }
.tip-form textarea:focus { border-color: var(--blue); }
.tip-submit { margin-top: 0.5rem; font-family: var(--sans); font-size: 12px; font-weight: 600; padding: 7px 16px; background: var(--teal); border: none; color: #fff; cursor: pointer; border-radius: 4px; transition: all 0.15s; }
.tip-submit:hover { opacity: 0.85; }
.namus-link { display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--blue); text-decoration: none; padding: 8px 12px; border: 1px solid var(--blue-soft); border-radius: 4px; transition: all 0.12s; }
.namus-link:hover { background: var(--blue-soft); }

/* SUBMIT FORM MODAL */
.form-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.88); z-index: 1000; align-items: center; justify-content: center; padding: 1.5rem; }
.form-overlay.open { display: flex; }
.form-modal { background: var(--navy2); border: 1px solid var(--border2); width: min(660px,100%); max-height: 92vh; overflow: hidden; display: flex; flex-direction: column; border-radius: 6px; animation: modalIn 0.2s ease; }
.form-modal-header { padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.form-modal-title { font-family: var(--sans); font-size: 14px; font-weight: 700; letter-spacing: 0.05em; }
.form-modal-close { background: transparent; border: 1px solid var(--border2); color: var(--text2); font-family: var(--sans); font-size: 12px; padding: 4px 12px; cursor: pointer; border-radius: 4px; }
.form-modal-close:hover { border-color: var(--red); color: var(--red); }
.form-body { overflow-y: auto; padding: 1.5rem; flex: 1; }
.form-notice { background: var(--blue-soft); border: 1px solid rgba(26,86,219,0.3); border-radius: 4px; padding: 0.75rem 1rem; font-size: 12px; color: #93c5fd; line-height: 1.6; margin-bottom: 1.25rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.form-field { margin-bottom: 0.85rem; }
.form-label { display: block; font-size: 10px; letter-spacing: 0.15em; color: var(--text3); margin-bottom: 5px; text-transform: uppercase; font-family: var(--mono); }
.form-label span { color: var(--red); }
.form-input { width: 100%; background: var(--navy3); border: 1px solid var(--border2); color: var(--text); font-family: var(--sans); font-size: 13px; padding: 8px 10px; outline: none; border-radius: 4px; transition: border-color 0.12s; }
.form-input:focus { border-color: var(--blue); }
.form-input option { background: var(--navy3); }
.form-textarea { min-height: 100px; resize: vertical; }
.form-note { font-size: 10px; color: var(--text3); margin-top: 4px; line-height: 1.5; }
.form-submit { width: 100%; padding: 12px; background: var(--blue); color: #fff; border: none; font-family: var(--sans); font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.15s; border-radius: 4px; margin-top: 0.5rem; }
.form-submit:hover { background: var(--blue2); }
.form-submit:disabled { background: var(--border2); color: var(--text3); cursor: not-allowed; }
.form-success { text-align: center; padding: 2.5rem 1.5rem; }
.form-success-icon { font-size: 48px; margin-bottom: 1rem; }
.form-success-title { font-family: var(--serif); font-size: 24px; margin-bottom: 0.5rem; }
.form-success-sub { font-size: 13px; color: var(--text2); line-height: 1.7; }

/* MOBILE CLOSE BAR */
.mobile-close-bar { display: none; position: sticky; bottom: 0; background: var(--navy2); border-top: 1px solid var(--border2); padding: 0.75rem 1rem; z-index: 20; }
.mobile-close-btn { width: 100%; padding: 12px; background: var(--navy3); border: 1px solid var(--border2); color: var(--text); font-family: var(--sans); font-size: 14px; font-weight: 600; cursor: pointer; border-radius: 4px; }

/* SHARE TOAST */
.share-toast { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: var(--navy3); border: 1px solid var(--border2); padding: 10px 20px; font-size: 12px; color: var(--text); border-radius: 4px; display: none; z-index: 2000; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
.share-toast.show { display: block; animation: toastIn 0.2s ease; }
@keyframes toastIn { from{opacity:0;transform:translateX(-50%) translateY(10px);} to{opacity:1;transform:translateX(-50%) translateY(0);} }

/* MOBILE */
@media (max-width: 768px) {
  .main-layout { grid-template-columns: 1fr; grid-template-rows: 45vh 1fr; height: auto; }
  .feed-panel { height: 55vh; }
  .header-stats { display: none; }
  .site-header { padding: 0.6rem 1rem; gap: 0.75rem; flex-wrap: wrap; }
  .logo-title { font-size: 20px; }
  .logo-sub { display: none; }
  .submit-btn { font-size: 11px; padding: 7px 14px; }
  .filter-bar { padding: 0.4rem 0.75rem; overflow-x: auto; flex-wrap: nowrap; }
  .fbtn { font-size: 11px; padding: 3px 10px; flex-shrink: 0; }
  .map-legend { display: none; }
  .case-modal { width: 100vw; max-height: 95vh; border-radius: 12px 12px 0 0; }
  .modal-overlay { align-items: flex-end; padding: 0; }
  .form-modal { width: 100vw; max-height: 95vh; border-radius: 12px 12px 0 0; }
  .form-overlay { align-items: flex-end; padding: 0; }
  .modal-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .alert-bar { display: none; }
  .sort-wrap { display: none; }
  .mobile-close-bar { display: flex; }
  .disclaimer-bar { flex-direction: column; gap: 0.25rem; }
  .stats-bar { grid-template-columns: 1fr 1fr; }
  .stat-block { border-right: none; border-bottom: 1px solid var(--border); }
  .mission-resources { grid-template-columns: 1fr; }
  .mission-section { border-right: none; border-bottom: 1px solid var(--border); }
  .footer-links { display: none; }
}

/* SHARE GRID */
.share-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem; }
.share-btn { font-family: var(--sans); font-size: 12px; font-weight: 600; padding: 10px 8px; border-radius: 4px; cursor: pointer; transition: all 0.15s; border: 1px solid var(--border2); background: var(--navy3); color: var(--text); text-align: center; }
.share-btn:hover { transform: translateY(-1px); background: var(--navy4); }
.share-btn.copy-link { background: var(--blue); border-color: var(--blue); color: #fff; }
.share-btn.caption { background: var(--navy4); border-color: var(--border2); color: var(--text2); }
.share-btn.secondary { background: var(--navy4); border-color: var(--border2); color: var(--text2); }
@media (max-width: 480px) { .share-grid { grid-template-columns: 1fr 1fr; } }
.bottom-sections { background: var(--navy2); border-top: 1px solid var(--border2); }

/* STATS BAR */
.stats-bar { display: grid; grid-template-columns: repeat(4,1fr); border-bottom: 1px solid var(--border); }
.stat-block { padding: 1.25rem 1.5rem; border-right: 1px solid var(--border); text-align: center; }
.stat-block:last-child { border-right: none; }
.stat-block-num { font-family: var(--mono); font-size: 32px; font-weight: 500; line-height: 1; margin-bottom: 4px; }
.stat-block-num.red { color: var(--red); }
.stat-block-num.amber { color: var(--amber); }
.stat-block-num.blue { color: #93c5fd; }
.stat-block-num.green { color: #10b981; }
.stat-block-label { font-size: 10px; letter-spacing: 0.15em; color: var(--text3); text-transform: uppercase; }

/* MISSION + RESOURCES */
.mission-resources { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); }
.mission-section { padding: 2rem 1.5rem; border-right: 1px solid var(--border); }
.resources-section { padding: 2rem 1.5rem; }
.section-tag { font-size: 9px; letter-spacing: 0.25em; color: var(--blue); font-family: var(--mono); text-transform: uppercase; margin-bottom: 8px; }
.section-title { font-family: var(--serif); font-size: 22px; margin-bottom: 0.75rem; line-height: 1.2; }
.section-text { font-size: 12px; line-height: 1.8; color: var(--text2); margin-bottom: 0.75rem; }
.mission-points { list-style: none; margin-top: 0.75rem; }
.mission-points li { font-size: 12px; color: var(--text2); padding: 5px 0 5px 1rem; border-bottom: 1px solid var(--border); position: relative; line-height: 1.5; }
.mission-points li::before { content: '→'; position: absolute; left: 0; color: var(--blue); font-size: 10px; }
.mission-points li:last-child { border-bottom: none; }
.resource-link { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--border); border-radius: 4px; text-decoration: none; transition: all 0.12s; margin-bottom: 0.5rem; }
.resource-link:hover { border-color: var(--blue); background: var(--blue-soft); }
.resource-icon { font-size: 20px; flex-shrink: 0; }
.resource-info { flex: 1; }
.resource-name { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
.resource-desc { font-size: 11px; color: var(--text3); }
.resource-arrow { color: var(--text3); font-size: 12px; }

/* FOOTER */
.site-footer { padding: 1.25rem 1.5rem; display: flex; align-items: center; justify-content: space-between; font-size: 10px; color: var(--text3); letter-spacing: 0.08em; flex-wrap: wrap; gap: 0.5rem; border-top: 1px solid var(--border); }
.footer-links { display: flex; gap: 1.5rem; }
.footer-link { color: var(--text3); text-decoration: none; font-size: 10px; }
.footer-link:hover { color: var(--text); }

/* PRINT FLYER */
.flyer-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 2000; align-items: center; justify-content: center; padding: 1.5rem; }
.flyer-overlay.open { display: flex; }
.flyer-container { background: white; color: #111; width: min(600px,100%); max-height: 90vh; overflow-y: auto; border-radius: 4px; }
.flyer-header-bar { background: #1a1a2e; color: white; padding: 0.75rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }
.flyer-header-title { font-size: 13px; font-weight: 600; letter-spacing: 0.08em; }
.flyer-close { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; font-size: 11px; padding: 4px 12px; cursor: pointer; border-radius: 3px; }
.flyer-print-btn { background: #1a56db; border: none; color: white; font-size: 12px; font-weight: 600; padding: 6px 16px; cursor: pointer; border-radius: 3px; }
.flyer-content { padding: 2rem; }
.flyer-top { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; align-items: flex-start; }
.flyer-photo { width: 160px; height: 200px; object-fit: cover; object-position: top; flex-shrink: 0; border: 2px solid #ddd; }
.flyer-photo-placeholder { width: 160px; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 48px; color: #ccc; flex-shrink: 0; border: 2px solid #ddd; }
.flyer-headline { flex: 1; }
.flyer-missing-label { font-size: 11px; font-weight: 700; letter-spacing: 0.3em; color: #cc0000; margin-bottom: 4px; }
.flyer-name { font-size: 28px; font-weight: 700; color: #111; line-height: 1.1; margin-bottom: 8px; }
.flyer-status-badge { display: inline-block; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 3px; letter-spacing: 0.1em; margin-bottom: 12px; }
.flyer-status-badge.found-deceased { background: #f0f0f0; color: #555; }
.flyer-status-badge.found-safe { background: #d1fae5; color: #065f46; }
.flyer-status-badge.active { background: #fee2e2; color: #cc0000; }
.flyer-status-badge.endangered { background: #fef3c7; color: #92400e; }
.flyer-status-badge.cold { background: #dbeafe; color: #1e40af; }
.flyer-detail-row { display: flex; gap: 0.5rem; margin-bottom: 4px; font-size: 12px; }
.flyer-detail-label { font-weight: 600; color: #555; min-width: 80px; }
.flyer-detail-val { color: #111; }
.flyer-section-title { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #666; text-transform: uppercase; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin: 1rem 0 0.5rem; }
.flyer-circumstances { font-size: 12px; line-height: 1.7; color: #333; }
.flyer-footer { margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid #cc0000; display: flex; align-items: center; justify-content: space-between; }
.flyer-footer-left { font-size: 10px; color: #666; line-height: 1.5; }
.flyer-footer-site { font-size: 13px; font-weight: 700; color: #1a56db; }
.flyer-tip-box { background: #fff3cd; border: 1px solid #ffc107; border-radius: 3px; padding: 8px 12px; margin-top: 1rem; font-size: 11px; color: #856404; text-align: center; font-weight: 600; }

@media print {
  body * { visibility: hidden; }
  .flyer-content, .flyer-content * { visibility: visible; }
  .flyer-content { position: fixed; left: 0; top: 0; width: 100%; }
  .flyer-header-bar { display: none; }
}
</style>
</head>
<body>

<div class="sticky-wrap">
<!-- ALERT BAR -->
<div class="alert-bar">
  <span class="alert-bar-label">⚡ ACTIVE</span>
  <div class="alert-ticker">
    <span class="alert-text" id="alert-text">Loading active cases...</span>
    <span class="alert-text" id="alert-text2"></span>
  </div>
  <span class="alert-time" id="alert-time"></span>
</div>

<!-- HEADER -->
<header class="site-header">
  <div class="logo-wrap">
    <div class="logo-title">Still<span>Missing</span>.us</div>
    <div class="logo-sub">West Virginia Missing Persons Database</div>
  </div>
  <div class="header-search">
    <span class="search-icon">🔍</span>
    <input type="text" id="main-search" placeholder="Search by name, location, case number...">
  </div>
  <div class="header-stats">
    <div class="hstat"><div class="hstat-num blue" id="total-cases">0</div><div class="hstat-label">Cases</div></div>
    <div class="hstat"><div class="hstat-num amber" id="active-cases">0</div><div class="hstat-label">Active</div></div>
    <div class="hstat"><div class="hstat-num teal" id="states-count">0</div><div class="hstat-label">Counties</div></div>
  </div>
  <button class="submit-btn" onclick="openForm()">+ Submit a Case</button>
</header>

<!-- FILTER BAR -->
<div class="filter-bar">
  <span class="filter-label">Status:</span>
  <button class="fbtn active" data-filter="all" data-type="status"><span class="fbtn-dot" style="background:var(--text)"></span>All</button>
  <button class="fbtn" data-filter="active" data-type="status"><span class="fbtn-dot" style="background:var(--red)"></span>Active</button>
  <button class="fbtn" data-filter="endangered" data-type="status"><span class="fbtn-dot" style="background:var(--amber)"></span>Endangered</button>
  <button class="fbtn" data-filter="cold" data-type="status"><span class="fbtn-dot" style="background:#93c5fd"></span>Cold</button>
  <button class="fbtn" data-filter="found-safe" data-type="status"><span class="fbtn-dot" style="background:#10b981"></span>Found Safe</button>
  <button class="fbtn" data-filter="found-deceased" data-type="status"><span class="fbtn-dot" style="background:#9ca3af"></span>Found Deceased</button>
  <span class="filter-divider">|</span>
  <span class="filter-label">Age:</span>
  <button class="fbtn active" data-filter="all" data-type="age"><span class="fbtn-dot" style="background:var(--text)"></span>All Ages</button>
  <button class="fbtn" data-filter="child" data-type="age"><span class="fbtn-dot" style="background:var(--teal)"></span>Children</button>
  <button class="fbtn" data-filter="adult" data-type="age"><span class="fbtn-dot" style="background:#a78bfa"></span>Adults</button>
  <div class="sort-wrap">
    <select class="sort-select" id="sort-select">
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="name">Name A–Z</option>
    </select>
  </div>
</div>
</div><!-- end sticky-wrap -->

<!-- DISCLAIMER -->
<div style="background:rgba(245,158,11,0.07);border-bottom:1px solid rgba(245,158,11,0.2);padding:8px 1.5rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
  <span style="font-size:13px;">⚠️</span>
  <p style="font-size:11px;color:rgba(241,245,249,0.55);line-height:1.5;flex:1;min-width:200px;">
    <strong style="color:rgba(245,158,11,0.8);">Community Resource.</strong> StillMissing.us is a West Virginia community resource maintained by one person. All case information is submitted by the community and may be incomplete or inaccurate. This is not an official law enforcement database. Always contact the listed agency directly to report tips or verify information. Cases are reviewed before publishing but we cannot guarantee accuracy.
  </p>
</div>

<!-- MAIN LAYOUT -->
<div class="main-layout">
  <div class="map-section">
    <div class="map-header">
      <span class="map-title">// Live Case Map — WV Counties //</span>
      <span class="map-hint">Click a county to filter cases</span>
    </div>
    <div id="map-container"></div>
    <div class="state-tooltip" id="state-tooltip"></div>
    <div class="state-banner" id="state-banner" onclick="clearCountyFilter()"></div>
    <div class="map-legend">
      <div class="legend-title">Cases per County</div>
      <div class="legend-items">
        <div class="legend-item"><div class="legend-swatch" style="background:rgba(239,68,68,0.25)"></div>Low</div>
        <div class="legend-item"><div class="legend-swatch" style="background:rgba(239,68,68,0.55)"></div>Med</div>
        <div class="legend-item"><div class="legend-swatch" style="background:rgba(239,68,68,0.88)"></div>High</div>
        <div class="legend-item"><div class="legend-swatch" style="background:#0d1525;border:1px solid #1a2540"></div>None</div>
      </div>
    </div>
  </div>

  <div class="feed-panel">
    <div class="feed-header">
      <div class="feed-header-top">
        <div class="feed-title" id="feed-title">Case Feed</div>
        <div class="feed-count" id="feed-count">0 cases</div>
      </div>
      <div class="feed-search-wrap">
        <span class="feed-search-icon">🔍</span>
        <input type="text" class="feed-search" id="feed-search" placeholder="Search cases...">
      </div>
    </div>
    <div class="feed-list" id="feed-list"></div>
  </div>
</div>

<!-- CASE DETAIL MODAL -->
<div class="modal-overlay" id="case-overlay">
  <div class="case-modal" id="case-modal-content"></div>
</div>

<!-- SUBMIT FORM MODAL -->
<div class="form-overlay" id="form-overlay">
  <div class="form-modal">
    <div class="form-modal-header">
      <div class="form-modal-title">Submit a Missing Person Case</div>
      <button class="form-modal-close" onclick="closeForm()">✕ Close</button>
    </div>
    <div class="form-body">
      <div class="form-notice">
        ℹ️ All submissions are reviewed before being published. Only publicly available information will be displayed. Families may request removal at any time. Please include an official case number if one exists.
      </div>
      <form id="submit-form" action="https://formspree.io/f/xojbdjbq" method="POST">
        <div class="form-row">
          <div class="form-field">
            <label class="form-label">First Name <span>*</span></label>
            <input type="text" name="first_name" class="form-input" required placeholder="First name">
          </div>
          <div class="form-field">
            <label class="form-label">Last Name <span>*</span></label>
            <input type="text" name="last_name" class="form-input" required placeholder="Last name">
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label class="form-label">Date of Birth</label>
            <input type="date" name="dob" class="form-input">
          </div>
          <div class="form-field">
            <label class="form-label">Age at Disappearance <span>*</span></label>
            <input type="number" name="age" class="form-input" required placeholder="Age" min="0" max="120">
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label class="form-label">Date Last Seen <span>*</span></label>
            <input type="date" name="date_missing" class="form-input" required>
          </div>
          <div class="form-field">
            <label class="form-label">Case Status <span>*</span></label>
            <select name="status" class="form-input" required>
              <option value="">— Select —</option>
              <option value="active">Active — Recent</option>
              <option value="endangered">Endangered Missing</option>
              <option value="cold">Cold Case</option>
              <option value="found-safe">Found — Safe</option>
              <option value="found-deceased">Found — Deceased</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label class="form-label">City Last Seen <span>*</span></label>
            <input type="text" name="city" class="form-input" required placeholder="City">
          </div>
          <div class="form-field">
            <label class="form-label">State</label>
            <input type="text" name="state" class="form-input" value="WV" readonly style="color:var(--text3);cursor:not-allowed;">
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label class="form-label">Height</label>
            <input type="text" name="height" class="form-input" placeholder="e.g. 5'6&quot;">
          </div>
          <div class="form-field">
            <label class="form-label">Weight</label>
            <input type="text" name="weight" class="form-input" placeholder="e.g. 130 lbs">
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label class="form-label">Hair Color</label>
            <input type="text" name="hair" class="form-input" placeholder="Hair color">
          </div>
          <div class="form-field">
            <label class="form-label">Eye Color</label>
            <input type="text" name="eyes" class="form-input" placeholder="Eye color">
          </div>
        </div>
        <div class="form-field">
          <label class="form-label">Distinguishing Features</label>
          <input type="text" name="distinguishing" class="form-input" placeholder="Tattoos, scars, birthmarks, etc.">
        </div>
        <div class="form-field">
          <label class="form-label">Circumstances of Disappearance <span>*</span></label>
          <textarea name="circumstances" class="form-input form-textarea" required placeholder="Describe what is known about how and when this person went missing..."></textarea>
        </div>
        <div class="form-field">
          <label class="form-label">Official Case Number</label>
          <input type="text" name="case_number" class="form-input" placeholder="NamUs, police report, or FBI case number">
          <div class="form-note">If this person is listed on NamUs or another official database, please include the case number.</div>
        </div>
        <div class="form-field">
          <label class="form-label">Photo URL</label>
          <input type="url" name="photo_url" class="form-input" placeholder="Link to a photo (imgur, Google Drive, etc.)">
        </div>
        <div class="form-field">
          <label class="form-label">Your Relationship to This Person <span>*</span></label>
          <select name="relationship" class="form-input" required>
            <option value="">— Select —</option>
            <option>Family Member</option>
            <option>Friend</option>
            <option>True Crime Researcher</option>
            <option>Law Enforcement</option>
            <option>Concerned Community Member</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-field">
          <label class="form-label">Your Contact Email</label>
          <input type="email" name="submitter_email" class="form-input" placeholder="For follow-up questions only — not published">
          <div class="form-note">Your email will never be published. Used only if we need to verify information.</div>
        </div>
        <button type="submit" class="form-submit" id="form-submit-btn">Submit Case for Review</button>
      </form>
      <div id="form-success" style="display:none;" class="form-success">
        <div class="form-success-icon">✅</div>
        <div class="form-success-title">Case Submitted</div>
        <div class="form-success-sub">Thank you. Your submission will be reviewed within 48 hours. If approved, the case will be added to the database and map. If you provided contact information we may reach out to verify details.</div>
        <button onclick="closeForm()" style="margin-top:1.5rem;background:var(--blue);border:none;color:#fff;font-family:var(--sans);font-size:13px;font-weight:600;padding:10px 24px;cursor:pointer;border-radius:4px;">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="share-toast" id="share-toast"></div>

<!-- PHOTO LIGHTBOX -->
<div id="photo-lightbox" onclick="closePhotoLightbox()" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:3000;align-items:center;justify-content:center;cursor:zoom-out;">
  <img id="photo-lightbox-img" src="" style="max-width:92vw;max-height:92vh;object-fit:contain;">
  <div style="position:absolute;top:1rem;right:1.5rem;color:rgba(255,255,255,0.5);font-size:11px;font-family:var(--mono);">CLICK ANYWHERE TO CLOSE</div>
</div>

<!-- FLYER OVERLAY -->
<div class="flyer-overlay" id="flyer-overlay">
  <div class="flyer-container" id="flyer-container">
    <div class="flyer-header-bar">
      <span class="flyer-header-title">MISSING PERSON FLYER — STILLMISSING.US</span>
      <div style="display:flex;gap:8px;">
        <button class="flyer-print-btn" onclick="window.print()">🖨️ Print</button>
        <button class="flyer-close" onclick="closeFlyer()">✕ Close</button>
      </div>
    </div>
    <div class="flyer-content" id="flyer-content"></div>
  </div>
</div>

<!-- BOTTOM SECTIONS -->
<div class="bottom-sections">

  <!-- STATS -->
  <div class="stats-bar">
    <div class="stat-block">
      <div class="stat-block-num red" id="stat-active">0</div>
      <div class="stat-block-label">Active Cases</div>
    </div>
    <div class="stat-block">
      <div class="stat-block-num amber" id="stat-cold">0</div>
      <div class="stat-block-label">Cold Cases</div>
    </div>
    <div class="stat-block">
      <div class="stat-block-num blue" id="stat-states">0</div>
      <div class="stat-block-label">WV Counties</div>
    </div>
    <div class="stat-block">
      <div class="stat-block-num green" id="stat-found">0</div>
      <div class="stat-block-label">Cases Resolved</div>
    </div>
  </div>

  <!-- MISSION + RESOURCES -->
  <div class="mission-resources">
    <div class="mission-section">
      <div class="section-tag">// Our Mission //</div>
      <div class="section-title">Built to Help Bring People Home</div>
      <p class="section-text">StillMissing.us is a free, community-powered missing persons database focused on West Virginia, built and maintained by one person. It exists to give WV families a place to be heard, give researchers a tool to organize cases, and give communities a way to visualize where people are going missing in our state.</p>
      <p class="section-text">West Virginia and Appalachia are historically underserved by national missing persons coverage. This site exists to change that locally. Every case is reviewed before publishing. Families may request removal at any time.</p>
      <ul class="mission-points">
        <li>All case information is submitted by the community and verified before publishing</li>
        <li>If you have urgent information about a missing person, call 911 immediately</li>
        <li>Families can submit, update, or request removal of any case at any time</li>
        <li>Only publicly available information is displayed — no private data</li>
        <li>The site is free to use and will always remain free</li>
      </ul>
    </div>
    <div class="resources-section">
      <div class="section-tag">// Official Resources //</div>
      <div class="section-title">Find Help From Official Sources</div>
      <p class="section-text">These official databases are the first place you should go for missing persons information. StillMissing.us does not pull from or integrate with these systems — we encourage you to cross-reference any case here with official sources.</p>
      <a href="https://www.namus.gov" target="_blank" class="resource-link">
        <span class="resource-icon">🏛️</span>
        <div class="resource-info">
          <div class="resource-name">NamUs — National Missing & Unidentified</div>
          <div class="resource-desc">The official federal database for missing persons and unidentified remains</div>
        </div>
        <span class="resource-arrow">→</span>
      </a>
      <a href="https://www.ncmec.org" target="_blank" class="resource-link">
        <span class="resource-icon">👶</span>
        <div class="resource-info">
          <div class="resource-name">NCMEC — National Center for Missing & Exploited Children</div>
          <div class="resource-desc">The leading nonprofit for missing and exploited children in the US</div>
        </div>
        <span class="resource-arrow">→</span>
      </a>
      <a href="https://www.fbi.gov/wanted/kidnap" target="_blank" class="resource-link">
        <span class="resource-icon">🔎</span>
        <div class="resource-info">
          <div class="resource-name">FBI Missing Persons</div>
          <div class="resource-desc">FBI resources and database for missing persons cases</div>
        </div>
        <span class="resource-arrow">→</span>
      </a>
      <a href="https://www.missingkids.org/gethelpnow/isyourchildmissing" target="_blank" class="resource-link">
        <span class="resource-icon">🚨</span>
        <div class="resource-info">
          <div class="resource-name">Is Your Child Missing? — NCMEC Hotline</div>
          <div class="resource-desc">Call 1-800-THE-LOST (1-800-843-5678) — 24 hours a day</div>
        </div>
        <span class="resource-arrow">→</span>
      </a>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="site-footer">
    <span>© 2026 STILLMISSING.US — WEST VIRGINIA MISSING PERSONS DATABASE</span>
    <div class="footer-links">
      <span style="color:var(--text3);font-size:10px;">If you have urgent information about a missing person — call 911</span>
    </div>
  </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<script src="cases.js"></script>
<script>
var activeFilter = 'all';
var activeAgeFilter = 'all';
var activeCounty = null;
var searchQuery = '';
var sortMode = 'newest';

// WV Counties
var wvCounties = [
  'Barbour','Berkeley','Boone','Braxton','Brooke','Cabell','Calhoun','Clay',
  'Doddridge','Fayette','Gilmer','Grant','Greenbrier','Hampshire','Hancock',
  'Hardy','Harrison','Jackson','Jefferson','Kanawha','Lewis','Lincoln','Logan',
  'Marion','Marshall','Mason','McDowell','Mercer','Mineral','Mingo','Monongalia',
  'Monroe','Morgan','Nicholas','Ohio','Pendleton','Pleasants','Pocahontas',
  'Preston','Putnam','Raleigh','Randolph','Ritchie','Roane','Summers','Taylor',
  'Tucker','Tyler','Upshur','Wayne','Webster','Wetzel','Wirt','Wood','Wyoming'
];

// Clock
function updateClock() {
  var el = document.getElementById('alert-time');
  if (el) el.textContent = new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});
}
setInterval(updateClock, 60000);
updateClock();

// Stats
function updateStats() {
  var list = cases;
  document.getElementById('total-cases').textContent = list.length;
  document.getElementById('active-cases').textContent = list.filter(function(c){ return c.status === 'active' || c.status === 'endangered'; }).length;
  var counties = new Set(list.map(function(c){ return c.city; }));
  document.getElementById('states-count').textContent = counties.size;
  document.getElementById('feed-count').textContent = getFiltered().length + ' cases';
}

// Alert ticker
function buildTicker() {
  var active = cases
    .filter(function(c){ return c.status === 'active' || c.status === 'endangered'; })
    .sort(function(a,b){ return new Date(b.date_missing) - new Date(a.date_missing); })
    .slice(0, 10); // Only show 10 most recent
  if (!active.length) return;
  var text = active.map(function(c){
    var d = new Date(c.date_missing);
    var dateStr = d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    return 'MISSING: ' + c.name + ' — ' + c.city + ', WV — Last seen ' + dateStr;
  }).join(' &nbsp;&nbsp;•&nbsp;&nbsp; ') + ' &nbsp;&nbsp;•&nbsp;&nbsp; ';
  var doubled = text + text;
  document.getElementById('alert-text').innerHTML = doubled;
  document.getElementById('alert-text2').innerHTML = '';
}

// Filter
function getFiltered() {
  var list = cases;
  if (activeFilter === 'active') list = list.filter(function(c){ return c.status === 'active'; });
  else if (activeFilter === 'endangered') list = list.filter(function(c){ return c.status === 'endangered'; });
  else if (activeFilter === 'cold') list = list.filter(function(c){ return c.status === 'cold'; });
  else if (activeFilter === 'found-safe') list = list.filter(function(c){ return c.status === 'found-safe'; });
  else if (activeFilter === 'found-deceased') list = list.filter(function(c){ return c.status === 'found-deceased'; });
  if (activeAgeFilter === 'child') list = list.filter(function(c){ return c.age_missing <= 17; });
  else if (activeAgeFilter === 'adult') list = list.filter(function(c){ return c.age_missing >= 18; });
  if (activeCounty) list = list.filter(function(c){ return (cityToCounty[c.city]||c.city) === activeCounty; });
  if (searchQuery) {
    var q = searchQuery.toLowerCase();
    list = list.filter(function(c){
      return c.name.toLowerCase().includes(q)
        || c.city.toLowerCase().includes(q)
        || c.state.toLowerCase().includes(q)
        || (c.case_number && c.case_number.toLowerCase().includes(q))
        || (c.circumstances && c.circumstances.toLowerCase().includes(q));
    });
  }
  list = list.slice().sort(function(a,b){
    if (sortMode === 'oldest') return new Date(a.date_missing) - new Date(b.date_missing);
    if (sortMode === 'name') return a.name.localeCompare(b.name);
    if (sortMode === 'state') return a.state.localeCompare(b.state);
    return new Date(b.date_missing) - new Date(a.date_missing);
  });
  return list;
}

// Filter buttons
document.querySelectorAll('.fbtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var type = this.getAttribute('data-type');
    var filter = this.getAttribute('data-filter');
    if (type === 'status') {
      activeFilter = filter;
      document.querySelectorAll('.fbtn[data-type="status"]').forEach(function(b){ b.classList.remove('active'); });
    } else {
      activeAgeFilter = filter;
      document.querySelectorAll('.fbtn[data-type="age"]').forEach(function(b){ b.classList.remove('active'); });
    }
    this.classList.add('active');
    updateHeatmap();
    renderFeed();
  });
});

document.getElementById('sort-select').addEventListener('change', function(){ sortMode = this.value; renderFeed(); });
document.getElementById('main-search').addEventListener('input', function(){ searchQuery = this.value; renderFeed(); });
document.getElementById('feed-search').addEventListener('input', function(){ searchQuery = this.value; renderFeed(); });

// Map
function initMap() {
  var w = 960, h = 660;
  var svg = d3.select('#map-container').append('svg')
    .attr('viewBox','0 0 ' + w + ' ' + h)
    .attr('preserveAspectRatio','xMidYMid meet')
    .style('width','100%').style('height','100%').style('display','block');
  svg.append('rect').attr('width',w).attr('height',h).attr('fill','#0a0e1a');

  var projection = d3.geoMercator();
  var path = d3.geoPath().projection(projection);
  var tooltip = document.getElementById('state-tooltip');

  fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json')
    .then(function(r){ return r.json(); })
    .then(function(us) {
      var allCounties = topojson.feature(us, us.objects.counties);

      // Filter WV counties — FIPS 54xxx
      var wvFeatures = allCounties.features.filter(function(d){
        return Math.floor(d.id / 1000) === 54;
      });

      if (!wvFeatures.length) { console.error('No WV counties found'); return; }

      // Auto-fit projection to WV with padding
      var wvCollection = { type:'FeatureCollection', features: wvFeatures };
      projection.fitExtent([[40, 40],[w-40, h-40]], wvCollection);

      // Background rect for WV
      svg.append('path')
        .datum(wvCollection)
        .attr('d', path)
        .attr('fill', '#0a0f1e')
        .attr('stroke', 'none');

      // Draw counties
      svg.selectAll('.county').data(wvFeatures).enter().append('path')
        .attr('class','county')
        .attr('d', path)
        .attr('fill', '#0d1525')
        .attr('stroke', '#1a2540')
        .attr('stroke-width', 0.8)
        .on('mousemove', function(event, d) {
          var name = wvCountyNames[String(d.id)] || 'Unknown';
          var counts = getCaseCounts();
          var count = counts[name] || 0;
          var mapSection = document.querySelector('.map-section');
          var rect = mapSection.getBoundingClientRect();
          tooltip.style.display = 'block';
          tooltip.style.left = (event.clientX - rect.left + 14) + 'px';
          tooltip.style.top = (event.clientY - rect.top - 10) + 'px';
          tooltip.innerHTML = '<strong>' + name + ' County</strong> &nbsp;—&nbsp; '
            + (count > 0 ? '<span style="color:var(--red)">' + count + ' case' + (count!==1?'s':'') + '</span>' : '<span style="color:var(--text3)">No cases</span>');
        })
        .on('mouseleave', function(){ tooltip.style.display = 'none'; })
        .on('click', function(event, d) {
          var name = wvCountyNames[String(d.id)] || null;
          if (!name) return;
          if (activeCounty === name) { clearCountyFilter(); return; }
          activeCounty = name;
          updateHeatmap();
          renderFeed();
          document.getElementById('feed-list').scrollTop = 0;
          var counts = getCaseCounts();
          var count = counts[name] || 0;
          var banner = document.getElementById('state-banner');
          banner.style.display = 'block';
          banner.textContent = '📍 ' + name + ' County — ' + count + ' case' + (count!==1?'s':'') + ' — Click to clear';
        });

      // County borders
      svg.append('path')
        .datum(topojson.mesh(us, us.objects.counties, function(a,b){
          return a !== b && Math.floor(a.id/1000) === 54 && Math.floor(b.id/1000) === 54;
        }))
        .attr('fill','none').attr('stroke','#1e2d4a').attr('stroke-width', 0.6).attr('d', path);

      // WV outer border
      svg.append('path')
        .datum(topojson.merge(us, us.objects.counties.geometries.filter(function(d){
          return Math.floor(d.id/1000) === 54;
        })))
        .attr('fill','none').attr('stroke','#3a5a9a').attr('stroke-width', 2).attr('d', path);

      updateHeatmap();
    })
    .catch(function(err){ console.error('Map load error:', err); });
}

// WV county FIPS to name mapping
var wvCountyNames = {
  '54001':'Barbour','54003':'Berkeley','54005':'Boone','54007':'Braxton',
  '54009':'Brooke','54011':'Cabell','54013':'Calhoun','54015':'Clay',
  '54017':'Doddridge','54019':'Fayette','54021':'Gilmer','54023':'Grant',
  '54025':'Greenbrier','54027':'Hampshire','54029':'Hancock','54031':'Hardy',
  '54033':'Harrison','54035':'Jackson','54037':'Jefferson','54039':'Kanawha',
  '54041':'Lewis','54043':'Lincoln','54045':'Logan','54047':'Marion',
  '54049':'Marshall','54051':'Mason','54053':'McDowell','54055':'Mercer',
  '54057':'Mineral','54059':'Mingo','54061':'Monongalia','54063':'Monroe',
  '54065':'Morgan','54067':'Nicholas','54069':'Ohio','54071':'Pendleton',
  '54073':'Pleasants','54075':'Pocahontas','54077':'Preston','54079':'Putnam',
  '54081':'Raleigh','54083':'Randolph','54085':'Ritchie','54087':'Roane',
  '54089':'Summers','54091':'Taylor','54093':'Tucker','54095':'Tyler',
  '54097':'Upshur','54099':'Wayne','54101':'Webster','54103':'Wetzel',
  '54105':'Wirt','54107':'Wood','54109':'Wyoming'
};

function getCaseCounts() {
  var counts = {};
  var list = activeFilter === 'all' ? cases : getFiltered();
  list.filter(function(c){ return c.status !== 'found-safe' && c.status !== 'found-deceased'; })
    .forEach(function(c){
      // Match city to county name
      var county = cityToCounty[c.city] || c.city;
      counts[county] = (counts[county]||0) + 1;
    });
  return counts;
}

// City to county lookup for WV — add more as cases come in
var cityToCounty = {
  'Charleston':'Kanawha','South Charleston':'Kanawha','Dunbar':'Kanawha',
  'St. Albans':'Kanawha','Big Chimney':'Kanawha','Nitro':'Kanawha',
  'Huntington':'Cabell','Barboursville':'Cabell','Milton':'Cabell',
  'Morgantown':'Monongalia','Star City':'Monongalia',
  'Parkersburg':'Wood','Vienna':'Wood','Williamstown':'Wood',
  'Wheeling':'Ohio','Weirton':'Hancock','Chester':'Hancock',
  'Martinsburg':'Berkeley','Shepherdstown':'Jefferson','Charles Town':'Jefferson',
  'Clarksburg':'Harrison','Bridgeport':'Harrison','Shinnston':'Harrison',
  'Fairmont':'Marion','Mannington':'Marion',
  'Beckley':'Raleigh','Lewisburg':'Greenbrier','Bluefield':'Mercer',
  'Point Pleasant':'Mason','Logan':'Logan','Williamson':'Mingo',
  'Elkins':'Randolph','Buckhannon':'Upshur','Weston':'Lewis',
  'Calvin':'Nicholas','Richwood':'Nicholas','Craigsville':'Nicholas',
  'Handley':'Kanawha','Chelyan':'Kanawha','Belle':'Kanawha','Dunbar':'Kanawha','Glasgow':'Kanawha','Clendenin':'Roane',
  'Anmoore':'Harrison','Jane Lew':'Lewis','Weston':'Lewis','Gore':'Lewis',
  'Kearneysville':'Jefferson','Charlestown':'Jefferson',
  'Great Cacapon':'Morgan','Berkeley Springs':'Morgan',
  'Kermit':'Mingo','Gilbert':'Mingo','Williamson':'Mingo',
  'Eccles':'Raleigh','Glen White':'Raleigh','Beckley':'Raleigh',
  'Gallipolis Ferry':'Mason','Southside':'Mason','Mason':'Mason','Point Pleasant':'Mason',
  'Sutton':'Braxton',
  'Montrose':'Randolph','Elkins':'Randolph',
  'Maxwellton':'Greenbrier','Renick':'Greenbrier','Lewisburg':'Greenbrier',
  'Moundsville':'Marshall',
  'Dunlow':'Wayne',
  'Walker':'Wood','Mackey':'Wood',
  'Follansbee':'Brooke','Wellsburg':'Brooke',
  'Chapmanville':'Logan','Harts':'Logan','Logan':'Logan','Mineral City':'Logan',
  'Ivydale':'Clay',
  'Oceana':'Wyoming','Brenton':'Wyoming',
  'Sistersville':'Tyler',
  'Gerrardstown':'Berkeley','Martinsburg':'Berkeley',
  'Princeton':'Mercer',
  'Peterstown':'Monroe','Union':'Monroe',
  'Philippi':'Barbour',
  'Kingwood':'Preston','Terra Alta':'Preston',
  'Salt Rock':'Cabell','Huntington':'Cabell','Barboursville':'Cabell',
  'Hamlin':'Lincoln','Ranger':'Lincoln',
  'Whitesville':'Boone',
  'Kearneysville':'Jefferson','Charles Town':'Jefferson',
  'Ripley':'Jackson','Ravenswood':'Jackson',
  'Romney':'Hampshire','Kirby':'Hampshire',
  'Buckhannon':'Upshur',
  'Parkersburg':'Wood','Vienna':'Wood','Williamstown':'Wood',
  'Wheeling':'Ohio',
  'Moorefield':'Hardy','Petersburg':'Grant','Romney':'Hampshire',
  'Keyser':'Mineral','Philippi':'Barbour','Spencer':'Roane',
  'Glenville':'Gilmer','Sutton':'Braxton','Summersville':'Nicholas',
  'Ripley':'Jackson','Ravenswood':'Jackson','Grantsville':'Calhoun',
  'Welch':'McDowell','Princeton':'Mercer','Hinton':'Summers',
  'Marlinton':'Pocahontas','Harrisville':'Ritchie','Elizabeth':'Wirt',
  'New Martinsville':'Wetzel','Sistersville':'Tyler','Middlebourne':'Tyler',
  'Kingwood':'Preston','Terra Alta':'Preston','Grafton':'Taylor',
  'Parsons':'Tucker','Paw Paw':'Morgan','Berkeley Springs':'Morgan'
};

function updateHeatmap() {
  var counts = getCaseCounts();
  var max = Math.max(1, d3.max(Object.values(counts)) || 1);
  d3.selectAll('.county').attr('fill', function(d) {
    var name = wvCountyNames[String(d.id)];
    var count = counts[name] || 0;
    var isSelected = activeCounty && activeCounty === name;
    if (isSelected) return 'rgba(245,158,11,0.3)';
    if (count === 0) return '#0d1525';
    var intensity = count / max;
    if (intensity < 0.33) return 'rgba(239,68,68,0.35)';
    if (intensity < 0.66) return 'rgba(239,68,68,0.60)';
    return 'rgba(239,68,68,0.88)';
  }).attr('stroke', function(d) {
    var name = wvCountyNames[String(d.id)];
    return (activeCounty && activeCounty === name) ? 'rgba(245,158,11,0.9)' : '#1a2540';
  }).attr('stroke-width', function(d) {
    var name = wvCountyNames[String(d.id)];
    return (activeCounty && activeCounty === name) ? 2 : 0.8;
  });
}

function clearCountyFilter() {
  activeCounty = null;
  document.getElementById('state-banner').style.display = 'none';
  updateHeatmap();
  renderFeed();
}


// Feed
function renderFeed() {
  var list = getFiltered();
  document.getElementById('feed-count').textContent = list.length + ' case' + (list.length !== 1 ? 's' : '');
  var titleEl = document.getElementById('feed-title');
  titleEl.textContent = activeCounty ? activeCounty + ' County Cases' : 'Case Feed';

  var el = document.getElementById('feed-list');
  if (!list.length) {
    el.innerHTML = '<div class="feed-empty"><div class="feed-empty-icon">🔍</div>'
      + (searchQuery ? 'No cases match "' + searchQuery + '"' : activeCounty ? 'No cases in ' + activeCounty + ' County yet.<br><br>Know of a missing person from this area?<br><button onclick="openForm()" style="margin-top:0.75rem;background:var(--blue);border:none;color:#fff;font-family:var(--sans);font-size:12px;font-weight:600;padding:8px 18px;cursor:pointer;border-radius:4px;">Submit a Case</button>' : 'No cases match the current filter.')
      + '</div>';
    return;
  }

  var statusLabels = { active: 'ACTIVE', endangered: 'ENDANGERED', cold: 'COLD CASE', 'found-safe': '✅ FOUND SAFE', 'found-deceased': '🕊️ FOUND — DECEASED' };
  el.innerHTML = list.map(function(c) {
    var d = new Date(c.date_missing);
    var dateStr = d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    var yearsAgo = new Date().getFullYear() - d.getFullYear();
    return '<div class="case-card" onclick="openCase(\'' + c.id + '\')">'
      + (c.photo ? '<img class="case-photo" src="' + c.photo + '" alt="' + c.name + '">' : '<div class="case-photo-placeholder">👤</div>')
      + '<div class="case-info">'
      + '<div class="case-top">'
      + '<div class="case-name">' + c.name + '</div>'
      + '<span class="case-status ' + c.status + '">' + (statusLabels[c.status]||c.status.toUpperCase()) + '</span>'
      + '</div>'
      + '<div class="case-meta">'
      + 'Age ' + c.age_missing
      + '<span class="case-meta-dot"></span>'
      + dateStr
      + (yearsAgo > 0 ? '<span class="case-meta-dot"></span>' + yearsAgo + ' yr' + (yearsAgo!==1?'s':'') + ' ago' : '')
      + '</div>'
      + '<div class="case-location">📍 ' + c.city + ', ' + c.state + '</div>'
      + '<div class="case-desc">' + (c.circumstances||'') + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

// Case detail
function openCase(id) {
  var c = null;
  for (var i=0;i<cases.length;i++){ if(cases[i].id===id){ c=cases[i]; break; } }
  if (!c) return;

  // Update URL hash for sharing
  window.location.hash = 'case-' + id;

  var d = new Date(c.date_missing);
  var dateStr = d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  var statusLabels = { active:'ACTIVE CASE', endangered:'ENDANGERED MISSING', cold:'COLD CASE', 'found-safe':'✅ FOUND — SAFE', 'found-deceased':'🕊️ FOUND — DECEASED' };
  var statusColors = { active:'var(--red)', endangered:'var(--amber)', cold:'#93c5fd' };

  document.getElementById('case-modal-content').innerHTML =
    '<div class="modal-header">'
    + '<div class="modal-header-left"><span class="modal-case-id">' + (c.case_number ? 'CASE #' + c.case_number : 'COMMUNITY SUBMISSION') + '</span></div>'
    + '<button class="modal-close" onclick="closeCase()">✕ Close</button>'
    + '</div>'
    + (c.photo ? '<img class="modal-photo" src="' + c.photo + '" alt="' + c.name + '" onclick="openPhotoLightbox(\'' + c.photo + '\')" style="cursor:zoom-in;" title="Click to expand">' : '<div class="modal-photo-placeholder">👤</div>')
    + '<div class="modal-body">'
    + '<div class="modal-name">' + c.name + '</div>'
    + '<div class="modal-status-row">'
    + '<span class="case-status ' + c.status + '">' + (statusLabels[c.status]||c.status.toUpperCase()) + '</span>'
    + '</div>'
    + '<div class="modal-section-title">Case Details</div>'
    + '<div class="modal-grid">'
    + '<div><div class="modal-field-label">Date of Birth</div><div class="modal-field-val">' + (c.dob || 'Unknown') + '</div></div>'
    + '<div><div class="modal-field-label">Age at Disappearance</div><div class="modal-field-val">' + c.age_missing + ' years old</div></div>'
    + '<div><div class="modal-field-label">Date Last Seen</div><div class="modal-field-val">' + dateStr + '</div></div>'
    + '<div><div class="modal-field-label">Last Known Location</div><div class="modal-field-val">' + c.city + ', ' + c.state + '</div></div>'
    + (c.height ? '<div><div class="modal-field-label">Height</div><div class="modal-field-val">' + c.height + '</div></div>' : '')
    + (c.weight ? '<div><div class="modal-field-label">Weight</div><div class="modal-field-val">' + c.weight + '</div></div>' : '')
    + (c.hair ? '<div><div class="modal-field-label">Hair</div><div class="modal-field-val">' + c.hair + '</div></div>' : '')
    + (c.eyes ? '<div><div class="modal-field-label">Eyes</div><div class="modal-field-val">' + c.eyes + '</div></div>' : '')
    + '</div>'
    + (c.distinguishing ? '<div class="modal-section-title" style="margin-top:1rem">Distinguishing Features</div><p class="modal-description">' + c.distinguishing + '</p>' : '')
    + '<div class="modal-section-title">Circumstances</div>'
    + '<p class="modal-description">' + (c.circumstances||'No additional information available.') + '</p>'
    + '<div class="modal-section-title">Share This Case</div>'
    + '<div class="share-grid">'
    + '<button class="share-btn copy-link" onclick="shareCase(\'' + c.id + '\')">🔗 Copy Link</button>'
    + '<button class="share-btn caption" onclick="copyCaption(\'' + c.id + '\',\'' + c.name.replace(/'/g,"\\'") + '\',\'' + c.city + '\',\'' + c.state + '\',\'' + c.date_missing + '\')">📋 Copy Caption</button>'
    + '<button class="share-btn secondary" onclick="printFlyer(\'' + c.id + '\')">🖨️ Print Flyer</button>'
    + '</div>'
    + (c.namus_url ? '<div class="modal-actions" style="margin-top:0.75rem;"><a class="action-btn secondary" href="' + c.namus_url + '" target="_blank">🔎 View on NamUs</a></div>' : '')
    + '</div>'
    + '<div class="modal-section-title">Submit a Tip</div>'
    + '<div class="tip-form">'
    + '<p style="font-size:11px;color:var(--text3);margin-bottom:0.5rem;">Have information about this case? Submit anonymously below. <strong style="color:var(--amber)">If you have urgent information, call 911 immediately.</strong> Tips are reviewed and may be forwarded to appropriate contacts.</p>'
    + '<textarea id="tip-text" placeholder="Describe what you know or saw..."></textarea>'
    + '<button class="tip-submit" onclick="submitTip(\'' + c.id + '\',\'' + c.name + '\')">Submit Tip Anonymously</button>'
    + '</div>'
    + '<button class="action-btn danger" style="font-size:11px;margin-top:0.5rem;" onclick="requestRemoval(\'' + c.name + '\')">Request Case Removal</button>'
    + '</div>'
    + '<div class="mobile-close-bar"><button class="mobile-close-btn" onclick="closeCase()">✕ Close</button></div>';

  document.getElementById('case-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCase() {
  document.getElementById('case-overlay').classList.remove('open');
  document.body.style.overflow = '';
  history.pushState('', document.title, window.location.pathname);
}

// Share functions
function getCaseUrl(id) {
  return window.location.origin + window.location.pathname + '#case-' + id;
}

function getCaption(name, city, state, date_missing) {
  var d = new Date(date_missing);
  var dateStr = d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  return 'MISSING: ' + name + ', last seen ' + dateStr + ' in ' + city + ', ' + state + '. If you have any information please call 911 immediately.';
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function(){
      showToast(successMsg);
    }).catch(function(){ fallbackCopy(text, successMsg); });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); showToast(successMsg); }
  catch(e) { showToast('Please copy manually'); }
  document.body.removeChild(ta);
}

function nativeShare(id, name, city, state, date_missing) {
  var url = getCaseUrl(id);
  var text = getCaption(name, city, state, date_missing);
  if (navigator.share) {
    navigator.share({ title: 'MISSING: ' + name, text: text, url: url });
  } else {
    copyToClipboard(text + ' ' + url, '📋 Caption + link copied!');
  }
}

function shareFacebook(id, name, city, state, date_missing) {
  var url = getCaseUrl(id);
  var caption = getCaption(name, city, state, date_missing) + '\n\n' + url;
  copyToClipboard(caption, '📋 Caption copied! Paste it into your Facebook post.');
  setTimeout(function(){
    if (confirm('Caption copied to clipboard!\n\nClick OK to open Facebook — then paste the caption into your post with Ctrl+V or long-press → Paste.')) {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
    }
  }, 300);
}

function shareTwitter(id, name, city, state, date_missing) {
  var url = getCaseUrl(id);
  var d = new Date(date_missing);
  var dateStr = d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  var tweet = '\ud83d\udea8 MISSING: ' + name + ', last seen ' + dateStr + ' in ' + city + ', ' + state + '. Call 911 if you have info. ' + url + ' #Missing #StillMissing';
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet), '_blank');
}

function shareSMS(id, name, city, state, date_missing) {
  var url = getCaseUrl(id);
  var caption = getCaption(name, city, state, date_missing) + ' ' + url;
  window.open('sms:?body=' + encodeURIComponent(caption));
}

function copyCaption(id, name, city, state, date_missing) {
  var url = getCaseUrl(id);
  var caption = getCaption(name, city, state, date_missing) + '\n\n' + url;
  copyToClipboard(caption, '📋 Caption copied — ready to paste anywhere!');
}

function showToast(msg) {
  var toast = document.getElementById('share-toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function(){ toast.classList.remove('show'); }, 3000);
}

function submitTip(caseId, caseName) {
  var text = document.getElementById('tip-text').value;
  if (!text.trim()) return;
  fetch('https://formspree.io/f/xojbdjbq', {
    method:'POST',
    body: JSON.stringify({ type:'TIP', case_id:caseId, case_name:caseName, tip:text }),
    headers:{ 'Content-Type':'application/json', 'Accept':'application/json' }
  }).then(function(){
    document.getElementById('tip-text').value = '';
    alert('Tip submitted. Thank you for helping.');
  });
}

function requestRemoval(name) {
  var reason = prompt('Please provide your reason for requesting removal of "' + name + '":\n\n(e.g. I am a family member and no longer wish this case to be listed, case has been resolved, information is inaccurate, etc.)');
  if (!reason || !reason.trim()) return;
  var relationship = prompt('What is your relationship to this person or case?');
  if (!relationship || !relationship.trim()) return;
  fetch('https://formspree.io/f/xojbdjbq', {
    method:'POST',
    body: JSON.stringify({ type:'REMOVAL_REQUEST', case_name:name, reason:reason, relationship:relationship }),
    headers:{ 'Content-Type':'application/json', 'Accept':'application/json' }
  }).then(function(){
    alert('Removal request submitted. We will review and respond within 24-48 hours. Requests from verified family members are always honored.');
  });
}

function shareCase(id) {
  copyToClipboard(getCaseUrl(id), '🔗 Case link copied to clipboard');
}

// Stats bar
function updateBottomStats() {
  var active = cases.filter(function(c){ return c.status==='active'||c.status==='endangered'; }).length;
  var cold = cases.filter(function(c){ return c.status==='cold'; }).length;
  var counties = new Set(cases.map(function(c){ return c.city; })).size;
  var found = cases.filter(function(c){ return c.status==='found-safe'||c.status==='found-deceased'; }).length;
  document.getElementById('stat-active').textContent = active;
  document.getElementById('stat-cold').textContent = cold;
  document.getElementById('stat-states').textContent = counties;
  document.getElementById('stat-found').textContent = found;
}

// Print flyer
function printFlyer(id) {
  var c = null;
  for (var i=0;i<cases.length;i++){ if(cases[i].id===id){ c=cases[i]; break; } }
  if (!c) return;
  var d = new Date(c.date_missing);
  var dateStr = d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  var statusLabels = { active:'ACTIVE — MISSING', endangered:'ENDANGERED MISSING', cold:'COLD CASE', 'found-safe':'FOUND — SAFE', 'found-deceased':'FOUND — DECEASED' };
  document.getElementById('flyer-content').innerHTML =
    '<div class="flyer-top">'
    + (c.photo ? '<img class="flyer-photo" src="' + c.photo + '" alt="' + c.name + '">' : '<div class="flyer-photo-placeholder">👤</div>')
    + '<div class="flyer-headline">'
    + '<div class="flyer-missing-label">MISSING PERSON</div>'
    + '<div class="flyer-name">' + c.name + '</div>'
    + '<span class="flyer-status-badge ' + c.status + '">' + (statusLabels[c.status]||c.status.toUpperCase()) + '</span>'
    + '<div class="flyer-detail-row"><span class="flyer-detail-label">Last Seen:</span><span class="flyer-detail-val">' + dateStr + '</span></div>'
    + '<div class="flyer-detail-row"><span class="flyer-detail-label">Location:</span><span class="flyer-detail-val">' + c.city + ', ' + c.state + '</span></div>'
    + '<div class="flyer-detail-row"><span class="flyer-detail-label">Age:</span><span class="flyer-detail-val">' + c.age_missing + ' years old</span></div>'
    + (c.height ? '<div class="flyer-detail-row"><span class="flyer-detail-label">Height:</span><span class="flyer-detail-val">' + c.height + '</span></div>' : '')
    + (c.weight ? '<div class="flyer-detail-row"><span class="flyer-detail-label">Weight:</span><span class="flyer-detail-val">' + c.weight + '</span></div>' : '')
    + (c.hair ? '<div class="flyer-detail-row"><span class="flyer-detail-label">Hair:</span><span class="flyer-detail-val">' + c.hair + '</span></div>' : '')
    + (c.eyes ? '<div class="flyer-detail-row"><span class="flyer-detail-label">Eyes:</span><span class="flyer-detail-val">' + c.eyes + '</span></div>' : '')
    + '</div></div>'
    + (c.distinguishing ? '<div class="flyer-section-title">Distinguishing Features</div><p class="flyer-circumstances">' + c.distinguishing + '</p>' : '')
    + '<div class="flyer-section-title">Circumstances</div>'
    + '<p class="flyer-circumstances">' + (c.circumstances||'') + '</p>'
    + (c.case_number ? '<div class="flyer-section-title">Official Case Number</div><p class="flyer-circumstances">' + c.case_number + '</p>' : '')
    + '<div class="flyer-tip-box">⚠️ IF YOU HAVE INFORMATION — CALL 911 IMMEDIATELY</div>'
    + '<div class="flyer-footer">'
    + '<div class="flyer-footer-left">This flyer was generated by<br><span class="flyer-footer-site">StillMissing.us</span><br>A free community missing persons database</div>'
    + (c.case_number ? '<div style="font-size:10px;color:#666;">Case: ' + c.case_number + '</div>' : '')
    + '</div>';
  document.getElementById('flyer-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFlyer() {
  document.getElementById('flyer-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('flyer-overlay').addEventListener('click', function(e){ if(e.target===this) closeFlyer(); });

function openPhotoLightbox(src) {
  var lb = document.getElementById('photo-lightbox');
  document.getElementById('photo-lightbox-img').src = src;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePhotoLightbox() {
  document.getElementById('photo-lightbox').style.display = 'none';
  document.body.style.overflow = '';
}

// Form
function openForm() {
  document.getElementById('form-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeForm() {
  document.getElementById('form-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('form-overlay').addEventListener('click', function(e){ if(e.target===this) closeForm(); });
document.getElementById('case-overlay').addEventListener('click', function(e){ if(e.target===this) closeCase(); });

document.getElementById('submit-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var btn = document.getElementById('form-submit-btn');
  btn.disabled = true;
  btn.textContent = 'Submitting...';
  fetch('https://formspree.io/f/xojbdjbq', {
    method:'POST', body: new FormData(this), headers:{'Accept':'application/json'}
  }).then(function(r) {
    if (r.ok) {
      document.getElementById('submit-form').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      btn.disabled = false;
      btn.textContent = 'Submit Case for Review';
      alert('Submission failed. Please try again.');
    }
  }).catch(function(){
    btn.disabled = false;
    btn.textContent = 'Submit Case for Review';
    alert('Submission failed. Please try again.');
  });
});

// Check for case hash on load
function checkHash() {
  var hash = window.location.hash;
  if (hash && hash.startsWith('#case-')) {
    var id = hash.replace('#case-','');
    openCase(id);
  }
}

document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeCase(); closeForm(); } });

// Init
function init() {
  updateStats();
  updateBottomStats();
  renderFeed();
  buildTicker();
  checkHash();

  // Load map
  var topoScript = document.createElement('script');
  topoScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js';
  topoScript.onload = function() { initMap(); };
  document.head.appendChild(topoScript);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
</script>
</body>
</html>
