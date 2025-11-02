import { Type } from 'lucide-react';

const FONTS = [
  { label: 'Inter', value: 'Inter, ui-sans-serif, system-ui' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'IBM Plex Mono', value: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace' },
];

export default function TypographyControls({ fontFamily, scale, onChange }) {
  return (
    <div className="rounded-xl border bg-card p-3 space-y-3">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          <Type size={16} />
        </div>
        <div>
          <h2 className="text-sm font-medium leading-none">Typography</h2>
          <p className="text-[11px] text-muted-foreground">Font family & scale</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="text-xs">
          <span className="text-muted-foreground">Font family</span>
          <select
            className="mt-1 w-full rounded-md border bg-background px-2 py-1 text-xs"
            value={fontFamily}
            onChange={(e) => onChange({ fontFamily: e.target.value, scale })}
          >
            {FONTS.map((f) => (
              <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
                {f.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Scale</span>
            <span className="text-[11px] tabular-nums">{(scale * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min={0.8}
            max={1.4}
            step={0.05}
            value={scale}
            onChange={(e) => onChange({ fontFamily, scale: Number(e.target.value) })}
            className="w-full"
            aria-label="Font scale"
          />
        </label>

        <div className="rounded-md border px-3 py-2" style={{ fontFamily, fontSize: `${scale}rem` }}>
          <p className="text-xs text-muted-foreground">Preview</p>
          <p className="text-sm">The quick brown fox jumps over the lazy dog.</p>
        </div>
      </div>
    </div>
  );
}
