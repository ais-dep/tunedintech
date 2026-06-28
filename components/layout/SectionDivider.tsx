import { cn } from "@/lib/utils";

type SectionDividerProps = {
  number?: string;
  label?: string;
  className?: string;
};

export function SectionDivider({
  number,
  label,
  className,
}: SectionDividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {(number || label) && (
        <span className="shrink-0 font-mono text-xs tracking-wider text-muted-foreground">
          {number}
          {number && label && " — "}
          {label}
        </span>
      )}
      <div className="section-divider flex-1" />
    </div>
  );
}
