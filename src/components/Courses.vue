<template>

    <div>
        <h1 class="title">Courses</h1>
        <table id="courses">
            <thead>
            <tr>
                <th>#</th>
                <th>Course Title</th>
                <th>Semester</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="entry in tableStuff" v-bind:key="entry.id">
                <td>{{ entry[0] }}</td>
                <td>{{ entry[1] }}</td>
                <td>{{ entry[2] }}</td>
                <td>{{ entry[3] }}</td>
            </tr>
            </tbody>
        </table>
        <br>
        <br>
        <div>
            <button id="add-course-button" class="blue-button" v-on:click="plusOpen = !plusOpen" >+</button>
            <span v-if="plusOpen">
                <input class="input" v-model="Title" type="text" placeholder="Course title" id="title">
                <input class="input" v-model="Semes" type="number" min="1" max="8" placeholder="Semester" id="semester">
                <input class="input" v-model="Grade" type="number" min="0" max="100" placeholder="Grade" id="grade">
                <button class="green-button" id="save-course" v-on:click="addToTable()">Save</button>
                <button class="grey-button" id="cancel-course" v-on:click="clearTable">Cancel</button>
            </span>
        </div>
    </div>
</template>

Vue.prototype.$GetGPA = function() {
    return this.tableStuff.length
    }

<script>
    export default {

        //Vue.prototype.$appName = 'My App'

        name: "Courses",
        data: function() {
            return {
                plusOpen: false,
                Title:"",
                Semes:"",
                Grade:"",
                tableStuff:[
                ["1","Agile software development","1","82"],
                ["2","System modeling","1","85"],
                ["3","Object-oriented programming","2","99"],
                ["4","Estonian language level A2","2","65"]
                ]
                }
            },
        methods: {
            addToTable: function () {
                var entry = [this.tableStuff.length,this.Title,this.Semes,this.Grade]
                this.tableStuff.push(entry)
                this.Title = ''
                this.Semes = ''
                this.Grade = ''
                },
            clearTable: function () {
                this.Title = ''
                this.Semes = ''
                this.Grade = ''
                this.plusOpen = false
                }
            }
        }
</script>

<style scoped>

</style>