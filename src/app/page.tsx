import LeftSideBar from '@/components/LeftSideBar';
import MainComponent from '@/components/MainComponent';
import Link from 'next/link';
import { title } from 'process';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation or header */}
        <LeftSideBar />
        <MainComponent />
        <section className="absolute w-[275px] sticky top-2 mt-2 right-0 flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 px-8 pl-14 pr-4"
              />
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-4 px-4">What&apos;s happening</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration"
                >
                  <div className="font-bold text-lg">#&quot;trending&quot;{i + 1}</div>
                  <div className="text-xs text-neutral-400">35.4k</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration"
                >
                  <div className="font-bold text-lg">#&quot;trending&quot;{i + 1}</div>
                  <div className="text-xs text-neutral-400">35.4k</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
