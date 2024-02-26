<template>
  <nav class="shadow-lg sticky-top bg__nav">
    <div class="container">
      <div
        class="d-flex flex-row align-items-center overflow-x-auto overflow-y-hidden nav__container"
      >
        <!-- Logo -->
        <nuxt-link class="h4 mb-0 text-white" to="/">
          <font-awesome-icon :icon="['fas', 'house']" />
        </nuxt-link>
        <!-- Nav -->
        <div class="ms-2 nav__link">
          <ul class="d-flex m-0 p-0">
            <li
              class="text-nowrap"
              v-for="category in categoriesParent"
              :key="category.id"
            >
              <nuxt-link
                class="py-1 px-3 text-white text-decoration-none custom__fw-5"
                :to="category.category_slug"
              >
                {{ category.category_name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categoriesParent: "category/getCategoriesParent",
    }),
  },
};
</script>

<style lang="scss" scoped>
.bg__nav {
  background: $success;
}

.nav__container {
  height: 50px;
}
</style>
