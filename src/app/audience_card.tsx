import Image from "next/image";
import { ReactNode } from "react";

export default function AudienceCard({
  imgSrc,
  imgAlt,
  apiBtn = false,
  portalBtn = false,
  socialdansBtn = false,
  embedsBtn = false,
  children,
}: {
  imgSrc: string;
  imgAlt: string;
  apiBtn?: boolean;
  portalBtn?: boolean;
  socialdansBtn?: boolean;
  embedsBtn?: boolean;
  children: ReactNode;
}) {
  return (
    <article className="card card-compact col-span-2">
      <figure className="relative aspect-video">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="object-cover"
          fill={true}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 15vw"
        />
      </figure>
      <div className="prose card-body">
        {children}
        <div className="card-actions">
          {apiBtn && (
            <a
              href="https://api.dansdata.se"
              target="_blank"
              className="btn btn-primary btn-sm w-full"
            >
              API-dokumentation
            </a>
          )}
          {portalBtn && (
            <button
              className="btn btn-primary btn-sm w-full"
              disabled
            >
              {"Dansdata\u00ADportalen"}
              <br />
              (under utveckling)
            </button>
          )}
          {socialdansBtn && (
            <button
              className="btn btn-primary btn-sm w-full"
              disabled
            >
              Appen {"Social\u00ADdans"}
              <br />
              (under utveckling)
            </button>
          )}
          {embedsBtn && (
            <button
              className="btn btn-secondary btn-sm w-full"
              disabled
            >
              Embeds
              <br />
              (under utveckling)
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
