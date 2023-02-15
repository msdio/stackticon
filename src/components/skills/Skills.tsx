import Skill from 'components/skill/Skill';
import React from 'react';

const Skills = React.forwardRef<HTMLDivElement>((props: any, targetRef) => {
  const skillArr = ['Javascript', 'react', 'Typescript'];
  return (
    <div ref={targetRef}>
      {skillArr.map((skill) => (
        <Skill key={skill} stackName={skill}></Skill>
      ))}
      <li>react</li>
      <li>javascript</li>
      <li>python</li>
    </div>
  );
});
Skills.displayName = 'Skills';

export default Skills;
