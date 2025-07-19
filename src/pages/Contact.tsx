import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
const ContactPage = () => {
  return <div className="pt-20">
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Interested in working together? I'm open to discussing new
                writing opportunities, collaborations, or just connecting about
                food and culinary storytelling.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-gray-600">
                      1305 Memorial Dr #23, Baytown, TX 77520
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a href="mailto:michaelunderwood115@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                      michaelunderwood115@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <a href="tel:2062497354" className="text-gray-600 hover:text-black transition-colors">
                      (206) 249-7354
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your name" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your email address" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="What is this regarding?" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your message" required></textarea>
                </div>
                <Button type="submit" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};
export default ContactPage;