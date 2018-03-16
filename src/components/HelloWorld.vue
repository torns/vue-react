<template>

  <div>
    <SimpleSlider/>
  </div>
</template>

<script>
import SimpleSlider from './SimpleSlider';
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
