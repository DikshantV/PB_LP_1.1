export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Frequently Asked Questions</h1>
      <div className="space-y-8">
        <div>
          <h2 className="font-bold text-xl mb-2">What is PrepBettr?</h2>
          <p>PrepBettr is an AI-powered interview preparation platform offering voice-based mock interviews, coding challenges, and personalized prep paths to help you perform with confidence.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Who can use PrepBettr?</h2>
          <p>Anyone preparing for technical interviews, from students to experienced professionals, can benefit from PrepBettr's tailored features and insights.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">What makes PrepBettr different?</h2>
          <p>PrepBettr combines realistic AI voice interviews, smart coding practice, and real-time analytics to provide a holistic and personalized prep experience.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Can I try PrepBettr for free?</h2>
          <p>We offer a free trial for new users so you can experience our features before subscribing to a plan.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">How do I get started?</h2>
          <p>Simply sign up on our website, choose a plan, and start preparing for your next interview with confidence!</p>
        </div>
      </div>
    </div>
  );
}

