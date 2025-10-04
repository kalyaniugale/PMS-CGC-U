import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Users, Target, Award, Building, Calendar, BarChart3, ChevronDown, Sparkles, Rocket, TargetIcon, Zap } from "lucide-react";
import collegeLogo from "../assets/cgc logo.png";
import "./about.css";

function About() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState({ students: 0, companies: 0, rate: 0 });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
    setIsVisible(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    let students = 0;
    let companies = 0;
    let rate = 0;
    
    const studentInterval = setInterval(() => {
      students += 25;
      if (students >= 1000) {
        students = 1000;
        clearInterval(studentInterval);
      }
      setAnimatedStats(prev => ({ ...prev, students }));
    }, 10);

    const companyInterval = setInterval(() => {
      companies += 5;
      if (companies >= 200) {
        companies = 200;
        clearInterval(companyInterval);
      }
      setAnimatedStats(prev => ({ ...prev, companies }));
    }, 20);

    const rateInterval = setInterval(() => {
      rate += 1;
      if (rate >= 95) {
        rate = 95;
        clearInterval(rateInterval);
      }
      setAnimatedStats(prev => ({ ...prev, rate }));
    }, 15);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const features = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Personalized Student Profiles",
      description: "Comprehensive profile management and career tracking for every student",
      color: "from-blue-500 to-cyan-500",
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Centralized Job Management",
      description: "Streamlined job postings and application management system",
      color: "from-purple-500 to-pink-500",
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)"
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Automated Scheduling",
      description: "Smart interview and test scheduling with automated notifications",
      color: "from-green-500 to-emerald-500",
      gradient: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Real-time Analytics",
      description: "Comprehensive placement insights and performance tracking",
      color: "from-orange-500 to-red-500",
      gradient: "linear-gradient(135deg, #F59E0B, #EF4444)"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Dedicated Support Team",
      description: "Professional DCPD trainers and placement support specialists",
      color: "from-indigo-500 to-blue-500",
      gradient: "linear-gradient(135deg, #6366F1, #3B82F6)"
    },
    {
      icon: <Building className="w-7 h-7" />,
      title: "Industry Connections",
      description: "Strong partnerships with leading companies and recruiters",
      color: "from-yellow-500 to-orange-500",
      gradient: "linear-gradient(135deg, #EAB308, #F59E0B)"
    }
  ];

  const stats = [
    { number: `${animatedStats.students}+`, label: "Students Placed", color: "text-blue-600 dark:text-blue-400", icon: <Users className="w-6 h-6" /> },
    { number: `${animatedStats.companies}+`, label: "Partner Companies", color: "text-purple-600 dark:text-purple-400", icon: <Building className="w-6 h-6" /> },
    { number: `${animatedStats.rate}%`, label: "Placement Rate", color: "text-green-600 dark:text-green-400", icon: <TargetIcon className="w-6 h-6" /> }
  ];

  return (
    <div className={`about-bg ${isDark ? 'dark' : 'light'}`}>
      
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-grid-white' : 'bg-grid-gray-900'}`}></div>
        
        {/* Animated Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`particle ${isDark ? 'particle-dark' : 'particle-light'}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-7xl">
        {/* Enhanced Animated Header Section */}
        <div className={`about-header ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-12 flex justify-center mt-12">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              
              {/* Logo Container */}
              <div 
                className={`relative w-48 h-48 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 
                          group-hover:ring-4 group-hover:ring-opacity-50
                          ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 group-hover:ring-blue-500' : 'bg-gradient-to-br from-white to-gray-100 group-hover:ring-purple-500'}`}
              >
                {/* Animated Border */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className={`relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center shadow-inner ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                  <img
                    src={collegeLogo}
                    alt="College Logo"
                    className="about-logo transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating Icon */}
                <div className={`absolute -top-2 -right-2 p-3 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white' : 'bg-gradient-to-r from-red-500 to-purple-500 text-white'}`}>
                  <Rocket className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Title Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border transition-colors duration-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/50 dark:border-blue-500/30">
              <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">DCPD CAMPUS PORTAL</span>
            </div>
            
            <h1 
              className={`text-6xl md:text-8xl font-black mb-6 transition-colors duration-500 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}
            >
              About Us
            </h1>
            
            <p className={`text-2xl md:text-3xl font-light mb-8 transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Empowering Future <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Leaders</span>
            </p>
          </div>
          
          <div className={`about-button inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-gray-300 hover:border-blue-500' : 'bg-gradient-to-r from-white to-gray-100 border-gray-200 text-gray-700 hover:border-purple-500'}`}>
            <span className="font-semibold">Discover More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>

        {/* Enhanced Main Content Card */}
        <div 
          className={`about-container rounded-3xl shadow-2xl p-8 md:p-16 mb-20 backdrop-blur-xl transition-all duration-500 border ${isDark ? 'bg-gray-900/80 border-gray-700/50 text-gray-200' : 'bg-white/80 border-gray-200/50 text-gray-800'}`}
        >
          {/* Floating Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          
          <div className="about-content relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 
                className={`text-4xl md:text-5xl font-bold leading-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                Department of Career Planning & Development
                <div className={`text-2xl md:text-3xl font-semibold mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>
                  (DCPD)
                </div>
              </h2>
            </div>
            
            <p className={`text-xl leading-relaxed mb-12 transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong className={`font-bold text-2xl transition-colors duration-500 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                DCPD at CGC Jhanjeri
              </strong>{" "}
              is dedicated to empowering students with the skills, guidance, and opportunities needed for successful careers. Our Campus Recruitment Portal is a specialized platform designed for the DCPD department to streamline campus placements.
            </p>
          </div>

          {/* Enhanced Features Grid with Hover Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`about-feature group relative p-8 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  isDark 
                    ? 'bg-gray-800/60 border border-gray-700/50' 
                    : 'bg-white/60 border border-gray-200/50'
                } ${
                  activeFeature === index 
                    ? 'ring-2 ring-opacity-50 ring-blue-500 transform scale-105' 
                    : ''
                }`}
              >
                {/* Animated Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: feature.gradient }}
                ></div>
                
                {/* Enhanced Icon Container */}
                <div 
                  className={`relative mb-6 p-4 rounded-2xl w-fit bg-gradient-to-r ${feature.color} text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {feature.icon}
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-transparent opacity-20 blur-sm"></div>
                </div>
                
                <h3 className={`relative text-2xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`relative text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                
                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`}></div>
              </div>
            ))}
          </div>

          {/* Enhanced Commitment Section */}
          <div 
            className={`about-feature relative p-12 rounded-3xl text-center shadow-2xl transition-colors duration-500 overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50' 
                : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200/50'
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <div className="relative">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
              <p className={`text-2xl font-medium leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                At DCPD, CGC Jhanjeri, we are committed to{" "}
                <span className={`font-bold transition-colors duration-500 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
                  nurturing talent
                </span>,{" "}
                <span className={`font-bold transition-colors duration-500 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}>
                  fostering industry partnerships
                </span>, and ensuring every student is{" "}
                <span className={`font-bold transition-colors duration-500 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent`}>
                  prepared for the professional world
                </span>.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section with Animation */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`about-placed group relative text-center p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50'
              }`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color.replace('text-', 'bg-')} bg-opacity-10`}>
                    {stat.icon}
                  </div>
                </div>
                
                <div 
                  className={`about-placed text-6xl md:text-7xl font-black mb-4 transition-all duration-300 ${stat.color}`}
                >
                  {stat.number}
                </div>
                <p className={`about-placed text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {stat.label}
                </p>
              </div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm group-hover:blur-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;