import React, { useState } from 'react';
import Section from '../components/Section';
import PortfolioCard from '../components/PortfolioCard';
const portfolioItems = [{
  title: 'The Sweet Science of Molasses',
  publication: 'Flavor & Fire Digital',
  description: 'Deep dive into the chemistry, history, and culinary applications of this Southern staple, from barbecue sauces to traditional baking.',
  imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Deep Research', 'Ingredient Profile', 'Chemistry'],
  category: 'Ingredient Spotlight'
}, {
  title: 'Goat Curry and Gulf Coast Memory',
  publication: 'Flavor & Fire Digital',
  description: 'Exploring the cultural intersections of Caribbean and Southern Gulf cooking traditions through the lens of a family recipe.',
  imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Cultural History', 'Recipe Development', 'Gulf Coast'],
  category: 'Recipe Development'
}, {
  title: 'Fermentation Revolution: Beyond Kombucha',
  publication: 'Spoon & Spatula',
  description: 'An examination of how home fermentation has evolved beyond trendy drinks into a serious culinary technique for the modern kitchen.',
  imageUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Trend Analysis', 'Technique', 'Fermentation'],
  category: 'Technique'
}, {
  title: "Heirloom Beans: America's Forgotten Culinary Treasures",
  publication: 'The Pantry Journal',
  description: 'Exploring the rich diversity, history, and culinary potential of heirloom bean varieties that have been cultivated for generations in the American South.',
  imageUrl: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Ingredient History', 'Southern Cooking', 'Sustainability'],
  category: 'Ingredient Spotlight'
}, {
  title: 'Cast Iron Revival: The Science Behind the Seasoning',
  publication: 'Grit & Garnish',
  description: 'A technical exploration of the chemistry behind cast iron seasoning and why this traditional cooking method continues to outperform modern alternatives.',
  imageUrl: 'https://images.unsplash.com/photo-1574181609812-4d5f9a5c6f64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Kitchen Science', 'Technique', 'Traditional Methods'],
  category: 'Technique'
}, {
  title: 'Smoke & Memory: The Cultural Geography of Texas Barbecue',
  publication: 'Flavor & Fire Digital',
  description: 'Mapping the regional variations of Texas barbecue traditions and exploring how geography, migration, and cultural exchange have shaped distinctive styles.',
  imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Cultural History', 'Regional Cooking', 'Texas'],
  category: 'Cultural History'
}, {
  title: 'The Rise of Gulf Coast Fusion Cuisine',
  publication: 'Baytown Food Collective',
  description: 'Documenting the emergence of innovative restaurants blending Vietnamese, Mexican, and Southern cooking traditions along the Texas Gulf Coast.',
  imageUrl: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Restaurant Trend', 'Gulf Coast', 'Fusion'],
  category: 'Restaurant Trend'
}, {
  title: 'Sorghum: The Forgotten Southern Sweetener',
  publication: 'The Pantry Journal',
  description: 'Investigating the history, production methods, and culinary applications of sorghum syrup, once a staple sweetener in Southern kitchens.',
  imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Ingredient History', 'Southern Cooking', 'Traditional Methods'],
  category: 'Ingredient Spotlight'
}, {
  title: 'Small Batch: Craft Hot Sauce Makers of the American South',
  publication: 'Spoon & Spatula',
  description: 'Profiles of artisanal hot sauce producers preserving regional pepper varieties and traditional fermentation methods across the Southern states.',
  imageUrl: 'https://images.unsplash.com/photo-1566022328196-5ffb69946bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  articleUrl: '#',
  tags: ['Artisan Producers', 'Fermentation', 'Regional Products'],
  category: 'Producer Profile'
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