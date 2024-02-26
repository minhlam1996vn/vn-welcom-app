<template>
  <div class="banner__ads rounded-3 overflow-hidden mb-4">
    <a href="#!">
      <img
        class="w-100"
        :src="image"
        alt="banner-02"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null,
    },
  },
};
</script>
