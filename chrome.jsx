// chrome.jsx — TG mini-app header, icons, atoms shared across variants

const Icon = ({ name, size = 20, stroke = 1.5, color = 'currentColor' }) => {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home':    return <svg {...p}><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></svg>;
    case 'grid':    return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>;
    case 'me':      return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>;
    case 'book':    return <svg {...p}><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/></svg>;
    case 'mail':    return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'arrow':   return <svg {...p}><path d="M5 12h14m-6-7l7 7-7 7"/></svg>;
    case 'arrowUR': return <svg {...p}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case 'close':   return <svg {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'back':    return <svg {...p}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'dot':     return <svg {...p}><circle cx="12" cy="12" r="3" fill={color} stroke="none"/></svg>;
    case 'spark':   return <svg {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>;
    case 'play':    return <svg {...p}><path d="M7 4l13 8-13 8z" fill={color}/></svg>;
    case 'globe':   return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'pin':     return <svg {...p}><path d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    default: return null;
  }
};

// TG mini-app top bar — back chevron, centered title, close X. Liquid-glass haircut.
const TGHeader = ({ title, dark = true, lang, setLang, onClose }) => {
  const fg = dark ? '#fafafa' : '#0a0a0a';
  const sub = dark ? 'rgba(250,250,250,0.55)' : 'rgba(10,10,10,0.55)';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
      paddingTop: 56, paddingLeft: 14, paddingRight: 14, paddingBottom: 6,
      display: 'flex', alignItems: 'center', gap: 8,
      background: dark
        ? 'linear-gradient(to bottom, rgba(10,10,10,0.92) 60%, rgba(10,10,10,0))'
        : 'linear-gradient(to bottom, rgba(245,245,245,0.92) 60%, rgba(245,245,245,0))',
      backdropFilter: 'blur(14px) saturate(160%)',
      WebkitBackdropFilter: 'blur(14px) saturate(160%)',
    }}>
      <button className="tg-icon-btn" style={btnStyle(dark)} aria-label="back">
        <Icon name="back" size={18} color={fg} />
      </button>
      <div style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: fg, letterSpacing: -0.2, fontFamily: 'Geist, system-ui' }}>{title}</div>
        <div style={{ fontSize: 11, color: sub, fontFamily: 'Geist, system-ui' }}>mini app</div>
      </div>
      <button
        className="tg-icon-btn"
        onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
        style={{ ...btnStyle(dark), width: 'auto', padding: '0 11px', gap: 4, fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 600, color: fg, letterSpacing: 0.4 }}
        aria-label="toggle language"
      >
        <Icon name="globe" size={13} color={fg} />
        {lang.toUpperCase()}
      </button>
      <button onClick={onClose} className="tg-icon-btn" style={btnStyle(dark)} aria-label="close">
        <Icon name="close" size={16} color={fg} />
      </button>
    </div>
  );
};

const btnStyle = (dark) => ({
  width: 32, height: 32, borderRadius: 16, border: 'none', cursor: 'pointer',
  background: dark ? 'rgba(250,250,250,0.08)' : 'rgba(10,10,10,0.06)',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background 0.15s, transform 0.15s',
  flexShrink: 0,
});

// TG main button — sticky bottom CTA (their signature pattern).
const TGMainButton = ({ label, onClick, accent = '#fafafa', fg = '#0a0a0a' }) => (
  <button onClick={onClick} className="tg-main-btn" style={{
    position: 'absolute', left: 12, right: 12, bottom: 26, zIndex: 40,
    height: 50, borderRadius: 12, border: 'none', cursor: 'pointer',
    background: accent, color: fg,
    fontFamily: 'Geist, system-ui', fontWeight: 600, fontSize: 14,
    letterSpacing: 0.6, textTransform: 'uppercase',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
    transition: 'transform 0.12s ease, filter 0.12s',
  }}>
    {label}
    <Icon name="arrow" size={16} color={fg} stroke={2} />
  </button>
);

