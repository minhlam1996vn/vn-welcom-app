<template>
  <div>
    <PostCardHeaderNav class="mb-4 mb-md-5" />
    <b-row class="mb-4">
      <b-col cols="12" md="8" class="mb-md-0 mb-4">
        <PostInfo
          :post="{
            image:
              'https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2150&q=80',
            title:
              'FPT 13 Under 35 rong ruổi sa mạc cát đen, ngắm núi lửa Bromo',
            description:
              'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
            categoryName: 'Công Nghệ',
          }"
        />
      </b-col>
      <b-col cols="12" md="4">
        <ul class="ps-0">
          <li>
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
          <li>
            <PostInfo
              :post="{
                image:
                  'https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                title:
                  'Trung tâm dữ liệu FPT Fornix HCM01 đón chào diện mạo mới',
                categoryName: 'Công Nghệ',
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
import PostInfo from "@/components/posts/PostInfo.vue";

export default {
  components: {
    PostCardHeaderNav,
    PostInfo,
  },
};
</script>
