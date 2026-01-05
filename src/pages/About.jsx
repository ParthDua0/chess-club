import React from "react";
import {
  ChessPawn,
  ArrowRight,
  Phone,
  Mail,
  Crown,
} from "lucide-react";
import { Link,NavLink } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen font-display text-white overflow-hidden">
      
      {/* === DARK BACKGROUND SYSTEM === */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />

        {/* Vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        {/* Horizontal vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Soft glow */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.035] blur-[200px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main */}
      <main className="mx-auto max-w-[960px] px-6 py-16 mt-16 mb-16">
        
        {/* Title */}
        <section className="mb-20">
          <div className="flex flex-col gap-4 border-l-2 border-white/40 pl-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              About Us
            </h2>
            <p className="max-w-2xl text-lg text-white/70 font-light leading-relaxed">
              Fostering intellect, strategy, and community. We are a
              collective of novices, and enthusiasts dedicated to
              the art of the 64 squares.
            </p>
          </div>
        </section>

        {/* Faculty Coordinators */}
        <Section title="Faculty Coordinators">
          <ProfileCard
            name="Dr. Pradeep Kumar"
            role="Faculty head"
            desc="Sports Officer"
            image=""
            //image="https://lh3.googleusercontent.com/aida-public/AB6AXuDSWEQzkmBCb_ORZX2k-hDOGY3NQrcesM4dd4pyCiAdg4OnCbjo8uchglIkWcvsL8McKWBMVmNw5Jhwa1KcVLHnMwjz31Lp7KL2GUPXK6p5-_LP-psHbwoOFwh2aLGw4njGkTfDdu3vLGwfBWso_rvvQnCQ5hZsnvlFOR_rvocEXGGQ_BefyfJaQt4Ssd6v5nKjCt5Xp6dMb8vIrPu1375ZompcYWSrcU0e791Oub2vvRy8O8rouTyexnUfafEHRvPrPgbaDjl5RYxX"
          />

          <ProfileCard
            name="Ms. Divya Agnihotri"
            role="Faculty head"
            desc=""
            imgae=""
            //image="https://lh3.googleusercontent.com/aida-public/AB6AXuARPHsUYlEESjjtwaFxUEqiD21tt7qmQchg2seEQCP00QQuQ5AJz5sEGgKoZjeJJN4242Vw0Mop_FHQsgFFRhH7zOHMM76qrL1Kaqbrjz4twMP7O254oE8aAXypUDj2Pw5Ii2iAjmobod1QL5JQcEKl2y91id_bX4vHlI0OZGXE2_sny4hiMshhNGuY3lAyFPiMeID1mtRaGQlq27g3mMC4In2HBAvFYL9Xa_l-yIPg-HaSf2Ad9cnrxQq6mFtgHQ2GcUH1nQbAAqBB"
          />
        </Section>

        {/* Leadership */}
        <Section title="Club Leadership">
          <LeaderCard
            title="General Secretary"
            name="Parth Dua"
            phone="+91 9026386927"
            email="parthdua210@gmail.com"
            icon={<Crown />}
          />

          <LeaderCard
            title="Secretary"
            name="Nikunj Bhardwaj"
            phone="+1 (555) 987-6543"
            email="sec@chessclub.edu"
            icon={<Crown />}
          />
        </Section>

        {/* Core Team */}
        <Section title="Core Team">
          <CoreTable />
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ---------- Small Components ---------- */

function NavItem({ children, active }) {
  return (
    <span
      className={`text-sm font-medium transition-colors cursor-pointer ${
        active ? "text-white" : "text-white/60 hover:text-white"
      }`}
    >
      {children}
    </span>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
    </section>
  );
}

function ProfileCard({ name, role, desc, image }) {
  return (
    <div className="group flex gap-6 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/30 transition">
      <div
        className="h-24 w-24 rounded-lg bg-cover bg-center grayscale group-hover:grayscale-0 transition"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <h4 className="text-xl font-bold text-white group-hover:text-white transition">
          {name}
        </h4>
        <span className="text-sm font-mono text-white/70 block mt-1 mb-3">
          {role}
        </span>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
    </div>
  );
}

function LeaderCard({ title, name, phone, email, icon }) {
  return (
    <div className="relative rounded-xl bg-white/[0.03] p-8 border border-white/10 hover:border-white/30 transition group">
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition text-white">
        {icon}
      </div>
      <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
        {title}
      </p>
      <h4 className="text-2xl font-bold text-white mb-6">{name}</h4>

      <div className="space-y-3 text-white/70">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4" />
          <span className="font-mono text-sm">{phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4" />
          <span className="font-mono text-sm">{email}</span>
        </div>
      </div>
    </div>
  );
}

function CoreTable() {
  const members = [
  {
    id: "aarushi-sangal",
    name: "Aarushi Sangal",
    roll: "235UAI001",
    email: "sangalaarushi2004cef@gmail.com",
  },
  {
    id: "abhishek-tomar",
    name: "Abhishek Tomar",
    roll: "235UCS007",
    email: "bobby@chess.edu",
  },
  {
    id: "anurag-sarkar",
    name: "Anurag Sarkar",
    roll: "233UME003",
    email: "garry@chess.edu",
  },
  {
    id: "aryan-gautam",
    name: "Aryan Gautam",
    roll: "245UEC008",
    email: "judit@chess.edu",
  },
  {
    id: "kabir-yadav",
    name: "Kabir Yadav",
    roll: "245ICS030",
    email: "vishy@chess.edu",
  },
  {
    id: "mohd-ayan",
    name: "Mohd. Ayan",
    roll: "245UCS123",
    email: "fabi@chess.edu",
  },
  {
    id: "mohd-naqui",
    name: "Mohd. Naqui",
    roll: "235UCS083",
    email: "",
  },
  {
    id: "piyush",
    name: "Piyush",
    roll: "256UBM023",
    email: "",
  },
  {
    id: "piyush-arora",
    name: "Piyush Arora",
    roll: "235UCS094",
    email: "",
  },
  {
    id: "prarabdh-pathak",
    name: "Prarabdh Pathak",
    roll: "234UHA019",
    email: "",
  },
  {
    id: "pratham-singh",
    name: "Pratham Singh",
    roll: "236UBM056",
    email: "",
  },
  {
    id: "roshan-ingle",
    name: "Roshan Baburao Ingle",
    roll: "255PCA028",
    email: "",
  },
  {
    id: "shambhavi-singh",
    name: "Shambhavi Singh",
    roll: "234IBA009",
    email: "",
  },
  {
    id: "shivam-sharma",
    name: "Shivam Sharma",
    roll: "245ICS047",
    email: "",
  },
  {
    id: "shivendra-singh",
    name: "Shivendra Singh",
    roll: "246UBM021",
    email: "",
  },
  {
    id: "toshan",
    name: "Toshan",
    roll: "245ICS049",
    email: "",
  },
  {
    id: "utkarsh-mishra",
    name: "Utkarsh Mishra",
    roll: "245UEE010",
    email: "",
  },
  {
    id: "vernit-goyal",
    name: "Vernit Goyal",
    roll: "235ICS061",
    email: "",
  },
  {
    id: "vedika-dwivedi",
    name: "Vedika Dwivedi",
    roll: "235UCC032",
    email: "",
  },
  {
    id: "vikrant-chaudhary",
    name: "Vikrant Chaudhary",
    roll: "235UCS125",
    email: "",
  },
];


  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-x-auto">
      {members.map((m) => (
        <div
          key={m.id}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_3fr] gap-4 px-6 py-5 border-b border-white/10 last:border-none hover:bg-white/[0.02] transition"
        >
          <span className="font-bold text-white">{m.name}</span>
          <span className="text-white/70">Core Member</span>
          <span className="font-mono text-white/80">{m.roll || "—"}</span>
          <span className="font-mono text-white/60 md:text-right break-words">
            {m.email || "—"}
          </span>
        </div>
      ))}
    </div>
  );
}
