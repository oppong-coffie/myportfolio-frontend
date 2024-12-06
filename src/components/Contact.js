import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinkedinIcon, MessageCircleMore, PhoneCall } from "lucide-react";
import { Input, Textarea, Button, Spinner } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // For loading state
  const [feedback, setFeedback] = useState(""); // For feedback message

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    emailjs.init("T5HMx10wLGbYc1M3F"); // Initialize EmailJS here
  }, []);

  const sendSms = async () => {
    try {
      // Sending the  SMS to me
      const firstSmsResponse = await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendme',
      { name, phone },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      console.log('First SMS sent successfully:', firstSmsResponse.data);
  
      // Sending the SMS the client
      const secondSmsResponse = await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendsms',
      { name, phone },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
      console.log('Second SMS sent successfully:', secondSmsResponse.data);
    } catch (error) {
      console.error('Error sending SMS:', error.message);
    }
  }
  

  const sendEmail = (event) => {
    event.preventDefault();

    // Simple validation
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
      .then((response) => {
        setFeedback("Email sent successfully!");
        setLoading(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setFeedback("Failed to send email. Please try again.");
        console.error("EmailJS error:", error);
        setLoading(false);
      });

      // call the sms function
      sendSms();
  };

  return (
    <div id="contact" className="mt-10">
      <div className="flex justify-center">
        <h1
          className="text-white p-2 font-bold bg-violet-900 w-44 rounded text-center text-2xl"
          data-aos="fade-up"
        >
          Contact Me
        </h1>
      </div>
      <h1
        className="text-center font-semibold text-slate-400 py-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Let's connect! Feel free to reach out via email or phone for any
        inquiries or collaborations.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-64 gap-10">
          {/* Contact Details */}
          <div className="col-span-1" data-aos="fade-right" data-aos-delay="300">
          <div
            className="flex gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-violet-900 p-3 rounded-lg shadow-xl">
              <PhoneCall size={32} color="white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-500">Call me</h1>
              <p className="text-blue-800 font-bold">+233 246 4141 97</p>
            </div>
          </div>
          <div
            className="flex gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-violet-900 p-3 rounded-lg shadow-xl">
              <MessageCircleMore size={32} color="white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-500">WhatsApp</h1>
              <a href="https://wa.me/0246414197?text=hi Oppong" className="text-blue-800 font-bold">+233 246 4141 97</a>
            </div>
          </div>
          <div
            className="flex gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="bg-violet-900 p-3 rounded-lg shadow-xl">
              <LinkedinIcon size={32} color="white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-500">Linkedin</h1>
              <a href="https://www.linkedin.com/feed/" className="text-blue-800 font-bold">LinkedIn</a>
            </div>
          </div>
          <div
            className="flex gap-4"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="bg-violet-900 p-3 rounded-lg shadow-xl">
              <PhoneCall size={32} color="white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-500">GitHub</h1>
              <a href="https://github.com/" className="text-blue-800 font-bold">GitHub</a>
            </div>
          </div>

         

        </div>

        <form
          className="col-span-2"
          data-aos="fade-left"
          data-aos-delay="1200"
          onSubmit={sendEmail}
        >
          <Input
            className="mb-10"
            type="text"
            label="Name"
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="flex gap-12">
            <Input
              className="mb-10"
              type="email"
              label="Email"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              className="mb-10"
              type="phone"
              label="Phone"
              color="secondary"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Textarea
            className="mb-5"
            label="Message"
            color="secondary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button
            className="p-6"
            color="secondary"
            data-aos="zoom-in"
            data-aos-delay="2100"
            type="submit"
            disabled={loading} // Disable while loading
          >
            {loading ? <Spinner /> : "Submit Message"}
          </Button>
          {feedback && (
            <p
              className={`mt-4 text-center ${
                feedback.includes("successfully") ? "text-green-500" : "text-red-500"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
