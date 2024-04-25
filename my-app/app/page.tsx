import Image from "next/image";
export default function Home() {
  return (
  <main>
<div>

    <div>mistake logo </div>
    <div className="m-auto	margin: auto;px-30">
        <nav className="flex; justify-content: space-between;align-items: center; margin: 2rem,1rem;padding-right: 7rem">
        <a className="m-1; font-bold; text-lg; "href="">
                <div></div>
                <h1>TailwindTemplates</h1>
            </a>

            <div>
                <ul className="flex; gap-32; items-center" >
                    <li>
                        <a href="">
                            Templates
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Resource
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div className="mt-5;p-1">
        <div className="min-h-24  w-auto box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1); border-radius: 0.75rem">
        </div>
    </div>

    <div className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto text-center" >
        <div className="bg-blue-100 inline-block py-1 px-4 rounded-xl mb-6">
            <p className="color: rgb(239 246 255) font-bold" >Update</p>
        </div>
            <h1 className="text-3xl md:text-5xl text-ui-secondary font-semibold">
                TailwindTemplates v2 is here
            </h1>
    </div>







  </main>
 
  
    
  );
}
