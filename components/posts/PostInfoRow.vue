<template>
  <div class="row">
    <div class="col-6 col-md-4 pe-0 pe-md-2">
      <a
        v-if="post.image"
        class="d-block ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
        href="#!"
      >
        <img class="w-100 object-fit-cover" :src="post.image" alt="" />
      </a>
    </div>
    <div class="col-6 col-md-8">
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
        class="d-block text-muted text-decoration-none"
      >
        {{ post.categoryName }}
      </a>
    </div>
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
