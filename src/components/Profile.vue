<template>
    <div>
        <div id="profile" @mouseover = "recalculateGPA">
            <div class="avatar">
                <img src="./assets/me.png" id="picture" alt="My picture">
            </div>
            <div class="info">
                <ul>
                    <li id="name">John Doe</li>
                    <li id="birthdate">11/10/1990</li>
                    <li id="faculty">Software Engineering</li>
                </ul>
            </div>
            <div id="gpa">
                <strong>{{ gpa }}</strong>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Profile",
        data: () => {
            return {
                gpa : 0
                }
            },
        methods: {
            recalculateGPA: function () {
                this.gpa = this.$GetGPA
                }
            },
        props: {
            add: Function
            }
        }
</script>

<style scoped>
    #profile {
        border-bottom: 1px dashed #a7a7a7;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    #profile div:not(.clear-fix) {
        height: 190px;
        float: left;
        position: relative;
    }

    #profile .avatar {
        width: 35%;
        text-align: center;
    }

    #profile .avatar img {
        width: 180px;
    }

    #profile .info {
        width: 45%;
    }

    #profile #gpa {
        width: 20%;
    }

    #profile #gpa strong {
        position: absolute;
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto auto;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
    }
    .clear-fix {
        clear: both;
    }

</style>