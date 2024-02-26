<template>
  <footer>
    <div class="bg-light py-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="text-muted custom__fw-5">
            <span class="cursor-pointer">
              <font-awesome-icon :icon="['far', 'envelope']" />
              <span>Liên hệ toà soạn</span>
            </span>
            <span>|</span>
            <span class="cursor-pointer">
              <font-awesome-icon :icon="['fas', 'headset']" />
              <span>0364 555 018</span>
            </span>
          </div>

          <div class="text-muted custom__fw-5">
            <a href="#!" class="text-muted text-decoration-none">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="#!" class="mx-2 text-muted text-decoration-none">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
            <a href="#!" class="text-muted text-decoration-none">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-3">
      <div class="container">
        <p class="text-muted my-3 text-center">
          Copyright @2023. Design by <b>Minh Lâm</b>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  //
};
</script>
