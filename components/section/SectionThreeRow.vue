<template>
  <ul class="row mb-0 p-0">
    <li class="col-md col-12">
      <PostInfo
        :post="{
          image:
            'https://images.unsplash.com/photo-1696197017974-e9bf6319eb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title:
            'Phạm Việt Tùng Vô địch giải đấu eSports nhà Phần mềm FPT trong đêm chung kết rực lửa',
          categoryName: 'Người FPT',
        }"
      />
    </li>
    <li class="col-md col-12">
      <PostInfo
        :post="{
          image:
            'https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: 'Trung tâm dữ liệu FPT Fornix HCM01 đón chào diện mạo mới',
          categoryName: 'Công Nghệ',
        }"
      />
    </li>
    <li class="col-md col-12">
      <PostInfo
        :post="{
          image:
            'https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          title: `FPT Play lên sóng 'Gieo gì gặt nấy' song song Hàn Quốc`,
          categoryName: 'Văn Hóa',
        }"
      />
    </li>
  </ul>
</template>

<script>
import PostInfo from "@/components/posts/PostInfo.vue";

export default {
  components: {
    PostInfo,
  },
};
</script>
