<template>
  <footer>
    <!-- PC -->
    <div class="py-3 d-none d-sm-block" style="background-color: #f8f8f8">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="text-muted">
            <span class="cursor-pointer">
              <font-awesome-icon :icon="['far', 'envelope']" />
              <span>Liên hệ toà soạn</span>
            </span>
            <span>|</span>
            <span class="cursor-pointer">
              <font-awesome-icon :icon="['fas', 'headset']" />
              <span>Hotline: 0364 555 018</span>
            </span>
          </div>

          <div class="text-muted">
            <span class="me-4">Theo dõi VN Welcome trên</span>
            <a href="#!" class="text-primary text-decoration-none">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="#!" class="mx-2 text-danger text-decoration-none">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
            <a href="#!" class="text-primary text-decoration-none">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="mb-3">
              <nuxt-link
                to="/"
                class="h3 fw-bold text-decoration-none text-muted"
              >
                VN Welcome
              </nuxt-link>
            </div>
            <div class="text-dark mb-5">
              <p class="mb-0">
                © 2024 VN Welcome, chuyên trang tin tức về Việt Nam.
              </p>
              <p>VN Welcome giữ bản quyền nội dung trên website này.</p>
            </div>
            <div>
              <p>
                Một sản phẩm của:
                <nuxt-link
                  to="/"
                  class="fw-bold text-success text-decoration-none"
                  >VN Welcome</nuxt-link
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div class="row">
              <div class="col-8">
                <ul class="px-0 row">
                  <li
                    class="col-6 mb-1"
                    v-for="category in categoriesParent"
                    :key="category.id"
                  >
                    <nuxt-link
                      class="fw-bold text-decoration-none text-muted"
                      :to="`/${category.category_slug}`"
                    >
                      {{ category.category_name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-4">
                <img
                  class="w-100"
                  src="https://images.unsplash.com/photo-1708432683889-c3133790465f"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="py-4 d-block d-sm-none" style="background-color: #f8f8f8">
      <div class="container">
        <div>
          <div class="mb-3">
            <nuxt-link
              to="/"
              class="h3 fw-bold text-decoration-none text-muted"
            >
              VN Welcome
            </nuxt-link>
          </div>

          <div class="text-dark">
            <p class="mb-2">
              <span class="cursor-pointer">
                <font-awesome-icon :icon="['far', 'envelope']" />
                <span class="ms-1">Liên hệ toà soạn</span>
              </span>
            </p>
            <p class="mb-2">
              <span class="cursor-pointer">
                <font-awesome-icon :icon="['fas', 'headset']" />
                <span class="ms-1">Hotline: 0364 555 018</span>
              </span>
            </p>
            <div class="mb-3">
              <span class="me-4">Theo dõi VN Welcome trên</span><br />
              <a href="#!" class="text-primary text-decoration-none">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="#!" class="mx-2 text-danger text-decoration-none">
                <font-awesome-icon :icon="['fab', 'youtube']" />
              </a>
              <a href="#!" class="text-primary text-decoration-none">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </div>
          </div>

          <div class="text-dark mb-5">
            <p class="mb-0">
              © 2024 VN Welcome, chuyên trang tin tức về Việt Nam.
            </p>
            <p>VN Welcome giữ bản quyền nội dung trên website này.</p>
          </div>
          <div>
            <p>
              Một sản phẩm của:
              <nuxt-link
                to="/"
                class="fw-bold text-success text-decoration-none"
                >VN Welcome</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
