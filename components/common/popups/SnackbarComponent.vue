<template>
  <portal to="root" v-if="messageInfo.message">
    <div
      class="position-fixed px-3 rounded-3 border shadow-sm bg-white portal__snackbar"
      :class="
        messageInfo.messageType === 'error' ? 'border-danger' : 'border-success'
      "
    >
      <header
        class="d-flex flex-row align-items-center justify-content-between py-1"
      >
        <strong
          v-if="messageInfo.messageType === 'error'"
          :class="
            messageInfo.messageType === 'error' ? 'text-danger' : 'text-success'
          "
        >
          <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
          Error
        </strong>
        <strong v-else class="text-success">
          <font-awesome-icon :icon="['fas', 'circle-check']" />
          Success
        </strong>
        <button
          @click="closeMessage()"
          class="bg-transparent border-0 pe-0"
          :class="
            messageInfo.messageType === 'error' ? 'text-danger' : 'text-success'
          "
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </header>
      <div
        class="pb-2"
        :class="
          messageInfo.messageType === 'error' ? 'text-danger' : 'text-success'
        "
      >
        {{ messageInfo.message }}
      </div>
    </div>
  </portal>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      message: (state) => state.message.message,
    }),
    ...mapGetters({
      messageInfo: "message/getMessageInfo",
    }),
  },
  methods: {
    ...mapMutations({
      clearMessageInfo: "message/CLEAR_MESSAGE_INFO",
    }),
    closeMessage() {
      this.clearMessageInfo();
    },
  },
};
</script>

<style lang="scss">
.portal__snackbar {
  z-index: 1050;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
