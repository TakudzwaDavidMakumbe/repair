import img from '../../public/2.jpg'
export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl  text-center bold mb-12">About RepairBox</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 regular mb-4">
              Founded in 2010, RepairBox has grown from a small repair shop to become one of the leading iPhone retailers and repair centers. Our journey has been driven by our passion for technology and commitment to customer satisfaction.
            </p>
            <p className="text-gray-600 regular">
              We pride ourselves on providing expert advice, quality products, and reliable repair services to thousands of satisfied customers.
            </p>
          </div>
          <div className="">
            <img src={img} alt="image" className='w-[80%]' />
          </div>
        </div>

        <div className="mb-16 ">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality', desc: 'We never compromise on the quality of our products and services' },
              { title: 'Integrity', desc: 'Honest advice and transparent pricing in everything we do' },
              { title: 'Innovation', desc: 'Staying ahead with the latest technology and repair techniques' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl regular font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 regular">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-600 regular mb-8">
            Our team consists of certified technicians, experienced sales professionals, and dedicated customer service representatives, all working together to provide you with the best possible experience.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h4 className="font-semibold">Team Member {i}</h4>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}