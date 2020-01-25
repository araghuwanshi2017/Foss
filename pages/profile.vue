<template>
  <form>
      </br>
      Name : {{bio_data.name}}
      </br>
      Owner id : {{bio_data.owner_id}}
      </br>
      Email : {{bio_data.email_id}}
      </br>
      Room Number : {{bio_data.room_no}}
      </br>
      </br>
      <b-table :data="data" :columns="columns"></b-table>
      </br>
      </br>
      </br>
      </br>
      </br>
      <b> If you want to upload the book, fill in the details and click upload</b>
      <section>
        </br>
        <b-field label="Book Name">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.book_name"></b-input>
        </b-field>
        <b-field label="ISBN">
            <b-icon size="is-small"></b-icon>
            <b-input type="ISBN" v-model="new_book_data.ISBN">
            </b-input>
        </b-field>
        <b-field label="Unique Book Id">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.unique_book_id" maxlength="30"></b-input>
        </b-field>
        <b-field label="Description">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.description" type="text" maxlength="30"></b-input>
        </b-field>
        <b-field label="Upload Image">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.image" type="image"></b-input>
        </b-field>

    </section>


  </form>
</template>

<script>
    export default {
        data() {
            return {
                bio_data: {
                    name:"df",
                    owner_id: 'dfr',
                    email_id: 'sf',
                    room_no: 'sef',

                },
                new_book_data: {
                    book_name:'',
                    ISBN:'',
                    unique_book_id:'',
                    description:'',
                    image:''
                },
                data:[
                    { 'ISBN': 1, 'title': 'Jesse', 'image': 'Simmons', 'description': '2016-10-15 13:43:27'}
                    ],
                columns: [
                    {
                        field: 'ISBN',
                        label: 'ISBN',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'title',
                        label: 'Book Title',
                    },
                    {
                        field: 'image',
                        label: 'Image',
                    },
                    {
                        field: 'description',
                        label: 'description',
                        centered: true
                    }
                ]
            }
        }
    }
</script>

