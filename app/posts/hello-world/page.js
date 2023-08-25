"use client";
import GeneralLayout from "@/app/generalLayout";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <GeneralLayout>
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
            <Link href="#" className="hover:underline">
              Blog
            </Link>
          </h2>
          <article className="mb-32">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
              Learn How to Pre-render Pages Using Static Generation with Next.js
            </h1>
            <div className="hidden md:block md:mb-12">
              <div className="flex items-center">
                <img
                  src="/assets/tim.jpeg"
                  className="w-12 h-12 rounded-full mr-4"
                ></img>
                <div className="text-xl font-bold">Tim Neutkens</div>
              </div>
            </div>
            <div className="mb-8 md:mb-16">
              <div className="sm:mx-0">
                <Link href="#">
                  <div className="relative aspect-w-2 aspect-h-1">
                    <div className="pb-[50%]"></div>
                    <img
                      src="/assets/cover (1).webp"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="block md:hidden mb-6">
                <div className="flex items-center">
                  <img
                    src="/assets/tim.jpeg"
                    className="w-12 h-12 rounded-full mr-4"
                  ></img>
                  <div className="text-xl font-bold">Tim Neutkens</div>
                </div>
              </div>
              <div className="mb-6 text-lg">
                <time dateTime="2020-03-16T05:35:07.322Z">March 16, 2020</time>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="text-xl leading-9">
                <p className="my-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Praesent elementum facilisis leo vel fringilla est ullamcorper
                  eget. At imperdiet dui accumsan sit amet nulla facilities
                  morbi tempus. Praesent elementum facilisis leo vel fringilla.
                  Congue mauris rhoncus aenean vel. Egestas sed tempus urna et
                  pharetra pharetra massa massa ultricies.
                </p>
                <p className="my-10">
                  Venenatis cras sed felis eget velit. Consectetur libero id
                  faucibus nisl tincidunt. Gravida in fermentum et sollicitudin
                  ac orci phasellus egestas tellus. Volutpat consequat mauris
                  nunc congue nisi vitae. Id aliquet risus feugiat in ante metus
                  dictum at tempor. Sed blandit libero volutpat sed cras. Sed
                  odio morbi quis commodo odio aenean sed adipiscing. Velit
                  euismod in pellentesque massa placerat. Mi bibendum neque
                  egestas congue quisque egestas diam in arcu. Nisi lacus sed
                  viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus
                  accumsan tortor posuere ac ut consequat semper viverra.
                  Fringilla ut morbi tincidunt augue interdum velit euismod.
                </p>
                <h2 className="text-3xl mb-4 mt-12">Lorem Ipsum</h2>
                <p>
                  Tristique senectus et netus et malesuada fames ac turpis.
                  Ridiculous mus mauris vitae ultricies leo integer malesuada
                  nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum
                  tellus pellentesque. Phasellus vestibulum lorem sed risus
                  ultricies tristique nulla. Quis blandit turpis cursus in hac
                  habitasse platea dictumst quisque. Eros donec ac odio tempor
                  orci dapibus ultrices. Aliquam sem et tortor consequat id
                  porta nibh. Adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla. Diam vulputate ut pharetra sit amet.
                  Ut tellus elementum sagittis vitae et leo. Arcu non odio
                  euismod lacinia at quis risus sed vulputate.
                </p>
              </div>
            </div>
          </article>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default page;
