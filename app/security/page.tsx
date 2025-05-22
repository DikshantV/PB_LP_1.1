export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Security</h1>
      <p className="text-lg mb-4">At PrepBettr, your data security is our top priority. We employ industry-leading practices to keep your information safe and private.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>All user data is encrypted in transit and at rest.</li>
        <li>We use secure authentication and authorization protocols.</li>
        <li>Regular security audits and vulnerability assessments are conducted.</li>
        <li>Access to sensitive data is strictly controlled and monitored.</li>
        <li>We comply with global data protection regulations.</li>
        <li>For security concerns, contact <a href="mailto:support@prepbettr.com" className="underline text-blue-700">support@prepbettr.com</a>.</li>
      </ul>
    </div>
  );
}

