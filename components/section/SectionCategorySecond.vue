<template>
  <div>
    <PostCardHeaderNav class="mb-4 mb-md-5" />
    <b-row class="mb-4">
      <b-col cols="12" md class="mb-md-0 mb-4">
        <PostCover />
      </b-col>
      <b-col cols="12" md class="mb-md-0 mb-4">
        <ul class="ps-0 mb-0">
          <li class="">
            <PostInfo
              :post="{
                image:
                  'https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
                title: `FPT Play lên sóng 'Gieo gì gặt nấy' song song Hàn Quốc`,
                categoryName: 'Văn Hóa',
              }"
            />
          </li>
          <li class="pb-4">
            <PostInfoRow
              :post="{
                image:
                  'https://images.unsplash.com/photo-1682687220431-81a76ec65505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title:
                  'FPT IS khởi động dự án quản trị nguồn lực cho Tổng công ty Thiết bị điện Đông Anh',
                categoryName: 'Công Nghệ',
              }"
            />
          </li>
          <li class="">
            <PostInfoRow
              :post="{
                image:
                  'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title:
                  'FPT bắt tay Thiên Việt ứng dụng công nghệ lõi vào hoạt động chứng khoán',
                categoryName: 'Người FPT',
              }"
            />
          </li>
        </ul>
      </b-col>
      <b-col cols="12" md>
        <ul class="ps-0 mb-0">
          <li class="">
            <PostInfo
              :post="{
                image:
                  'https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title: `FPT Play lên sóng 'Gieo gì gặt nấy' song song Hàn Quốc`,
                categoryName: 'Văn Hóa',
              }"
            />
          </li>
          <li class="pb-4">
            <PostInfoRow
              :post="{
                image:
                  'https://images.unsplash.com/photo-1696231951105-02208e8bafad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title:
                  'FPT IS khởi động dự án quản trị nguồn lực cho Tổng công ty Thiết bị điện Đông Anh',
                categoryName: 'Công Nghệ',
              }"
            />
          </li>
          <li class="">
            <PostInfoRow
              :post="{
                image:
                  'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80',
                title:
                  'FPT bắt tay Thiên Việt ứng dụng công nghệ lõi vào hoạt động chứng khoán',
                categoryName: 'Người FPT',
              }"
            />
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PostCardHeaderNav from "@/components/posts/PostCardHeaderNav.vue";
import PostCover from "@/components/posts/PostCover.vue";
import PostInfo from "@/components/posts/PostInfo.vue";
import PostInfoRow from "@/components/posts/PostInfoRow.vue";

export default {
  components: {
    PostCardHeaderNav,
    PostCover,
    PostInfo,
    PostInfoRow,
  },
};
</script>
