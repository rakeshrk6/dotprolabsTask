const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute bottom-72 left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className=" md:mx-12 flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 flex-col">
          <img src="logo.png" alt="" />

          <img className="w-20" src="logo-name.png" alt="" />
        </div>
        <nav className="flex flex-wrap items-center md:gap-12 justify-center space-x-4 md:space-x-8">
          <a
            href="#about"
            className="hover:text-yellow-500 font-extrabold text-md transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#roadmap"
            className="hover:text-yellow-500 font-extrabold text-md transition-colors duration-300"
          >
            Roadmap
          </a>
          <a
            href="#faqs"
            className="hover:text-yellow-500 font-extrabold text-md transition-colors duration-300"
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-500 font-extrabold text-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors duration-300"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.328-.913.487-1.302.478-.428-.009-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.144.12.101.153.238.166.373.032.342-.013.811-.013.811z" />
              </svg>
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors duration-300"
              aria-label="Reddit"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.566-.391.106-.803.162-1.227.162-.3 0-.592-.028-.876-.082.592 1.844 2.31 3.186 4.347 3.222-1.593 1.248-3.604 1.992-5.79 1.992-.376 0-.75-.023-1.12-.065 2.064 1.323 4.516 2.094 7.156 2.094 8.582 0 13.272-7.108 13.272-13.27 0-.2-.005-.4-.015-.598.91-.66 1.703-1.486 2.332-2.428z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
