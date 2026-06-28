import { SectionDivider } from "./SectionDivider";

type PageHeaderProps = {
  title: string;
  description?: string;
  label?: string;
};

export function PageHeader({ title, description, label }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionDivider number={label} className="mb-8" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
