"use client"
import { Calendar, ChevronRight } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Jack",
    username: "@jack",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    content: "I've never seen anything like this before. It's amazing. I love it."
  },
  {
    name: "Jill",
    username: "@jill",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    content: "I don't know what to say. I'm speechless. This is amazing."
  },
  {
    name: "John",
    username: "@john",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    content: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "Jane",
    username: "@jane",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    content: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "Jenny",
    username: "@jenny",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "James",
    username: "@james",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    content: "I'm at a loss for words. This is amazing. I love it."
  }
];

const TestimonialCard = ({ name, username, avatar, content }: typeof testimonials[0]) => (
  <figure className="relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={avatar} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{content}</blockquote>
  </figure>
);

const Cta = () => {
  return (
    <section id="cta">
      <div className="py-14 container mx-auto px-4 max-w-[1000px]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
          <div className="absolute rotate-[35deg]">
            {[0, 1, 2].map((group) => (
              <Marquee
                key={group}
                pauseOnHover
                className="[--duration:20s]"
                reverse={group % 2 === 1}
              >
                {testimonials.slice(group * 2, (group * 2) + 3).map((testimonial, idx) => (
                  <TestimonialCard key={idx} {...testimonial} />
                ))}
              </Marquee>
            ))}
          </div>

          <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <Image src="/aqua/logo.svg" alt="Aquapulse Logo" width={100} height={100} />
          </div>

          <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
            <h1 className="text-3xl font-bold lg:text-4xl">
              Aquapulse
            </h1>
            <p className="mt-2">Aquapulse is an aqua-tech company offering tailored solutions and advanced technology to enhance efficiency and sustainability in aquaculture</p>
            <Button
              variant="default"
              size="sm"
              className="mt-4 rounded-full group bg-gradient-to-r from-sky-400 to-blue-600"
              asChild
            >
              <Link href="/">
                Get Started
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
        </div>
      </div>
    </section>
  );
};

export default Cta;