<template>
  <div class="search_user_field">
    <div class="search_user_field__wrapper">
      <v-text-field
        v-on:keyup.enter="saveFioValue()"
        label="Введите ФИО или таб.номер"
        v-model="fioValue"
        clearable
        :rules="fioRules"
        hide-details="auto"
        autofocus
      ></v-text-field>
      <v-btn @click="saveFioValue()" color="primary" class="ml-15">Поиск</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fioRules: [
      (value) => !!value || "Обязательно для заполнения",
      (value) => (value && value.length >= 3) || "Минимум 3 символа",
    ],
    fioValue: "",
  }),
  methods: {
    saveFioValue() {
      const val = this.fioValue == null ? (this.fioValue = "") : this.fioValue;
      this.$emit("emitFioValue", val);
    },
  },
  watch: {
    fioValue: function() {
      if(this.fioValue == null) {
        this.saveFioValue()
      }
    }
  }
};
</script>

<style lang="scss">
.search_user_field {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
}
</style>
