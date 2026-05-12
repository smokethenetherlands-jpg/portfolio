// app.jsx — Top-level App. iOS device frame + TG mini app chrome + Tweaks.
// Single variant (B2 · Editorial Kinetic).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru",
  "accent": "#7CF9C0",
  "displayName": "Калентьев Тимофей",
  "headline": "Идея сегодня — продукт завтра."
}/*EDITMODE-END*/;

// Scale device frame to fit viewport (letterbox).
const useFitScale = (designW, designH) => {
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const fit = () => {
      const w = window.innerWidth, h = window.innerHeight;
      const padX = 32, padY = 32;
      const s = Math.min((w - padX) / designW, (h - padY) / designH, 1);
      setScale(s);
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [designW, designH]);
  return scale;
};

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = t.lang;
  const setLang = (v) => setTweak('lang', v);


  const W = 390, H = 844;
  const scale = useFitScale(W, H);
  const tx = window.tx;
  const title = tx(window.PORTFOLIO.meta.name, lang);

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#1a1a1a',
        backgroundImage: `radial-gradient(ellipse at 30% 20%, #1f1f1f, #0a0a0a 70%)`,
        overflow: 'hidden',
      }}>
        {/* Subtle floor grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }} />

        {/* Shadow under device */}
        <div style={{
          position: 'absolute',
          width: W * scale * 0.85, height: 32,
          bottom: `calc(50% - ${(H * scale) / 2 + 22}px)`,
          left: '50%', transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.65), transparent 70%)',
          filter: 'blur(8px)', opacity: 0.8, pointerEvents: 'none',
        }} />

        <div style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
          <Device lang={lang} setLang={setLang} accent={t.accent} W={W} H={H} title={title} />
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language">
          <TweakRadio
            label="Language"
            value={t.lang}
            options={[{ value: 'ru', label: 'RU' }, { value: 'en', label: 'EN' }]}
            onChange={(v) => setTweak('lang', v)}
          />
        </TweakSection>
        <TweakSection label="Brand">
          <TweakColor
            label="Accent"
            value={t.accent}
            options={['#7CF9C0', '#F2B95E', '#A78BFA', '#FF6B5C', '#FAFAFA']}
            onChange={(v) => setTweak('accent', v)}
          />
          <TweakText label="Name" value={t.displayName} onChange={(v) => setTweak('displayName', v)} />
          <TweakText label="Tagline" value={t.headline} onChange={(v) => setTweak('headline', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

// ────────── DEVICE — iOS frame + TG header + B2 body
const Device = ({ lang, setLang, accent, W, H, title }) => (
  <div style={{
    width: W, height: H, borderRadius: 52, position: 'relative',
    background: '#000',
    boxShadow: '0 0 0 11px #1c1c1e, 0 0 0 12px #2a2a2c, 0 50px 90px rgba(0,0,0,0.55)',
    overflow: 'hidden',
    fontFamily: 'Geist, system-ui, sans-serif',
  }}>
    {/* iOS status bar */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 25 }}>
      <IOSStatusBar dark={true} />
    </div>
    {/* Dynamic island */}
    <div style={{
      position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
      width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
    }} />
    {/* TG header */}
    <TGHeader title={title} dark={true} lang={lang} setLang={setLang} onClose={() => {}} />
    {/* Variant body */}
    <div style={{ position: 'absolute', inset: 0 }}>
      <VariantB2 lang={lang} accent={accent} />
    </div>
    {/* Home indicator */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
      height: 28, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
      paddingBottom: 8, pointerEvents: 'none',
    }}>
      <div style={{ width: 134, height: 5, borderRadius: 100, background: 'rgba(255,255,255,0.5)' }} />
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
