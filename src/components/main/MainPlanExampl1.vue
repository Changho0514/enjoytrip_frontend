<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.id"
      :dot-color="item.color"
      size="small"
    >
      <v-alert
        :value="true"
        :color="item.color"
        :icon="item.icon"
        :content="item.content"
      >
        {{ item.content }}
      </v-alert>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        color: "info",
        // icon: "mdi-information",
        content: "광주 예술의거리",
      },
      {
        id: 2,
        color: "error",
        // icon: "mdi-alert-circle",
        content: "광주 양동시장",
      },
      {
        id: 3,
        color: "teal-lighten-2",
        // icon: "mdi-alert-circle",
        content: "전평제",
      },
      {
        id: 4,
        color: "pink",
        // icon: "mdi-alert-circle",
        content: "시리단길",
      },
      {
        id: 5,
        color: "#808000",
        // icon: "mdi-alert-circle",
        content: "광주 송정동 떡갈비 골목",
      },
    ],
  }),
};
</script>

<style>
element.style {
  --v-timeline-line-thickness: 2px;
  left: 0px;
}
.v-timeline--vertical.v-timeline--align-center {
  align-items: left;
}
.v-timeline--vertical.v-timeline--justify-auto {
  grid-template-columns: auto min-content auto;
}

.v-timeline--vertical.v-timeline {
  row-gap: 0px;
  height: 100%;
}
</style>
