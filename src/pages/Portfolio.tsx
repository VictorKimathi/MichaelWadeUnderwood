import React, { useState } from 'react';
import Section from '../components/Section';
import PortfolioCard from '../components/PortfolioCard';
const portfolioItems = [ {
  title: 'Fusion Treats You Can Make With Grocery Store Staples',
  publication: 'Flavor & Fire Digital',
  description: 'You don’t expect pineapple upside-down cake to start with frozen bao. Or churros to come out of a waffle iron. But pair everyday grocery items with global flavors, and your pantry becomes a gateway to something unexpected.',
  imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Cultural History', 'Recipe Development', 'Gulf Coast'],
  category: 'Recipe Development'
}, {
  title: 'Cast Iron Fixes That Take Less Time Than You’d Think',
  publication: 'Spoon & Spatula',
  description: 'Rust usually forms on cast iron skillets when water sits too long after washing. Even if the damage looks bad, light rust often rests on the surface and can be removed in under 10 minutes. Scrub the affected area with steel wool or a chainmail pad and warm water, no soap needed. Focus on the orange or reddish spots until bare metal reappears. Once clean, dry the pan immediately over medium heat to evaporate any remaining moisture.',
  imageUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Trend Analysis', 'Technique', 'Fermentation'],
  category: 'Technique'
}, {
  title: 'Clifftop Kitchens: West Coast Spots With a Golden-Hour View',
  publication: 'The Pantry Journal',
  description: 'Along the Pacific coastline, a quiet trend is transforming dinner into an immersive event. A growing number of restaurants located on elevated coastal terrain are designing their entire experience around the golden hour, the period just before sunset when natural light adds warmth and depth. These clifftop kitchens treat sunlight not as background scenery, but as an essential element worth building the meal around.',
  imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Ingredient History', 'Southern Cooking', 'Traditional Methods'],
  category: 'Ingredient Spotlight'
}];
const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const filteredItems = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  return <div className="pt-20">
      <Section>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Selected writing samples showcasing my work in culinary
            storytelling.
          </p>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(category => <button key={category} onClick={() => setActiveFilter(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => <PortfolioCard key={index} {...item} />)}
          </div>
        </div>
      </Section>
    </div>;
};
export default PortfolioPage;
