import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import PalettePicker from './components/PalettePicker.jsx';
import TypographyControls from './components/TypographyControls.jsx';
import PresetList from './components/PresetList.jsx';
import ActionBar from './components/ActionBar.jsx';

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function App() {
  const [primary, setPrimary] = useState('#7c3aed');
  const [accent, setAccent] = useState('#f43f5e');
  const [fontFamily, setFontFamily] = useState('Inter, ui-sans-serif, system-ui');
  const [scale, setScale] = useState(1);
  const [presets, setPresets] = useState([]);

  const stylePreview = useMemo(() => ({
    '--sk-primary': primary,
    '--sk-accent': accent,
    fontFamily,
    fontSize: `${scale}rem`,
  }), [primary, accent, fontFamily, scale]);

  function handlePaletteChange({ primary: p, accent: a }) {
    setPrimary(p);
    setAccent(a);
  }

  function handleTypographyChange({ fontFamily: ff, scale: s }) {
    setFontFamily(ff);
    setScale(s);
  }

  function savePreset() {
    const name = `Preset ${presets.length + 1}`;
    const next = {
      id: generateId(),
      name,
      primary,
      accent,
      fontFamily,
      scale,
    };
    setPresets([next, ...presets]);
  }

  function deletePreset(id) {
    setPresets((prev) => prev.filter((p) => p.id !== id));
  }

  function applyPreset(p) {
    setPrimary(p.primary);
    setAccent(p.accent);
    setFontFamily(p.fontFamily);
    setScale(p.scale);
  }

  function applyToPage() {
    // As a pure frontend preview, we simply copy CSS to clipboard for now.
    // In a full extension, this would message a content script to inject styles.
    const css = `:root{--sk-primary:${primary};--sk-accent:${accent}} *{font-family:${fontFamily} !important;font-size:calc(1rem*${scale}) !important}`;
    navigator.clipboard.writeText(css).catch(() => {});
    alert('CSS copied to clipboard. Paste into your extension content script to apply.');
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-muted/30 text-foreground flex items-start justify-center p-4">
      <div
        className="w-full max-w-[380px] rounded-2xl border bg-card shadow-lg p-4 space-y-4"
        style={stylePreview}
      >
        <Header onOpenSettings={() => alert('Settings panel coming soon')} />

        <PalettePicker
          primary={primary}
          accent={accent}
          onChange={handlePaletteChange}
        />

        <TypographyControls
          fontFamily={fontFamily}
          scale={scale}
          onChange={handleTypographyChange}
        />

        <PresetList
          presets={presets}
          onApply={applyPreset}
          onDelete={deletePreset}
          onSave={savePreset}
        />

        <ActionBar onApplyToPage={applyToPage} />
      </div>
    </div>
  );
}
