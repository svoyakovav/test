<template>
  <div class="found_user_list">
    <v-card  class="overflow-y-auto" max-height="500">
        <v-list v-if="this.items.length > 0">
          <v-list-item-group active-class="primary--text" >
            <found-users-list-item :dataset="items" @currentUser="emitCurrentUser" />
          </v-list-item-group>
        </v-list>
        <v-card class="pl-2" v-else>
          Данные отсутствуют
        </v-card>
    </v-card>
     <v-overlay absolute :value="loadingDataset">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>
  </div>
</template>

<script>

import foundUsersListItem from "./foundUsersListItem.vue";
export default {
  components: {
    foundUsersListItem,
  },
  props: {
    fioValueForRequest: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    items: [],
    loadingDataset: false,
  }),
  methods: {
    loadDataset() {
      if(this.fioValueForRequest.length >= 3) {
        this.loadingDataset = true
        this.items = []
          this.axios.get(window.API_HOST+"/oracle/admin/get_users", {
         params: {
           P_SEARCH_PARAM: this.fioValueForRequest
         },
         headers: {
           token: window.session.token
         }
       })
       .then((response)=> {
         this.items = response.data.data
         this.loadingDataset = false
       })
      }
    },
    emitCurrentUser(value) {
        this.$emit('currentUser', value)
    }
  },
  watch: {
    fioValueForRequest: "loadDataset",
  },
};
</script>

<style lang="scss" scoped></style>
