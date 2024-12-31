import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function EditTax() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [taxData, setTaxData] = useState({
    name: '',
    tax: 0,
    allowStateTax: false,
    states: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountryData();
  }, [id]);

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/countries/${id}`);
      setTaxData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch country data');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/countries/${id}`, taxData);
      toast.success('Country tax data updated successfully');
      navigate('/manage-tax');
    } catch (err) {
      setError('Failed to update tax data');
      toast.error('Error updating country tax data');
    }
  };

  const handleStateChange = (index, field, value) => {
    const updatedStates = [...taxData.states];
    updatedStates[index] = { ...updatedStates[index], [field]: value };
    setTaxData({ ...taxData, states: updatedStates });
  };

  const addState = () => {
    setTaxData({
      ...taxData,
      states: [...taxData.states, { name: '', tax: 0 }]
    });
  };

  const removeState = (index) => {
    const updatedStates = taxData.states.filter((_, i) => i !== index);
    setTaxData({ ...taxData, states: updatedStates });
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{taxData.name} Tax</h1>
          <button
            onClick={() => navigate('/manage-tax')}
            className="bg-teal-400 text-white px-4 py-2 rounded flex items-center hover:bg-teal-500 transition duration-300"
          >
            <span className="mr-2">←</span> Back
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">
              Country Name
            </label>
            <input
              type="text"
              value={taxData.name}
              onChange={(e) => setTaxData({ ...taxData, name: e.target.value })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Tax (%) *</label>
            <input
              type="number"
              value={taxData.tax}
              onChange={(e) => setTaxData({ ...taxData, tax: Number(e.target.value) })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              <span className="font-semibold">Allow State Tax</span>
            </label>
          </div>

          {taxData.allowStateTax && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{taxData.name} / State List</h2>
              
              {taxData.states.map((state, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) => handleStateChange(index, 'name', e.target.value)}
                    placeholder="State Name"
                    className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                  <input
                    type="number"
                    value={state.tax}
                    onChange={(e) => handleStateChange(index, 'tax', Number(e.target.value))}
                    placeholder="Tax (%)"
                    className="w-24 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeState(index)}
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addState}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Add State
              </button>
            </div>
          )}

          <button
            type="submit"
            className="bg-teal-400 text-white px-6 py-2 rounded hover:bg-teal-500 transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

