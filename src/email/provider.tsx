"use client";

import { EmailContext, EmailContextType, initialEmailContext } from "@/email";
import { decodeEmail, encodedSupportEmail } from "@/email/encoded";
import { ReactNode, useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

export default function EmailContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const isClientSide = useIsClient();
  const [emailContext, setEmailContext] =
    useState<EmailContextType>(initialEmailContext);

  useEffect(() => {
    if (isClientSide) {
      setEmailContext({
        support: decodeEmail(encodedSupportEmail),
      });
    }
  }, [isClientSide]);

  return (
    <EmailContext.Provider value={emailContext}>
      {children}
    </EmailContext.Provider>
  );
}
