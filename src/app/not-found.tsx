import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">404 · SIGNAL LOST</p>
      <h1 className="mt-4 font-display text-5xl">This sector is empty</h1>
      <p className="mt-3 max-w-md text-white/55">
        The route does not exist. Return to HQ or open the work archive.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">HQ</Button>
        <Button href="/work" variant="ghost">
          Work
        </Button>
      </div>
    </div>
  );
}
