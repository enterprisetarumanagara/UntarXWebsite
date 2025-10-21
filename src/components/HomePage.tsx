import React from 'react';
import { Zap, Tag, Calendar, Heart, Award, Shield } from 'lucide-react';

const AppStoreIcon = () => (
  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.333 12.654c0 2.812-2.288 5.09-5.1 5.09-2.813 0-5.1-2.278-5.1-5.09 0-2.81 2.287-5.09 5.1-5.09 2.812 0 5.1 2.28 5.1 5.09zm-6.286-8.01c.045.524.48 1.913 1.25 3.254.764 1.328 1.764 2.768 3.23 2.768.117 0 .23-.006.342-.014-.094-1.6-.9-3.26-2.1-4.252-1.033-.855-2.265-1.34-3.722-1.756zM12.003 24C10.13 24 8.73 22.513 8.73 20.25c0-1.83 1.05-3.33 2.78-4.315 1.62-.92 3.48-.99 4.61-.99.28 0 .55.003.81.01-3.15 1.5-4.92 4.49-4.92 7.045z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.53,10.76L4.14,0.81C3.41,0.38,2.5,0.84,2.5,1.69v20.62c0,0.85,0.91,1.31,1.64,0.88l17.39-9.95C22.24,12.82,22.24,11.18,21.53,10.76z M5.5,18.31V5.69L14.19,12L5.5,18.31z" />
  </svg>
);

export default function HomePage() {
  const features = [
    {
      icon: <Tag className="w-8 h-8 text-white" />,
      title: "Student Deals",
      description: "Discover exclusive discounts, promotions, and special offers for Untar students from various merchants.",
      color: "from-yellow-500 to-yellow-400"
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Campus Events",
      description: "Stay updated on seminars, competitions, and social activities happening around the Untar campus.",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Mental Health",
      description: "Access resources, counseling, and mental wellness tips to support your campus life and well-being.",
      color: "from-green-500 to-green-400"
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Career Opportunities",
      description: "Get notified about internships, job vacancies, and career fairs exclusively for Untar students.",
      color: "from-pink-500 to-pink-400"
    },
  ];

  return (
    <main>
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { 
            transform: translateX(-50px) translateY(-50px) rotate(0deg);
          }
          33% { 
            transform: translateX(50px) translateY(-100px) rotate(120deg);
          }
          66% { 
            transform: translateX(100px) translateY(50px) rotate(240deg);
          }
        }
        
        @keyframes float2 {
          0%, 100% { 
            transform: translateX(100px) translateY(100px) rotate(0deg);
          }
          33% { 
            transform: translateX(-50px) translateY(50px) rotate(-120deg);
          }
          66% { 
            transform: translateX(-100px) translateY(-50px) rotate(-240deg);
          }
        }
        
        @keyframes float3 {
          0%, 100% { 
            transform: translateX(0px) translateY(150px) rotate(0deg);
          }
          50% { 
            transform: translateX(-150px) translateY(-50px) rotate(180deg);
          }
        }
        
        .animate-float-1 {
          animation: float1 20s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float2 25s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float3 30s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-1"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-3"></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-2 bg-transparent rounded-full text-black-700 text-xl font-medium mb-7 shadow-sm">
              <Zap className="w-5 h-5 mr-2" />
              Exclusively for Univ
            </div>
            <h1 className="text-5xl md:text-6xl font-medium text-black-900 mb-6 leading-tight">
              <span className="text-5xl md:text-6xl font-extrabold text-black-900 mb-6 leading-tight">
                Supercharge
              </span>
              <br />
              Your Campus Life
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              The all-in-one app for Untar students. Connect with peers, manage your schedule, and access exclusive resources to thrive in your university journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center justify-center px-6 py-4 bg-black text-white rounded-xl opacity-50 pointer-events-none cursor-not-allowed shadow-lg"
              >
                <AppStoreIcon />
                <div>
                  <p className="text-xs -mb-1">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.tarumanagaraenterprise.untarx" 
                className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <GooglePlayIcon />
                <div>
                  <p className="text-xs -mb-1">GET IT ON</p>
                  <p className="text-xl font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center mt-10 lg:mt-0">
            {/* iPhone Frame - More Realistic */}
            <div className="relative">
              {/* iPhone Shadow */}
              <div className="absolute inset-0 bg-black rounded-[3.5rem] transform translate-x-2 translate-y-2 opacity-20 blur-lg"></div>
              
              {/* iPhone Body */}
              <div className="relative w-[320px] h-[700px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-[4px] shadow-2xl">
                {/* Screen Bezel */}
                <div className="w-full h-full bg-black rounded-[4rem] p-[2px]">
                  {/* Screen */}
                  <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden">
                    {/* Status Bar Area (transparent for Dynamic Island) */}
                    <div className="absolute inset-x-0 top-0 h-12 bg-transparent z-20"></div>
                    
                    {/* App Content */}
                    <div className="w-full h-full">
                      <img
                        src="iphoneview.png"
                        alt="UntarX App Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Side Buttons */}
                <div className="absolute left-[-2px] top-[120px] w-1 h-8 bg-gray-700 rounded-l-full"></div>
                <div className="absolute left-[-2px] top-[160px] w-1 h-12 bg-gray-700 rounded-l-full"></div>
                <div className="absolute left-[-2px] top-[180px] w-1 h-12 bg-gray-700 rounded-l-full"></div>
                <div className="absolute right-[-2px] top-[140px] w-1 h-16 bg-gray-700 rounded-r-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Everything You Need</h2>
            <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              One App, Endless Possibilities
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              UntarX is packed with features to make your student life easier and more connected.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UntarX Section */}
      <section id="why-untarx" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Built for You</h2>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                The Untar Student's Edge
              </p>
              <p className="mt-4 text-xl text-gray-500">
                We're not just another app. UntarX is built from the ground up with the specific needs of Universitas Tarumanagara students in mind.
              </p>
              <ul className="mt-10 space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white shadow-md">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Exclusive & Secure</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Verified student-only access ensures a safe and relevant community environment.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white shadow-md">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Always Up-to-Date</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Real-time updates from faculties and student organizations, so you never miss an important announcement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <div className="bg-gray-200 p-8 rounded-3xl transform -rotate-2 shadow-xl">
                <div className="bg-white p-8 rounded-2xl transform rotate-3">
                  <img src="untar.jpg " alt="Untar Campus" className="rounded-lg shadow-md" />
                  <p className="mt-6 text-lg font-semibold text-gray-800">"UntarX has become essential for my daily campus routine."</p>
                  <p className="mt-2 text-gray-500">- A Happy Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="bg-purple-500">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Download UntarX today and unlock a smarter, more connected university experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="flex items-center justify-center px-6 py-4 bg-gray-600 text-white rounded-xl pointer-events-none cursor-not-allowed shadow-lg"
              >
                <AppStoreIcon />
                <div>
                  <p className="text-xs -mb-1">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.tarumanagaraenterprise.untarx" className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <GooglePlayIcon />
                <div>
                  <p className="text-xs -mb-1">GET IT ON</p>
                  <p className="text-xl font-semibold">Google Play</p>
                </div>
              </a>
          </div>
        </div>
      </section>
    </main>
  );
}