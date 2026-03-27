import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const submitContactMutation = useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive",
        });
        console.error("Contact submit error:", error);
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContactMutation.mutate({ data: values });
  }

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
            CONTACT US
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-primary mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Get In Touch</span>
                <h2 className="text-4xl font-display font-bold text-foreground mb-6">WE'D LOVE TO HEAR FROM YOU</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you have a question about our services, need a quote for an upcoming project, or want to discuss a partnership, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-sm">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Office Location</h4>
                    <p className="text-muted-foreground">123 Industrial Ave, Suite 400<br/>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-sm">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Phone Number</h4>
                    <p className="text-muted-foreground">(555) 123-4567<br/>(555) 987-6543 (Toll Free)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-sm">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Email Address</h4>
                    <p className="text-muted-foreground">info@buildco.example.com<br/>careers@buildco.example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-sm">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-card border-t-8 border-primary p-8 md:p-12 shadow-xl rounded-sm">
                <h3 className="text-3xl font-display font-bold mb-8">REQUEST A QUOTE</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-foreground/80">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background border-border focus:border-primary rounded-sm h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-foreground/80">Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="bg-background border-border focus:border-primary rounded-sm h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-foreground/80">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" className="bg-background border-border focus:border-primary rounded-sm h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-foreground/80">Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background border-border focus:border-primary rounded-sm h-12">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="residential">Residential Construction</SelectItem>
                                <SelectItem value="commercial">Commercial Construction</SelectItem>
                                <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                                <SelectItem value="management">Project Management</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-foreground/80">Your Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="bg-background border-border focus:border-primary rounded-sm min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-display uppercase tracking-widest text-lg h-14 bg-primary hover:bg-primary/90 text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all flex items-center justify-center gap-2"
                      disabled={submitContactMutation.isPending}
                    >
                      {submitContactMutation.isPending ? "Sending..." : "Send Message"} 
                      {!submitContactMutation.isPending && <Send className="w-5 h-5" />}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
