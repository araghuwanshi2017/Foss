<template>

    <section>
        <div>
            <a href = "/login"> <u class = "level-right"> <b-button  type="is-text" >Profile_page</b-button> </u> </a>
            <a href = "/login"> <u class = "level-right"> <b-button  type="is-text">logout</b-button> </u> </a>
        </div>

        <b-field label="Search... " :label-position="labelPosition">
            <b-input placeholder="Search..." type="search"></b-input>
            <p class="control">
                <b-button class="button is-primary">Search</b-button>
            </p>
        </b-field>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Search For the Books">
            <b-autocomplete
                v-model="name"
                ref="autocomplete"
                :data="filteredDataArray"
                placeholder="e.g. Kiwkai"
                @select="option => selected = option">
                <template slot="header">
                    <a @click="showAddFruit">
                        <span> Add new... </span>
                    </a> 
                </template>
                <template slot="empty">No results for {{name}}</template>
            </b-autocomplete>
        </b-field>

        <b-table :data="data" :columns="columns"></b-table>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    'Deception Point',
                    'Digital Fortress',
                    'The origin',
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
        methods: {
            showAddFruit() {
                this.$buefy.dialog.prompt({
                    message: `Books`,
                    inputAttrs: {
                        placeholder: 'e.g. ',
                        maxlength: 20,
                        value: this.name
                    },
                    confirmText: 'Add',
                    onConfirm: (value) => {
                        this.data.push(value)
                        this.$refs.autocomplete.setSelected(value)
                    }
                })
            }
        }
    }
</script>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        }
    }
</script>


