export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Updates</h1>
      <p className="text-lg mb-4">Stay up to date with the latest features, improvements, and announcements from PrepBettr.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>May 2025: Added new company-specific question banks</li>
        <li>April 2025: Improved AI feedback for voice interviews</li>
        <li>March 2025: Launched integrations with Google Drive and Slack</li>
        <li>February 2025: Enhanced analytics dashboard</li>
      </ul>
    </div>
  );
}

