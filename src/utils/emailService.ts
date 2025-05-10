
import { toast } from "sonner";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Create a mailto link with the form data
    const mailtoLink = `mailto:lifeforlife@abv.bg?subject=${encodeURIComponent(
      `Запитване от ${formData.name}: ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Име: ${formData.name}\n` +
      `Имейл: ${formData.email}\n` +
      `Телефон: ${formData.phone || 'Не е посочен'}\n\n` +
      `Съобщение:\n${formData.message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast.success("Формулярът е подготвен за изпращане във вашия имейл клиент", {
      duration: 5000,
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Възникна грешка при подготовката на имейла. Моля, опитайте отново или се свържете с нас директно.", {
      duration: 5000,
    });
    return false;
  }
};
