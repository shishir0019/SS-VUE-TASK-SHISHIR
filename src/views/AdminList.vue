<template>
    <v-row>
        <v-col>
            <h3>All Admin List</h3>
        </v-col>
        <v-col cols="auto">
            <!-- <v-btn color="primary" @click="triggerModal">New Admin</v-btn> -->
        </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>
    <datatable :list="list" :options="options" :loading="loading" />
</template>

<script setup>
import { onMounted, computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import Datatable from "@/components/Datatable.vue";

const store = useStore();
onMounted(() => store.dispatch("admin/get"));

const isModalOpen = ref(false);

const triggerModal = () => {
    isModalOpen.value = true;
};

const list = computed(() => store.getters["admin/list"]);
const loading = computed(() => store.getters["admin/loading"]);

const options = reactive({
    id: "admin-datatable",
    columns: [
        { name: "Name", type: "text", key: "name" },
        { name: "Email", type: "text", key: "email" },
        { name: "Number", type: "text", key: "number" },
    ],
});
</script>