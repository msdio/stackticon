import React from 'react';

interface SkillProps {
  stackName: string;
}

const Skill = ({ stackName }: SkillProps) => {
  return (
    <div>
      <img
        height='32'
        width='32'
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${stackName}.svg`}
      />
      <p>{stackName}</p>
    </div>
  );
};

export default Skill;
