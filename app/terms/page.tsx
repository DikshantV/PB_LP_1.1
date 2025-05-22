export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Terms of Service</h1>
      <p className="text-lg mb-4">Please read these terms and conditions carefully before using PrepBettr. By accessing or using our platform, you agree to be bound by these terms.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Use PrepBettr only for lawful purposes.</li>
        <li>Do not share your account credentials with others.</li>
        <li>All content is protected by copyright and intellectual property laws.</li>
        <li>We reserve the right to update these terms at any time.</li>
      </ul>
    </div>
  );
}

