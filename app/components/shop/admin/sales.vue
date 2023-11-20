<script setup lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartData,
  } from "chart.js";
  import { Line } from "vue-chartjs";
  import colors from "#tailwind-config/theme/colors";

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const mode = useColorMode();

  const options = computed<ChartOptions<"line">>(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
        },
      },
      scales: {
        y: {
          grid: {
            color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
          },
          ticks: {
            color: colors.slate[500],
          },
        },
        x: {
          grid: {
            color: mode.value === "dark" ? colors.slate[800] : colors.slate[200],
          },
          ticks: {
            color: colors.slate[500],
          },
        },
      },
    };
  });

  const data = ref<ChartData<"line">>({
    labels: ["März", "April", "Mai", "Juni", "Juli", "August", "Oktober"],
    datasets: [
      {
        label: "Sales over time",
        backgroundColor: colors.background,
        tension: 0.4,
        borderColor: colors.green[500],
        borderWidth: 2,
        pointBackgroundColor: colors.green[500],
        data: [40, 39, 10, 40, 39, 80, 40],
      },
    ],
  });
</script>

<template>
  <div class="mt-5 p-2">
    <div class="mt-5 h-[300px] rounded-lg border border-base-200 bg-background md:p-3">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>
