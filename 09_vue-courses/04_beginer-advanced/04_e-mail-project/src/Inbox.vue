<template>
  <div class="inbox-body">
    <div class="mail-option">
      <div class="btn-group">
        <a href="#" @click="refresh" class="btn">
          <i class="fa fa-refresh"></i>&nbsp; Refresh
        </a>
      </div>
    </div>
    <app-messages :messages="incomingMessages"></app-messages>
  </div>
</template>

<script>
import Messages from './Messages.vue'
import { eventBus } from './main'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    refresh(){
      eventBus.$emit('refreshMessages');
    }
  },
  computed: {
    incomingMessages(){
      return this.data.messages.filter(msg => !msg.isDeleted && msg.type === 'incoming')
    }
  },
  components: {
    appMessages: Messages
  }
}
</script>
