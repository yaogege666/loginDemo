<template>
    <div class="app app-login" :style='{backgroundImage:`url("${loginBg}")`}'>
        <div class="app-login-logo">
            <img src="../assets/school-logo.jpg" class="logo">
            <img :src="logoName" class="logo-name">
        </div>
        <div class="app-login-wrapper">
            <div class="app-login-form">
                <div class="app-login-switcher">登录</div>
                <div class="app-login-content">
                    <div>
                        <input type="text" placeholder="学号/工号" v-model="user.username" @keyup.enter="login">

                        <input type="password" placeholder="密码" v-model="user.password" @keyup.enter="login">

                    </div>
                    <div class="app-login-content-login-button" @click="login">登录</div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                user:{
                    username: null,
                    password: null,
                },
                isLogin: true,
                logoName: require('../assets/logo.png'),
                loginBg: require('../assets/login-bg.jpg'),
            }
        },

        methods: {

            login() {
                if (this.user.username !== 'admin') {
                    alert('用户名错误');
                    return
                }
                if (this.user.password !== 'admin') {
                    alert('密码错误');
                    return
                }
                if (this.user.username === 'admin' && this.user.password === 'admin') {
                   // this.$router.push({path:'/home'})
                    window.location.href = './index.html'
                }

            },

        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .app-login {

        height: 770px;
        user-select: none;
        .app-login-logo {
            float: left;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 50%;
            height: 100%;
            .logo {
                border-radius: 200px;
                width: 150px;
                height: 150px;
            }
            .logo-name {
                width: 300px;
                margin-top: 36px;
            }
        }
        .app-login-wrapper {
            width: 50%;
            float: right;
            height: 100%;
            background-color: rgba(black, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .app-login-form {
                height: 400px;
                width: 300px;
                border-radius: 4px;
                background-color: rgba(white, 0.3);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                .app-login-switcher {
                    width: 100%;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                .app-login-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                    input {
                        width: 100%;
                        background-color: white;
                        border-radius: 4px;
                        outline: none;
                        border: none;
                        height: 36px;
                        line-height: 36px;
                        margin-bottom: 20px;
                        padding: 0 12px;
                        box-sizing: border-box;
                    }

                    .app-login-content-login-button {
                        height: 40px;
                        background-color: #4c8fc4;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        border-radius: 4px;
                        cursor: pointer;
                        &:active {
                            background-color: mix(black, #4c8fc4, 10%);
                        }
                    }

                }
            }
        }

    }


</style>
