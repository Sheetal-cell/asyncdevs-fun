"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  avatar: string;
  github: string;
  skills: string[];
  bio: string;
}

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm border border-neutral-700/50 hover:border-purple-500/50 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
          <p className="text-purple-400">{member.role}</p>
        </div>
        <a
          href={`https://github.com/${member.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-purple-400 transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>

      <p className="mt-4 text-neutral-300">{member.bio}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm bg-neutral-700/50 text-neutral-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}