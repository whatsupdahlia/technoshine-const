import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize2 } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Commercial", "Residential", "Renovation", "Infrastructure"];

  const projects = [
    { id: 1, title: "Skyline Office Tower", category: "Commercial", location: "Downtown Metro", image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80" },
    { id: 2, title: "Oakwood Estate", category: "Residential", location: "Westchester Heights", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
    { id: 3, title: "Central Transit Hub", category: "Infrastructure", location: "City Center", image: "https://images.unsplash.com/photo-1541888081467-3ad061b2cb6e?w=800&q=80" },
    { id: 4, title: "Modern Mall Upgrade", category: "Renovation", location: "South District", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { id: 5, title: "Harbor View Condos", category: "Residential", location: "Bay Area", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { id: 6, title: "Tech Park Campus", category: "Commercial", location: "Silicon Valley", image: "https://images.unsplash.com/photo-1431578500526-0d4512857205?w=800&q=80" },
    { id: 7, title: "Historic Theater Restoration", category: "Renovation", location: "Old Town", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80" },
    { id: 8, title: "City Bridge Extension", category: "Infrastructure", location: "East River", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80" },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
            OUR PORTFOLIO
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-primary mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                className={`font-display uppercase tracking-widest rounded-none ${
                  filter === cat 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-sm bg-card shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t-4 border-transparent group-hover:border-primary transition-colors duration-300">
                    <div className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">{project.title}</h3>
                    <div className="flex items-center text-muted-foreground gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
