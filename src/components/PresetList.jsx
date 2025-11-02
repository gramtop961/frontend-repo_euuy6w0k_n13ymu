import { Save, Trash2, Wand2 } from 'lucide-react';

export default function PresetList({ presets, onApply, onDelete, onSave }) {
  return (
    <div className="rounded-xl border bg-card p-3 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
            <Wand2 size={16} />
          </div>
          <div>
            <h2 className="text-sm font-medium leading-none">Presets</h2>
            <p className="text-[11px] text-muted-foreground">Save and reuse styles</p>
          </div>
        </div>
        <button
          onClick={onSave}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
        >
          <Save size={14} /> Save
        </button>
      </div>

      {presets.length === 0 ? (
        <p className="text-xs text-muted-foreground">No presets yet. Adjust settings above and save your first preset.</p>
      ) : (
        <ul className="space-y-2">
          {presets.map((p) => (
            <li key={p.id} className="flex items-center justify-between rounded-md border px-3 py-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span title="Primary" className="h-4 w-6 rounded" style={{ backgroundColor: p.primary }} />
                  <span title="Accent" className="h-4 w-6 rounded" style={{ backgroundColor: p.accent }} />
                </div>
                <div className="text-xs">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-[11px] text-muted-foreground" style={{ fontFamily: p.fontFamily }}>
                    Scale {(p.scale * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onApply(p)}
                  className="rounded-md border px-2 py-1 text-xs hover:bg-accent"
                >
                  Apply
                </button>
                <button
                  onClick={() => onDelete(p.id)}
                  className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive"
                  aria-label="Delete preset"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
