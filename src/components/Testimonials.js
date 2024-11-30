import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <section className="testimonials py-20 bg-blue-900 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8">What People Are Saying</h2>
    
    <div className="space-y-8">
      {/* Testimonial 1 */}
      <div className="testimonial bg-white text-blue-900 shadow-xl rounded-lg p-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/150?img=1" // Replace with the reviewer's avatar URL
            alt="John Doe"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg italic">"This developer exceeded all expectations. The project was delivered on time and with exceptional quality!"</p>
            <p className="font-semibold mt-4">John Doe, CEO of TechX</p>
          </div>
        </div>
      </div>
      
      {/* Testimonial 2 */}
      <div className="testimonial bg-white text-blue-900 shadow-xl rounded-lg p-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/150?img=2" // Replace with the reviewer's avatar URL
            alt="Jane Smith"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg italic">"A professional who understands both the technical and creative aspects of web development. Highly recommended!"</p>
            <p className="font-semibold mt-4">Jane Smith, Project Manager at Innovate</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="testimonial bg-white text-blue-900 shadow-xl rounded-lg p-8">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/150?img=3" // Replace with the reviewer's avatar URL
            alt="David Williams"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg italic">"Excellent communication and technical skills. It was a pleasure working with this developer on our new website."</p>
            <p className="font-semibold mt-4">David Williams, Founder of DevCo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        
    </div>
  )
}

export default Testimonials