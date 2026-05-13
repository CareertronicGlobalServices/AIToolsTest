import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Wedding",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // SEND EMAIL
      await emailjs.send(
        "service_3a3k7xp",
        "template_ubrfknp",
        {
          user_name: formData.name,
          user_email: formData.email,
          event_type: formData.eventType,
          message: formData.message,
        },
        "QAtg5L21GVGUabUjx"
      );

      // WHATSAPP MESSAGE
      const whatsappMessage = `
New Event Inquiry 🎉

Name: ${formData.name}
Email: ${formData.email}
Event Type: ${formData.eventType}

Message:
${formData.message}
      `;

      window.open(
        `https://wa.me/919009776655?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      setSuccessMessage("Message sent successfully!");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        eventType: "Wedding",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-glow"
          >
            Let's Plan Your Event
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
          />

          <p className="text-accent/70 max-w-2xl mx-auto text-lg">
            Ready to make your celebration unforgettable? Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-3xl border border-primary/20 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6 relative z-10">
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-accent/80 mb-2 font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-accent/80 mb-2 font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                {/* EVENT TYPE */}
                <div>
                  <label className="block text-accent/80 mb-2 font-medium">
                    Event Type
                  </label>

                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                  >
                    <option className="bg-background">Wedding</option>
                    <option className="bg-background">Birthday</option>
                    <option className="bg-background">
                      Corporate Event
                    </option>
                    <option className="bg-background">Baby Shower</option>
                    <option className="bg-background">Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-accent/80 mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* SUCCESS MESSAGE */}
                {successMessage && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl">
                    {successMessage}
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-primary to-yellow-600 text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center justify-center text-lg disabled:opacity-60"
                >
                  <Send className="mr-2" size={20} />

                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            {/* ADDRESS */}
            <div className="glass p-8 rounded-3xl flex items-start space-x-6 hover:border-primary/30 transition-colors duration-300">
              <div className="bg-primary/20 p-4 rounded-full">
                <MapPin className="text-primary w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Visit Us
                </h4>

                <p className="text-accent/70 leading-relaxed">
                  Careertronics Global Services
                  <br />
                  Raipur, C.G
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="glass p-8 rounded-3xl flex items-start space-x-6 hover:border-primary/30 transition-colors duration-300">
              <div className="bg-primary/20 p-4 rounded-full">
                <Phone className="text-primary w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Call Us
                </h4>

                <p className="text-accent/70 mb-4">
                  We're available 24/7
                </p>

                <a
                  href="tel:+918461835410"
                  className="text-2xl font-bold text-primary hover:text-white transition-colors"
                >
                  +91 84618 35410
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="glass p-8 rounded-3xl flex items-start space-x-6 hover:border-primary/30 transition-colors duration-300">
              <div className="bg-primary/20 p-4 rounded-full">
                <Mail className="text-primary w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Email Us
                </h4>

                <a
                  href="mailto:sonam.panjwani29@gmail.com"
                  className="text-lg text-primary hover:text-white transition-colors"
                >
                  sonam.panjwani29@gmail.com
                </a>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/918461835410"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center text-lg shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};