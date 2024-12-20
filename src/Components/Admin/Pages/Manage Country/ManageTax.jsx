import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ManageTax() {
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesCount, setEntriesCount] = useState(10)
  const [countries] = useState([
    { name: 'Pakistan', tax: 0 },
    { name: 'Nepal', tax: 0 },
    { name: 'India', tax: 0 },
    { name: 'Belarus', tax: 0 },
    { name: 'Bangladesh', tax: 5 },
    { name: 'Austria', tax: 0 },
    { name: 'Australia', tax: 0 },
    { name: 'Algeria', tax: 0 }
  ])

  const navigate = useNavigate()

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Manage Country</h1>
        <div className="flex items-center text-gray-600">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Manage Country</span>
          <span className="mx-2">{'>'}</span>
          <span>Country</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span>Show</span>
            <select
              className="mx-2 border rounded px-2 py-1"
              value={entriesCount}
              onChange={(e) => setEntriesCount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Search:</span>
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Country Name</th>
              <th className="text-left py-2">Tax</th>
              <th className="text-left py-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredCountries.slice(0, entriesCount).map((country) => (
              <tr key={country.name} className="border-b">
                <td className="py-2">{country.name}</td>
                <td className="py-2">{country.tax} (%)</td>
                <td className="py-2">
                  <button
                    onClick={() => navigate(`/tax/country`)}
                    className="bg-teal-400 text-white px-4 py-1 rounded"
                  >
                    Set Tax
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

