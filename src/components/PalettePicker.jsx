import { Palette } from 'lucide-react';

export default function PalettePicker({ primary, accent, onChange }) {
  return (
    <div className="rounded-xl border bg-card p-3 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            <Palette size={16} />
          </div>
          <div>
            <h2 className="text-sm font-medium leading-none">Palette</h2>
            <p className="text-[11px] text-muted-foreground">Primary & accent colors</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex items-center justify-between gap-2 text-xs">
          <span className="text-muted-foreground">Primary</span>
          <input
            type="color"
            className="h-8 w-10 rounded cursor-pointer border"
            value={primary}
            onChange={(e) => onChange({ primary: e.target.value, accent })}
            aria-label="Primary color"
          />
        </label>

        <label className="flex items-center justify-between gap-2 text-xs">
          <span className="text-muted-foreground">Accent</span>
          <input
            type="color"
            className="h-8 w-10 rounded cursor-pointer border"
            value={accent}
            onChange={(e) => onChange({ primary, accent: e.target.value })}
            aria-label="Accent color"
          />
        </label>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[11px] text-muted-foreground">Preview:</span>
        <div className="flex items-center gap-2">
          <span className="h-5 w-10 rounded" style={{ backgroundColor: primary }} />
          <span className="h-5 w-10 rounded" style={{ backgroundColor: accent }} />
        </div>
      </div>
    </div>
  );
}
