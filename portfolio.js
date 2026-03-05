import React, { useState } from 'react';
import { 
  Rocket, 
  Settings, 
  Code, 
  BookOpen, 
  Award, 
  Music, 
  Droplet, 
  VenetianMask, 
  MapPin,
  Mail,
  ExternalLink,
  ChevronDown,
  Cpu,
  Wrench,
  Globe,
  User
} from 'lucide-react';

// --- Data Extracted from CV & Uploaded Assets ---

const PERSONAL_INFO = {
  name: "Harsh Vibhor Sharma",
  title: "Undergraduate Researcher | B.Tech in Manufacturing Science & Engineering",
  institution: "IIT Kharagpur",
  tagline: "Passionate about Propulsion Systems, Aerospace Engineering, and Autonomous Robotics.",
  email: "mailto:your.email@iitkgp.ac.in",
  location: "Kharagpur, West Bengal, India",
  profileImage: "WhatsApp Image 2026-03-03 at 14.02.20.jpeg"
};

const EDUCATION = [
  {
    institution: "IIT Kharagpur",
    degree: "B.Tech. (Hons.) in Manufacturing Science and Engineering",
    duration: "2023 - 2027",
    score: "CGPA: 8.010/10"
  },
  {
    institution: "Maharaja Sawai Man Singh Vidyalaya, Jaipur",
    degree: "AISSCE (12th Grade)",
    duration: "2023",
    score: "90.4%"
  },
  {
    institution: "Maharaja Sawai Man Singh Vidyalaya, Jaipur",
    degree: "AISSE (10th Grade)",
    duration: "2021",
    score: "95.6%"
  }
];

const PROJECTS = [
  {
    title: "Scramjet Test Rig Instrumentation",
    lab: "Advanced Propulsion Systems Laboratory, IIT Kharagpur",
    supervisor: "Prof. Amardip Ghosh",
    duration: "Dec 2024 - Apr 2025",
    points: [
      "Performed compressible CFD simulations of dual scramjet combustion chambers in ANSYS Fluent.",
      "Enhanced solution fidelity by implementing region-specific mesh refinement for Mach 2.5-3.0 dynamics.",
      "Engineered a PyQt6-based control interface for automating 5-channel solenoid valve actuation."
    ],
    icon: <Rocket className="text-blue-400" size={24} />,
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000" // Rocket engine detail
  },
  {
    title: "Research on Coking Phenomena in Hydrocarbon Fuels",
    lab: "Mechanical Engineering Department, IIT Kharagpur",
    supervisor: "Prof. Mahendra Reddy Vanteru",
    duration: "Oct 2024 - Present",
    points: [
      "Investigated thermal degradation and coking mechanisms in hydrocarbon fuels under high-temperature conditions.",
      "Conducted kinetic modeling to analyze the rate of coke formation and its impact on heat transfer.",
      "Formulated predictive models to optimize fuel composition and operating parameters."
    ],
    icon: <Settings className="text-orange-400" size={24} />,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000" // Laboratory/Fuel research vibe
  },
  {
    title: "3D Structure Design for Space Application",
    lab: "Metallurgy and Material Science Department, IIT Kharagpur",
    duration: "Jul 2024 - Oct 2024",
    points: [
      "Simulated tensile loading on dogbone and origami CAD models to evaluate failure modes.",
      "Optimized strength-to-weight ratios using 3D-printed infill patterns (honeycomb, gyroid).",
      "Modeled 4D materials in COMSOL Multiphysics for time-dependent shape transformation."
    ],
    icon: <Globe className="text-purple-400" size={24} />,
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1000" // Modern 3D/Tech structure
  },
  {
    title: "ABENICS: Active Ball Joint Mechanism",
    lab: "Kharagpur Learning, Imaging and Visualization",
    duration: "Feb 2025 - Apr 2025",
    points: [
      "Designed a 3-DOF motion platform with NEMA 17 motors and custom gears for high repeatability.",
      "Built an Arduino-based motion controller enabling smooth multi-axis actuation."
    ],
    icon: <Cpu className="text-teal-400" size={24} />,
    image: "abenics.jpg" // Your Uploaded Photo
  },
  {
    title: "F1tenth Simulation",
    lab: "Autonomous Ground Vehicle, Robotics Research Group",
    duration: "Aug 2024 - Sep 2024",
    points: [
      "Implemented Pure Pursuit in Python for a ROS 2-based autonomous stack.",
      "Developed modular ROS 2 nodes for waypoint parsing and path publishing.",
      "Validated real-time coordination of planning and control via extensive simulations."
    ],
    icon: <Code className="text-green-400" size={24} />,
    image: "f1tenth.jpg" // Your Uploaded Photo
  }
];

const SKILLS = {
  tools: ["SolidWorks", "ANSYS Fluent", "Pointwise", "AutoCAD", "Comsol Multiphysics", "Ultimaker Cura", "OpenMotor", "OpenRocket"],
  programming: ["MATLAB", "Python", "C", "Simulink", "Simscape", "ROS 2", "Excel", "PowerPoint", "LaTeX"],
  coursework: ["Mechanics of Solids", "Thermofluids", "Dynamics", "Aerodynamics", "Aerospace Structures", "Electronics", "Operations Research", "Data Structures"]
};

