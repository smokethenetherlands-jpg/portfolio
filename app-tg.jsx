// app-tg.jsx — Production entry for real Telegram Mini App. No device frame.

const AppTG = () => {
  const tg = window.Telegram?.WebApp;
  const [lang, setLang] = React.useState('ru');
  const accent = '#7CF9C0';

  React.useEffect(() => {
    tg?.ready();
    tg?.expand();
  }, []);

  const title = window.tx(window.PORTFOLIO.meta.name, lang);

  return (
    <div style={{ width: '100%', height: '100svh', position: 'relative', background: '#0a0a0a', overflow: 'hidden' }}>
      <TGHeader title={title} dark={true} lang={lang} setLang={setLang} onClose={() => tg?.close()} paddingTop={12} solid={true} />
      <VariantB2 lang={lang} accent={accent} headerHeight={52} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppTG />);
