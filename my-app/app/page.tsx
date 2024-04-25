import Image from "next/image";
export default function Home() {
  return (
    <main className="m-1 p-0">
      <div className="container mt-0 p-2">
        <nav className="flex items-center justify-between py-8 px-4 sm:px-0">
          <a
            className="w-1/4 text-primary font-bold text-2xl flex items-center space-x-2"
            href=""
          >
            <div className="p-7">mistake logo </div>
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"></div>
            <h1 className="text-ui-secondary font-bold hidden sm:block">
              TailwindTemplates
            </h1>
          </a>

          <div className="w-2/4 hidden lg:block">
            <ul className="grid grid-cols-4 gap-4 text-center text-ui-primary">
              <li>
                <a href="" className="hover:opacity-75">
                  Templates
                </a>
              </li>
              <li>
                <a href="" className="hover:opacity-75">
                  Resource
                </a>
              </li>
              <li>
                <a href="" className="hover:opacity-75">
                  Blog
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="h-96 w-full bg-gray-100 mb-24 rounded-2xl shadow-xl bg-cover bg-center"></div>
      </div>

      <div className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto">
        <div className="bg-blue-100 inline-block py-1 px-4 rounded-xl mb-6">
          <p className="color: rgb(239 246 255) font-bold">Update</p>
        </div>
        <h1 className="text-3xl md:text-5xl text-ui-secondary font-semibold">
          TailwindTemplates v2 is here
        </h1>

        <section className="mt-10 mb-32">
          <div className="flex justify-start">
            <div className="">icon1</div>
            <p className=" text-ui-secondary ">1 minute read</p>
          </div>
          <div className="flex justify-end">
            <a className="mr-2" href="">
              facebook
            </a>
            <a className="mr-2" href="">
              instagram
            </a>
            <a className="mr-2" href="">
              Line
            </a>
          </div>

          <div className="mt-8 ">
            <div className="">
              <p className="mb-6 ">
                TailwindTemplates V2 is finally here! Our focus for
                TailwindTemplates v2 is to bring open-source design systems to
                Tailwindcss. Each design system has a detailed guideline to
                provide consistency and coherence within a user interface.
              </p>
            </div>
            <div className="header-block">
              <h3 className="text-xl">What to expect?</h3>

              <br></br>
            </div>
            <div className="paragraph-block">
              <p className="mb-6 leading-relaxed">
                Over the coming months, we will expand the design systems that
                are currently available at launch. In addition to that, we are
                planning to create several tailwind configurations to easily get
                started with the proper colors and variants that belong to each
                design system.&nbsp;
              </p>
            </div>
            <div className="header-block">
              <h3 className="text-xl">Not only templates</h3>
              <br></br>
            </div>
            <div className="paragraph-block">
              <p className="mb-6 ">
                We are planning to bring more tailwind and web
                development-related content such as videos, blog posts,
                tutorials and news.&nbsp;
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="bg-primary">
        <footer className="mx-auto container px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-3 px-6 lg:px-0 gap-4">
            <div className="text-white">
              <h1 className="font-bold text-lg"></h1>
              <ul className="space-y-1">
                <li>
                  <a href="" className="hover:text-secondary-lighter">
                    ABC
                  </a>
                </li>
                <li>
                  <a href="">DEF</a>
                </li>
                <li>
                  <a href="">HIJ</a>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-lg"></h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.knowies.com/collections/77d247ce-14fd-11eb-91a4-5616ea45b6fe"
                    rel="noopener"
                    target="_blank"
                  >
                    Amazing tools
                  </a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <div className="mt-4 inline-block">
                <a
                  href="https://tailwindtemplates.m-pages.com/newsletter"
                  target="_blank"
                  rel="noopener"
                  className="bg-secondary py-2 px-3 -ml-1 rounded-lg text-white font-bold flex hover:bg-secondary-lighter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Subscribe to newsletter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div> */}
    </main>
  );
}
