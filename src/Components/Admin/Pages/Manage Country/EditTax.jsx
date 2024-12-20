import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTax() {
  const { country } = useParams()
  const navigate = useNavigate()
  
  const [taxData, setTaxData] = useState({
    country: country || '',
    tax: 0,
    allowStateTax: false,
    states: {
      assam: 0,
      bihar: 0,
      bombay: 0
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted tax data:', taxData)
    navigate('/manage-tax')
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{country} / Tax</h1>
          <button
            onClick={() => navigate('/admin/manage/country/tax')}
            className="bg-teal-400 text-white px-4 py-2 rounded flex items-center"
          >
            <span className="mr-2">←</span> Back
          </button>
        </div>
        {/* <div className="flex items-center text-gray-600 mt-2">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Country</span>
          <span className="mx-2">{'>'}</span>
          <span>Manage Tax</span>
          <span className="mx-2">{'>'}</span>
          <span>Tax</span>
        </div> */}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">
              Country * <span className="text-gray-500">(In Any Language)</span>
            </label>
            <input
              type="text"
              value={taxData.country}
              onChange={(e) => setTaxData({ ...taxData, country: e.target.value })}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Tax (%) *</label>
            <input
              type="number"
              value={taxData.tax}
              onChange={(e) => setTaxData({ ...taxData, tax: Number(e.target.value) })}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={taxData.allowStateTax}
                onChange={(e) => setTaxData({ ...taxData, allowStateTax: e.target.checked })}
                className="mr-2"
              />
              Allow State Tax
            </label>
          </div>

          {taxData.allowStateTax && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">India / State List</h2>
              
              <div>
                <label className="block mb-2">Assam (%) *</label>
                <input
                  type="number"
                  value={taxData.states.assam}
                  onChange={(e) => setTaxData({
                    ...taxData,
                    states: { ...taxData.states, assam: Number(e.target.value) }
                  })}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Bihar (%) *</label>
                <input
                  type="number"
                  value={taxData.states.bihar}
                  onChange={(e) => setTaxData({
                    ...taxData,
                    states: { ...taxData.states, bihar: Number(e.target.value) }
                  })}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Bombay (%) *</label>
                <input
                  type="number"
                  value={taxData.states.bombay}
                  onChange={(e) => setTaxData({
                    ...taxData,
                    states: { ...taxData.states, bombay: Number(e.target.value) }
                  })}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="bg-teal-400 text-white px-6 py-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

