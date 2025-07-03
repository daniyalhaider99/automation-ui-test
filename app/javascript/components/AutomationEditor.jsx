import React, { useState } from "react";

// Inline SVGs for sidebar icons
const Logo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#222" />
    <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="sans-serif" dy=".3em">m</text>
  </svg>
);
const SidebarIcon = ({ children, active }) => (
  <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-2 ${active ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>{children}</div>
);
const HomeIcon = ({ active }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={active ? '#2563eb' : '#9ca3af'} strokeWidth="2"><path d="M3 10.75L12 4l9 6.75V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.75z"/><path d="M9 22V12h6v10"/></svg>
);
const PeopleIcon = ({ active }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={active ? '#2563eb' : '#9ca3af'} strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6"/></svg>
);
const AutomationIcon = ({ active }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={active ? '#2563eb' : '#9ca3af'} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 7h10v10H7z"/></svg>
);
const ChatIcon = ({ active }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={active ? '#2563eb' : '#9ca3af'} strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const SettingsIcon = ({ active }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={active ? '#9ca3af' : '#9ca3af'} strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const GridIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
);
const FolderIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
);
const TrashIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2"><path d="M3 6h18M9 6v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6m-6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
);

const Avatar = () => (
  <div className="relative w-10 h-10 mx-auto mb-4">
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt="avatar"
      className="w-10 h-10 rounded-full border-2 border-white shadow"
    />
    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">PRO</span>
  </div>
);

