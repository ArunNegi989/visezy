import { API_URL } from "./constants";

export async function submitInquiry(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      ...data,
      subject: "Website Inquiry",
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}