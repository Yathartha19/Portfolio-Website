
export default function About() {
  return (
    <section className="min-h-screen w-full bg-[#0c0c0c] text-gray-100 flex items-center justify-center px-8 sm:px-10 md:px-20 lg:px-30 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:gap-16">
        
        <div className="flex-1 text-center md:text-left space-y-6 sm:space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-100">
            Hello,
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            I’m Yathartha, a developer based in Bangalore, India.
          </p>

          <div className="space-y-4 sm:space-y-5 max-w-2xl text-gray-400 leading-relaxed text-[0.95rem] sm:text-base">
            <p>
              I'm passionate about creating products that solve real world problems. I enjoy hands-on projects and learning by doing - from developing software tools to exploring new technologies.
            </p>

            <p>
              I'm a <span className="text-gray-300">Computer Science</span> student at <span className="text-gray-300">PES University</span>, specialising in <span className="text-gray-300">AI and Machine Learning</span>. 
              Though I've spend most of my time working on web applications, I'm also very interested in other domains like DevOps, Cloud Computing, and AIML.
            </p>

            <p>
              Outside of work, I love hiking, sports, and video games. I'm always eager to connect with like-minded individuals, so feel free to reach out!
            </p>
          </div>

          
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a]">
            <img
              src="profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
