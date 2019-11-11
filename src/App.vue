<template>
    <main id="app">
        <header>
            <strong>Welcome to your dashboard!</strong>
        </header>
        <section id="container">
            <section id="main">
                <div class="content">
                    <div id="profile-container" class="tab active">
                        <Profile :profilee="profile"/>
                    </div>
                    <div id="courses-container" class="tab">
                        <Courses :courses="courses"/>
                    </div>
                </div>
                <div class="controls">
                    <button @click="profile.close" id="profile-button" class="pill active">Profile</button>
                    <button  id="courses-button" class="pill" @click="courses.open = true">Courses </button>
                </div>
            </section>
        </section>
        <footer>
            <ul class="links">
                <li>
                    <a href="https://ois2.ut.ee/" target="_blank">OIS</a>
                </li>
                <li>
                    <a href="https://courses.cs.ut.ee/" target="_blank">Courses</a>
                </li>
            </ul>
        </footer>
    </main>
</template>

<script>

    import Profile from "./components/Profile";
    import Courses from "./components/Courses";
    export default {
        name: 'app',
        components: {Courses, Profile}
    }
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: 'Livvic', sans-serif;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: #eaeaea;
    }

    main {
        position: relative;
        min-height: 100%;
        padding-bottom: 110px;
    }


    header {
        padding: 20px;
        background-color: #2196F3;
        color: #ffffff;
        text-align: center;
        margin-bottom: 10px;
        height: 60px;
    }

    footer {
        padding: 30px 0;
        background-color: #607D8B;
        margin-top: 10px;
        height: 100px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    footer .links {
        display: block;
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        color: #acd7ff;
        font-size: 11px;
    }

    footer .links a {
        text-decoration: none;
        color: #acd7ff;
    }

    footer .links a:hover {
        text-decoration: underline;
    }

    #container {
        width: 80%;
        max-width: 900px;
        min-width: 320px;
        padding: 15px;
        background-color: #ffffff;
        margin: 0 auto;
    }

    

    .content {
        padding: 10px;
        border: 1px solid #cbcbcb;
    }

    table {
        width: 100%;
        border-collapse: collapse;

    }

    table th {
        padding: 8px 12px;
        text-align: left;
        border: 1px solid #cbcbcb;
        background-color: #03A9F4;
        color: #ffffff;
    }

    table td {
        padding: 8px 12px;
        border: 1px solid #cbcbcb;
    }


    .content .tab.active {
        display: block;
    }

    .controls .pill {
        border: 1px solid #cbcbcb;
        background-color: #eaeaea;
        padding: 10px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top: none;
        margin-top: -1px;
        outline: none !important;
    }

    .controls .pill.active {
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
    }

    .controls .pill:hover {
        cursor: pointer;
    }

    .blue-button {
        background-color: #2196F3;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .green-button {
        background-color: #69f378;
        color: #ffffff;
        border: none;
        padding: 10px 10px;
    }

    .grey-button {
        background-color: #e1e8e6;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .input {
        border: 1px solid #cccccc;
        padding: 10px 20px;
        min-width: 135px;
    }

    #add-course {
        display: none;
    }
</style>
