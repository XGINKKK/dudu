import React from 'react';

interface Metric {
  label: string;
  value: string;
  color: 'purple' | 'green' | 'violet';
}

interface StatusPanelProps {
  title: string;
  icon: React.ReactNode;
  metrics: Metric[];
}

const StatusPanel: React.FC<StatusPanelProps> = ({ title, icon, metrics }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return 'text-purple-400';
      case 'green':
        return 'text-green-400';
      case 'violet':
        return 'text-violet-400';
      default:
        return 'text-purple-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 hover:border-purple-400/40 transition-colors duration-300 shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-purple-400">
          {icon}
        </div>
        <h3 className="text-purple-300 font-orbitron font-semibold text-sm">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">{metric.label}</span>
            <span className={`text-xs font-mono font-semibold ${getColorClasses(metric.color)}`}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPanel;