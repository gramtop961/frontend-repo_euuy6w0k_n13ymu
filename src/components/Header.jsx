import { Paintbrush, Settings } from 'lucide-react';

export default function Header({ onOpenSettings }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white">
          <Paintbrush size={18} />
        </div>
        <div>
          <h1 className="text-sm font-semibold leading-none">Style Keeper</h1>
          <p className="text-[11px] text-muted-foreground">Save and reapply page styles</p>
        </div>
      </div>
      <button
        onClick={onOpenSettings}
        className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Open settings"
      >
        <Settings size={16} />
      </button>
    </div>
  );
}
