import type { StaticImageData } from "next/image";
import Store from "@/public/store.jpg";
import Shoonya from "@/public/shoonya.jpg";
import Notes from "@/public/notes.jpg";
import Pomodoro from "@/public/pomodoro.jpg";
import Techtonic from "@/public/techtonic.jpg";

export type Project = {
  title: string;
  desc: string;
  src: StaticImageData;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Dot Store",
    desc: "E-commerce website",
    src: Store,
    link: "https://dot-store-react.netlify.app/",
  },
  {
    title: "Shoonya",
    desc: "Video library",
    src: Shoonya,
    link: "https://shoonya-cosmos.netlify.app/",
  },
  {
    title: "Dot notes",
    desc: "Note taker",
    src: Notes,
    link: "https://dot-note.netlify.app/",
  },
  {
    title: "DotOnTime",
    desc: "Pomodoro app",
    src: Pomodoro,
    link: "https://dot-on-time.netlify.app/",
  },
  {
    title: "TechtonicUI",
    desc: "Component library",
    src: Techtonic,
    link: "https://techtonic-ui.netlify.app/",
  },
];
