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
        color: "pink",
        // icon: "mdi-information",
        content: "강릉 초두부",
      },
      {
        id: 2,
        color: "indigo",
        // icon: "mdi-alert-circle",
        content: "짬뽕집",
      },
      {
        id: 3,
        color: "#006400",
        // icon: "mdi-alert-circle",
        content: "아바이 순대",
      },
      {
        id: 4,
        color: "#8B0000",
        // icon: "mdi-alert-circle",
        content: "경포해변",
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
