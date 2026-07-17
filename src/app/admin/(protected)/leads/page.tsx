import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function LeadsPage() {
  let leads: any[] = [];
  
  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.error("Prisma failed to load on Vercel preview. Using mock data.");
    leads = [
      { id: "1", name: "Alice Johnson", email: "alice@example.com", phone: "+420 123 456 789", source: "CONTACT_FORM", status: "NEW", createdAt: new Date() },
      { id: "2", name: "Bob Smith", email: "bob@example.com", phone: "+44 7700 900077", source: "PROPERTY_INQUIRY", propertyId: "nubay", status: "CONTACTED", createdAt: new Date(Date.now() - 86400000) },
      { id: "3", name: "Charlie Davis", email: "charlie@example.com", phone: "+1 555 123 4567", source: "NEWSLETTER", status: "QUALIFIED", createdAt: new Date(Date.now() - 172800000) },
    ];
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <p className="text-gray-500 mt-1">Manage all your incoming inquiries and contacts.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-gray-500">
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                        <span className="text-sm text-gray-500">{lead.email}</span>
                        {lead.phone && <span className="text-xs text-gray-400 mt-0.5">{lead.phone}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {lead.source.replace('_', ' ')}
                      </div>
                      {lead.propertyId && (
                        <div className="text-xs text-blue-600 mt-0.5">Property ID: {lead.propertyId}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        lead.status === 'NEW' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'CONTACTED' ? 'bg-yellow-100 text-yellow-800' :
                        lead.status === 'QUALIFIED' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href={`mailto:${lead.email}`} className="text-blue-600 hover:text-blue-900">
                        Email
                      </a>
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
