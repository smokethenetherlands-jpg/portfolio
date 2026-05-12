// variant-b2.jsx — EDITORIAL · KINETIC
// Doubles down on the "scroll progress" motif the user liked.
// - A live progress bar at the top tracks scroll across the whole document.
// - Each section header has its own mini-progress that animates in on scroll.
// - Side rail with section numerals that highlight as you scroll.
// - Horizontal-scroll project shelf (snap), with index/total counter.

const VariantB2 = ({ lang, accent, headerHeight = 96 }) => {
  const p = window.PORTFOLIO; const T = window.T; const tx = window.tx;
  const scrollRef = React.useRef(null);
  const [section, setSection] = React.useState(1);
  const [progress, setProgress] = React.useState(0); // 0..1 overall
  const total = 7;

  React.useEffect(() => {
    const el = scrollRef.current; if (!el) return;
    const onScroll = () => {
      const max = Math.max(1, el.scrollHeight - el.clientHeight);
      setProgress(el.scrollTop / max);
      const mid = el.scrollTop + el.clientHeight * 0.4;
      let cur = 1;
      el.querySelectorAll('[data-vb2-section]').forEach(s => {
        if (s.offsetTop <= mid) cur = +s.dataset.vb2Section;
      });
      setSection(cur);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const jumpTo = (n) => {
    const el = scrollRef.current; if (!el) return;
    const target = el.querySelector(`[data-vb2-section="${n}"]`);
    if (target) el.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="vb2-root" style={{
      width: '100%', height: '100%', position: 'relative',
      background: '#0a0a0a', color: '#fafafa',
      fontFamily: 'Geist, system-ui, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Top scroll-progress bar (right under TG header) */}
      <div style={{
        position: 'absolute', top: headerHeight - 2, left: 0, right: 0, height: 2, zIndex: 22,
        background: 'rgba(250,250,250,0.08)',
      }}>
        <div style={{
          height: '100%', width: `${progress * 100}%`,
          background: accent,
          transition: 'width 0.08s linear',
          boxShadow: `0 0 12px ${accent}80`,
        }} />
      </div>

      {/* Side rail — section dots, right edge */}
      <div style={{
        position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 20,
        display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end',
      }}>
        {Array.from({ length: total }).map((_, i) => {
          const n = i + 1;
          const on = section === n;
          return (
            <button key={n} onClick={() => jumpTo(n)} aria-label={`section ${n}`} style={{
              padding: 0, border: 'none', cursor: 'pointer', background: 'transparent',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                fontFamily: 'Geist Mono, monospace', fontSize: 9, letterSpacing: 0.5,
                color: on ? accent : 'rgba(250,250,250,0.3)',
                opacity: on ? 1 : 0, transform: `translateX(${on ? 0 : 6}px)`,
                transition: 'opacity 0.25s, transform 0.25s',
              }}>0{n}</span>
              <span style={{
                width: on ? 16 : 8, height: 1.5, borderRadius: 1,
                background: on ? accent : 'rgba(250,250,250,0.25)',
                transition: 'width 0.25s ease, background 0.25s ease',
              }} />
            </button>
          );
        })}
      </div>

      <div ref={scrollRef} style={{
        position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden',
        paddingTop: headerHeight, paddingBottom: 110, paddingRight: 8,
      }}>
        {/* HERO */}
        <SectionB2 n={1} of={total} title={null}>
          <div style={{ padding: '20px 22px 0' }}>
            <div className="vb2-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <LiveDot color={accent} size={6} /> {tx(T.available, lang)}
            </div>
            <div style={{
              fontFamily: 'Instrument Serif, serif', fontWeight: 400,
              fontSize: 76, lineHeight: 0.9, letterSpacing: -3.5,
              marginTop: 22,
            }}>
              {tx(p.meta.name, lang).split(' ')[0]}
            </div>
            <div style={{
              fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400,
              fontSize: 76, lineHeight: 0.9, letterSpacing: -3.5, color: accent,
              marginTop: -4,
            }}>
              {tx(p.meta.name, lang).split(' ').slice(1).join(' ')}.
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: 'rgba(250,250,250,0.6)', fontFamily: 'Geist Mono, monospace', letterSpacing: 0.5 }}>
              {tx(p.meta.role, lang).toUpperCase()}<br />{tx(p.meta.location, lang).toUpperCase()}
            </div>
            <div style={{ marginTop: 30, display: 'flex', gap: 14, alignItems: 'flex-end' }}>
              <Avatar name={tx(p.meta.name, lang)} size={94} hue={32} ring src="photo.jpg.jpg" />
              <div style={{ flex: 1, paddingBottom: 4 }}>
                <ScrollAffordance label={tx(T.scroll, lang)} accent={accent} />
              </div>
            </div>
            <div style={{
              fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
              fontSize: 22, lineHeight: 1.25, marginTop: 32,
              color: 'rgba(250,250,250,0.92)',
              borderLeft: `1px solid ${accent}`, paddingLeft: 14,
            }}>
              {tx(p.meta.pitch, lang)}
            </div>
          </div>
        </SectionB2>

        {/* NOW */}
        <SectionB2 n={2} of={total} title={tx(T.now, lang)} accent={accent}>
          <div style={{ padding: '0 22px' }}>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.3, marginBottom: 18 }}>
              "{tx(p.meta.now, lang)}"
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {p.nowList.map((n, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(250,250,250,0.12)', paddingTop: 8 }}>
                  <div className="vb2-eyebrow" style={{ fontSize: 9 }}>{lang === 'ru' ? n.ru : n.en}</div>
                  <div style={{ fontSize: 14, marginTop: 6, lineHeight: 1.3 }}>{tx(n.v, lang)}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionB2>

        {/* STATS RIBBON */}
        <SectionB2 n={3} of={total} title={lang === 'ru' ? 'Цифры' : 'Numbers'} accent={accent}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid rgba(250,250,250,0.12)' }}>
            {p.stats.map((s, i) => (
              <div key={i} style={{
                padding: '20px 22px',
                borderBottom: '1px solid rgba(250,250,250,0.12)',
                borderRight: i % 2 === 0 ? '1px solid rgba(250,250,250,0.12)' : 'none',
                display: 'flex', flexDirection: 'column', gap: 4, minHeight: 110,
              }}>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 52, lineHeight: 0.9, letterSpacing: -2, color: i === 0 ? accent : '#fafafa' }}>
                  <Ticker to={s.v} dur={1000 + i * 100} />
                </div>
                <div className="vb2-eyebrow" style={{ marginTop: 6, fontSize: 9 }}>{tx(s.lbl, lang)}</div>
              </div>
            ))}
          </div>
        </SectionB2>

        {/* WORK — horizontal scroll shelf */}
        <SectionB2 n={4} of={total} title={tx(T.selectedWork, lang)} accent={accent}>
          <HorizontalShelf items={p.projects} lang={lang} accent={accent} />
        </SectionB2>

        {/* ACHIEVEMENTS */}
        <SectionB2 n={5} of={total} title={tx(T.achievements, lang)} accent={accent}>
          <div style={{ padding: '0 22px' }}>
            {p.achievements.map((a, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '64px 1fr',
                padding: '20px 0',
                borderTop: '1px solid rgba(250,250,250,0.12)',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
                  fontSize: 28, color: accent, letterSpacing: -0.6,
                }}>'{String(a.yr).slice(2)}</div>
                <div>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, lineHeight: 1.2 }}>{tx(a.t, lang)}</div>
                  <div style={{ fontSize: 12, color: 'rgba(250,250,250,0.55)', marginTop: 4 }}>{tx(a.s, lang)}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionB2>

        {/* EXPERIENCE + SKILLS */}
        <SectionB2 n={6} of={total} title={tx(T.experience, lang)} accent={accent}>
          <div style={{ padding: '0 22px' }}>
            {p.experience.map((e, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '16px 0', borderTop: '1px solid rgba(250,250,250,0.12)',
              }}>
                <div>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, letterSpacing: -0.4 }}>{e.co}</div>
                  <div style={{ fontSize: 12, color: 'rgba(250,250,250,0.6)' }}>{tx(e.role, lang)}</div>
                </div>
                <div className="vb2-eyebrow" style={{ textAlign: 'right' }}>{tx(e.dates, lang)}<br /><span style={{ opacity: 0.5 }}>{tx(e.loc, lang)}</span></div>
              </div>
            ))}
            <div className="vb2-eyebrow" style={{ margin: '32px 0 14px' }}>{tx(T.skills, lang)}</div>
            {p.skills.map(group => (
              <div key={group.cat.en} style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(250,250,250,0.7)' }}>{tx(group.cat, lang)}</div>
                <div style={{ fontSize: 16, lineHeight: 1.5, marginTop: 4, fontFamily: 'Instrument Serif, serif' }}>
                  {group.items.map((it, j) => (
                    <React.Fragment key={it}>
                      <span>{it}</span>
                      {j < group.items.length - 1 && <span style={{ color: 'rgba(250,250,250,0.3)', margin: '0 8px' }}>·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionB2>

        {/* CONTACT */}
        <SectionB2 n={7} of={total} title={tx(T.contact, lang)} accent={accent}>
          <div style={{ padding: '0 22px' }}>
            <div style={{
              fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
              fontSize: 34, lineHeight: 1.1, letterSpacing: -0.8,
              marginBottom: 28,
            }}>"{tx(p.meta.tagline, lang)}"</div>
            {p.contacts.map((c, i) => (
              <a href={c.href} key={c.k} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                padding: '20px 0', borderTop: '1px solid rgba(250,250,250,0.12)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <div className="vb2-eyebrow">{c.k}</div>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22 }}>
                  {c.v}
                </div>
              </a>
            ))}
            <div style={{
              marginTop: 36, padding: '32px 0 16px', textAlign: 'center',
              fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
              fontSize: 68, lineHeight: 0.95, letterSpacing: -3, color: accent,
            }}>thanks.</div>
            <div style={{ textAlign: 'center', color: 'rgba(250,250,250,0.35)', fontSize: 10, fontFamily: 'Geist Mono, monospace', letterSpacing: 0.6 }}>
              {tx(T.copyright, lang)}
            </div>
          </div>
        </SectionB2>
        <div style={{ height: 60 }} />
      </div>

      {/* Floating section-jump tabbar */}
      <B2SectionTabbar section={section} jumpTo={jumpTo} accent={accent} />

      <style>{`
        .vb2-root .vb2-eyebrow { font-family: 'Geist Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(250,250,250,0.5); }
        @keyframes vb2-progress { 0% { transform: translateX(-100%); } 100% { transform: translateX(280px); } }
        @keyframes vb2-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
};

// Scroll affordance — animated indeterminate progress, the bit user loved
const ScrollAffordance = ({ label, accent }) => (
  <>
    <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: 0.16 * 10, textTransform: 'uppercase', color: 'rgba(250,250,250,0.5)' }}>{label}</div>
    <div style={{ marginTop: 6, height: 1, background: 'rgba(250,250,250,0.15)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 36, background: accent,
        animation: 'vb2-progress 2.4s ease-in-out infinite',
        boxShadow: `0 0 12px ${accent}`,
      }} />
    </div>
  </>
);

const SectionB2 = ({ n, of, title, children, accent }) => (
  <section data-vb2-section={n} style={{ padding: '40px 0 8px' }}>
    {title && (
      <div style={{ padding: '0 22px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
          <span style={{
            fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: 0.6,
            color: accent || 'rgba(250,250,250,0.5)', paddingBottom: 10,
          }}>0{n}<span style={{ color: 'rgba(250,250,250,0.3)' }}>/0{of}</span></span>
          <h2 style={{
            fontFamily: 'Instrument Serif, serif', fontWeight: 400,
            fontSize: 44, lineHeight: 0.95, letterSpacing: -1.6,
            margin: 0,
          }}><em style={{ fontStyle: 'italic' }}>{title}</em></h2>
        </div>
        {/* mini-progress under each section title */}
        <div style={{ marginTop: 14, height: 1, background: 'rgba(250,250,250,0.1)', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%',
            background: accent || '#fafafa', transformOrigin: 'left',
            animation: 'vb2-grow 0.9s cubic-bezier(.2,.8,.2,1) both',
          }} />
        </div>
      </div>
    )}
    {children}
  </section>
);

// Horizontal scrolling project shelf with index/total counter
const HorizontalShelf = ({ items, lang, accent }) => {
  const tx = window.tx;
  const ref = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const drag = React.useRef({ down: false, startX: 0, scrollLeft: 0 });

  React.useEffect(() => {
    const el = ref.current; if (!el) return;

    const onScroll = () => {
      const cardW = el.children[0]?.offsetWidth || 1;
      setIdx(Math.round(el.scrollLeft / (cardW + 12)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    const onMouseDown = (e) => {
      drag.current = { down: true, startX: e.pageX, scrollLeft: el.scrollLeft };
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';
      el.style.scrollSnapType = 'none';
    };
    const onMouseUp = () => {
      if (!drag.current.down) return;
      drag.current.down = false;
      el.style.cursor = 'grab';
      el.style.userSelect = '';
      const cardW = (el.children[0]?.offsetWidth || 260) + 12;
      const nearest = Math.round(el.scrollLeft / cardW);
      el.scrollTo({ left: nearest * cardW, behavior: 'smooth' });
      setTimeout(() => { el.style.scrollSnapType = 'x mandatory'; }, 400);
    };
    const onMouseMove = (e) => {
      if (!drag.current.down) return;
      el.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX);
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    el.style.cursor = 'grab';

    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <div>
      <div ref={ref} className="vb2-shelf" style={{
        display: 'flex', gap: 12, overflowX: 'auto', overflowY: 'hidden',
        scrollSnapType: 'x mandatory', padding: '0 22px 8px',
        scrollbarWidth: 'none',
      }}>
        {items.map((pr, i) => (
          <div key={pr.id} style={{
            flexShrink: 0, width: 260, scrollSnapAlign: 'start',
          }}>
            <ProjectArt hue={pr.hue} h={200} label={`${pr.name} · ${pr.year}`} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10 }}>
              <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: 24, letterSpacing: -0.5 }}>{pr.name}</span>
              <span className="vb2-eyebrow" style={{ fontSize: 9 }}>{pr.year}</span>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(250,250,250,0.65)', marginTop: 4, lineHeight: 1.4 }}>{tx(pr.desc, lang)}</div>
            <div className="vb2-eyebrow" style={{ marginTop: 8, fontSize: 9 }}>{tx(pr.role, lang)} · {pr.tags[0]}</div>
          </div>
        ))}
        <div style={{ flexShrink: 0, width: 4 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 22px 0' }}>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: accent, letterSpacing: 0.5 }}>
          {String(idx + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(250,250,250,0.12)', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: `${((idx + 1) / items.length) * 100}%`,
            background: accent, transition: 'width 0.3s cubic-bezier(.2,.8,.2,1)',
          }} />
        </div>
        <span className="vb2-eyebrow" style={{ fontSize: 9 }}>{lang === 'ru' ? 'свайп →' : 'swipe →'}</span>
      </div>
    </div>
  );
};

// hide horizontal shelf scrollbar
const _shelfStyles = document.createElement('style');
_shelfStyles.textContent = `.vb2-shelf::-webkit-scrollbar { display: none; }`;
document.head.appendChild(_shelfStyles);

// ─── Floating section-jump tabbar (B2) ──────────────────────────────────
// Same liquid-pill aesthetic as A2's FloatingTabbar, but each tab jumps to a
// specific section index. Active tab = highest section# we've scrolled past.
const B2SectionTabbar = ({ section, jumpTo, accent }) => {
  const tabs = [
    { sect: 1, icon: 'home',  label: 'top' },
    { sect: 4, icon: 'grid',  label: 'work' },
    { sect: 5, icon: 'spark', label: 'wins' },
    { sect: 6, icon: 'me',    label: 'about' },
    { sect: 7, icon: 'mail',  label: 'say hi' },
  ];
  // Find which tab's section <= current section (highest match)
  let activeIdx = 0;
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].sect <= section) activeIdx = i;
  }
  const itemW = 50;
  return (
    <div style={{
      position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
      zIndex: 26,
      padding: 6, borderRadius: 999,
      background: 'rgba(20,20,20,0.78)',
      border: '0.5px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      boxShadow: '0 10px 32px rgba(0,0,0,0.45), inset 0 0.5px 0 rgba(255,255,255,0.08)',
      display: 'flex',
    }}>
      {/* Moving thumb */}
      <div style={{
        position: 'absolute', top: 6, left: 6 + activeIdx * itemW,
        width: itemW, height: 'calc(100% - 12px)',
        borderRadius: 999, background: accent,
        transition: 'left 0.34s cubic-bezier(.5,.0,.2,1)',
        boxShadow: `0 4px 14px ${accent}55`,
      }} />
      {tabs.map((t, i) => {
        const on = i === activeIdx;
        return (
          <button key={t.sect} onClick={() => jumpTo(t.sect)} aria-label={t.label} style={{
            position: 'relative', zIndex: 2,
            width: itemW, height: 40,
            border: 'none', background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: on ? '#0a0a0a' : 'rgba(250,250,250,0.6)',
            transition: 'color 0.24s',
          }}>
            <Icon name={t.icon} size={20} stroke={on ? 2.2 : 1.7} />
          </button>
        );
      })}
    </div>
  );
};

window.VariantB2 = VariantB2;
