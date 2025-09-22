import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Mail, Phone, Instagram, Calendar, Users, School, DollarSign, Star, Award, BookOpen, Target, CreditCard, TrendingUp, Gift, ArrowRight, Sparkles, Zap, Brain, Globe, Shield, Leaf, Hand } from 'lucide-react';
import Ethan from "../assets/team/Ethan.png"; // 430 x 430 pixels on ps
import Yinny from '../assets/team/Vinny.jpg';

const YCFWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqData = [
    {
      question: "Who can join?",
      answer: "LAUSD middle school students are welcome to participate in our program."
    },
    {
      question: "Does it cost anything?",
      answer: "No, our program is completely free for all participating students."
    },
    {
      question: "How long are sessions?",
      answer: "Each session is 1 hour long, once per week for 5 consecutive weeks."
    },
    {
      question: "Who runs the program?",
      answer: "The program is run by dedicated Loyola High School students: Vinny Pendley, Charlie Vick, and Ethan Youn."
    },
    {
      question: "When do sessions typically run?",
      answer: "Sessions usually run on Fridays after school, but we can accommodate other times based on school schedules."
    }
  ];

  const weeklyProgram = [
    {
      week: 1,
      title: "Money Fundamentals",
      description: "Master the art of saving vs spending with interactive challenges",
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-green-500",
      lightColor: "bg-green-100",
      textColor: "text-green-700"
    },
    {
      week: 2,
      title: "Smart Budgeting",
      description: "Create personalized budgets and set achievable financial goals",
      icon: <Target className="w-8 h-8" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-700"
    },
    {
      week: 3,
      title: "Banking Basics",
      description: "Navigate credit, debt, and banking like a financial pro",
      icon: <CreditCard className="w-8 h-8" />,
      color: "bg-orange-500",
      lightColor: "bg-orange-100",
      textColor: "text-orange-700"
    },
    {
      week: 4,
      title: "Investment Power",
      description: "Unlock the secrets of growing wealth through smart investing",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-teal-500",
      lightColor: "bg-teal-100",
      textColor: "text-teal-700"
    },
    {
      week: 5,
      title: "Financial Mastery",
      description: "Epic Kahoot finale + celebrate your journey to financial freedom",
      icon: <Gift className="w-8 h-8" />,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-100",
      textColor: "text-yellow-700"
    }
  ];

  const schoolsImpacted = [
    {
      img: "", 
      schoolName: "Paul Revere Charter Middle School", 
      desc: "Lots of fun learning"
    },
    {
      img: "", 
      schoolName: "St Thomas Apostle School", 
      desc: "Upcoming..."
    }
  ]

  const team = [
    { name: "Vinny Pendley", role: "Loyola HS Student, Program Leader", color: "none", img: Yinny },
    { name: "Charlie Vick", role: "Loyola HS Student, Financial Educator", color: "none", img: Yinny },
    { name: "Ethan Youn", role: "Loyola HS Student, Curriculum Designer", color: "bg-blue-500", img: Ethan }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50 border-b-4 border-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center shadow-lg">
                  <Hand className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Leaf className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-navy-blue">
                  Youth Capital & Finance
                </span>
                <div className="text-xs text-teal-600 font-semibold">Financial Literacy Games!</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              {['Home', 'Program', 'Impact', 'Availability', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="px-4 py-2 rounded-full text-sm font-bold text-navy-blue hover:text-white hover:bg-teal-500 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-teal-100" />
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s'}} />
          <div className="absolute top-40 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-teal-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-20 right-16 w-14 h-14 bg-blue-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight pt-10">
            <span className="text-navy-blue text-4xl md:text-6xl">
                <span className="text-navy-blue">Teaching </span>
                <span className="text-orange-500">FINANCIAL </span>
                <span className="text-teal-600">LITERACY </span>
            </span>
            <div className='text-4xl text-navy-blue pb-6'>to LAUSD students in</div>
            <span className="block text-green-600 text-7xl md:text-9xl drop-shadow-lg">
              5 WEEKS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-semibold">
            <span className="text-teal-600 font-black">Youth Capital & Finance (YCF)</span> transforms middle schoolers into money masters through games, gift cards, and candy rewards!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('program')}
              className="group relative px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Program</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span>Sign Up Today!</span>
              </span>
            </button>
          </div>
          
          <div className="flex justify-center mb-16">
            <a
              href="https://www.instagram.com/youthcapitalfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-2xl font-bold text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Instagram className="w-6 h-6" />
              <span>@youthcapitalfinance</span>
            </a>
          </div>
          
          {/* Hero Visual - Fun Illustration Style */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-4 border-teal-500 shadow-2xl">
              <div className="text-center text-gray-600 text-lg mb-8 font-bold">What Students Get:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-3 transform hover:rotate-12 transition-all cursor-pointer shadow-lg">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-bold text-green-700">Financial Games</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 transform hover:rotate-12 transition-all cursor-pointer shadow-lg">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-bold text-orange-700">Gift Cards</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 transform hover:rotate-12 transition-all cursor-pointer shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-bold text-teal-700">Candy Rewards</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 transform hover:rotate-12 transition-all cursor-pointer shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-bold text-blue-700">Smart Learning</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-block bg-yellow-400 text-navy-blue px-6 py-3 rounded-full font-black text-lg shadow-lg">
                  EARN IT! INVEST IT! SAVE IT! MAKE IT GROW!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-bold text-lg mb-6">
              <BookOpen className="w-5 h-5" />
              <span>Our Curriculum</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              Our <span className="text-teal-600">5-Week</span> Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
              From financial novice to money master! Each week builds on the last with games, activities, and rewards that make learning about money fun and memorable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {weeklyProgram.map((week, index) => (
              <div 
                key={week.week} 
                className="group relative bg-white rounded-3xl p-8 border-4 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${week.color} rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    {week.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-300 group-hover:text-teal-500 transition-colors">
                    0{week.week}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-navy-blue mb-4 group-hover:text-teal-600 transition-colors">
                  {week.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {week.description}
                </p>
                
                <div className="mt-6">
                  <div className={`w-full h-3 ${week.lightColor} rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full ${week.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 rounded-full`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Prize Highlight */}
          <div className="relative bg-gradient-to-r from-yellow-200 to-orange-200 rounded-3xl p-12 border-4 border-yellow-500 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
                <Gift className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black text-navy-blue mb-6">
                Weekly <span className="text-yellow-600">Gift Card Rewards</span>
              </h3>
              <p className="text-gray-700 text-xl max-w-2xl mx-auto font-semibold leading-relaxed">
                Every single week, students earn gift cards for participation and achievement. Plus candy and treats to keep the energy high!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative py-32 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-bold text-lg mb-6">
              <Globe className="w-5 h-5" />
              <span>Making a Difference</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              Our <span className="text-green-600">Impact</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: School, number: "3", label: "Schools Transformed", color: "bg-blue-500", bgColor: "bg-blue-100" },
              { icon: Users, number: "250+", label: "Future Millionaires", color: "bg-green-500", bgColor: "bg-green-100" },
              { icon: Star, number: "100%", label: "Fun Guarantee", color: "bg-yellow-500", bgColor: "bg-yellow-100" }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className={`${stat.bgColor} rounded-3xl p-8 border-4 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-xl transform hover:scale-105`}>
                  <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-black text-navy-blue mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-bold text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Photo Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolsImpacted.map((stat, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-white border-4 border-gray-200 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={stat.img} alt="" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-black text-navy-blue mb-2 text-xl group-hover:text-teal-600 transition-colors">
                    {stat.schoolName}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-100 text-orange-700 rounded-full font-bold text-lg mb-6">
              <Calendar className="w-5 h-5" />
              <span>Book Your Spot</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              <span className="text-orange-600">Availability</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4 font-semibold">Ready to bring financial fun to your school?</p>
            <p className="text-lg text-teal-600 font-bold">Sessions typically run on <span className="bg-yellow-200 px-3 py-1 rounded-full">FRIDAYS</span> after school</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-12 border-4 border-orange-500 shadow-2xl">
              <h3 className="text-3xl font-black text-navy-blue mb-8">Ready to Transform Lives?</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed font-semibold">
                We're currently accepting applications for the upcoming school year. Each program runs for 5 consecutive weeks with flexible scheduling to fit your school's unique needs.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700 font-bold text-lg">Fall 2024: NOW BOOKING</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse" />
                  <span className="text-teal-700 font-bold text-lg">Spring 2025: Applications Open</span>
                </div>
              </div>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Reserve Your Program</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border-4 border-gray-200 shadow-xl">
              <div className="text-center mb-8">
                <Calendar className="w-20 h-20 text-teal-600 mx-auto mb-4" />
                <h4 className="text-2xl font-black text-navy-blue">Live Calendar</h4>
              </div>
              <div className="space-y-4">
                {
                  // red: bg-red-100 text-red-700 border-red-300
                  // yellow: bg-yellow-100 text-yellow-700 border-yellow-300
                  // green: bg-green-100 text-green-700 border-green-300
                }
                {[
                  { month: "October 2024", status: "BOOKED", color: "bg-red-100 text-red-700 border-red-300" },
                  { month: "November 2024", status: "OPEN", color: "bg-green-100 text-green-700 border-green-300" },
                  { month: "December 2024", status: "OPEN", color: "bg-green-100 text-green-700 border-green-300" },
                  { month: "January 2025", status: "OPEN", color: "bg-green-100 text-green-700 border-green-300" }
                ].map((slot, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                    <span className="text-navy-blue font-bold text-lg">{slot.month}</span>
                    <span className={`px-4 py-2 ${slot.color} border-2 rounded-full text-sm font-black uppercase tracking-wide`}>
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-gradient-to-br from-blue-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-blue text-white rounded-full font-bold text-lg mb-6">
              <Shield className="w-5 h-5" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              About <span className="text-teal-600">YCF</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
                <span className="text-teal-600 font-black">Youth Capital & Finance (YCF)</span> makes financial education fun and accessible for LAUSD middle school students. We believe learning about money should be engaging, rewarding, and memorable!
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                Through interactive games, Kahoot competitions, and weekly rewards, we transform financial literacy from a boring subject into the highlight of students' week. Every lesson includes hands-on activities and real rewards!
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Brain, text: "Interactive games that make learning stick", color: "bg-blue-500" },
                  { icon: Zap, text: "Kahoot battles that spark healthy competition", color: "bg-orange-500" },
                  { icon: Gift, text: "Real rewards that motivate participation", color: "bg-green-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-navy-blue font-bold group-hover:text-teal-600 transition-colors text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 border-4 border-teal-500 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center text-gray-600">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-lg font-bold">Team Photo</div>
                    <div className="text-sm">Champions of Financial Literacy</div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black text-navy-blue mb-2">The YCF Experience</h4>
                  <p className="text-gray-600 font-medium">Where financial education meets pure fun!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Founders Section */}
          <div className="bg-white rounded-3xl p-12 border-4 border-gray-200 shadow-2xl">
            <h3 className="text-4xl font-black text-navy-blue text-center mb-16">
              Meet the <span className="text-orange-600">Team</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {team.map((founder, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 ${founder.color} rounded-3xl mx-auto flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <span className="text-4xl font-black text-white">
                        <img src={founder.img} alt="" />
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-navy-blue mb-3 group-hover:text-teal-600 transition-colors">
                    {founder.name}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors font-medium">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="relative py-32 bg-gradient-to-r from-orange-100 via-yellow-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-full font-bold text-lg mb-6 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span>Join the Fun!</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              <span className="text-orange-600">Get Involved</span>
            </h2>
          </div>
          
          <p className="text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed font-bold">
            Ready to bring <span className="text-orange-600 bg-yellow-200 px-2 py-1 rounded">financial literacy games</span> to your school? Let's make learning about money the most exciting part of students' week!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Partner with Us", 
                desc: "Bring YCF games to your school", 
                icon: School, 
                color: "bg-blue-500",
                bgColor: "bg-blue-100",
                action: "Partner Now"
              },
              { 
                title: "Fund the Fun", 
                desc: "Sponsor gift cards and rewards", 
                icon: DollarSign, 
                color: "bg-yellow-500",
                bgColor: "bg-yellow-100",
                action: "Donate Today"
              },
              { 
                title: "Volunteer Power", 
                desc: "Help teach financial skills", 
                icon: Users, 
                color: "bg-green-500",
                bgColor: "bg-green-100",
                action: "Join the Team"
              }
            ].map((option, index) => (
              <div key={index} className="group">
                <div className={`${option.bgColor} rounded-3xl p-8 border-4 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  <div className={`w-20 h-20 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <option.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-navy-blue mb-4">{option.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">{option.desc}</p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full ${option.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg`}
                  >
                    {option.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-bold text-lg mb-6">
              <Brain className="w-5 h-5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              <span className="text-green-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold">Everything you need to know about joining the YCF experience</p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 overflow-hidden shadow-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-teal-50 transition-all duration-200"
                >
                  <span className="font-bold text-xl text-navy-blue group-hover:text-teal-600 transition-colors">{faq.question}</span>
                  <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-teal-600" />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent mb-4" />
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-br from-teal-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-500 text-white rounded-full font-bold text-lg mb-6 shadow-lg">
              <Mail className="w-5 h-5" />
              <span>Let's Connect!</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-navy-blue mb-8">
              <span className="text-teal-600">Contact</span>
            </h2>
            <p className="text-xl text-gray-700 font-semibold">Ready to bring financial games to your school?</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 border-4 border-teal-500 shadow-2xl">
              <h3 className="text-3xl font-black text-navy-blue mb-8">Start the Conversation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-lg">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 font-medium"
                    placeholder="Your awesome name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-lg">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 font-medium"
                    placeholder="your.email@school.edu"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-lg">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 resize-none font-medium"
                    placeholder="Tell us about your school and how we can make financial literacy fun for your students!"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border-4 border-gray-200 shadow-xl">
                <h3 className="text-3xl font-black text-navy-blue mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  {[
                    { 
                      icon: Mail, 
                      label: "Email", 
                      value: "YouthCapitalFinance@gmail.com", 
                      color: "bg-blue-500",
                      href: "mailto:YouthCapitalFinance@gmail.com"
                    },
                    { 
                      icon: Phone, 
                      label: "Phone", 
                      value: "(818) 452-8701", 
                      color: "bg-green-500",
                      href: "tel:+18184528701"
                    },
                    { 
                      icon: Instagram, 
                      label: "Instagram", 
                      value: "@youthcapitalfinance", 
                      color: "bg-pink-500",
                      href: "https://www.instagram.com/youthcapitalfinance"
                    }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.icon === Instagram ? "_blank" : undefined}
                      rel={contact.icon === Instagram ? "noopener noreferrer" : undefined}
                      className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className={`w-14 h-14 ${contact.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-600 text-sm">{contact.label}</div>
                        <div className="text-navy-blue font-bold text-lg group-hover:text-teal-600 transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-8 border-4 border-orange-500 text-center shadow-xl">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-navy-blue mb-4">Ask in the Front Office!</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  Students can sign up directly at their school's front office. Limited spots available!
                </p>
                <a
                  href="https://www.instagram.com/youthcapitalfinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow Our Journey</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Hand className="w-7 h-7 text-navy-blue" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Leaf className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-black text-white">
                    Youth Capital & Finance
                  </span>
                  <div className="text-xs text-teal-300 font-semibold">Making Money Fun!</div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed font-medium">
                Empowering LAUSD middle schoolers with financial literacy through games, rewards, and hands-on learning experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/youthcapitalfinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-black text-white mb-6 text-teal-300">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Program', 'Impact', 'Availability', 'About'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-white hover:text-teal-300 transition-all duration-200 font-medium"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-black text-white mb-6 text-green-400">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-300 font-medium">
                <li className="hover:text-blue-400 transition-colors">YouthCapitalFinance@gmail.com</li>
                <li className="hover:text-green-400 transition-colors">(818) 452-8701</li>
                <li className="hover:text-pink-400 transition-colors">@youthcapitalfinance</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-2 font-medium">
              &copy; 2025 Youth Capital & Finance. Making financial literacy fun for all! 
            </p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .bg-navy-blue { background-color: #1e3a8a; }
        .text-navy-blue { color: #1e3a8a; }
      `}</style>
    </div>
  );
};

export default YCFWebsite;