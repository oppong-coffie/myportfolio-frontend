import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinkedinIcon, PhoneCall } from "lucide-react";
import { Input, Textarea, Button } from "@nextui-org/react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="contact" className="mt-10">
      {/* Section Header */}
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
              <PhoneCall size={32} color="white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-500">WhatsApp</h1>
              <p className="text-blue-800 font-bold">+233 246 4141 97</p>
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
              <p className="text-blue-800 font-bold">LinkedIn</p>
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
              <p className="text-blue-800 font-bold">GitHub</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="col-span-2" data-aos="fade-left" data-aos-delay="1200">
          <Input
            className="mb-10"
            type="text"
            label="Name"
            color="secondary"
            data-aos="fade-up"
            data-aos-delay="1300"
          />
          <div className="flex gap-12">
            <Input
              className="mb-10"
              type="email"
              label="Email"
              color="secondary"
              data-aos="fade-up"
              data-aos-delay="1500"
            />
            <Input
              className="mb-10"
              type="phone"
              label="Phone"
              color="secondary"
              data-aos="fade-up"
              data-aos-delay="1700"
            />
          </div>
          <Textarea
            className="mb-5"
            label="Description"
            color="secondary"
            data-aos="fade-up"
            data-aos-delay="1900"
          />
          <Button
            className="p-6"
            color="secondary"
            data-aos="zoom-in"
            data-aos-delay="2100"
          >
            Submit Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
