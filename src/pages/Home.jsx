import Hero from "../components/Hero";
import img from '../assets/2.jpg';
import img1 from '../assets/1.jpg';
import { CircleDollarSign, HandPlatter, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../../public/img1.jpg";

export default function Home() {
  // Move the testimonials array here, outside the return statement
  const testimonials = [
    {
      names: "Sarah Johnson",
      image: img,
      rating: 5,
      review: "Great service and professional staff. They helped me choose the perfect iPhone and the price was very competitive."
    },
    {
      names: "Michael Chen",
      image: img1,
      rating: 5,
      review: "Excellent repair service! Fixed my iPhone screen in under an hour. Highly recommended!"
    },
    {
      names: "Emma Wilson",
      image: img,
      rating: 5,
      review: "The team at RepairBox is knowledgeable and friendly. Best iPhone service center in town!"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />
      

      {/* Our Mission */}
      <section className="py-16  bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg regular text-gray-600">
              At RepairBox, we're committed to providing our customers with the best iPhone experience possible. 
              From the latest models to expert repairs, we ensure that every customer walks away satisfied with 
              our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Founder</h2>
              <p className="text-gray-600 regular mb-4">
                John Smith started RepairBox with a vision to create a one-stop destination for all iPhone needs. 
                With over 15 years of experience in mobile technology, John has built a team of experts who share 
                his passion for quality and customer service.
              </p>
              <p className="regular text-gray-600">
                Under his leadership, RepairBox has grown from a small repair shop to a comprehensive iPhone 
                service center, serving thousands of satisfied customers.
              </p>
            </div>
            <div className=" h-96 rounded-lg">
            <img
            className="rounded-lg w-[100%] h-auto"
            src={img}
            alt="Album"
          />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold regular">{testimonial.names}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 regular">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



       {/* CTA Section */}
       {/* <div className="w-full text-black ">
        <section className=" md:py-20 px-20 md:mb-10 section-padding">
        <div className="container-custom  mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-10">
              <h2 className="mb-4 text-2xl font-bold">Ready to Find Your Dream Car?</h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Browse our extensive collection of premium vehicles or contact our team for personalized assistance.
              </p>
            </div>
            <div className="flex  flex-col flex-wrap gap-4">
              <Link
                href="/vehicles"
                className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white  hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
        </div> */}

      


        {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Expert Staff', desc: 'Highly trained professionals', icon:UsersRound },
              { title: 'Quality Products', desc: 'Genuine Apple products',icon:ShieldCheck },
              { title: 'Fast Service', desc: 'Quick turnaround time',icon:HandPlatter },
              { title: 'Best Prices', desc: 'Competitive pricing',icon:CircleDollarSign },
            ].map((item, i) => (
              <div key={i} className="text-center regular">
                <div className="h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon && <item.icon className="h-12 w-20 text-white mx-auto " />}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* --- section start --- */}
       <div className="md:mt-10 md:mb-10  py-3 mb-3  md:py-0">
      <div className="w-full">
        <img src={image} alt="" className="rounded-lg w-full" />
      </div>
      </div>
      {/* --- section end --- */}

        
    </div>
  );
}