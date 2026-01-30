import React from 'react';
import './ProviderComponent.css';

const Provider: React.FC = () => {
  return (
    <div className="">
      <div className="bg-blue-500">
        <div className="relative isolate max-w-2/3 mx-auto">
          <div className="py-32 sm:py-18 lg:py-26">
            <div className="text-center">
              <h1 className="text-5xl font-semibold text-balance text-white-900 sm:text-7xl">
                Buy alles
              </h1>
              <p className="mt-8 text-lg font-medium text-white-500 sm:text-xl/8">
                Here you can see the latest and greatest the fashion world has to offer.
                Just buy with the click of a few button
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
