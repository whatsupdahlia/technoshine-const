import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import companyInfo from "../../data/companyInfo";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
  backgroundImage: "url('https://picsum.photos/seed/construction-hero/1600/900')"
}}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />

      <Container className="relative grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400"
          >
            Residential • Commercial • Institutional
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building.<br />Restoring.<br />Perfecting Spaces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {companyInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button to="/projects">View Projects</Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="text-sm text-slate-400">Experience</p>
              <p className="mt-2 text-3xl font-black">30+ Years</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="text-sm text-slate-400">Focus</p>
              <p className="mt-2 text-3xl font-black">Quality</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 sm:col-span-2">
              <p className="text-sm text-slate-400">What we do</p>
              <p className="mt-2 text-xl font-bold leading-8 text-white">
                Construction, renovation, fit-out, prefabrication, and premium stone finishing.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;