<template>
  <b-row class="mb-4">
    <b-col cols="12" md="8" class="mb-md-0 mb-4">
      <div
        class="h-100 bg-secondary position-relative rounded-3 overflow-hidden shadow-lg image__cover"
      >
        <img
          class="w-100 h-100 rounded position-absolute object-fit-cover"
          src="https://images.unsplash.com/photo-1696943444991-def9485f89f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div class="p-3 p-md-4 z-3 position-absolute bottom-0">
          <h2>
            <a
              href="#!"
              class="text-line-clamp-2 shadow-lg text-light text-decoration-none fw-bold text-hover"
            >
              Phạm Việt Tùng Vô địch giải đấu eSports nhà Phần mềm FPT trong đêm
              chung kết rực lửa
            </a>
          </h2>
          <a
            href="#!"
            class="shadow-lg text-light text-decoration-none fw-bold"
          >
            Người FPT
          </a>
        </div>
      </div>
    </b-col>
    <b-col cols="12" md="4">
      <ul class="p-0 mb-0">
        <li class="border-bottom mb-4">
          <PostInfo
            :post="{
              title:
                'Học sinh FPT Schools giành hàng loạt giải thưởng robotics',
              categoryName: 'Người FPT',
            }"
          />
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import PostCover from "@/components/posts/PostCover.vue";
import PostInfo from "@/components/posts/PostInfo.vue";

export default {
  components: {
    PostCover,
    PostInfo,
  },
};
</script>

<style lang="scss" scoped>
.image__cover {
  min-height: 30rem;
}
</style>
