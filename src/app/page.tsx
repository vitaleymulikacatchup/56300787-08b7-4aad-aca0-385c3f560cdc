"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplitAvatars from "@/components/sections/hero/HeroSplitAvatars";
import MediaSplitAbout from "@/components/sections/about/MediaSplitAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterSplit from "@/components/sections/footer/FooterSplit";
import { Award, Code, HelpCircle, Mail, MapPin, Phone, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="floatingGradient"
      cardStyle="solid-accent"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="TechAcademy"
          navItems={[
            { name: "About", id: "about" },
            { name: "Courses", id: "courses" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitAvatars
          title="Learn Technology. Build Your Future."
          description="Join hundreds of students mastering coding, web development, and IT skills through hands-on training and expert instruction."
          tag="Premium IT Education"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898331574-9q9nvepm.jpg"
          imageAlt="Students collaborating on programming project"
          imagePosition="right"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898332718-n5dk58kz.jpg", alt: "Student 1" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898334320-mlawh8cg.png", alt: "Student 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898336226-m2bytfpv.jpg", alt: "Student 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898337710-fthzb9sl.jpg", alt: "Student 4" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898338786-yanapvt2.jpg", alt: "Student 5" }
          ]}
          avatarText="Join 500+ successful graduates"
          buttons={[
            { text: "Enroll Now", href: "contact" },
            { text: "Learn More", href: "courses" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Industry-Focused Learning"
          description="We provide comprehensive IT education combining theoretical knowledge with practical hands-on experience. Our curriculum is designed by industry professionals to ensure you learn the latest technologies and best practices used in today's job market. Every course includes real-world projects, code reviews, and career guidance to prepare you for professional success."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898340079-mm19xakx.jpg"
          imageAlt="Modern classroom with students practicing code"
          imagePosition="right"
          buttons={[
            { text: "Explore Courses", href: "courses" },
            { text: "View Schedule", href: "contact" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="courses" data-section="courses">
        <FeatureCardOne
          title="Our Core Courses"
          description="Master in-demand technology skills with our comprehensive training programs."
          tag="Technology Skills"
          tagIcon={Code}
          features={[
            {
              title: "Python Programming",
              description: "Learn Python fundamentals, data structures, and object-oriented programming for real-world applications.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898341249-pri85224.jpg",
              imageAlt: "Python code on screen"
            },
            {
              title: "Web Development",
              description: "Master HTML, CSS, JavaScript and modern frameworks to build responsive, interactive websites.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898342520-hves68xn.png",
              imageAlt: "Web development interface"
            },
            {
              title: "Database Management",
              description: "Understand SQL, database design, and data management for robust application development.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898344295-1rouunzw.jpg",
              imageAlt: "Database schema design"
            },
            {
              title: "Cloud Computing",
              description: "Deploy applications on AWS and Azure, learning scalable infrastructure and DevOps practices.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898345653-er07lvn2.jpg",
              imageAlt: "Cloud infrastructure setup"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Instructors"
          description="Learn from experienced professionals with 10+ years in the industry."
          tag="Expert Mentorship"
          tagIcon={Award}
          members={[
            {
              id: "1",
              name: "Alex Johnson",
              role: "Lead Python Instructor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898346959-u502x1fp.jpg",
              imageAlt: "Alex Johnson"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Full Stack Developer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898348604-vzm8miv2.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "Michael Santos",
              role: "Cloud Architecture Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898349821-kos5ecsz.jpg",
              imageAlt: "Michael Santos"
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "Career Counselor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898350752-0fhlbw7y.jpg",
              imageAlt: "Emma Williams"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Student Success Stories"
          description="Hear from our graduates about their learning journey and career achievements."
          tag="Real Results"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "James Rodriguez",
              role: "Software Engineer",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898351652-658a4hr9.jpg",
              imageAlt: "James Rodriguez"
            },
            {
              id: "2",
              name: "Lisa Wang",
              role: "Full Stack Developer",
              company: "Global Tech Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898352960-qciqe7ia.jpg",
              imageAlt: "Lisa Wang"
            },
            {
              id: "3",
              name: "David Kumar",
              role: "Cloud Architect",
              company: "Cloud Solutions Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898354058-anqnami7.jpg",
              imageAlt: "David Kumar"
            },
            {
              id: "4",
              name: "Jessica Brown",
              role: "Web Developer",
              company: "Digital Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765898355151-ogj4kjke.jpg",
              imageAlt: "Jessica Brown"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our courses, enrollment, and career support."
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are the course prerequisites?",
              content: "Most of our courses are beginner-friendly and require no prior programming experience. We do recommend basic computer literacy skills. Our instructors will help you catch up if needed."
            },
            {
              id: "2",
              title: "How long does each course take?",
              content: "Our courses range from 4 to 12 weeks depending on intensity and subject matter. Full-time programs run 5 days a week, while part-time options are available for working professionals."
            },
            {
              id: "3",
              title: "Do you offer job placement assistance?",
              content: "Yes, we provide comprehensive career support including resume review, interview coaching, and connections with our hiring partners in the tech industry."
            },
            {
              id: "4",
              title: "What is the course format?",
              content: "We offer a blend of live instructor-led sessions, hands-on labs, and recorded lectures. Classes are available in-person and online to suit your learning style."
            },
            {
              id: "5",
              title: "Can I switch courses if I change my mind?",
              content: "We offer a two-week trial period where you can switch courses without penalty. After that, transfers are allowed subject to availability and instructor approval."
            },
            {
              id: "6",
              title: "Is there a certificate upon completion?",
              content: "Yes, all graduates receive a TechAcademy Certificate of Completion. Many of our programs also prepare you for industry-recognized certifications like AWS and CompTIA."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Start Learning?"
          ctaDescription="Get in touch with our admissions team to discuss the best program for your goals."
          ctaButton={{
            text: "Book a Free Consultation",
            href: "https://example.com/booking"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How do I enroll?",
              content: "Visit our website or contact admissions directly. We'll help you select the right course and schedule your start date."
            },
            {
              id: "2",
              title: "What payment options do you offer?",
              content: "We accept credit cards, bank transfers, and payment plans. Financial aid options may be available for qualifying students."
            },
            {
              id: "3",
              title: "Can I attend part-time?",
              content: "Yes, we offer flexible part-time schedules designed for working professionals. Classes are available evenings and weekends."
            }
          ]}
          animationType="slide-up"
          accordionAnimationType="smooth"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="TechAcademy"
          title="Empowering the next generation of tech professionals with quality education."
          columns={[
            {
              title: "Programs",
              items: [
                { label: "Python Programming", href: "#courses" },
                { label: "Web Development", href: "#courses" },
                { label: "Database Design", href: "#courses" },
                { label: "Cloud Computing", href: "#courses" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#team" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Blog", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Community", href: "#" },
                { label: "Support", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Phone, text: "+1 (555) 123-4567" },
            { icon: Mail, text: "info@techacademy.com" },
            { icon: MapPin, text: "123 Tech Street, Silicon Valley, CA 94025" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}