import React from 'react';
import { Check, Plus } from 'lucide-react';

const gadgets = [
  {
    name: 'Laptops',
    description: 'Perfect for work and gaming',
    price: '$25/day',
    features: [
      'MacBook Pro, Dell XPS, Gaming Laptops',
      'Latest models available',
      'Pre-installed software',
      'Charger included',
      'Optional accessories',
    ],
  },
  {
    name: 'Cameras',
    description: 'Capture perfect moments',
    price: '$35/day',
    features: [
      'DSLR and Mirrorless options',
      'Various lenses available',
      'Memory cards included',
      'Tripod available',
      'Camera bag included',
    ],
  },
  {
    name: 'Gaming Consoles',
    description: 'Ultimate gaming experience',
    price: '$20/day',
    features: [
      'PS5, Xbox Series X, Nintendo Switch',
      'Additional controllers',
      'Popular games included',
      'HDMI cable provided',
      'Online gaming ready',
    ],
  },
];

export default function GadgetListing() {
  return (
    <div id="gadgets" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Gadgets
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose from our wide selection of premium gadgets
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {gadgets.map((gadget) => (
            <div key={gadget.name} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{gadget.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{gadget.price}</span>
                </p>
                <p className="mt-6 text-gray-500">{gadget.description}</p>

                <ul className="mt-6 space-y-6">
                  {gadget.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="mr-2 h-5 w-5" />
            List Your Gadget
          </button>
        </div>
      </div>
    </div>
  );
}