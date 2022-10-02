<template>
    <!-- header -->
    <v-row>
        <v-col>
            <h3>All Stuff List</h3>
        </v-col>
        <v-col cols="auto">
            <v-btn color="primary" @click="triggerModal">New Stuff</v-btn>
        </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>

    <!-- datatable -->
    <datatable :list="list" :options="options" :loading="loading" @row="openStuff" :action="true" @edit="edit" @del="del" />

    <!-- Add/Edit modal -->
    <v-dialog transition="dialog-top-transition" v-model="isModalOpen" width="500">
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">{{ wannaEdit ? 'Update' : 'Create' }} stuff</v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="rules.valid" lazy-validation>
                    <v-text-field v-model="formData.name" :counter="10" :rules="rules.nameRules" label="Name" required />
                    <v-text-field v-model="formData.number" :rules="rules.numberRules" label="Number" required />
                    <v-text-field v-model="formData.email" :rules="rules.emailRules" label="E-mail" required />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="warning" class="mr-4" @click="rules.reset">Reset Form</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="error" class="mr-4" @click="isModalOpen = false; rules.reset();">Cencel</v-btn>
                <v-btn class="mr-4" type="submit" :disabled="!rules.valid" @click="submit">{{ wannaEdit ? 'Update' : 'Create' }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- snackbar notification -->
    <v-snackbar v-model="snackbar" :timeout="2000" color="primary">
        {{ snackbarMessage }}
    </v-snackbar>

    <v-dialog transition="dialog-top-transition" v-model="wannaDel" width="500">
        <v-card>
            <v-card-text>
                Do you want to delete?
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" class="mr-4" @click="wannaDel = false">Cencel</v-btn>
                <v-btn :loading="loading" :disabled="loading" color="error" @click="deleteStuff">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script setup>
import { onMounted, computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import Datatable from '@/components/Datatable.vue';

const store = useStore();
onMounted(() => store.dispatch('stuff/get'))

const isModalOpen = ref(false)

const triggerModal = () => {
    isModalOpen.value = true
}

const list = computed(() => store.getters['stuff/list'])
const loading = computed(() => store.getters['stuff/loading'])

const options = reactive({
    id: 'stuff-datatable',
    columns: [
        { name: 'Name', type: 'text', key: 'name' },
        { name: 'Email', type: 'text', key: 'email' },
        { name: 'Number', type: 'text', key: 'number' }
    ]
})

const form = ref(null)

const formData = reactive({})

const rules = reactive({
    valid: true,
    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
    ],
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    numberRules: [
        v => !!v || 'Number is required',
        v => (v && v.length >= 11) || 'Number must be at least 11 characters',
    ],
    reset() {
        wannaEdit.value = false
        form.value.reset()
    },
})

const snackbar = ref(false)
const snackbarMessage = ref('')

const selectedId = ref(0)

const submit = () => {
    if(wannaEdit.value){
        store.dispatch('stuff/update', formData)
        .then(res => {
            snackbarMessage.value = res.message
        }).finally(()=> {
            snackbar.value = true
            isModalOpen.value = false
        })
    }else{
        store.dispatch('stuff/create', formData)
        .then(res => {
            snackbarMessage.value = res.message
        }).finally(()=> {
            snackbar.value = true
            isModalOpen.value = false
        })
    }
}

const wannaEdit = ref(false)

const edit = (id) => {
    wannaEdit.value = true
    let item = store.getters['stuff/get_item'](id)
    isModalOpen.value = true

    formData.id = item.id
    formData.name = item.name
    formData.email = item.email
    formData.number = item.number

    setTimeout(() => {
        form.value.validate()
    })
}

const wannaDel = ref(false)

const del = (id) => {
    selectedId.value = id
    wannaDel.value = true
}

const deleteStuff = () => {
    store.dispatch('stuff/delete', selectedId.value)
    .then(res => {
        snackbarMessage.value = res.message
    })
    .finally(() => {
        snackbar.value = true
        wannaDel.value = false 
    })
}

const openStuff = (e) => {
    console.log(e);
}

</script>

<style>
    .snackbar{
        top: 60px; right: 20px;
    }
</style>