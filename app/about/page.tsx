export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">About PrepBettr</h1>
      <p className="text-lg mb-4">PrepBettr is on a mission to empower candidates to ace their interviews with confidence. Our platform leverages AI to deliver personalized, realistic, and effective interview preparation for everyone.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Founded in 2024 by a team of engineers and educators</li>
        <li>Trusted by hundreds of candidates worldwide</li>
        <li>Driven by a passion for innovation and learning</li>
      </ul>
    </div>
  );
}

