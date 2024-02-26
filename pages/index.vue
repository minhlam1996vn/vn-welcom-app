<template>
  <section>
    <!-- section-feature -->
    <section>
      <div class="container py-3 py-sm-5 border-bottom">
        <b-row class="mb-4">
          <b-col cols="12" md="8" class="mb-md-0 mb-4">
            <PostCover />
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
              <li class="border-bottom mb-4">
                <PostInfo
                  :post="{
                    title: `Đầu tư vào con người và công nghệ - Công thức 'vượt bão' của FPT Retail`,
                    categoryName: 'Kinh Doanh',
                  }"
                />
              </li>
              <li class="border-bottom mb-4">
                <PostInfo
                  :post="{
                    title: 'FPT Telecom phát hành cổ phiếu thưởng, tỷ lệ 50%',
                    categoryName: 'Kinh doanh',
                  }"
                />
              </li>
              <li>
                <PostInfo
                  :post="{
                    title: `Người FPT giảm nỗi lo cúm mùa nhờ 'tấm khiên' vaccine cúm`,
                    categoryName: 'Người FPT',
                  }"
                />
              </li>
            </ul>
          </b-col>
        </b-row>
        <div class="pt-1">
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
                  title:
                    'Trung tâm dữ liệu FPT Fornix HCM01 đón chào diện mạo mới',
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
        </div>
      </div>
    </section>

    <!-- section article -->
    <section>
      <div class="container py-4 py-md-5 border-bottom">
        <b-row>
          <b-col cols="12" md="9">
            <ul class="ps-0 mb-0">
              <li class="border-bottom pb-4">
                <PostInfoRow
                  :post="{
                    image:
                      'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    title:
                      'FPT được vinh danh Top 10 thương hiệu mạnh Việt Nam',
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
          </b-col>
          <b-col cols="12" md="3" class="mt-md-0 mt-4">
            <aside class="position-sticky z-1 custom__top-5">
              <BannerInfo
                image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <BannerInfo
                image="https://images.unsplash.com/photo-1544260307-084b1ff75f94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              />
            </aside>
          </b-col>
        </b-row>
      </div>
    </section>

    <!-- Category 1 -->
    <section>
      <div class="container py-4 py-md-5 border-bottom">
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
    </section>

    <!-- Category 2 -->
    <section>
      <div class="container py-4 py-md-5">
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
    </section>
  </section>
</template>

<script>
import PostCover from "@/components/posts/PostCover.vue";
import PostInfo from "@/components/posts/PostInfo.vue";
import PostInfoRow from "@/components/posts/PostInfoRow.vue";
import PostCardHeaderNav from "@/components/posts/PostCardHeaderNav.vue";
import BannerInfo from "@/components/banners/BannerInfo.vue";

export default {
  components: {
    PostCover,
    PostInfo,
    PostInfoRow,
    PostCardHeaderNav,
    BannerInfo,
  },
  async asyncData({ params, store }) {
    await store.dispatch("category/getListCategoriesParent");
  },
};
</script>
