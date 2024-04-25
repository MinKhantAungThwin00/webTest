import Image from "next/image";
export default function Home() {
  return (
    <main className="m-1 p-0">
      <div className="container mt-0 ">
        <nav className="flex items-center justify-between py-8 px-4 sm:px-0">
          <a
            className="w-1/4 text-primary font-bold text-2xl flex items-center space-x-2"
            href=""
          >
            <div className="p-7">
              <img
                className="h-10 w-10 rounded-full"
                src="./images/shulinp.png"
                alt="image"
              />
            </div>
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
              <img
                className="h-10 w-10 rounded-full"
                src="./images/shulinp.png"
                alt="image"
              />
            </a>
            <a className="mr-2" href="">
              <img
                className="h-10 w-10 rounded-full"
                src="./images/shulinp.png"
                alt="image"
              />
            </a>
            <a className="mr-2" href="">
              <img
                className="h-10 w-10 rounded-full"
                src="./images/shulinp.png"
                alt="image"
              />
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

      <footer id="hireme" className="flex gap-4 ">
        <a href="">a</a>

        <a href="">b</a>

        <a href="">c</a>

        <a href="">d</a>
      </footer>
    </main>
  );
}
