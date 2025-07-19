import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import PortfolioCard from '../components/PortfolioCard';
const featuredPortfolio = [{
  title: 'The Sweet Science of Molasses',
  publication: 'Flavor & Fire Digital',
  description: 'Deep dive into the chemistry, history, and culinary applications of this Southern staple, from barbecue sauces to traditional baking.',
  imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Deep Research', 'Ingredient Profile']
}, {
  title: 'Goat Curry and Gulf Coast Memory',
  publication: 'Flavor & Fire Digital',
  description: 'Exploring the cultural intersections of Caribbean and Southern Gulf cooking traditions through the lens of a family recipe.',
  imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Cultural History', 'Recipe Development']
}, {
  title: 'Fermentation Revolution: Beyond Kombucha',
  publication: 'Spoon & Spatula',
  description: 'An examination of how home fermentation has evolved beyond trendy drinks into a serious culinary technique for the modern kitchen.',
  imageUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Trend Analysis', 'Technique']
}];
const HomePage = () => {
  return <>
      {/* Hero Section */}
      <div className="pt-24 md:pt-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Culinary Storyteller & Food Writer
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 md:pr-12">
                Transforming deep-dive research into accessible, entertaining
                food features rooted in Southern cooking and ingredient history.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio">
                  <Button size="lg">Explore My Work</Button>
                </Link>
                <a href="/michael_underwood_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Michael Wade Underwood writing at desk" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* About Snippet Section */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Born in the Gulf Coast, Raised on Stories
          </h2>
          <p className="text-lg text-gray-600">
            Self-taught culinary storyteller with 4+ years of experience
            blending science, culture, and curiosity into writing that informs
            and inspires home cooks and food lovers alike. My approach to food
            writing is deeply rooted in scratch-cooked meals and smoky backyard
            barbecues of my Southern upbringing.
          </p>
          <Link to="/about" className="inline-flex items-center mt-8 font-medium text-black hover:text-gray-800 transition-colors">
            More About Me
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Section>
      {/* Featured Work Section */}
      <Section>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A selection of my most impactful food and culinary culture writing
              from various publications.
            </p>
          </div>
          <Link to="/portfolio" className="mt-4 md:mt-0">
            <Button variant="outline">View All Work</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPortfolio.map((item, index) => <PortfolioCard key={index} {...item} />)}
        </div>
      </Section>
      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Craft Your Next Food Story
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Looking for a writer who can bring depth and flavor to your culinary
            content?
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </>;
};
export default HomePage;