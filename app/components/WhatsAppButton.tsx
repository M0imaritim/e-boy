import { ReactNode } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children: ReactNode;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello, I'd like to book an errand service!",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium text-center block ${className}`}
    >
      {children}
    </a>
  );
}
