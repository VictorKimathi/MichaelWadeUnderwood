import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import PortfolioCard from '../components/PortfolioCard';
const featuredPortfolio =  [ {
  title: 'Fusion Treats You Can Make With Grocery Store Staples',
  description: 'You don’t expect pineapple upside-down cake to start with frozen bao. Or churros to come out of a waffle iron. But pair everyday grocery items with global flavors, and your pantry becomes a gateway to something unexpected.',
  imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Fusion desserts', 'Grocery store hacks', 'Creative baking'],
  href: 'Fusion_Treats_You_Can_Make.pdf',
  category: 'Easy Fusion Recipes'
}, {
  title: 'Cast Iron Fixes That Take Less Time Than You’d Think',
  description: 'Rust usually forms on cast iron skillets when water sits too long after washing. Even if the damage looks bad, light rust often rests on the surface and can be removed in under 10 minutes. Scrub the affected area with steel wool or a chainmail pad and warm water, no soap needed. Focus on the orange or reddish spots until bare metal reappears. Once clean, dry the pan immediately over medium heat to evaporate any remaining moisture.',
  imageUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Cast iron skillet', 'Seasoning techniques', 'Kitchen maintenance'],
  href: 'Cast_Iron_Fixes.pdf',
  category: 'Home & Kitchen Care'
}, {
  title: 'Clifftop Kitchens: West Coast Spots With a Golden-Hour View',
  description: 'Along the Pacific coastline, a quiet trend is transforming dinner into an immersive event. A growing number of restaurants located on elevated coastal terrain are designing their entire experience around the golden hour, the period just before sunset when natural light adds warmth and depth. These clifftop kitchens treat sunlight not as background scenery, but as an essential element worth building the meal around.',
  imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Sunset dining', 'Coastal restaurants', 'Culinary tourism'],
  href: 'Clifftop_Kitchens',
  category: 'Food & Travel Experiences'
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
