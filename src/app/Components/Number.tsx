import React from 'react';
import { 
  Percent, 
  Timer, 
  TrendingUp, 
  Building2, 
  Users, 
  DollarSign,
  ArrowUpRight,
  Clock
} from 'lucide-react';

function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  className = '' 
}: { 
  icon: React.ElementType;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="p-2 bg-gray-100 rounded-lg">
        <Icon className="w-5 h-5 text-gray-700" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div
        className="bg-white rounded-xl shadow-lg overflow-auto"
        style={{ width: '1448px', height: '372px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          {/* Projected Financial Metrics */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-800">Projected Financial Metrics</h3>
            <MetricCard icon={Percent} label="IRR" value="13.9%" />
            <MetricCard icon={TrendingUp} label="Equity Multiple" value="2.3x" />
            <MetricCard icon={DollarSign} label="Return on Equity" value="18.5%" />
            <MetricCard icon={DollarSign} label="Return on Cost" value="19.2%" />
          </div>

          {/* Key Assumptions */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-800">Key Assumptions</h3>
            <MetricCard icon={DollarSign} label="Exit Price" value="$195,000,000" />
            <MetricCard icon={Percent} label="Exit Cap Rate" value="5.0%" />
            <MetricCard icon={TrendingUp} label="Rental Growth" value="3.5%" />
            <MetricCard icon={Timer} label="Hold Period" value="16 Years" />
          </div>

          {/* Market Analysis */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-800">Market Analysis</h3>
            <MetricCard icon={Building2} label="Nearest Urban Center" value="Brooklyn, NY" />
            <MetricCard icon={TrendingUp} label="Population Growth Rate" value="1.2%" />
            <MetricCard icon={Users} label="Median Household Income" value="$76,912" />
            <MetricCard icon={Percent} label="Unemployment Rate" value="7.4%" />
          </div>

          {/* Lease Analysis */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-800">Lease Analysis</h3>
            <MetricCard icon={DollarSign} label="Rent PSF" value="$24.40" />
            <MetricCard icon={Clock} label="WALT" value="13 Yrs (Sep 37)" />
            <MetricCard icon={ArrowUpRight} label="Rent Escalations" value="3%" />
            <MetricCard icon={TrendingUp} label="Mark-to-Market Opportunity" value="30%+" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number;