// Tabbar — variant A
const TGTabBar = ({ tabs, active, onChange, dark = true, accent = '#fafafa' }) => {
  const fg = dark ? '#fafafa' : '#0a0a0a';
  const muted = dark ? 'rgba(250,250,250,0.45)' : 'rgba(10,10,10,0.45)';
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 25,
      paddingBottom: 22, paddingTop: 8,
      background: dark ? 'rgba(10,10,10,0.85)' : 'rgba(245,245,245,0.85)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderTop: dark ? '0.5px solid rgba(250,250,250,0.08)' : '0.5px solid rgba(10,10,10,0.08)',
      display: 'grid', gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
    }}>
      {tabs.map(tab => {
        const on = tab.id === active;
        return (
          <button key={tab.id} onClick={() => onChange(tab.id)} className="tg-tab" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px 0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: on ? fg : muted,
            transition: 'color 0.18s',
            position: 'relative',
          }}>
            <Icon name={tab.icon} size={22} stroke={on ? 2 : 1.6} />
            <span style={{ fontSize: 10, fontFamily: 'Geist, system-ui', fontWeight: on ? 600 : 500, letterSpacing: 0.1 }}>{tab.label}</span>
            {on && <div style={{ position: 'absolute', top: -8, width: 4, height: 4, borderRadius: 2, background: accent }} />}
          </button>
        );
      })}
    </div>
  );
};

// Avatar slab — gradient + initials, with optional placeholder image-slot under it
const Avatar = ({ name, size = 84, hue = 200, ring = false, src = null }) => {
  const initials = name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      position: 'relative', flexShrink: 0,
      background: src ? '#111' : `radial-gradient(circle at 30% 25%, oklch(0.78 0.12 ${hue}), oklch(0.42 0.10 ${hue + 60}) 80%)`,
      boxShadow: ring ? '0 0 0 2px rgba(250,250,250,0.18), 0 0 0 5px rgba(250,250,250,0.04)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Instrument Serif, serif',
      fontStyle: 'italic',
      fontSize: size * 0.45, color: '#fff', letterSpacing: -1,
      overflow: 'hidden',
    }}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        : <>
            <span style={{ position: 'relative', zIndex: 2, mixBlendMode: 'overlay', opacity: 0.95 }}>{initials}</span>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.4), transparent 60%)',
              mixBlendMode: 'multiply',
            }} />
          </>
      }
    </div>
  );
};

// Hairline divider
const Hr = ({ dark = true, m = '0' }) => (
  <div style={{
    height: 0.5, background: dark ? 'rgba(250,250,250,0.10)' : 'rgba(10,10,10,0.10)',
    margin: m,
  }} />
);

// "Now" pulsing dot
const LiveDot = ({ color = '#7cf9c0', size = 8 }) => (
  <span style={{ position: 'relative', width: size, height: size, display: 'inline-block', flexShrink: 0 }}>
    <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color, animation: 'tg-pulse 1.6s ease-out infinite' }} />
    <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color }} />
  </span>
);

// Number ticker — counts up on mount
const Ticker = ({ to, dur = 900, prefix = '', suffix = '' }) => {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (typeof to !== 'number') { return; }
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setV(Math.round(to * eased));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, dur]);
  if (typeof to !== 'number') return <>{to}</>;
  return <>{prefix}{v}{suffix}</>;
};

// Reveal-on-mount wrapper
const Reveal = ({ children, delay = 0, y = 12, dur = 500 }) => {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setOn(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{
      opacity: on ? 1 : 0, transform: on ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity ${dur}ms ease, transform ${dur}ms cubic-bezier(.2,.8,.2,1)`,
      willChange: 'opacity, transform',
    }}>{children}</div>
  );
};

// Project visual placeholder — striped, subtle, on hue
const ProjectArt = ({ hue = 200, label, h = 140 }) => (
  <div style={{
    height: h, borderRadius: 12, position: 'relative', overflow: 'hidden',
    background: `linear-gradient(135deg, oklch(0.30 0.05 ${hue}), oklch(0.18 0.04 ${hue + 30}))`,
    display: 'flex', alignItems: 'flex-end', padding: 12,
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px)`,
    }} />
    <div style={{
      position: 'relative',
      fontFamily: 'Geist Mono, monospace',
      fontSize: 9, letterSpacing: 1, textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
    }}>{label}</div>
  </div>
);

Object.assign(window, { Icon, TGHeader, TGMainButton, TGTabBar, Avatar, Hr, LiveDot, Ticker, Reveal, ProjectArt });
