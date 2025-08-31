'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppContact() {
  const phoneNumber = '+1 860-601-3469';
  const message = 'Hello! I\'m interested in your IPTV services. Can you provide more information?';
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
