<template>
  <div>
    <template v-for="(item, index) in dataset">
      <v-list-item @click="$emit('currentUser', item)" :key="item.title" id="current_verification_user">
        <template>
          <v-list-item-content>
            <v-list-item-title v-text="item.FULLNAME"></v-list-item-title>
            <v-list-item-subtitle
              class="text--primary"
              v-text="item.ACC_NAME"
            ></v-list-item-subtitle>
            <v-list-item-subtitle v-text="item.DEPT_NAME"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action-text v-text="item.TABNUM"/>
        </template>
      </v-list-item>
      <v-divider v-if="index < dataset.length - 1" :key="index"></v-divider>
    </template>
  </div>
</template>

<script>
export default {
    props: {
        dataset: {
            type: Array,
        }
    },
    data:() => ({
      
    }),
    mounted() {
        document.getElementById("current_verification_user").click()
    }
   
};
</script>

<style lang="scss" scoped></style>
