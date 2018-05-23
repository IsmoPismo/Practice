<template>
  <aside class="sm-side">
        <div class="user-head">
            <img src="src/assets/images/profile.jpg">

            <div class="user-name">
                <h5>Ismar Šaćirović</h5>
                <span class="email-address">ismarguitar@gmail.com</span>
            </div>
        </div>

        <ul class="inbox-nav">
            <li :class="{ active : activeView == 'app-inbox'}">
                <a href="#" @click.prevent="navigate('app-inbox', 'Inbox')">
                    <i class="fa fa-inbox"></i>Inbox <span class="label label-danger pull-right">{{ unreadMessages.length }}</span>
                </a>
            </li>

            <li :class="{ active : activeView == 'app-sent'}">
                <a href="#" @click.prevent="navigate('app-sent', 'Sent')">
                    <i class="fa fa-envelope-o"></i>Sent <span class="label label-default pull-right">{{ sentMessages.length }}</span>
                </a>
            </li>

            <li :class="{ active : activeView == 'app-important'}">
                <a href="#" @click.prevent="navigate('app-important', 'Important')">
                    <i class="fa fa-bookmark-o"></i>Important <span class="label label-warning pull-right">{{ importantMessages.length }}</span>
                </a>
            </li>

            <li :class="{ active : activeView == 'app-trash'}">
                <a href="#" @click.prevent="navigate('app-trash', 'Trash')">
                    <i class=" fa fa-trash-o"></i>Trash <span class="label label-default pull-right">{{ deletedMessages.length }}</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
import { eventBus } from './main'

export default {
  data(){
    return {
      activeView: 'app-inbox'
    };
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  methods: {
    navigate(tag, title){
      eventBus.$emit('changeView', {
        tag,
        title
      });
    }
  },
  created(){
    eventBus.$on('changeView', (data) => {
      this.activeView = data.tag;
    })
  },
  computed: {
    unreadMessages(){
      return this.messages.filter(msg => !msg.isRead && !msg.isDeleted && msg.type === 'incoming')
    },
    sentMessages(){
      return this.messages.filter(msg => !msg.isDeleted && msg.type === 'outgoing')
    },
    importantMessages(){
      return this.messages.filter(msg => !msg.isDeleted && msg.isImportant)
    },
    deletedMessages(){
      return this.messages.filter(msg => msg.isDeleted)
    },
  }
}
</script>
