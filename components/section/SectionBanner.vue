<template>
  <div>
    <BannerInfo
      image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    />
    <BannerInfo
      image="https://images.unsplash.com/photo-1544260307-084b1ff75f94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    />
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
