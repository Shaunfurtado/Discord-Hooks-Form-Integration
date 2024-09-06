"use client";
import React, { useState }  from "react";
import { useRouter } from "next/navigation";
import { TechIUse } from "@/app/components/techCard";
import { contacts } from '@/app/data/contacts';
import { LuSendHorizonal } from "react-icons/lu";

export default function Page() {
  const router = useRouter();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const webhookURL = process.env.DISCORD_WEBHOOK_URL;

    const payload = {
      embeds: [
        {
          title: "New Message from Portfolio",
          description: "You've received a new message via your portfolio contact form.",
          color: 0x5865F2,
          fields: [
            { name: "Name", value: formData.get('name') as string, inline: true },
            { name: "Email", value: formData.get('email') as string, inline: true },
            { name: "Message", value: formData.get('message') as string },
          ],
          footer: { text: "Portfolio Contact Form" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(webhookURL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push('/thanks');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Say Hello!</h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <form onSubmit={handleSubmit} className="flex flex-col mt-0 mb-8">
          <input type="text" name="name" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Name"/>
          <input type="email" name="email" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your E-mail" />
          <textarea name="message" required className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black focus:shadow-none" placeholder="Your Message" ></textarea>
          <input type="hidden" name="redirect" value="https://shaunfurtado.is-a.dev/thanks" />
          <button type="submit" className="h-22 md:h-20 px-4 py-2 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out" >
            <LuSendHorizonal className="mr-2 size-6" />  Submit Message
          </button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Also Follow me on : </h1>
        <TechIUse tech={contacts} />
      </div>
    </section>
  );
}