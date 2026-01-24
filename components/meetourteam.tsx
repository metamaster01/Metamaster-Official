"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Avinash",
    role: "SDE",
    image: "/T1.png",
  },
  {
    name: "Sujal Pal",
    role: "SDE-Web",
    image: "/T2.png",
  },
  {
    name: "Akash Kumar",
    role: "SDE-Web",
    image: "/mem3.png",
  },
  {
    name: "Aman Kumar",
    role: "SEO Specialist",
    image: "/mem4.png",
  },
  {
    name: "Aman Kumar",
    role: "Web Developer",
    image: "/mem5.png",
  },
  {
    name: "Aman Kumar",
    role: "Performance Marketing Expert",
    image: "/mem1.png",
  },
  {
    name: "Aman Kumar",
    role: "Branding & Graphic Designer",
    image: "/mem2.png",
  },
  {
    name: "Aman Kumar",
    role: "Content Creator",
    image: "/mem3.png",
  },
  {
    name: "Aman Kumar",
    role: "Video Editor & Motion Graphics Designer",
    image: "/mem4.png",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            At Meta Master, our strength lies in our people. We are a team of
            strategists, creators, and innovators passionate about helping
            brands grow in the digital era.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Card */}
              <div className="relative w-56 h-56 rounded-3xl bg-[#c77dff] overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>

              {/* Text */}
              <h3 className="mt-4 text-lg font-medium">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
