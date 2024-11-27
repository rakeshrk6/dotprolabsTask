import * as Accordion from "@radix-ui/react-accordion"
import { accordianData } from "./data"

const FAQ = () => {
  return (
    <div className="md:py-36 py-14 bg-gray-900 text-white p-4 relative overflow-hidden">
      <div className="absolute bottom-72 left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-72 right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className=" max-w-[58rem] mx-auto relative z-10 bg-gray-800 bg-opacity-50 rounded-xl px-16 py-10">
        <h2 className="text-2xl md:text-3xl text-yellow-500 font-bold mb-8 text-center">
          FAQs
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {accordianData.map((item, index) => (
            <Accordion.Item
              key={`item-${index}`}
              value={`item-${index}`}
              className="group"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between cursor-pointer py-4 text-base md:text-lg border-b border-gray-800 w-full text-left">
                  {item.header}

                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 group-data-[state=open]:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-4 text-gray-400 overflow-hidden transition-all duration-500 max-h-0 data-[state=open]:max-h-96">
                {item.content}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export default FAQ
