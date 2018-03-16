<template>

  <div>
    <SimpleSlider title="我来自Vue" :emit="click"/>
  </div>
</template>

<script>
import SimpleSlider from './SimpleSlider/src/index';
import '@icedesign/base/dist/ICEDesignBase.css'
export default {
  methods: {
    click(text){
      alert(text)
    }
  },
  components: {SimpleSlider }
}
</script>
