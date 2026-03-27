import { motion } from "framer-motion";
import { CheckCircle2, Target, Award, Users, Linkedin, Twitter } from "lucide-react";

export default function About() {
  const values = [
    { icon: <Award className="w-8 h-8" />, title: "Excellence", desc: "We never compromise on the quality of our work or materials." },
    { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "Working closely with clients to bring their exact vision to life." },
    { icon: <Target className="w-8 h-8" />, title: "Integrity", desc: "Honest communication, transparent pricing, and ethical practices." },
  ];

  const team = [
    { name: "Robert Harrison", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
    { name: "Michael Chen", role: "Chief Architect", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    { name: "Sarah Jenkins", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name: "David Rodriguez", role: "Lead Site Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-20 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/blueprint-bg.png)`, backgroundSize: 'cover' }}></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-4"
          >
            ABOUT US
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-primary mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">BUILDING A LEGACY OF EXCELLENCE</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in 1998, BuildCo began with a simple mission: to provide unparalleled construction services built on a foundation of integrity and craftsmanship. Over the past two decades, we have grown from a small local contractor to an industry-leading firm handling multi-million dollar projects.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We believe that every structure we build is a testament to our dedication. Our team of experienced professionals works tirelessly to ensure that every project, regardless of size, receives the highest level of attention and expertise.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Award-winning construction firm",
                  "Fully licensed, bonded, and insured",
                  "Commitment to sustainable building practices",
                  "100% satisfaction guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="text-primary w-6 h-6" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 transform rotate-3 rounded-sm z-0"></div>
              {/* construction team reviewing plans */}
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
                alt="Construction team" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 text-white z-20 shadow-xl hidden md:block">
                <div className="text-5xl font-display font-bold mb-1">25+</div>
                <div className="font-semibold uppercase tracking-wider text-sm">Years of<br/>Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">OUR CORE VALUES</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-10 rounded-sm shadow-md border-b-4 border-transparent hover:border-primary transition-colors text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-muted flex items-center justify-center rounded-full text-secondary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Expert Professionals</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">MEET OUR LEADERSHIP</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm">
                  {/* professional headshots */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <a href="#" className="bg-white text-primary p-2 rounded hover:bg-secondary hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
                      <a href="#" className="bg-white text-primary p-2 rounded hover:bg-secondary hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
                    </div>
                  </div>
                </div>
                <div className="text-center border-b-2 border-transparent group-hover:border-primary pb-4 transition-colors">
                  <h3 className="text-2xl font-display font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold uppercase tracking-wider text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
