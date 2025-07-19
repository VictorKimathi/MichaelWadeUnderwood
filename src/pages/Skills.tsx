import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
const SkillCategory = ({
  title,
  skills
}: {
  title: string;
  skills: Array<{
    name: string;
    description: string;
  }>;
}) => {
  return <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>)}
      </div>
    </div>;
};
const SkillsPage = () => {
  const writingSkills = [{
    name: 'Longform Feature Writing (2,500+ words)',
    description: 'Expertise in crafting in-depth, narrative-driven articles that maintain reader engagement while delivering comprehensive information.'
  }, {
    name: 'AP Style Proficiency',
    description: 'Thorough knowledge of Associated Press style guidelines, ensuring consistent, professional content that meets publication standards.'
  }, {
    name: 'Interviewing & Source Vetting',
    description: 'Skilled at conducting insightful interviews with culinary professionals and evaluating source credibility for accurate reporting.'
  }, {
    name: 'Editorial Collaboration & Revisions',
    description: 'Experience working closely with editors to refine content, incorporate feedback, and meet publication objectives.'
  }];
  const researchSkills = [{
    name: 'Ingredient Research & Cultural Context',
    description: 'Ability to thoroughly research ingredients, their historical significance, and cultural importance across various cuisines.'
  }, {
    name: 'U.S. Grocery Landscape Knowledge',
    description: 'Comprehensive understanding of national and regional food supply chains, product availability, and consumer trends.'
  }, {
    name: 'Recipe Development & Testing',
    description: 'Experience creating and refining recipes with clear instructions, ensuring they work consistently for home cooks.'
  }, {
    name: 'Culinary Technique Analysis',
    description: 'Capacity to break down complex cooking methods into understandable components while explaining the science behind them.'
  }];
  const technicalSkills = [{
    name: 'CMS Platforms',
    description: 'Proficient with WordPress, Ghost, and Contently, with the ability to format content, optimize for readability, and manage media assets.'
  }, {
    name: 'SEO Best Practices for Food Content',
    description: 'Knowledge of search optimization techniques specific to culinary content, including keyword research and semantic structuring.'
  }, {
    name: 'Image Selection & Caption Writing',
    description: 'Skilled at choosing compelling visuals and crafting informative, engaging captions that enhance the written content.'
  }, {
    name: 'Deadline Management in Remote Settings',
    description: 'Proven ability to manage multiple projects simultaneously and deliver high-quality content on time in independent work environments.'
  }];
  return <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A comprehensive overview of my professional capabilities in food
            writing and culinary storytelling.
          </p>
          <SkillCategory title="Writing Expertise" skills={writingSkills} />
          <SkillCategory title="Research & Analysis" skills={researchSkills} />
          <SkillCategory title="Technical Tools" skills={technicalSkills} />
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to work together?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/portfolio">
                <Button size="lg">View My Portfolio</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};
export default SkillsPage;