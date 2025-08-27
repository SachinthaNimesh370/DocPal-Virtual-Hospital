import React from 'react';
import { CreditCard, Users, Building, TrendingUp } from 'lucide-react';

const BusinessModel = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable healthcare solutions with flexible pricing and strategic partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Freemium Model</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Free Tier</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Basic AI symptom checker</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Health awareness library access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Basic health tracking</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Premium Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Unlimited doctor consultations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Advanced AI diagnostics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">IoT device integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Priority emergency services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Strategic Partnerships</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Networks</h4>
                <p className="text-gray-600">
                  Partnerships with hospitals, clinics, and healthcare providers to ensure 
                  comprehensive care and seamless referrals.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pharmacy Chains</h4>
                <p className="text-gray-600">
                  Strategic alliances with pharmacy networks for medication delivery and 
                  inventory management.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Transportation Services</h4>
                <p className="text-gray-600">
                  Ambulance and patient transport partnerships for emergency services and 
                  medical appointments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Revenue Streams</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-medium">Subscription</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-medium">Pay-per-use</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-medium">B2B Services</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-medium">Commission</div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold mb-4">Market Opportunity</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold">$350B</div>
                  <div className="text-blue-100 text-sm">Global Telemedicine Market</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">28%</div>
                  <div className="text-blue-100 text-sm">Annual Growth Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1.3B+</div>
                  <div className="text-blue-100 text-sm">Target Population (India)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;