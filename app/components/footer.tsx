export default function Footer(){
    return(
        <footer className="border-t  bg-white/70 backdrop-blur dark:bg-neutral-900/60 ml-100% ">
      <div className="auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-black " >
        <div className="grid gap-6 py-8 sm:grid-cols-3 ">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">YourBrand</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Building delightful web experiences.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm">
            <a href="#" className="text-neutral-700 hover:underline dark:text-neutral-300">
              About
            </a>
            <a href="#" className="text-neutral-700 hover:underline dark:text-neutral-300">
              Blog
            </a>
            <a href="#" className="text-neutral-700 hover:underline dark:text-neutral-300">
              Projects
            </a>
            <a href="#" className="text-neutral-700 hover:underline dark:text-neutral-300">
              Contact
            </a>
          </nav>


            <label className="block text-sm font-medium">Stay in the loop</label>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full min-w-0 rounded-l-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800 dark:border-neutral-700 dark:bg-neutral-800"
              />
              <button
                type="submit"
                className="rounded-r-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:border-neutral-200 dark:bg-neutral-200 dark:text-neutral-900"
              >
                Join
              </button>
            </div>
      
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t py-4 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row ">
          <p>© {2025} YourBrand. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:underline">Twitter</a>
            <a href="#" aria-label="GitHub" className="hover:underline">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
    )
}