import { Wand2 } from 'lucide-react';

export default function ActionBar({ onApplyToPage }) {
  return (
    <div className="sticky bottom-0 mt-3">
      <button
        onClick={onApplyToPage}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:opacity-95 active:opacity-90"
      >
        <Wand2 size={16} /> Apply to this page
      </button>
      <p className="mt-1 text-center text-[11px] text-muted-foreground">
        Changes previewed here. Applying will inject styles into the active tab.
      </p>
    </div>
  );
}
