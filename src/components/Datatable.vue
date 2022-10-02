<template>
    <v-card flat>
        <v-card-text>
            <v-table fixed-header>
                <thead>
                    <tr>
                        <template v-for="(option, index) in options.columns" :key="`${options.id}-column-${index}`">
                            <th class="text-left">{{ option.name }}</th>
                        </template>
                        <th v-if="action" style="width: 120px;" class="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="loading">
                        <tr class="text-center">
                            <td :colspan="options.columns.length">
                                <div>Loading...</div>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr v-for="(item, index) in list" :key="index">
                            <template v-for="(option, index) in options.columns" :key="`${options.id}-column-${index}`">
                                <td @click="preview(item)" style="cursor: pointer;">{{ item[option.key] }}</td>
                            </template>
                            <td v-if="action" class="text-right">
                                <div>
                                    <v-btn variant="text" icon color="secondary" size="small" @click="emit('edit', item.id)">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn variant="text" icon color="error" size="small" @click="emit('del', item.id)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
    <v-dialog transition="dialog-top-transition" v-model="isModalOpen" width="500">
        <v-card v-if="selected.id">
            <v-card-title class="text-h5 grey lighten-2"><v-icon :color="selected.isAdmin? 'green': ''" class="mr-4">{{ selected.isAdmin? 'mdi-shield-account': 'mdi-account'}}</v-icon>{{ selected.name }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div>
                    <div><v-icon class="mr-4">mdi-phone</v-icon>{{ selected.number }}</div>
                    <div><v-icon class="mr-4">mdi-email</v-icon>{{ selected.email }}</div>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits , ref} from 'vue'
const { list, options, loading, action } = defineProps({ list: Array, options: { type: Object, required: true }, loading: { default: false, type: Boolean }, action: { default: false } })
const emit = defineEmits(['edit', 'del', 'row'])

const selected = ref({})

const isModalOpen = ref(false)

const preview = (item) =>  {
    selected.value = item
    setTimeout(() => {
        isModalOpen.value = true
    })
}
</script>
