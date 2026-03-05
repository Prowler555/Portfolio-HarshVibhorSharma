import React from 'react';
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
  Cpu,
  Globe,
  Flame,
  User
} from 'lucide-react';

// --- Data Constants ---

const PERSONAL_INFO = {
  name: "Harsh Vibhor Sharma",
  title: "Undergraduate Researcher | B.Tech in Manufacturing Science & Engineering",
  institution: "IIT Kharagpur",
  tagline: "Specializing in High-Speed Propulsion, Autonomous Robotics, and Adaptive Materials.",
  email: "mailto:your.email@iitkgp.ac.in",
  location: "Kharagpur, West Bengal, India",
  // NOTE: The live preview requires a web URL. 
  // When hosting locally, change this back to: "profile.jpeg"
  profileImage: "profile.jpeg"
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
    degree: "AISSCE (12th Grade) | AISSE (10th Grade)",
    duration: "2021 - 2023",
    score: "90.4% | 95.6%"
  }
];

const RESEARCH_INTERESTS = [
  {
    title: "Aerospace Propulsion",
    desc: "Focusing on Scramjet instrumentation, supersonic combustion, and Rotating Detonation Engines (RDEs).",
    icon: <Rocket className="text-orange-500" />
  },
  {
    title: "Autonomous Robotics",
    desc: "Stack implementation with ROS 2, Pure Pursuit navigation, and multi-DOF motion platforms.",
    icon: <Cpu className="text-teal-500" />
  },
  {
    title: "Computational Fluid Dynamics",
    desc: "Shock-boundary layer interactions and fuel mixing dynamics in ANSYS Fluent.",
    icon: <Settings className="text-blue-500" />
  }
];

const PROJECTS = [
  {
    title: "Scramjet Test Rig Instrumentation",
    lab: "Advanced Propulsion Systems Lab",
    duration: "Dec 2024 - Apr 2025",
    points: [
      "CFD simulations of dual scramjet combustion chambers in ANSYS Fluent.",
      "Engineered PyQt6 interface for automated 5-channel valve actuation via ESP32."
    ],
    icon: <Flame size={20} />,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Research on Coking Phenomena",
    lab: "Mechanical Engineering Department",
    duration: "Oct 2024 - Present",
    points: [
      "Investigated thermal degradation and coking mechanisms in hydrocarbon fuels under high temperatures.",
      "Conducted CFD and kinetic modeling to analyze the rate of coke formation and heat transfer impact.",
      "Formulated predictive models to optimize fuel composition and operating parameters."
    ],
    icon: <Settings size={20} />,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "3D Structure Design for Space",
    lab: "Metallurgy & Material Science Dept",
    duration: "Jul 2024 - Oct 2024",
    points: [
      "Simulated tensile loading (50N) on dogbone and origami CAD models to evaluate failure modes.",
      "Optimized strength-to-weight ratios using 3D-printed infill patterns (honeycomb, gyroid).",
      "Modeled PLA, TPU, and 4D materials in COMSOL Multiphysics for adaptive shape transformation."
    ],
    icon: <Globe size={20} />,
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ABENICS: Active Ball Joint Mechanism",
    lab: "Kharagpur Learning, Imaging and Visualization",
    duration: "Feb 2025 - Apr 2025",
    points: [
      "Designed a 3-DOF motion platform with NEMA 17 motors and custom gears.",
      "Optimized torque-speed ratios for ±30° pitch/roll and 1mm repeatability."
    ],
    icon: <Settings size={20} />,
    // When hosting locally, change this back to: "abenics.jpg"
    image: "abenics.jpg" 
  },
  {
    title: "F1tenth Simulation",
    lab: "Autonomous Ground Vehicle Group",
    duration: "Aug 2024 - Sep 2024",
    points: [
      "Implemented ROS 2 navigation stack with Pure Pursuit path tracking.",
      "Achieved <0.5s waypoint latency over 100+ simulated routes."
    ],
    icon: <Code size={20} />,
    // When hosting locally, change this back to: "f1tenth.jpg"
    image: "f1tenth.png"
  }
];

