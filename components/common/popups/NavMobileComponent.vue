<template>
  <div class="fixed-bottom container-fluid">
    <nav class="border bg-white w-100 px-3 rounded-top-3 shadow">
      <ul
        class="p-0 m-0 d-flex flex-row justify-content-between align-items-center nav__mobile"
      >
        <li class="text-center">
          <nuxt-link
            to="/admin"
            class="h6 text-muted text-decoration-none d-block mb-0 menu__item"
          >
            <font-awesome-icon :icon="['fa', 'house']" /><br />
            <span>Trang chủ</span>
          </nuxt-link>
        </li>
        <li class="text-center">
          <nuxt-link
            to="/admin/category"
            class="h6 text-muted text-decoration-none d-block mb-0 menu__item"
          >
            <font-awesome-icon :icon="['fas', 'folder-open']" /><br />
            <span>Danh mục</span>
          </nuxt-link>
        </li>
        <li class="text-center">
          <nuxt-link
            to="/admin/article"
            class="h6 text-muted text-decoration-none d-block mb-0 menu__item"
          >
            <font-awesome-icon :icon="['fas', 'file-lines']" /><br />
            <span>Bài viết</span>
          </nuxt-link>
        </li>
        <li class="text-center">
          <nuxt-link
            to="/admin"
            class="h6 text-muted text-decoration-none d-block mb-0 menu__item"
          >
            <font-awesome-icon :icon="['fas', 'user']" /><br />
            <span>Hồ sơ</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav__mobile {
  height: 60px;
}
</style>
