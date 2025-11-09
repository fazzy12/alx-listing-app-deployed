// components/booking/CancellationPolicy.tsx
import React from 'react';

const CancellationPolicy: React.FC = () => (
  <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
    {/* Cancellation Policy */}
    <section className="mb-6 border-b border-gray-300 pb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Cancellation Policy</h2>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold text-emerald-700">Free cancellation before Aug 23.</span> Cancel before
        check-in on **Aug 24** for a partial refund. Please ensure you review the full policy upon booking confirmation.
      </p>
    </section>

    {/* Ground Rules */}
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-3">Ground Rules</h2>
      <ul className="text-gray-600 list-disc list-inside space-y-2 ml-4">
        <li>Please follow the house rules strictly as provided by the Host.</li>
        <li>Treat your Host’s home like your own.</li>
        <li>Quiet hours must be respected between 10:00 PM and 8:00 AM.</li>
        <li>No parties or events without prior permission.</li>
      </ul>
    </section>
  </div>
);

export default CancellationPolicy;