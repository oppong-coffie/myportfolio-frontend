import React from "react";
import gallery1 from "../images/port (6).jpg";
import gallery2 from "../images/port (3).jpg";
import gallery3 from "../images/port (4).jpg";
import gallery4 from "../images/port (12).jpg";
import gallery5 from "../images/port (23).jpg";
import gallery6 from "../images/port (21).jpg";
import gallery26 from "../images/port (26).jpg";
import gallery28 from "../images/port (28).jpg";
import gallery34 from "../images/port (34).jpg";
import teach from "../images/teach.jpg";
import team1 from "../images/team1.jpg";
import news2 from "../images/news2.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, name: "Coding for Kids", description: "Introducing Programing to kids" },
    { src: gallery2, name: "C4K Mentors", description: "Mentors Sharing ideas" },
    { src: gallery3, name: "Mentoring Mentors", description: "Drawing road map for teaching" },
    { src: gallery4, name: "Photoshop Design", description: "Designing an image before i use in website" },
    { src: gallery5, name: "Computer insight", description: "Teach them how to use the computer effectively" },
    { src: gallery6, name: "Myouhg Forces Basic School", description: "Coding for basic pupil" },
    { src: gallery26, name: "Take it practical", description: "Coding from white board to projection" },
    { src: gallery28, name: "TeachTru Coding", description: "My own clud where i thought basic programing" },
    { src: gallery34, name: "Useful vacation", description: "Making kids use their vacation effectively with coding" },
    { src: teach, name: "No Computer coding", description: "When coding became a habit for kids, they still want to learn on the board and code on paper" },
    { src: team1, name: "Working with the stars", description: "Sharing ideas on the same project help to bring out the best of all projects" },
    { src: news2, name: "Contect Creator", description: "Gather good and resourceful information for the public is essential for community growth" },
  ];

  return (
    <div id="gallery" className="bg-blue-900 py-10 text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Explore my curated collection of moments</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative group rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Background Image */}
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Name */}
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              <p className="text-sm font-semibold">{image.name}</p>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-blue-950 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <p className="text-white text-center px-4">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