const HOBBIES = [
  {
    title: "Swimming and Water Polo",
    icon: <Droplet size={24} />,
    description: "Silver and Bronze medals at the 2025 Invitation Championship and the 2025 Inter Hall Sports Championship.",
    // When hosting locally, change this back to: "swimming.jpeg"
    image: "swimming.jpeg"
  },
  {
    title: "Drums & Percussion",
    icon: <Music size={24} />,
    description: "3rd Place in Open IIT Instrumentals 2024 (Drumming).",
    // When hosting locally, change this back to: "drumming.jpeg"
    image: "drumming.jpeg"
  },
  {
    title: "Street Play (Dramatics)",
    icon: <VenetianMask size={24} />,
    description: "4th position in Inter-Hall Street Play Competition 2025.",
    image: "https://images.unsplash.com/photo-1507676184212-d0330a151f96?auto=format&fit=crop&q=80&w=800"
  }
];

// --- Sub-components ---

const SafeImage = ({ src, alt, className }) => {
  return (
    <div className={`relative overflow-hidden bg-slate-900 flex items-center justify-center ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-black text-xl tracking-tighter italic">HVS<span className="text-blue-500">.</span></span>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#hobbies" className="hover:text-blue-400 transition-colors">Beyond</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8">
              <MapPin size={12}/> {PERSONAL_INFO.location}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
              HARSH <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">SHARMA</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 font-light max-w-lg leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-2xl shadow-blue-500/20">
                Explore Work
              </a>
              <a href={PERSONAL_INFO.email} className="px-10 py-4 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold transition-all">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <SafeImage 
                src={PERSONAL_INFO.profileImage} 
                alt="Profile" 
                fallbackType="profile"
                className="w-72 h-96 md:w-80 md:h-[28rem] rounded-[2.5rem] border border-slate-800 shadow-2xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="about" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-4">The Focus</h2>
              <h3 className="text-3xl font-bold text-white mb-6">Research Interests</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Driven by the mechanics of high-speed flow and autonomous navigation, I aim to bridge the gap between complex engineering simulations and real-world hardware.
              </p>
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="text-white font-bold mb-4">Education</h4>
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <p className="text-blue-400 text-xs font-bold">{edu.duration}</p>
                    <p className="text-white text-sm font-bold">{edu.institution}</p>
                    <p className="text-slate-500 text-xs">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {RESEARCH_INTERESTS.map((interest, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="mb-6 p-3 w-fit rounded-2xl bg-slate-900 border border-slate-800">
                      {interest.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{interest.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{interest.desc}</p>
                  </div>
                </div>
              ))}
              <div className="p-8 rounded-3xl bg-blue-600 flex items-center justify-center text-center group cursor-pointer shadow-xl shadow-blue-600/20">
                <div>
                  <Award className="mx-auto mb-4 text-white group-hover:scale-125 transition-transform" size={48} />
                  <p className="text-white font-black text-lg">Download CV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-4">Portfolio</h2>
              <h3 className="text-4xl font-bold text-white">Engineering Projects</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-slate-950 rounded-[2rem] border border-slate-800 overflow-hidden hover:border-blue-500/20 transition-all">
                <SafeImage src={project.image} alt={project.title} className="h-64" />
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-slate-900 text-blue-400">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{project.duration}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-xs text-blue-400 font-bold mb-6">{project.lab}</p>
                  <ul className="space-y-2">
                    {project.points.map((p, i) => (
                      <li key={i} className="text-xs text-slate-500 leading-relaxed">• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies / Extra */}
      <section id="hobbies" className="py-24 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-4">Beyond</h2>
            <h3 className="text-4xl font-bold text-white">Extracurricular Highlights</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOBBIES.map((hobby, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-slate-950 border border-slate-800">
                <SafeImage src={hobby.image} alt={hobby.title} className="h-[28rem] opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-600 text-white">
                      {hobby.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white">{hobby.title}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">
          © {new Date().getFullYear()} Harsh Vibhor Sharma | IIT Kharagpur
        </p>
      </footer>
    </div>
  );
}