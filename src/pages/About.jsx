import React from "react";
import { Phone, Mail, Crown, User } from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen font-display text-white bg-[#0A0A0A] overflow-x-hidden">
      
      {/* === BACKGROUND SYSTEM (SAFE) === */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />

        {/* Vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        {/* Horizontal vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Glow (RESPONSIVE + CLAMPED) */}
        <div
          className="
            absolute top-[-30%] left-1/2 -translate-x-1/2
            w-[320px] h-[320px]
            sm:w-[500px] sm:h-[500px]
            lg:w-[700px] lg:h-[700px]
            rounded-full bg-white/[0.035] blur-[160px]
          "
        />
      </div>

      <Navbar />

      {/* === MAIN === */}
      <main className="mx-auto max-w-[960px] w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-20 overflow-x-hidden">
        
        {/* Title */}
        <section className="mb-16">
          <div className="flex flex-col gap-4 border-l-2 border-white/30 pl-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              About Us
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-white/70 font-light leading-relaxed">
              Fostering intellect, strategy, and community. We are a collective
              of novices and enthusiasts dedicated to the art of the 64 squares.
            </p>
          </div>
        </section>

        {/* Faculty */}
        <Section title="Faculty Coordinators">
          <ProfileCard
            name="Dr. Pradeep Kumar"
            role="Faculty Head"
            desc="Sports Officer"
          />
          <ProfileCard
            name="Ms. Divya Agnihotri"
            role="Faculty Head"
          />
        </Section>

        {/* Leadership */}
        <Section title="Club Leadership">
          <LeaderCard
            title="General Secretary"
            name="Parth Dua"
            phone="+91 9026386927"
            email="parthdua210@gmail.com"
          />
          <LeaderCard
            title="Secretary"
            name="Nikunj Bhardwaj"
            phone="+91 9560382800"
            email="nikunjbhardwaj2006@gmail.com"
          />
        </Section>

        {/* Core Team */}
        <Section title="Core Team">
          <CoreTable />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({ title, children }) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </section>
  );
}

function ProfileCard({ name, role, desc }) {
  return (
    <div className="flex gap-5 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition max-w-full">
      <div className="h-20 w-20 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
        <User className="opacity-60" />
      </div>
      <div className="min-w-0">
        <h4 className="text-lg sm:text-xl font-bold break-words">{name}</h4>
        <span className="text-sm font-mono text-white/70 block mt-1 mb-2">
          {role}
        </span>
        {desc && (
          <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
        )}
      </div>
    </div>
  );
}

function LeaderCard({ title, name, phone, email }) {
  return (
    <div className="relative rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-white/30 transition max-w-full">
      <Crown className="absolute top-4 right-4 opacity-15" />
      <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
        {title}
      </p>
      <h4 className="text-xl sm:text-2xl font-bold mb-5 break-words">
        {name}
      </h4>

      <div className="space-y-3 text-white/70">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 shrink-0" />
          <span className="font-mono text-sm break-all">{phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 shrink-0" />
          <span className="font-mono text-sm break-all">{email}</span>
        </div>
      </div>
    </div>
  );
}

function CoreTable() {
  const members = [
  { id: 1, name: "Aarushi Sangal", roll: "235UAI001", email: "sangalaarushi2004cef@gmail.com" },
  { id: 2, name: "Abhishek Tomar", roll: "235UCS007", email: "abhishek.tomar9099@gmail.com" },
  { id: 3, name: "Anurag Sarkar", roll: "233UME003", email: "Anuragsarkar1809@gmail.com" },
  { id: 4, name: "Aryan Gautam", roll: "245UEC008", email: "gautamaryan504@gmail.com" },
  { id: 5, name: "Kabir Yadav", roll: "245ICS030", email: "kabiryadav2314@gmail.com" },
  { id: 6, name: "Mohd. Ayan", roll: "245UCS123", email: "" },
  { id: 7, name: "Mohd. Naqui", roll: "235UCS083", email: "nknaqui72@gmail.com" },
  { id: 8, name: "Piyush", roll: "256UBM023", email: "piyush.singh.gm711@gmail.com" },
  { id: 9, name: "Piyush Arora", roll: "235UCS094", email: "" },
  { id: 10, name: "Prarabdh Pathak", roll: "234UHA019", email: "pathakprarabdh30@gmail.com" },
  { id: 11, name: "Pratham Singh", roll: "236UBM056", email: "" },
  { id: 12, name: "Roshan Baburao Ingle", roll: "255PCA028", email: "roshan766689@gmail.com" },
  { id: 13, name: "Shambhavi Singh", roll: "234IBA009", email: "" },
  { id: 14, name: "Shivam Sharma", roll: "245ICS047", email: "shivanaam123@gmail.com" },
  { id: 15, name: "Shivendra Singh", roll: "246UBM021", email: "shivendraxsingh@gmail.com" },
  { id: 16, name: "Toshan", roll: "245ICS049", email: "ptoshant@gmail.com" },
  { id: 17, name: "Utkarsh Mishra", roll: "245UEE010", email: "" },
  { id: 18, name: "Vernit Goyal", roll: "235ICS061", email: "vernitgoyal76@gmail.com" },
  { id: 19, name: "Vedika Dwivedi", roll: "235UCC032", email: "vedikadwivedi66@gmail.com" },
  { id: 20, name: "Vikrant Chaudhary", roll: "235UCS125", email: "vikrantsja@gmail.com" }
];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-x-auto max-w-full">
      {members.map((m) => (
        <div
          key={m.id}
          className="
            grid grid-cols-1
            sm:grid-cols-[2fr_1fr_2fr]
            gap-3 px-5 py-4
            border-b border-white/10 last:border-none
            hover:bg-white/[0.02]
            max-w-full
          "
        >
          <span className="font-semibold break-words">{m.name}</span>
          <span className="text-white/70 font-mono">{m.roll}</span>
          <span className="text-white/60 font-mono break-all sm:text-right">
            {m.email}
          </span>
        </div>
      ))}
    </div>
  );
}
