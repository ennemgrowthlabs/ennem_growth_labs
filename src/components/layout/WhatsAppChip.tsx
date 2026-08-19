import { SITE } from "@/lib/data";

export function WhatsAppChip() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      data-magnetic
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-[80] flex items-center gap-2.5 overflow-visible border border-[#25D366]/55 bg-[#05070A]/95 py-2 pl-2 pr-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.18)] backdrop-blur-md max-md:bottom-[max(1.25rem,env(safe-area-inset-bottom))] max-md:left-[max(1.25rem,env(safe-area-inset-left))]"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#25D366] text-[#05070A]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
          <path d="M17.47 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.91L2 22l5.23-1.25A9.96 9.96 0 0 0 12.04 22C17.57 22 22 17.52 22 12S17.57 2 12.04 2zm0 18.15c-1.67 0-3.27-.45-4.66-1.3l-.33-.2-3.1.74.75-3.02-.22-.35A8.12 8.12 0 0 1 3.88 12c0-4.5 3.66-8.15 8.16-8.15 4.5 0 8.16 3.65 8.16 8.15 0 4.5-3.66 8.15-8.16 8.15z" />
        </svg>
      </span>
      <span className="leading-none">WhatsApp</span>
    </a>
  );
}
