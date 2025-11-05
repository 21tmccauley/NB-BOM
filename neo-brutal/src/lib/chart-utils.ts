// Chart utilities for neo-brutal design
export const chartColors = {
  yellow: "#FFEC00",
  darkblue: "#69D2E7",
  orange: "#FF6B6B",
  purple: "#9723C9",
  pink: "#FF69b4",
}

export const chartConfig = {
  donations: {
    label: "Donations",
    color: chartColors.orange,
  },
  cumulative: {
    label: "Cumulative",
    color: chartColors.darkblue,
  },
  organization: {
    label: "Organization",
    color: chartColors.purple,
  },
}

export const getColorByIndex = (index: number) => {
  const colors = [
    chartColors.yellow,
    chartColors.darkblue,
    chartColors.orange,
    chartColors.purple,
    chartColors.pink,
  ]
  return colors[index % colors.length]
}

