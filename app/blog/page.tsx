export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#acbae8] to-white p-10 font-medium text-[#001E80]">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">Blog</h1>
      <p className="text-lg mb-4">Read the latest insights, tips, and stories from the PrepBettr team and our community. Stay updated on interview trends, AI in hiring, and more!</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>How to Ace Your Next Technical Interview</li>
        <li>AI in Interview Preparation: What You Need to Know</li>
        <li>Success Stories: PrepBettr Users Share Their Journey</li>
        <li>Building Confidence for Remote Interviews</li>
      </ul>
    </div>
  );
}

