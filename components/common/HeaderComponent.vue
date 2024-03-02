<template>
  <header class="bg-white">
    <!-- PC -->
    <div class="container d-none d-sm-block">
      <div
        class="d-flex flex-row align-items-center justify-content-between py-3"
      >
        <h1 class="mb-0 d-none d-md-block header__start">
          <nuxt-link class="h2 fw-bold text-decoration-none text-muted" to="/">
            <span>VN Welcome</span>
          </nuxt-link>
        </h1>
        <div class="text-center header__center">
          <h1 class="h4 text-muted fw-bold">VIỆT NAM TƯƠI ĐẸP</h1>
          <p class="mb-0 text-muted">
            Mọi thứ bạn muốn biết về Việt Nam và Hơn thế nữa….
          </p>
        </div>
        <div class="text-muted d-none d-md-block header__end">
          <span class="me-2">
            <font-awesome-icon :icon="['far', 'calendar']" />
            <span class="ps-1">Thứ 6, 13/10/2023</span>
          </span>
          <button
            class="px-0 border-0 bg-transparent text-muted"
            @click="handleSearch"
          >
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="container d-block d-sm-none">
      <div
        class="d-flex flex-row align-items-center justify-content-between py-3"
      >
        <h1 class="mb-0">
          <nuxt-link class="h2 fw-bold text-decoration-none text-muted" to="/">
            <span>VN Welcome</span>
          </nuxt-link>
        </h1>
        <div class="text-muted">
          <button
            class="px-0 border-0 bg-transparent text-muted"
            @click="handleSearch"
          >
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleSearch: () => {
      alert("Chức năng tìm kiếm đang được phát triển. Vui lòng quay lại sau!");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__start,
  &__end {
    width: 200px;
  }
}
.search__icon:hover {
  color: $success;
}

@include sp {
  .header {
    &__center {
      width: 100%;
    }
  }
}
</style>
