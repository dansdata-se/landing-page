"use client";

import { EmailContext } from "@/email";
import env from "@/env";
import Image from "next/image";
import { useContext } from "react";

export default function Footer() {
  const supportEmail = useContext(EmailContext).support;
  return (
    <>
      <footer className="footer p-10">
        <div>
          <span className="footer-title">Dansdata</span>
          <a
            href="https://api.dansdata.se"
            target="_blank"
            className="link-hover link"
          >
            API
          </a>
          <a
            href="https://portal.dansdata.se"
            target="_blank"
            className="link-hover link"
          >
            Portal
          </a>
        </div>
        <div>
          <span className="footer-title">Kontakt</span>
          <a
            href="https://www.facebook.com/DansdataSE"
            target="_blank"
            className="link-hover link"
          >
            Facebook
          </a>
          <a
            href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
            rel="noopener noreferrer"
            target="_blank"
            className="link-hover link"
          >
            Kontaktformulär
          </a>
          <a
            href={`mailto:${supportEmail}`}
            target="_blank"
            className="link-hover link"
          >
            {supportEmail}
          </a>
        </div>
        <div>
          <span className="footer-title">Utveckling</span>
          <a
            href="https://github.com/dansdata-se"
            target="_blank"
            className="link-hover link"
          >
            GitHub
          </a>
          <a
            href="https://dansdata.youtrack.cloud/issues"
            rel="noopener noreferrer"
            target="_blank"
            className="link-hover link"
          >
            YouTrack
          </a>
        </div>
      </footer>
      <footer className="footer border-t border-outline bg-base-300 px-10 py-4 text-base-content">
        <div className="grid-flow-col items-center">
          <div className="grid grid-flow-col items-center gap-4">
            <Image
              className="rounded-md"
              src="/logo_blue.svg"
              alt="Dansdata logo"
              height={50}
              width={50}
            />
            <p>
              <span className="font-brand text-2xl text-primary">Dansdata</span>
              <br />
              <span className="italic">
                Vi vet (snart!) när Sverige dansar!
              </span>
            </p>
          </div>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <a
            href={`https://github.com/dansdata-se/landing-page/tree/${env.VERCEL_GIT_COMMIT_SHA}`}
            target="_blank"
            className="link-hover link text-xs"
          >
            {env.VERCEL_GIT_COMMIT_REF}:
            {env.VERCEL_GIT_COMMIT_SHA.substring(0, 7)}
          </a>
        </div>
      </footer>
    </>
  );
}
