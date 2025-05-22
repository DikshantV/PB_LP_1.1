export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Contact Us</h1>
      <p className="text-lg mb-4">Have questions, feedback, or partnership inquiries? Reach out to the PrepBettr team and we’ll get back to you as soon as possible.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Email: <a href="mailto:support@prepbettr.com" className="underline text-blue-700">support@prepbettr.com</a></li>
        <li>Twitter: <a href="https://twitter.com/PrepBettr" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">@PrepBettr</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/prepbettr" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">PrepBettr</a></li>
      </ul>
    </div>
  );
}

