import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, MessageCircleMore, PhoneCall, Github } from "lucide-react";
import { Input, Textarea, Button, Spinner } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    emailjs.init("T5HMx10wLGbYc1M3F");
  }, []);

  const sendSms = async () => {
    try {
      await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendme',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
      await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendsms',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error sending SMS:', error.message);
    }
  }

  const sendEmail = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setFeedback("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setFeedback("");

    const params = { name, phone, email, message };
    const serviceID = "service_2whq5dc";
    const templateID = "template_5a8k82b";

    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        setFeedback("Message sent successfully!");
        setLoading(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        sendSms();
      })
      .catch((error) => {
        setFeedback("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Let's connect! Feel free to reach out via email or phone for any inquiries or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 space-y-8"
          >
            {[
              { icon: PhoneCall, title: "Call Me", value: "+233 551 1441 73", link: "tel:+233551144173" },
              { icon: MessageCircleMore, title: "WhatsApp", value: "Chat on WhatsApp", link: "https://wa.me/233551144173?text=hi%20Oppong" },
              { icon: LinkedinIcon, title: "LinkedIn", value: "Connect on LinkedIn", link: "https://www.linkedin.com/in/oppong-coffie-3b8538236" },
              { icon: Github, title: "GitHub", value: "View Projects", link: "https://github.com/oppong-coffie" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-300">{item.title}</h3>
                  <a href={item.link} className="text-white font-medium hover:text-primary transition-colors">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <form onSubmit={sendEmail} className="bg-dark-card p-8 rounded-2xl border border-white/5 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                  type="text"
                  label="Name"
                  variant="bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  classNames={{
                    inputWrapper: "bg-dark border-white/20 group-data-[focus=true]:border-primary",
                    label: "text-gray-400",
                    input: "text-white"
                  }}
                  required
                />
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  classNames={{
                    inputWrapper: "bg-dark border-white/20 group-data-[focus=true]:border-primary",
                    label: "text-gray-400",
                    input: "text-white"
                  }}
                  required
                />
              </div>
              <div className="mb-6">
                <Input
                  type="tel"
                  label="Phone"
                  variant="bordered"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  classNames={{
                    inputWrapper: "bg-dark border-white/20 group-data-[focus=true]:border-primary",
                    label: "text-gray-400",
                    input: "text-white"
                  }}
                />
              </div>
              <div className="mb-8">
                <Textarea
                  label="Message"
                  variant="bordered"
                  minRows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  classNames={{
                    inputWrapper: "bg-dark border-white/20 group-data-[focus=true]:border-primary",
                    label: "text-gray-400",
                    input: "text-white"
                  }}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 bg-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-transform active:scale-95"
                disabled={loading}
              >
                {loading ? <Spinner color="white" /> : "Send Message"}
              </Button>

              {feedback && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-center font-medium ${feedback.includes("successfully") ? "text-green-400" : "text-red-400"
                    }`}
                >
                  {feedback}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
