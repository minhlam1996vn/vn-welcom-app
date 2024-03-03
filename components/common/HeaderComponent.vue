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
        style="height: 50px"
        class="d-flex flex-row align-items-center justify-content-between"
      >
        <div>
          <button
            v-b-toggle.sidebar-menu
            class="h4 border rounded shadow-sm bg-white text-muted m-0 me-1"
          >
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
          <h1 class="mb-0 d-inline-block">
            <nuxt-link
              class="h2 fw-bold text-decoration-none text-muted"
              to="/"
            >
              <span>VN Welcome</span>
            </nuxt-link>
          </h1>
        </div>
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

    <!-- Sidebar -->
    <b-sidebar
      id="sidebar-menu"
      @shown="handleSidebarShown"
      @hidden="handleSidebarHidden"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="container py-3 bg-white">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="fw-bold text-muted mb-0">VN Welcome</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="hide"
            ></button>
          </div>
        </div>
        <div class="container py-3">
          <div class="mb-4 pb-2">
            <input
              type="text"
              class="w-100 border py-2 px-3 rounded-5"
              placeholder="Nhập từ khoá tìm kiếm"
            />
          </div>
          <ul class="p-0 mb-4">
            <li
              class="mb-3 d-flex justify-content-between align-items-center bg-white border px-3"
              v-for="category in categoriesParent"
              :key="category.id"
            >
              <nuxt-link
                class="d-block w-100 py-2 text-decoration-none text-dark"
                :to="`/${category.category_slug}`"
              >
                {{ category.category_name }}
              </nuxt-link>
              <small class="text-muted">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </small>
            </li>
          </ul>
          <div>
            <p>
              © 2024 VN Welcome, chuyên trang tin tức về Việt Nam. VN Welcome
              giữ bản quyền nội dung trên website này.
            </p>
          </div>
        </div>
      </template>
    </b-sidebar>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categoriesParent: "category/getCategoriesParent",
    }),
  },
  methods: {
    handleSearch: () => {
      alert("Chức năng tìm kiếm đang được phát triển. Vui lòng quay lại sau!");
    },
    handleSidebarShown() {
      document.body.style.overflow = "hidden";
    },
    handleSidebarHidden() {
      document.body.style.overflow = "";
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
