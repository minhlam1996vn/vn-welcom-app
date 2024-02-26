<template>
  <div id="root">
    <HeaderComponent />
    <NavbarComponent />
    <main class="min-vh-100">
      <Nuxt />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import NavbarComponent from "@/components/common/NavbarComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  },
};
</script>
