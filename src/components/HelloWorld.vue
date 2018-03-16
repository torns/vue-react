<template>

  <div>
    <span @click="click">
      <SimpleSlider/>
    </span>
  </div>
</template>

<script>
import SimpleSlider from './test';
import '@icedesign/base/dist/ICEDesignBase.css'
export default {
  methods: {
    click(){
      alert(1)
    }
  },
  components: {SimpleSlider }
}
</script>
