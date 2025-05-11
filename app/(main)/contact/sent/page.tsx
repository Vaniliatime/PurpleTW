
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Sent | Krzysztof Kaszuba",
  description: "Confirmation of your message sent via contact form.",
};

export default function MessageSentPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-100">
      <div
        className="space-y-6 max-w-xl"
   
      >
        <div className="text-5xl text-green-500">
          <i className="bi bi-check-circle-fill" />
        </div>

        <h1 className="text-3xl font-bold">Message Sent</h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Thank you for reaching out. I’ll get back to you shortly!
        </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-all mt-6"
                >
                <i className="bi bi-arrow-left" />
                Back to homepage
                </Link>

      </div>
    </main>
  );
}
