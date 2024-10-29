import React from 'react'
import SkillsItem from './SkilsItem';
import SkillsLanguage from './SkilsLanguage';

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        {/* Left Column */}
        <div>
          <SkillsItem 
            title="React Developer" 
            year="2014 - 2018" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <SkillsItem 
            title="MERN Stack Developer" 
            year="2016 - 2020"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <SkillsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        
        {/* Right Column */}
        <div>
          <SkillsItem 
            title="Next.js Developer" 
            year="2018 - 2021"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <SkillsItem 
            title="Node.js Developer" 
            year="2021 - 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <SkillsLanguage
            skill1="React"
            skill2="Next.js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;