import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
const ExperienceItem = ({
  title,
  company,
  location,
  period,
  achievements
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}) => {
  return <div className="mb-12 pb-12 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-xl text-gray-700 mt-1">{company}</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-gray-600">{location}</p>
          <p className="text-gray-500 mt-1">{period}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3">
        {achievements.map((achievement, index) => <li key={index} className="flex">
            <span className="mr-2 mt-1 flex-shrink-0">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-gray-600">{achievement}</span>
          </li>)}
      </ul>
    </div>;
};
const ExperiencePage = () => {
  const experiences = [{
    title: 'Freelance Food & Culture Writer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2021 – Present',
    achievements: ['Delivered over 150 articles for outlets including Spoon & Spatula, Grit & Garnish, and The Pantry Journal with topics ranging from fermentation trends to heirloom bean origins', 'Specialized in deep research pieces, historical recipes, and modern cooking techniques', 'Published content regularly syndicated on Apple News and SmartNews', 'Maintained an average word count of 2,800 per feature, with 100% on-time delivery rate']
  }, {
    title: 'Contributing Writer – Recipe Development & Ingredient Spotlight',
    company: 'Flavor & Fire Digital',
    location: 'Remote',
    period: 'Sep 2022 – Apr 2024',
    achievements: ['Produced feature articles such as "The Sweet Science of Molasses" and "Goat Curry and Gulf Coast Memory"', 'Conducted chef interviews and culinary ethnography for regional ingredient profiles', 'Collaborated with editors to ensure tone and formatting aligned with AP Style and publication voice', 'Created companion social media blurbs for Instagram and Threads to drive traffic']
  }, {
    title: 'Content Coordinator – Local Eats Weekly',
    company: 'Baytown Food Collective',
    location: 'Baytown, TX',
    period: 'May 2019 – Nov 2020',
    achievements: ['Managed a bi-weekly online newsletter highlighting regional food trucks, seafood haunts, and kitchen startups', 'Interviewed local chefs, bakers, and food entrepreneurs; wrote human-interest profiles and listicles', 'Tracked analytics and adjusted copy based on open rates and engagement metrics', 'Built relationships with Gulf Coast restaurant owners and growers for ongoing story leads']
  }, {
    title: 'Editorial Intern – Texas Eats Magazine',
    company: 'Texas Eats Magazine',
    location: 'Houston, TX',
    period: 'Jan 2018 – Jul 2018',
    achievements: ['Fact-checked recipes and restaurant reviews for monthly print issues', 'Wrote sidebars and assisted with ingredient Q&A for back-page column', 'Gained hands-on CMS training and experience pitching short-form print and online content']
  }];
  const education = {
    institution: 'San Jacinto College – Central Campus',
    degree: 'Associate of Arts in Communication',
    location: 'Pasadena, TX',
    period: 'Graduated May 2019',
    achievements: ['Editor-in-Chief, The Nest Student Magazine', 'Coursework included media writing, culinary anthropology, and digital publishing']
  };
  return <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Experience</h1>
          <p className="text-xl text-gray-600 mb-12">
            My professional journey in food writing and culinary storytelling.
          </p>
          <div className="mb-16">
            {experiences.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    {education.institution}
                  </h3>
                  <p className="text-xl text-gray-700 mt-1">
                    {education.degree}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-600">{education.location}</p>
                  <p className="text-gray-500 mt-1">{education.period}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {education.achievements.map((achievement, index) => <li key={index} className="flex">
                    <span className="mr-2 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{achievement}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="/michael_underwood_resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Download Full Resume</Button>
            </a>
          </div>
        </div>
      </Section>
    </div>;
};
export default ExperiencePage;