<template>
  <div>
    <a
      v-if="post.image"
      class="d-block ratio ratio-16x9 overflow-hidden mb-3 rounded-3 shadow-lg"
      href="#!"
    >
      <img class="w-100 object-fit-cover" :src="post.image" alt="" />
    </a>
    <h3 v-if="post.title" class="title">
      <a
        href="#!"
        class="text-line-clamp-2 text-dark text-decoration-none text-hover"
      >
        {{ post.title }}
      </a>
    </h3>
    <p v-if="post.description" class="text-line-clamp-2">
      {{ post.description }}
    </p>
    <a
      v-if="post.categoryName"
      href="#!"
      class="d-block mb-3 text-muted text-decoration-none"
    >
      {{ post.categoryName }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.2rem;
}
</style>
