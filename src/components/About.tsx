import { CheckCircle } from 'lucide-react';

function About() {
  const benefits = [
    'Industry-leading technology',
    'Award-winning support team',
    'Trusted by thousands worldwide',
    'Continuous innovation'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Built for Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're committed to delivering exceptional solutions that drive real results.
              Our platform combines cutting-edge technology with intuitive design to help
              you achieve your goals faster and more efficiently.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl font-bold mb-4">10K+</div>
                  <div className="text-2xl">Happy Customers</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-200 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
