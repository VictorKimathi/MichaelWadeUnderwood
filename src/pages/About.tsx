import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return <div className="pt-20">
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Michael</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Michael Wade Underwood" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Self-taught culinary storyteller and professional content writer
                with 4+ years of experience transforming deep-dive research into
                accessible, entertaining food features.
              </p>
              <p className="text-lg mb-4">
                Born in the Gulf Coast and raised on scratch-cooked meals and
                smoky backyard barbecues, I bring a flavor-forward perspective
                rooted in Southern cooking and ingredient history.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="/michael_underwood_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button>Download Resume</Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Story</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              My journey into food writing began not in culinary school, but at
              my grandmother's kitchen counter in Baytown, Texas. There, I
              learned that every recipe has a story, every ingredient has a
              history, and every cooking technique carries cultural significance
              that extends far beyond the plate.
            </p>
            <p>
              After earning my Associate's degree in Communication from San
              Jacinto College, I began exploring the intersection of journalism
              and my lifelong passion for food. What started as contributions to
              a local food newsletter quickly evolved into a career crafting
              longform features about everything from the chemistry of
              fermentation to the cultural significance of heirloom beans.
            </p>
            <p>
              Today, my writing process combines rigorous research with
              accessible storytelling. I believe that understanding the "why"
              behind cooking techniques and ingredient choices creates more
              confident, creative home cooks. Whether I'm interviewing
              fifth-generation sorghum farmers or explaining the Maillard
              reaction in terms anyone can understand, my goal remains the same:
              to deepen readers' connection to what they eat.
            </p>
            <p>
              When I'm not writing, you'll find me testing recipes in my home
              kitchen, exploring Gulf Coast food markets, or documenting the
              evolving food scene in my corner of Texas.
            </p>
          </div>
        </div>
      </Section>
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Research First</h3>
              <p className="text-gray-600">
                Every piece I write begins with extensive research. I believe in
                understanding the full context—historical, scientific, and
                cultural—before crafting a narrative. This often includes
                primary source research, expert interviews, and hands-on
                testing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Storytelling at the Core
              </h3>
              <p className="text-gray-600">
                Information alone isn't enough. I transform research into
                compelling narratives that engage readers and make complex
                culinary concepts accessible and entertaining, without
                sacrificing depth or accuracy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Southern Perspective
              </h3>
              <p className="text-gray-600">
                My Gulf Coast upbringing informs my writing with an authentic
                Southern perspective. I bring firsthand knowledge of regional
                ingredients, cooking techniques, and food traditions that have
                been passed down through generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Practical Application
              </h3>
              <p className="text-gray-600">
                I believe food writing should inspire action. Whether developing
                recipes or explaining techniques, I focus on practical
                information readers can immediately apply in their own kitchens.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            I'm always interested in new writing opportunities and
            collaborations.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </div>;
};
export default AboutPage;