import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-primary pb-14 pt-32 text-primary-foreground lg:pb-20 lg:pt-40">
      <div className="container-page">
        <div className="[&_a]:text-primary-foreground/60 [&_li>span]:text-primary-foreground [&_ol]:text-primary-foreground/60">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-primary-foreground/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
