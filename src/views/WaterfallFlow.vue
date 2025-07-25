<!-- 瀑布流组件 -->
<template>
  <div>
    <WaterfallList :items="items" :column-width="300" :gap="20" />
  </div>
</template>

<script setup>
import WaterfallList from "@/components/WaterfallFlow/WaterfallList.vue";

const items = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    type: "image",
    title: "Tropical Beach",
    height: 300,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    type: "image",
    title: "Mountain Peak",
    height: 400,
  },
  {
    id: "3",
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    type: "image",
    title: "Lake Reflection",
    height: 250,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    type: "image",
    title: "Forest Path",
    height: 350,
  },
  {
    id: "5",
    src: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
    type: "image",
    title: "Snowy Mountains",
    height: 280,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1501785887178-3a6e3904f63e",
    type: "image",
    title: "City Skyline",
    height: 320,
  },
  {
    id: "7",
    src: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg",
    type: "image",
    title: "Flower Close-up",
    height: 260,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1511300636408-a9946793201a",
    type: "image",
    title: "Desert Dunes",
    height: 380,
  },
  {
    id: "9",
    src: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
    type: "image",
    title: "Laptop Workspace",
    height: 290,
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    type: "image",
    title: "River Valley",
    height: 340,
  },
  {
    id: "11",
    src: "https://images.pexels.com/photos/1172674/pexels-photo-1172674.jpeg",
    type: "image",
    title: "Autumn Leaves",
    height: 270,
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    type: "image",
    title: "Ocean Waves",
    height: 310,
  },
  {
    id: "13",
    src: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
    type: "image",
    title: "Sunset Horizon",
    height: 330,
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    type: "image",
    title: "Urban Street",
    height: 360,
  },
  {
    id: "15",
    src: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    type: "image",
    title: "Waterfall Scene",
    height: 300,
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1519125323398-675f1f1d1f1f",
    type: "image",
    title: "Coffee Cup",
    height: 280,
  },
  {
    id: "17",
    src: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
    type: "image",
    title: "Food Plate",
    height: 320,
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1505765050516-f72dc59f9f79",
    type: "image",
    title: "Misty Forest",
    height: 350,
  },
  {
    id: "19",
    src: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
    type: "image",
    title: "Wooden Texture",
    height: 290,
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1516321310762-4d5f1f1f1f1f",
    type: "image",
    title: "Night Sky",
    height: 340,
  },
];
</script>

<style>
#app {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