const HOBBIES = [
  {
    title: "Water Polo",
    icon: <Droplet size={32} className="text-blue-500" />,
    description: "Silver and bronze medalist at GC and Invitation Championship 2025.",
    image: "WhatsApp Image 2026-03-03 at 14.01.45.jpeg" // Your Uploaded Photo
  },
  {
    title: "Instrumentals (Drumming)",
    icon: <Music size={32} className="text-orange-500" />,
    description: "3rd Place in Open IIT Instrumentals 2024.",
    image: "WhatsApp Image 2026-03-03 at 14.01.46.jpeg" // Your Uploaded Photo
  },
  {
    title: "Dramatics (Street Play)",
    icon: <VenetianMask size={32} className="text-purple-500" />,
    description: "4th position in Inter-Hall Street Play Competition 2025.",
    image: "Street-Play.jpeg"
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <span className="text-white font-black text-2xl tracking-tighter">HVS<span className="text-blue-500">.</span></span>
        <div className="hidden md:flex space-x-8">
          {['About', 'Research', 'Skills', 'Hobbies'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const SafeImage = ({ src, alt, className, type = "project" }) => {
  const [error, setError] = useState(false);
  
  // Custom fallbacks based on the section type
  const fallbacks = {
    profile: <div className={`bg-slate-800 flex items-center justify-center ${className}`}><User size={64} className="text-slate-600" /></div>,
    project: <div className={`bg-slate-900 flex items-center justify-center ${className}`}><Rocket size={48} className="text-slate-800" /></div>,
    hobby: <div className={`bg-slate-900 flex items-center justify-center ${className}`}><Globe size={48} className="text-slate-800" /></div>
  };

  if (error) return fallbacks[type] || fallbacks.project;

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[85vh] gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-8">
            <MapPin size={14}/> {PERSONAL_INFO.location}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Harsh Vibhor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500">Sharma</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light max-w-xl">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#research" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-500/20">
              View Research
            </a>
            <a href={PERSONAL_INFO.email} className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold transition-all flex items-center gap-2">
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>

        <div className="md:w-2/5 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-[2rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
            <div className="absolute inset-0 bg-teal-400 rounded-[2rem] -rotate-6 group-hover:-rotate-3 transition-transform duration-500 opacity-20"></div>
            <SafeImage 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name} 
              type="profile"
              className="w-full h-full object-cover rounded-[2rem] relative z-10 border border-slate-800 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">The Journey</h2>
              <h3 className="text-4xl font-bold text-white mb-8">Academic Roots</h3>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                Currently pursuing a B.Tech (Hons.) in <strong>Manufacturing Science and Engineering</strong> at IIT Kharagpur. My research thrives at the boundary of aerospace mechanics and autonomous logic.
              </p>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-blue-500/30 transition-all">
                    <div className="mt-1"><BookOpen size={20} className="text-blue-500"/></div>
                    <div>
                      <h4 className="font-bold text-white">{edu.institution}</h4>
                      <p className="text-sm text-slate-400">{edu.degree} • {edu.duration}</p>
                      <p className="text-xs text-blue-400 mt-1">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Research Interests</h3>
              <ul className="space-y-6">
                {[
                  { title: "Aerospace Propulsion", desc: "Supersonic combustion, scramjets, and rotating detonation engine design.", icon: <Rocket className="text-orange-400"/> },
                  { title: "Autonomous Systems", desc: "Robotics stack implementation using ROS 2 and control theory.", icon: <Cpu className="text-teal-400"/> },
                  { title: "Advanced Materials", desc: "Mechanical behavior of 4D printed adaptive structures for space applications.", icon: <Globe className="text-purple-400"/> }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 h-fit">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Projects */}
      <section id="research" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Research & Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                <div className="h-56 overflow-hidden relative">
                  <SafeImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">{project.duration}</span>
                  <h4 className="text-xl font-bold text-white mb-3 leading-snug">{project.title}</h4>
                  <p className="text-sm text-slate-400 mb-6 flex-grow">{project.lab}</p>
                  <ul className="space-y-2 mb-6">
                    {project.points.slice(0, 2).map((p, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-start gap-2 leading-relaxed">
                        <span className="text-blue-500 mt-1">•</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-800">
                    <button className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 group/btn transition-colors">
                      Learn More <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Engineering Tools", items: SKILLS.tools, icon: <Wrench className="text-orange-400" /> },
              { label: "Programming & Stack", items: SKILLS.programming, icon: <Code className="text-green-400" /> },
              { label: "Coursework", items: SKILLS.coursework, icon: <Award className="text-purple-400" /> }
            ].map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-white">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950/50 border border-slate-800 text-slate-400 rounded-lg text-xs hover:border-blue-500/30 hover:text-white transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Life at IITKGP</h2>
            <h3 className="text-4xl font-black text-white">Extracurriculars</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOBBIES.map((hobby, idx) => (
              <div key={idx} className="bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 p-3 group transition-all hover:border-blue-500/20">
                <div className="h-64 rounded-[2rem] overflow-hidden mb-6 relative">
                  <SafeImage src={hobby.image} alt={hobby.title} type="hobby" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 right-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700">
                    {hobby.icon}
                  </div>
                </div>
                <div className="px-6 pb-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{hobby.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <p className="text-slate-500 font-medium tracking-tight">
          &copy; {new Date().getFullYear()} Harsh Vibhor Sharma <span className="text-slate-800 mx-2">|</span> Built with React & Tailwind
        </p>
      </footer>
    </div>
  );
}
