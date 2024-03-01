<template>
  <div id="root">
    <HeaderComponent />
    <NavbarComponent />
    <!-- class="min-vh-100" -->
    <main>
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
