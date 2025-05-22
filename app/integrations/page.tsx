export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Integrations</h1>
      <p className="text-lg mb-4">PrepBettr seamlessly integrates with your favorite tools to enhance your interview preparation experience.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Calendar integration for scheduling mock interviews</li>
        <li>Slack & Email notifications for reminders and feedback</li>
        <li>GitHub integration for coding challenge submissions</li>
        <li>Google Drive for saving notes and resources</li>
        <li>Zoom/Meet integration for live mock interviews</li>
      </ul>
    </div>
  );
}

