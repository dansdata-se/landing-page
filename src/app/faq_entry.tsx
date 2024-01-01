import { ReactNode } from "react";

export default function FaqEntry({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="collapse collapse-arrow mx-auto max-w-[65ch]">
      <input type="checkbox" />
      <h3 className="collapse-title text-lg font-bold">{title}</h3>
      <div className="prose collapse-content">{children}</div>
    </article>
  );
}
