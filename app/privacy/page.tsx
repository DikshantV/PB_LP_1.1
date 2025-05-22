export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Privacy Policy</h1>
      <p className="text-lg mb-4">Your privacy is important to us. This page explains how PrepBettr collects, uses, and protects your information.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>We do not sell your personal data to third parties.</li>
        <li>All data is encrypted and securely stored.</li>
        <li>You can request data deletion at any time.</li>
        <li>For more details, contact <a href="mailto:support@prepbettr.com" className="underline text-blue-700">support@prepbettr.com</a>.</li>
      </ul>
    </div>
  );
}

