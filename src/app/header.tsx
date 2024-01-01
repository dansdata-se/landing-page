"use client";

import { EmailContext } from "@/email";
import Image from "next/image";
import { useContext } from "react";
import { ExternalLink } from "react-feather";

export default function Header() {
  const supportEmail = useContext(EmailContext).support;
  return (
    <header className="container flex flex-col items-center justify-between gap-y-8 py-8 sm:flex-row">
      <div className="flex items-center gap-5">
        <Image
          className="rounded-md"
          src="/logo_blue.svg"
          alt="Dansdata logo"
          height={100}
          width={100}
        />
        <div>
          <h1 className="font-brand text-5xl text-primary">Dansdata</h1>
          <span className="italic">Vi vet (snart!) när Sverige dansar!</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:items-end">
        <a
          href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-accent btn-sm"
        >
          <ExternalLink className="h-4 w-4" />
          Kontaktformulär
        </a>
        <a
          href={`mailto:${supportEmail}`}
          target="_blank"
          className="btn btn-sm"
        >
          {supportEmail}
        </a>
      </div>
    </header>
  );
}
