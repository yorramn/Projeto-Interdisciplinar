
<template>
  <div id="app">
<ejs-toast
  id="toast_default"
  ref="defaultRef"
  title="Adaptive Tiles Meeting"
  timeOut="0"
  icon="e-meeting"
  content="Conference Room 01 / Building 135 10:00 AM-10:30 AM"
></ejs-toast>
  </div>
</template>
<script>
import {
  ToastComponent
} from '@syncfusion/ej2-vue-notifications'

export default {
  name: 'App',
  components: {
    'ejs-toast': ToastComponent
  },
  mounted: function () {
    this.$refs.defaultRef.show()
  },
  data: function () {
    return {}
  }
}
</script>
<style>
#toast_default .e-meeting::before {
  content: "e705";
  font-size: 17px;
}

.bootstrap4 #toast_default .e-meeting::before {
  content: "e763";
  font-size: 20px;
}
</style>
