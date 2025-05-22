export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Features</h1>
      <p className="text-lg mb-4">Discover all the powerful features of PrepBettr that help you ace your interviews with confidence.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Voice-Based Mock Interviews with AI feedback</li>
        <li>Personalized Interview Paths tailored to your goals</li>
        <li>Smart Coding Interface with real-time code review</li>
        <li>Real-Time Feedback & Insights to track your progress</li>
        <li>Role-specific and company-specific question banks</li>
        <li>Interactive analytics dashboard</li>
      </ul>
    </div>
  );
}