// Add TemplatesModal component
const TemplatesModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl mx-4 relative animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b px-8 py-6">
          <h2 className="text-3xl font-bold">Ready-to-Go Templates</h2>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
              <input type="checkbox" className="rounded border-gray-300" />
              Don't show Templates again
            </label>
            <button className="bg-white border border-gray-200 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
              <span className="inline-block rotate-45">✧</span> Create With AI
            </button>
            <button className="bg-white border border-gray-200 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50">Start From Scratch</button>
            <button className="ml-2 text-gray-400 hover:text-gray-600 text-2xl leading-none" onClick={onClose} aria-label="Close">×</button>
          </div>
        </div>
        {/* Search */}
        <div className="px-8 py-4 border-b">
          <input type="text" placeholder="Search Templates" className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm" />
        </div>
        {/* Templates Grid */}
        <div className="px-8 py-6">
          <h3 className="text-lg font-semibold mb-4">All Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - selected */}
            <div className="border-2 border-blue-400 rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-lg font-bold mb-1">Auto-DM links from comments</div>
                <div className="text-gray-500 text-sm mb-4">Send a link when people comment on a post or reel</div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs text-gray-400">⚡ Quick Automation</span>
                <span className="bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded">POPULAR</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-lg font-bold mb-1">Generate leads with stories</div>
                <div className="text-gray-500 text-sm mb-4">Use limited-time offers in your Stories to convert leads</div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs text-gray-400">⚡ Quick Automation</span>
                <span className="bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded">POPULAR</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-lg font-bold mb-1">Automate conversations with AI</div>
                <div className="text-gray-500 text-sm mb-4">Get AI to collect your follower's info, share details or tell it how to reply</div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs text-gray-400 flex items-center gap-1">{/* icon */}<span className="inline-block">🔗</span> Flow Builder</span>
                <span className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded">AI</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-lg font-bold mb-1">Use AI to answer all your FAQs</div>
                <div className="text-gray-500 text-sm mb-4">AI will reply to questions you get asked all the time</div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs text-gray-400 flex items-center gap-1">🔗 Flow Builder</span>
                <span className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded">AI</span>
              </div>
            </div>
            {/* Card 5 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-lg font-bold mb-1">Respond to all your DMs</div>
                <div className="text-gray-500 text-sm mb-4">Auto-send customized replies when people DM you</div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs text-gray-400">⚡ Quick Automation</span>
              </div>
            </div>
            {/* Card 6 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="text-lg font-bold mb-1">Grow followers from comments</div>
                <div className="text-gray-500 text-sm mb-4">Incentivize a follow to grow your account</div>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs text-gray-400">⚡ Quick Automation</span>
                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AutomationEditor() {
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const automations = [
    {
      title: "Untitled",
      subtitle: "User comments on your Live and comment contains",
      status: false,
      runs: "n/a",
      ctr: "n/a",
      modified: "24 minutes ago",
      color: "bg-yellow-400",
    },
    {
      title: "「気になる」から収益化の方法を伝える",
      subtitle: "User comments on any Post or Reel and comment contains",
      tag: "気になる",
      runs: "1",
      ctr: "100%",
      modified: "3 days ago",
      color: "bg-red-500",
    },
    {
      title: "Untitled",
      subtitle: "User replies on any Story and message contains",
      tag: "インスタ",
      runs: "13",
      ctr: "84.6%",
      modified: "2 weeks ago",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="flex flex-col justify-between w-16 md:w-64 bg-white border-r">
        <div>
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start p-4 border-b h-16">
            <span className="block md:hidden"><Logo /></span>
            <span className="hidden md:block mr-3"><Logo /></span>
            <span className="text-xl font-bold hidden md:block">Automation</span>
          </div>
          <nav className="mt-4 flex flex-col items-center md:items-stretch">
            <SidebarIcon active={true}><AutomationIcon active={true} /></SidebarIcon>
            <SidebarIcon><HomeIcon /></SidebarIcon>
            <SidebarIcon><PeopleIcon /></SidebarIcon>
            <SidebarIcon><ChatIcon /></SidebarIcon>
            <SidebarIcon><SettingsIcon /></SidebarIcon>
          </nav>
        </div>
        <Avatar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-0 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 px-6 pt-6">
          <h2 className="text-2xl font-semibold">My Automations</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700" onClick={() => setShowTemplatesModal(true)}>
            + New Automation
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4 px-6">
          <input
            type="text"
            placeholder="Search all Automations"
            className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-64 text-sm"
          />
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Any Trigger</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Any Trigger states</option>
          </select>
        </div>

        {/* Folder & Trash */}
        <div className="flex justify-between items-center mb-4 px-6">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 text-sm font-medium">
              <FolderIcon /> FAQ
            </button>
            <button className="flex items-center gap-1 border-2 border-dashed border-blue-400 text-blue-500 rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-50">
              + New Folder
            </button>
          </div>
          <div className="flex gap-4 items-center text-sm text-gray-500">
            <a href="#" className="flex items-center gap-1 hover:underline text-blue-600"><TrashIcon /> Trash</a>
            <span className="flex items-center gap-1"><GridIcon /> View as grid</span>
          </div>
        </div>

        {/* Table Header */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2 px-8">
          <span>Name</span>
          <div className="hidden md:flex gap-8">
            <span>Runs</span>
            <span>CTR</span>
            <span>Modified</span>
          </div>
        </div>

        {/* Automation Cards */}
        <div className="space-y-4 px-6">
          {automations.map((auto, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 shadow-sm flex justify-between items-start md:items-center flex-col md:flex-row"
            >
              <div className="flex items-start gap-4">
                <input type="checkbox" className="mt-1" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${auto.color}`}></span>
                    <h3 className="font-medium text-gray-800">{auto.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {auto.subtitle}{" "}
                    {auto.tag && (
                      <span className="ml-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                        {auto.tag}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 text-sm text-gray-500 mt-4 md:mt-0 items-center">
                {typeof auto.status === 'boolean' ? (
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={auto.status} readOnly />
                    <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                    <span className="ml-2 text-xs font-medium text-gray-500">{auto.status ? 'On' : 'Off'}</span>
                  </label>
                ) : null}
                <span>{auto.runs}</span>
                <span>{auto.ctr}</span>
                <span>{auto.modified}</span>
              </div>
            </div>
          ))}
        </div>
        <TemplatesModal open={showTemplatesModal} onClose={() => setShowTemplatesModal(false)} />
      </main>
    </div>
  );
}
