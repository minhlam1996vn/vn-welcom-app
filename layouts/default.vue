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
  head() {
    return {
      // script: [
      //   {
      //     type: "text/javascript",
      //     innerHTML: `var spkps="efe4e01d-6c47-4316-a32e-d555cd3fd891";`,
      //   },
      //   {
      //     "data-spcid": "test-user",
      //     src: "https://cdn.prestg.switch-plus.jp/b/spa.js",
      //   },
      // ],
      script: [
        {
          type: "text/javascript",
          innerHTML: `var spkps=['https://vnews-info.web.app/'];`,
        },
        {
          "data-spcid": "doj-devtest",
          src: "https://cdn.switch-plus.jp/b/spa.js",
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
    };
  },
  components: {
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  },
};
</script>
