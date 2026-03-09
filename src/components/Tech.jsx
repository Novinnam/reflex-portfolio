import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-12 h-12 md:w-15 md:h-15 rounded-xl bg-[#1a1038] 
          border border-[#2a1f52] flex items-center justify-center 
          transition-transform duration-300 hover:rotate-12"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");