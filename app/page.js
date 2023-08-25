"use client";

import Link from "next/link";
import GeneralLayout from "./generalLayout";

export default function home() {
  return (
    <>
      <div className="min-h-screen">
        <GeneralLayout>
          <div className="container mx-auto px-5">
            <section>
              <div className="mt-16 mb-16 md:mb-12">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                  Blog.
                </h1>
              </div>
            </section>
            <section>
              <div className="mb-8 md:mb-16">
                <div className="sm:mx-0">
                  <Link href="/posts/dynamic-routing">
                    <div className="relative aspect-w-2 aspect-h-1">
                      <div className="pb-[50%]"></div>
                      <img
                        src="/assets/cover.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                      ></img>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                  <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                    <Link
                      href="/posts/dynamic-routing"
                      className="hover:underline"
                    >
                      Dynamic Routing and Static Generation
                    </Link>
                  </h3>
                  <div className="mb-4 md:mb-0 text-lg">
                    <time dateTime="2020-03-16T05:35:07.322Z">
                      March 16, 2020
                    </time>
                  </div>
                </div>
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Praesent elementum facilisis leo vel fringilla est
                    ullamcorper eget. At imperdiet dui accumsan sit amet nulla
                    facilities morbi tempus.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/assets/jj.jpeg"
                      className="w-12 h-12 rounded-full mr-4"
                      alt="JJ Kasper"
                    ></img>
                    <div className="text-xl font-bold">JJ Kasper</div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                <div>
                  <div className="mb-5">
                    <div className="sm:mx-0">
                      <Link href="/posts/hello-world">
                        <div className="relative overflow-hidden">
                          <div className="relative pb-[50%]">
                            <img
                              src="/assets/cover (1).webp"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </Link>
                      <h3 className="text-3xl mt-5 mb-3 leading-snug">
                        <Link
                          className="hover:underline"
                          href="/posts/hello-world"
                        >
                          Learn How to Pre-render Pages Using Static Generation
                          with Next.js
                        </Link>
                        <div className="text-lg mb-4">
                          <time dateTime="2020-03-16T05:35:07.322Z">
                            March 16, 2020
                          </time>
                        </div>
                        <p className="text-lg leading-relaxed mb-4">
                          Learn How to Pre-render Pages Using Static Generation
                          with Next.js is a tutorial that teaches you how to
                          use the Static Generation feature of Next.js to create
                          pre-rendered pages for your website. Pre-rendering
                          involves generating HTML for your pages during the
                          build process, resulting in faster loading times and
                          improved SEO.
                        </p>
                        <div className="flex items-center">
                          <img
                            src="/assets/tim.jpeg"
                            className="w-12 h-12 rounded-full mr-4"
                          ></img>
                          <div className="text-xl font-bold">Tim Neutkens</div>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-5">
                    <div className="sm:mx-0">
                      <Link href="/posts/hello-world">
                        <div className="relative overflow-hidden">
                          <div className="relative pb-[50%]">
                            <img
                              src="/assets/cover2.jpg"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </Link>
                      <h3 className="text-3xl mt-5 mb-3 leading-snug">
                        <Link
                          className="hover:underline"
                          href="/posts/hello-world"
                        >
                          Preview Mode for Static Generation
                        </Link>
                        <div className="text-lg mb-4">
                          <time dateTime="2020-03-16T05:35:07.322Z">
                            March 16, 2020
                          </time>
                        </div>
                        <p className="text-lg leading-relaxed mb-4">
                          Preview mode for static generation is a feature
                          offered by frameworks like Next.js that enables you to
                          see how new or updated content will appear on your
                          website before actually publishing it. It allows
                          content creators to preview their changes in a
                          realistic context, even though the site is mainly
                          statically generated. This is particularly useful for
                          content-heavy websites.
                        </p>
                        <div className="flex items-center">
                          <img
                            src="/assets/joe.jpeg"
                            className="w-12 h-12 rounded-full mr-4"
                          ></img>
                          <div className="text-xl font-bold">John Haddad</div>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </GeneralLayout>
      </div>
    </>
  );
}
