"use client";
import "./floating-contact.css";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      {/* Call */}
      <a
        href="tel:+916000156001"
        className="float-btn call"
        aria-label="Call us"
      >
        <Phone />
        <span className="float-text">+91 60001 56001</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/916000156001"
        target="_blank"
        className="float-btn whatsapp"
        aria-label="WhatsApp"
      >
        <MessageCircle />
        <span className="float-text">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
