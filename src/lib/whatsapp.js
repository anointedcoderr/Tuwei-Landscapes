export const WHATSAPP_NUMBER = "254732592783";
export const PHONE_DISPLAY = "+254 732 592 783";
export const EMAIL = "tuwei.contractors@gmail.com";

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
