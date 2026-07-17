import { prisma } from "@/lib/prisma";

export default async function PropertiesPage() {
  let properties: any[] = [];

  try {
    properties = await prisma.property.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.error("Prisma failed to load on Vercel preview. Using mock data.");
    properties = [
      { id: "1", title: "Villa Nubay", price: "€1,250,000", status: "AVAILABLE", bedrooms: 4, bathrooms: 3, type: "Villa", community: "Nueva Andalucía", isFeatured: true, createdAt: new Date() },
      { id: "2", title: "Marina Penthouse", price: "€890,000", status: "RESERVED", bedrooms: 3, bathrooms: 2, type: "Penthouse", community: "Puerto Banús", isFeatured: false, createdAt: new Date(Date.now() - 86400000) },
      { id: "3", title: "Golf Valley Townhouse", price: "€645,000", status: "SOLD", bedrooms: 3, bathrooms: 3, type: "Townhouse", community: "La Quinta", isFeatured: false, createdAt: new Date(Date.now() - 172800000) },
    ];
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-500 mt-1">Manage your listings and prepare for MLS integration.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Featured
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-gray-500">
                    No properties found.
                  </td>
                </tr>
              ) : (
                properties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{property.title}</span>
                        {property.community && <span className="text-sm text-gray-500">{property.community}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {property.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {property.type && <span>{property.type}</span>}
                      {(property.bedrooms || property.bathrooms) && (
                        <span> · {property.bedrooms ?? "–"} bed / {property.bathrooms ?? "–"} bath</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        property.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' :
                        property.status === 'RESERVED' ? 'bg-yellow-100 text-yellow-800' :
                        property.status === 'SOLD' ? 'bg-gray-100 text-gray-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {property.isFeatured ? "★ Featured" : "—"}
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
