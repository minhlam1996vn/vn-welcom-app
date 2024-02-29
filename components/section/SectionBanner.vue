<template>
  <div>
    <BannerInfo image="https://placehold.jp/1280x720.png" />
    <BannerInfo image="https://placehold.jp/720x1280.png" />
  </div>
</template>

<script>
import BannerInfo from "@/components/banners/BannerInfo.vue";

export default {
  components: {
    BannerInfo,
  },
};
</script>
