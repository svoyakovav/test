<template>
  <div class="ml-5">
    <div class="mb-3">
      <span class="primary--text font-weight-bold mr-5">ФИО:</span>
      {{ correctedUserValue.FULLNAME }}
        <v-tooltip bottom >
        <template  v-slot:activator="{ on, attrs }">
          <v-icon
            class="ml-5"
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            @click="correctUser()"
          >
            mdi-refresh
          </v-icon>
        </template>
        <span>Повторить</span>
      </v-tooltip>
    </div>
    <div class="mb-3">
      <span class="primary--text font-weight-bold mr-5">Таб.номер:</span>
      {{ correctedUserValue.TABNUM }}
    </div>
    <div class="text-sm-subtitle-2">Последние 4 цифры телефона</div>
    <div class="form_verification__check">
      <v-otp-input
        id="otpCheck"
        v-model="otpCheck"
        :length="otpCheckLength"
        :disabled="phoneChecked"
        @finish="sendSMSCode"
        class="form_verification__check_otp"
        type="number"
      />
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
    </div>
    <v-alert v-if="callAlert" elevation="1" :type="typeAlert">{{
      messageAlert
    }}</v-alert>
    <div class="mt-15" v-if="phoneChecked">
      <div class="text-sm-subtitle-2">Введите код из СМС</div>
      <div class="form_verification__confirm">
        <v-otp-input
          id="otpConfirm"
          @finish="checkCode"
          :disabled="blockIfChecked"
          :length="otpCheckLength"
          class="form_verification__confirm_otp"
          v-model="otpConfirm"
        />
        <v-overlay absolute :value="loadingConfirm">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>
      </div>
      <v-alert v-if="callAlertConfirm" elevation="1" :type="typeAlertConfirm">{{
        messageAlertConfirm
      }}</v-alert>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
    },
    currentSearchValue: {
      type: String,
    },
  },
  data: () => ({
    correctedUserValue: {},
    otpConfirm: "",
    otpCheck: "",
    otpCheckLength: 4,
    loading: false,
    loadingConfirm: false,
    phoneChecked: false,
    blockIfChecked: false,
    callAlert: false,
    callAlertConfirm: false,
    typeAlert: "error",
    typeAlertConfirm: "succes",
    messageAlertConfirm: "",
    messageAlert: "",
    messageError: "Сервер не смог ответить на запрос. Попробуйте позже",
    messageSuccess: "На данный номер отправлено СМС с кодом",
    messageWarning: "Неверный номер телефона",
    checkCodeValue: "",
    RequestId: "",
  }),
  methods: {
    sendSMSCode() {
      this.phoneChecked = false;
      this.callAlert = false;
      this.loading = true;
      this.axios
        .get(window.API_HOST + "/oracle/admin/send_sms_code", {
          params: {
            P_TABNUM: this.currentUser.TABNUM,
            P_PHONE4: this.otpCheck,
          },
          headers: {
            token: window.session.token,
          },
        })
        .then((response) => {
          if (response.data.data.STATUS === "PHONE_NOT_FOUND") {
            this.typeAlert = "warning";
            this.messageAlert = this.messageWarning;
          } else if (response.data.data.STATUS === "NORMAL") {
            this.typeAlert = "success";
            this.messageAlert = this.messageSuccess;
            this.phoneChecked = true;
            this.checkCodeValue = response.data.data.SMS_CODE;
            this.RequestId = response.data.data.REQ_ID
          }
          this.callAlert = true;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.typeAlert = "error";
          this.messageAlert = this.messageError;
          this.callAlert = true;
          this.loading = false;
        })

        .then(() => {
          if (this.phoneChecked) {
            document.getElementById("otpConfirm--0").click();
          }
        });
    },
    checkCode() {
      this.loadingConfirm = true;
      const status = +this.otpConfirm === +this.checkCodeValue ? "APPROVED" : "DISCLAIM"
      this.axios.get(window.API_HOST + "oracle/admin/save_log", {
        params: {
          P_ID: this.RequestId,
          P_STATUS: status
        },
          headers: {
           token: window.session.token
         }
      })
      .then ((response)=> {
        if (+this.otpConfirm === +this.checkCodeValue) {
        this.typeAlertConfirm = "success";
        this.messageAlertConfirm = "Верификация пройдена";
        this.blockIfChecked = true;
      } else {
        this.messageAlertConfirm = "Неверный код";
        this.typeAlertConfirm = "error";
      }
        this.loadingConfirm = false;
        this.callAlertConfirm = true;
      })

      .catch((error)=> {
        console.log(error)
      })
      
    },



    correctUser() {
      this.correctedUserValue = { ...this.currentUser };
      this.otpCheck = "";
      this.otpConfirm = "";
      this.callAlert = false;
      this.callAlertConfirm = false;
      this.phoneChecked = false;
      this.blockIfChecked = false;
      document.getElementById("otpCheck--0").click();
    },
  },
  computed: {
    activeOtpCheckBtn() {
      return this.otpCheck.length === this.otpCheckLength;
    },
    activeOtpConfirmBtn() {
      return this.otpConfirm.length === this.otpCheckLength;
    },
  },
  watch: {
    currentSearchValue: function () {
      this.correctedUserValue = {};
    },
    currentUser: "correctUser",
  },
};
</script>

<style lang="scss" scoped>
.form_verification {
  &__check {
    position: relative;
  }

  &__confirm {
    position: relative;
  }
}
</style>
