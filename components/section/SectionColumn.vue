<template>
  <ul class="ps-0 mb-0">
    <li class="border-bottom pb-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: 'FPT được vinh danh Top 10 thương hiệu mạnh Việt Nam',
          description: `FPT tiên phong chuyển đổi số và dẫn đầu về tư vấn, cung cấp, triển khai các dịch vụ, giải pháp công nghệ - viễn thông. Tập đoàn có những đóng góp lớn thúc đẩy nhanh quá trình chuyển đổi số`,
          categoryName: 'Văn Hóa',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1682687220431-81a76ec65505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title:
            'FPT IS khởi động dự án quản trị nguồn lực cho Tổng công ty Thiết bị điện Đông Anh',
          description:
            'Chiều 5/10, FPT IS và Tổng Công ty Thiết bị điện Đông Anh (EEMC) đã tổ chức lễ khởi động dự án triển khai giải pháp quản trị nguồn lực doanh nghiệp SAP S/4 HANA, hướng tới mục tiêu phát',
          categoryName: 'Công Nghệ',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title:
            'FPT bắt tay Thiên Việt ứng dụng công nghệ lõi vào hoạt động chứng khoán',
          description:
            'Chiều 3/10, FPT Smart Cloud đã tổ chức lễ kí kết hợp tác chiến lược với CTCP Chứng khoán Thiên Việt. Sự kiện đánh dấu mối quan hệ hợp tác toàn diện, ứng dụng Trí tuệ nhân tạo',
          categoryName: 'Người FPT',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1696986291642-54225330b8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
          description:
            'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
          categoryName: 'Multimedia',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80',
          title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
          description:
            'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
          categoryName: 'Multimedia',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://plus.unsplash.com/premium_photo-1697188001642-92c80c7e0073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
          description:
            'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
          categoryName: 'Multimedia',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1696258361452-d54add39e3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
          description:
            'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
          categoryName: 'Multimedia',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2150&q=80',
          title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
          description:
            'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
          categoryName: 'Multimedia',
        }"
      />
    </li>
    <li class="border-bottom py-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
          description:
            'Với việc tiêm vaccine cúm mùa, người FPT sẽ giảm nhiều nỗi lo mắc bệnh, đồng thời tránh việc lây nhiễm cho người thân, đặc biệt trẻ nhỏ trong thời',
          categoryName: 'Multimedia',
        }"
      />
    </li>
    <li class="pt-4">
      <PostInfoRow
        :post="{
          image:
            'https://images.unsplash.com/photo-1692525633901-6341ba12a696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title:
            'FPT Shop lập kỷ lục với phiên live 1 triệu USD đầu tiên trên TikTok Shop',
          description:
            'FPT Shop là đơn vị đầu tiên chơi lớn mở bán online siêu phẩm mới nhất của Apple, thu về 1 triệu USD trên sàn Tiktok Shop và là phiên',
          categoryName: 'Văn hóa',
        }"
      />
    </li>
  </ul>
</template>

<script>
import PostInfoRow from "@/components/posts/PostInfoRow.vue";

export default {
  components: {
    PostInfoRow,
  },
};
</script>
