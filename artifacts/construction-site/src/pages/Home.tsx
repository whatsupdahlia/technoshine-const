import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Hammer, Home as HomeIcon, ClipboardCheck, Ruler, Paintbrush, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Expert Team" },
  ];

  const services = [
    { icon: <HomeIcon className="w-10 h-10" />, title: "Residential", desc: "Custom home building and extensions tailored to your family's lifestyle." },
    { icon: <Building2 className="w-10 h-10" />, title: "Commercial", desc: "State-of-the-art commercial facilities delivered on time and on budget." },
    { icon: <Hammer className="w-10 h-10" />, title: "Renovation", desc: "Complete remodeling services to breathe new life into existing structures." },
    { icon: <ClipboardCheck className="w-10 h-10" />, title: "Project Management", desc: "End-to-end oversight ensuring quality, safety, and efficiency." },
    { icon: <Ruler className="w-10 h-10" />, title: "Architecture", desc: "Innovative design solutions bridging functionality and striking aesthetics." },
    { icon: <Paintbrush className="w-10 h-10" />, title: "Interior Finishing", desc: "Premium quality finishing touches that make a space truly yours." },
  ];

  const featuredProjects = [
    { id: 1, title: "Skyline Office Tower", category: "Commercial", location: "Downtown Metro", image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80" },
    { id: 2, title: "Oakwood Estate", category: "Residential", location: "Westchester Heights", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
    { id: 3, title: "Central Transit Hub", category: "Infrastructure", location: "City Center", image: "https://images.unsplash.com/photo-1541888081467-3ad061b2cb6e?w=800&q=80" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* hero construction worker sunset */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pixabay.com/get/g5622abfb6e8896e80dd886f48cbdde818f18646387782cef68761b3034bcd4054e7b7eaa3865f6ede15c408e44679f3723fef6eda2a565254c01669b5a01b441_1280.jpg" 
            alt="Construction site at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="h-1 w-12 bg-primary block"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Industry Leaders Since 1998</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
              BUILDING YOUR VISION, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">BRICK BY BRICK</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              We deliver exceptional construction and project management services with an unwavering commitment to quality, safety, and client satisfaction.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-display uppercase tracking-widest text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] transition-all">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-display uppercase tracking-widest text-lg h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-secondary rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] transition-all bg-transparent">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-12 relative z-20 -mt-12 mx-4 md:mx-12 lg:mx-24 shadow-2xl rounded-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x-2 divide-white/20">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-semibold uppercase tracking-wider text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">EXPERT CONSTRUCTION SERVICES</h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-6"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-none bg-card hover:-translate-y-2 h-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 bg-muted inline-block rounded-none text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href="/services" className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/blueprint-bg.png)`, backgroundSize: 'cover' }}></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">FEATURED PROJECTS</h2>
            </div>
            <Button asChild variant="outline" className="font-display uppercase tracking-widest border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-none bg-transparent">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative border-b-8 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary p-12 md:p-16 rounded-none relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            {/* abstract texture over primary color */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/blueprint-bg.png)`, backgroundSize: 'cover' }}></div>
            
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">READY TO START YOUR NEXT PROJECT?</h2>
              <p className="text-white/90 text-lg">Contact our experts today for a comprehensive consultation and free estimate.</p>
            </div>
            
            <Button asChild size="lg" className="relative z-10 bg-secondary hover:bg-secondary/90 text-white font-display uppercase tracking-widest h-16 px-10 text-lg rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all whitespace-nowrap">
              <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
