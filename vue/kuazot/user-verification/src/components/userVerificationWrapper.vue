<template>
    <div>
        <search-user-field @emitFioValue="getFioValue"/>
        <div class="user_verification_form  mt-15" v-show="setFioValueForRequest.length">
            <foun-users-list class="user_verification_form__list" :fioValueForRequest="setFioValueForRequest" @currentUser="setCurrentUser"/>
            <form-for-verification :currentSearchValue="setFioValueForRequest" :currentUser="currentUserItem" class="user_verification_form__form"/>
        </div>
    </div>
</template>

<script>
import FormForVerification from './formForVerification.vue';
import FounUsersList from './founUsersList.vue';
import SearchUserField from './searchUserField.vue';
    export default {
        components: {
                SearchUserField,
                FounUsersList,
                FormForVerification,
        },
        data: ()=> ({
           setFioValueForRequest: "",
           currentUserItem: {}
        }),
        methods: {
            getFioValue(value) {
                this.setFioValueForRequest = value
            },
            setCurrentUser(value) {
                this.currentUserItem = value
            }
        }
    }
</script>

<style lang="scss" scoped>
.user_verification_form {
    display: flex;
    justify-content: space-between;
    &__form {
        flex: 0 1 40%;
    }
    &__list {
        flex: 0 1 55%;
    }
}
</style>