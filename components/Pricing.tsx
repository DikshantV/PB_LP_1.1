import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div id="pricing" className="mb-8">
      <div className="flex flex-col items-center font-medium mt-16 mb-12 px-12 mx-auto max-w-[550px] ">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Our pricing
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Pricing That Grows With You
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          From casual prep to full-scale readiness, PrepBettr offers flexible plans for every stage of your journey.
          Choose the plan that fits your goals and start leveling up today.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center pb-20 gap-8">
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8">
          <div className="font-bold text-gray-500">Individual</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$29</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <button className="text-white mb-8 bg-black py-1.5 w-full rounded-lg cursor-pointer">
            Get started
          </button>
          <div className="flex flex-col gap-6">
            <div>
              <IoMdCheckmark className="inline mr-2" /> 5 AI voice interviews/month
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 5 coding challenges/month
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Basic personalized path
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Basic performance tracking
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 10 AI-generated flashcards
            </div>
          </div>
        </div>

        <div className="shadow-2xl border-2 rounded-2xl p-8 bg-black text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gray-500">Pro</div>
            <div className="border-2 w-fit p-0.5 px-3 text-xs rounded-xl border-slate-300/20 bg-gradient-to-r from-pink-500  via-lime-600 to-sky-400 text-transparent bg-clip-text font-bold tracking-tighter">
              Most Popular
            </div>
          </div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$69</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <button className="text-black font-medium mb-8 bg-white py-1.5 w-full rounded-lg cursor-pointer">
            Sign up now
          </button>
          <div className="flex flex-col gap-6">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Unlimited voice interviews
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Unlimited coding practice
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Full personalized interview paths
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" />  Follow-up Drill Mode
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Analytics & weekly updates
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Role insights with market trends
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> System Design Sandbox
            </div>
          </div>
        </div>
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8">
          <div className="font-bold text-gray-500">Business</div>
          <div className="py-8">
            <span className="font-extrabold text-2xl">Custom Pricing</span>
          </div>
          <button className="text-white mb-8 bg-black py-1.5 w-full rounded-lg cursor-pointer">
            Talk to us
          </button>
          <div className="flex flex-col gap-6">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Everything in Pro
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Admin dashboard with cohort-level analytics
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Curriculum & LMS integrations
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Centralized onboarding for team members
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Dedicated account
              manager
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Early access to new features
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" />
              Collaborative interview resources
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" />
              Multi-language support (beta)
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" />  API access for internal platforms
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Advanced security
              features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
