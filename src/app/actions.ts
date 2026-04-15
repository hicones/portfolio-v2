"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("GOOGLE_SHEETS_SCRIPT_URL is not configured.");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: name,
        email,
        assunto: "Portfolio",
        mensagem: message,
      }),
    });

    if (!response.ok) {
      return { success: false, error: "Failed to submit the form." };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
