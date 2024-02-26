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
        <div class="ms-auto">
          <ul class="d-flex m-0 p-0">
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/"
              >
                Trang chủ
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/con-nguoi-viet-nam"
              >
                Con người Việt Nam
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/ngay-le-va-nhung-trai-nghiem"
              >
                Ngày lễ và những trải nghiệm
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/tin-tuc-thi-truong"
              >
                Tin tức thị trường
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/63-tinh-thanh"
              >
                63 Tỉnh thành
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/am-thuc-du-lich"
              >
                Ẩm thực - Du lịch
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/blog"
              >
                Blog
              </nuxt-link>
            </li>
            <li class="text-nowrap">
              <nuxt-link
                class="p-3 text-white text-decoration-none custom__fw-5"
                to="/am-thanh-hinh-anh"
              >
                Âm thanh - Hình ảnh
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  //
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
