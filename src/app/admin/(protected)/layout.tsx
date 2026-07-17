import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogOut, LayoutDashboard, Users, Home, Calendar, CheckSquare, MessageSquare, FileText, Settings } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-10">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="font-serif text-xl font-bold tracking-wide text-gray-900">KLB CRM</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <SidebarItem href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <SidebarItem href="/admin/leads" icon={<Users size={20} />} label="Leads" />
          <SidebarItem href="/admin/properties" icon={<Home size={20} />} label="Properties" />
          <SidebarItem href="/admin/viewings" icon={<Calendar size={20} />} label="Viewings" />
          <SidebarItem href="/admin/tasks" icon={<CheckSquare size={20} />} label="Tasks" />
          <SidebarItem href="/admin/messages" icon={<MessageSquare size={20} />} label="Messages" />
          <SidebarItem href="/admin/blog" icon={<FileText size={20} />} label="Blog Posts" />
          <div className="pt-4 mt-4 border-t border-gray-100">
            <SidebarItem href="/admin/settings" icon={<Settings size={20} />} label="Settings" />
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
              {session.user?.name?.charAt(0) || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{session.user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
            </div>
          </div>
          
          <form action="/api/auth/signout" method="POST">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors">
              <LogOut size={20} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-lg font-medium text-gray-800">Admin Dashboard</h2>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-sm text-gray-500 hover:text-gray-900">
              View Website ↗
            </Link>
          </div>
        </header>
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}
