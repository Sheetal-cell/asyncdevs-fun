"use client";

import { Code2, Github, Users } from "lucide-react";
import { motion } from "framer-motion";
import MemberCard from "./MemberCard";

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
  github: string;
  skills: string[];
  bio: string;
}

interface PageContentProps {
  members: Member[];
}

export default function PageContent({ members }: PageContentProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="h-12 w-12 text-purple-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              AsyncDevs Community
            </h1>
          </div>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A vibrant community of developers building the future together. Created with ❤️ by Arindam Majumder.
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="text-neutral-300">{members.length} Members</span>
            </div>
            <a
              href="https://github.com/the-async-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-300 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>Join us on GitHub</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}