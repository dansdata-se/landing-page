import { decodeEmail, encodedSupportEmail } from "@/email/encoded";
import { createContext } from "react";

export interface EmailContextType {
  support: string;
}

// Use placeholder with same length as the encoded email to minimize layout shift.
const emailPlaceholder = (encodedEmail: string) =>
  "*".repeat(decodeEmail(encodedEmail).length);

export const initialEmailContext: EmailContextType = {
  support: emailPlaceholder(encodedSupportEmail),
};

export const EmailContext =
  createContext<EmailContextType>(initialEmailContext);
