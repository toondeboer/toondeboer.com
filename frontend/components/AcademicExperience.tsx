import React from "react";
import { Calendar, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";

type AcademicExperienceProps = {
  darkMode: boolean;
};

const AcademicExperience = ({ darkMode }: AcademicExperienceProps) => {
  const education = [
    {
      id: "msc-tu-delft",
      degree: "M.Sc. in Computer Science",
      institution: "Delft University of Technology",
      period: "Sep 2019 - Jul 2022",
      highlights: [
        "Specialization: Artificial Intelligence",
        "GPA: 7.6/10",
        "Master's Thesis Grade: 8.0/10",
      ],
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Evolutionary Algorithms",
        "Intelligent Decision Making",
        "Recommendation Systems",
        "Artificial Intelligence Techniques",
        "Release Engineering for Machine Learning Applications",
        "High Performance Data Networking",
        "Advanced Algorithms",
        "Software Architecture",
      ],
      logoPlaceholder: "tu_delft.jpeg",
      colorScheme: "from-cyan-600 to-blue-700",
      bgGradient: "from-cyan-500 to-blue-600",
      exchanges: [
        {
          id: "upm-exchange",
          title: "Exchange Program",
          institution: "Universidad Politecnica de Madrid",
          period: "Madrid, Spain",
          description:
            "International exchange focused on advanced technical coursework in a multidisciplinary environment.",
          skills: [
            "Cross-cultural collaboration",
            "Adaptability",
            "International study",
          ],
          logoPlaceholder: "universidad_politecnica_de_madrid.jpeg",
          colorScheme: "from-rose-600 to-red-700",
          bgGradient: "from-rose-500 to-red-600",
        },
      ],
    },
    {
      id: "bsc-tu-delft",
      degree: "B.Sc. in Computer Science",
      institution: "Delft University of Technology",
      period: "Sep 2016 - Jul 2019",
      highlights: ["Bachelor's Thesis Grade: 8.0/10"],
      coursework: [
        "Computational Intelligence",
        "Big Data Processing",
        "Data Mining",
        "Multi-Agent Systems",
        "Logic-Based AI",
        "Algorithms & Data Structures",
        "Probability & Statistics",
        "Linear Algebra",
        "Calculus",
      ],
      logoPlaceholder: "tu_delft.jpeg",
      colorScheme: "from-blue-700 to-indigo-700",
      bgGradient: "from-blue-600 to-indigo-600",
      exchanges: [
        {
          id: "bit-minor",
          title: "Minor - MBA Program",
          institution: "Beijing Institute of Technology",
          period: "Beijing, China",
          description:
            "International minor combining business and technology context for engineering decisions.",
          skills: [
            "Business fundamentals",
            "International perspective",
            "Communication",
          ],
          logoPlaceholder: "beijing_institute_of_technology.jpeg",
          colorScheme: "from-amber-600 to-orange-700",
          bgGradient: "from-amber-500 to-orange-600",
        },
      ],
    },
  ];

  const certificates = [
    "AWS Certified Developer Associate - Amazon Web Services (Nov 2023)",
    "Domain-Driven Design - Info Support (Mar 2023)",
  ];

  return (
    <section id="academic" className="py-24 relative">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-violet-950 via-indigo-950 to-blue-950"
            : "bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${
              darkMode
                ? "from-white via-indigo-100 to-blue-100"
                : "from-gray-900 via-indigo-900 to-blue-900"
            } bg-clip-text text-transparent`}
          >
            Academic Experience
          </h2>
          <p
            className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
          >
            Formal training in AI and software engineering, plus international
            academic experience across Europe and Asia.
          </p>
        </div>

        <div className="space-y-12">
          {education.map((item) => (
            <div key={item.id} className="group relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.bgGradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`}
              ></div>
              <div
                className={`relative ${
                  darkMode
                    ? "bg-gray-900/90 border-gray-700/50"
                    : "bg-white/90 border-white/20"
                } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20 flex-shrink-0">
                    <Image
                      src={`/logos/${item.logoPlaceholder}`}
                      alt={`${item.institution} logo`}
                      className="w-full h-full object-contain bg-white"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-1 bg-gradient-to-r ${item.colorScheme} bg-clip-text text-transparent`}
                    >
                      {item.degree}
                    </h3>
                    <p
                      className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-2`}
                    >
                      {item.institution}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar size={14} />
                      {item.period}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-3">
                  {item.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${item.bgGradient} text-white rounded-full text-sm font-medium shadow-md`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-3 flex items-center gap-2`}
                  >
                    <BookOpen size={18} />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          darkMode
                            ? "bg-gray-800/60 border-gray-700 text-gray-200"
                            : "bg-gray-100 border-gray-200 text-gray-700"
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"} mb-4 flex items-center gap-2`}
                  >
                    <ExternalLink size={18} />
                    Exchange Programs
                  </h4>
                  <div className="space-y-4">
                    {item.exchanges.map((exchange) => (
                      <div key={exchange.id} className="group/project relative">
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${exchange.bgGradient} rounded-lg blur opacity-0 group-hover/project:opacity-30 transition duration-300`}
                        ></div>
                        <div
                          className={`relative p-4 rounded-lg border-2 ${
                            darkMode
                              ? "bg-gray-800/30 border-gray-700/50"
                              : "bg-gray-50/50 border-gray-200/50"
                          } transition-all duration-300 hover:shadow-lg backdrop-blur-sm`}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md ring-2 ring-white/20 flex-shrink-0">
                              <Image
                                src={`/logos/${exchange.logoPlaceholder}`}
                                alt={`${exchange.institution} logo`}
                                className="w-full h-full object-contain bg-white"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div>
                              <h5
                                className={`font-semibold bg-gradient-to-r ${exchange.colorScheme} bg-clip-text text-transparent`}
                              >
                                {exchange.title} - {exchange.institution}
                              </h5>
                              <p className="text-sm text-gray-500">{exchange.period}</p>
                            </div>
                          </div>
                          <p
                            className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mb-3`}
                          >
                            {exchange.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exchange.skills.map((skill, index) => (
                              <span
                                key={index}
                                className={`px-2 py-1 bg-gradient-to-r ${exchange.bgGradient} text-white rounded text-xs font-medium shadow-sm`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className={`rounded-2xl p-8 border ${
              darkMode
                ? "bg-gray-900/70 border-gray-700/50"
                : "bg-white/90 border-gray-200/50"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"} flex items-center gap-2`}
            >
              <GraduationCap size={24} />
              Certificates
            </h3>
            <div className="space-y-2">
              {certificates.map((certificate, index) => (
                <p
                  key={index}
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {certificate}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExperience;

