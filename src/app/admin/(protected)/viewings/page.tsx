import { prisma } from "@/lib/prisma";

export default async function ViewingsPage() {
  let viewings: any[] = [];

  try {
    viewings = await prisma.viewing.findMany({
      orderBy: { scheduledAt: "asc" },
      include: { lead: true, property: true, agent: true }
    });
  } catch (e) {
    console.error("Prisma failed to load on Vercel preview. Using mock data.");
    viewings = [
      { id: "1", scheduledAt: new Date(Date.now() + 86400000), status: "SCHEDULED", lead: { name: "Alice Johnson" }, property: { title: "Villa Nubay" }, agent: { name: "Lucie" } },
      { id: "2", scheduledAt: new Date(Date.now() - 86400000), status: "COMPLETED", lead: { name: "Bob Smith" }, property: { title: "Marina Penthouse" }, agent: { name: "KLB Admin" } },
      { id: "3", scheduledAt: new Date(Date.now() + 172800000), status: "SCHEDULED", lead: { name: "Charlie Davis" }, property: { title: "Golf Valley Townhouse" }, agent: null },
    ];
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Viewings</h1>
        <p className="text-gray-500 mt-1">Track scheduled, completed, and cancelled property viewings.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date &amp; Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {viewings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-gray-500">
                    No viewings found.
                  </td>
                </tr>
              ) : (
                viewings.map((viewing) => (
                  <tr key={viewing.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {viewing.scheduledAt.toLocaleDateString()} {viewing.scheduledAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {viewing.lead?.name ?? "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {viewing.property?.title ?? "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {viewing.agent?.name ?? "Unassigned"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        viewing.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800' :
                        viewing.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                        viewing.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {viewing.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
