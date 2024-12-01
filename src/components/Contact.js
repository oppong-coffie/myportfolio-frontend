import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinkedinIcon, PhoneCall, Github } from "lucide-react";
import { Input, Textarea, Button } from "@nextui-org/react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="contact" className="mt-10 bg-gray-50 py-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1
          className="text-white p-3 font-bold bg-violet-900 w-44 mx-auto rounded text-2xl"
          data-aos="fade-up"
        >
          Contact Me
        </h1>
        <p
          className="text-slate-500 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let's connect! Feel free to reach out via email or phone for any
          inquiries or collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 lg:px-32">
        {/* Contact Options */}
        <div className="col-span-1 space-y-8">
          {[
            {
              icon: <PhoneCall size={32} color="white" />,
              title: "Call Me",
              value: "+233 246 4141 97",
            },
            {
              icon: <PhoneCall size={32} color="white" />,
              title: "WhatsApp",
              value: "+233 246 4141 97",
            },
            {
              icon: <LinkedinIcon size={32} color="white" />,
              title: "LinkedIn",
              value: "LinkedIn Profile",
            },
       
          ].map(({ icon, title, value }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-white hover:bg-violet-900 hover:shadow-2xl transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay={idx * 200}
            >
              <div className="bg-violet-900 p-3 rounded-lg flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h1 className="font-bold text-slate-600 hover:text-white">
                  {title}
                </h1>
                <p className="text-blue-800 font-semibold hover:text-white">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          className="col-span-2 space-y-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Input
            className="mb-4"
            type="text"
            label="Name"
            color="secondary"
            placeholder="Your Full Name"
          />
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              type="email"
              label="Email"
              color="secondary"
              placeholder="example@email.com"
            />
            <Input
              type="phone"
              label="Phone"
              color="secondary"
              placeholder="+233 123 456 789"
            />
          </div>
          <Textarea
            label="Message"
            color="secondary"
            placeholder="Write your message here..."
          />
          <Button
            className="w-full lg:w-auto px-10 py-3"
            color="secondary"
            rounded
            data-aos="zoom-in"
          >
            Submit Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
