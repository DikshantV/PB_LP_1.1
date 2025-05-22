export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Pricing</h1>
      <p className="text-lg mb-8">From casual prep to full-scale readiness, PrepBettr offers flexible plans for every stage of your journey. Choose the plan that fits your goals and start leveling up today.</p>
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8">
        {/* Individual Plan */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8 bg-white">
          <div className="font-bold text-gray-500">Individual</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$29</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <div className="flex flex-col gap-4 text-[#001E80]">
            <div>5 AI voice interviews/month</div>
            <div>5 coding challenges/month</div>
            <div>Basic personalized path</div>
            <div>Basic performance tracking</div>
            <div>10 AI-generated flashcards</div>
          </div>
        </div>
        {/* Pro Plan */}
        <div className="shadow-2xl border-2 rounded-2xl p-8 bg-black text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gray-500">Pro</div>
            <div className="border-2 w-fit p-0.5 px-3 text-xs rounded-xl border-slate-300/20 bg-gradient-to-r from-pink-500  via-lime-600 to-sky-400 text-transparent bg-clip-text font-bold tracking-tighter">Most Popular</div>
          </div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$69</span>
            <span className="font-semibold text-gray-400">/month</span>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <div>Unlimited voice interviews</div>
            <div>Unlimited coding practice</div>
            <div>Full personalized interview paths</div>
            <div>Follow-up Drill Mode</div>
            <div>Analytics & weekly updates</div>
            <div>Role insights with market trends</div>
            <div>System Design Sandbox</div>
          </div>
        </div>
        {/* Business Plan */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8 bg-white">
          <div className="font-bold text-gray-500">Business</div>
          <div className="py-8">
            <span className="font-extrabold text-2xl">Custom Pricing</span>
          </div>
          <div className="flex flex-col gap-4 text-[#001E80]">
            <div>Everything in Pro</div>
            <div>Admin dashboard with cohort-level analytics</div>
            <div>Curriculum & LMS integrations</div>
            <div>Centralized onboarding for team members</div>
            <div>Dedicated account manager</div>
            <div>Early access to new features</div>
            <div>Collaborative interview resources</div>
            <div>Multi-language support (beta)</div>
            <div>API access for internal platforms</div>
            <div>Advanced security features</div>
          </div>
        </div>
      </div>
    </div>
  );
}

