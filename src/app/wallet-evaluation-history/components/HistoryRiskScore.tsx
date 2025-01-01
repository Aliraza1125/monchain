interface HistoryRiskScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const HistoryRiskScore: React.FC<HistoryRiskScoreProps> = ({
  score,
  size = 'md',
  showLabel = true,
}) => {
  const sizeConfig = {
    sm: {
      dimensions: 'w-20 sm:w-24 h-20 sm:h-24',
      viewBox: 96,
      radius: 44,
      strokeWidth: 6,
      fontSize: 'text-xl sm:text-2xl',
      labelSize: 'text-[10px] sm:text-xs'
    },
    md: {
      dimensions: 'w-24 sm:w-32 h-24 sm:h-32',
      viewBox: 112,
      radius: 50,
      strokeWidth: 8,
      fontSize: 'text-3xl sm:text-4xl',
      labelSize: 'text-xs sm:text-sm'
    },
    lg: {
      dimensions: 'w-32 sm:w-40 h-32 sm:h-40',
      viewBox: 128,
      radius: 56,
      strokeWidth: 10,
      fontSize: 'text-4xl sm:text-5xl',
      labelSize: 'text-sm sm:text-base'
    }
  };

  const config = sizeConfig[size];
  const circumference = 2 * Math.PI * config.radius;
  const progress = (score / 100) * circumference;
  const strokeDashoffset = circumference - progress;

  // Get colors based on score
  const getStatusColors = () => {
    if (score >= 65) return {
      color: 'status-success',
      bgColor: 'rgba(0, 179, 77, 0.1)' // Light green background
    };
    if (score >= 49) return {
      color: 'status-warning',
      bgColor: 'rgba(255, 205, 67, 0.1)' // Light yellow background
    };
    return {
      color: 'status-error',
      bgColor: 'rgba(255, 72, 67, 0.1)' // Light red background
    };
  };

  const { color, bgColor } = getStatusColors();

  return (
    <div className="relative inline-flex">
      <svg 
        className={`${config.dimensions} transform -rotate-90`}
        viewBox={`0 0 ${config.viewBox} ${config.viewBox}`}
      >
        {/* Background circle */}
        <circle
          cx={config.viewBox / 2}
          cy={config.viewBox / 2}
          r={config.radius}
          strokeWidth={config.strokeWidth}
          className="fill-none"
          style={{ stroke: bgColor }}
        />
        {/* Progress circle */}
        <circle
          cx={config.viewBox / 2}
          cy={config.viewBox / 2}
          r={config.radius}
          strokeWidth={config.strokeWidth}
          className={`fill-none stroke-${color}`}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
        <span className={`${config.fontSize} font-semibold text-${color} transition-colors duration-300`}>
          {score}
        </span>
        {showLabel && (
          <span className={`${config.labelSize} text-gray-600 mt-0.5 sm:mt-1`}>
            Overall Score
          </span>
        )}
      </div>
    </div>
  );
};

export type { HistoryRiskScoreProps };