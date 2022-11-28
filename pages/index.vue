<template>
  <div class="mx-auto mt-10 bg-white shadow-md w-11/12">
    <div class="w-full bg-blue-600">
      <h1 class="text-white p-3 text-md font-semibold">Crud Application</h1>
    </div>
    <div class="flex w-fulll justify-end mx-10 mt-8">
      <div @click="openCreateModal()">
        <button class="text-white px-3 bg-blue-600 p-2 rounded-md">
          Create Employee
        </button>
      </div>
    </div>

    <div class="flex-col mt-10 mb-10 w-11/12 flex justify-center mx-auto">
      <table class="min-w-9/12 divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Id
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 w-[200px]"
            >
              Employee Name
            </th>

            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              role
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              salary
            </th>
            <th
              scope="col"
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 w-[200px]"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody
          v-for="(data, index) in datas"
          :key="index"
          class="bg-white divide-y divide-gray-200"
        >
          <tr>
            <td
              class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
            >
              {{ data.id }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
              {{ data.name }}
            </td>

            <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
              {{ data.role }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
              {{ data.salary }}
            </td>
            <td class="flex px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
              <button
                class="text-indigo-600 hover:text-indigo-900"
                @click="openEditModal(index)"
              >
                Edit
              </button>
              <span @click="deleteEmployee(index, data.id)">
                <img
                  src="../delete.svg"
                  class="p-1 ml-2 text-red-600 rounded-full hover:text-red-900 hover:bg-gray-200"
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--  create modal -->
    <div
      v-if="createModal"
      class="w-full flex justify-center items-center absolute top-0 bottom-0"
    >
      <div class="w-[500px] bg-slate-50">
        <div class="flex justify-between px-8 p-5 bg-blue-600">
          <p class="text-white">Create</p>
          <img
            src="../cancel.svg"
            alt="cancel image"
            class="mt-1 hover:bg-slate-100 p-1"
            @click="closeModal()"
          />
        </div>
        <div class="w-full mt-10 mx-auto">
          <div
            class="mx-auto space-x-16 m-4 w-full flex justify-center items-center"
          >
            <span class="p-1">Name : </span>
            <input
              v-model="employee.name"
              type="text"
              placeholder="Entet the Name"
              class="p-1 border border-slate-200 outline-none hover:border-slate-300"
            />
          </div>

          <div
            class="mx-auto space-x-16 m-4 w-full flex justify-center items-center"
          >
            <span class="p-1">Role : </span>
            <input
              v-model="employee.role"
              type="text"
              placeholder="Entet the Role"
              class="p-1 border border-slate-200 outline-none hover:border-slate-300"
            />
          </div>
          <div
            class="mx-auto space-x-16 m-4 w-full flex justify-center items-center"
          >
            <span class="p-1">Salary : </span>
            <input
              v-model="employee.salary"
              type="number"
              placeholder="Entet the Salary"
              class="p-1 border border-slate-200 outline-none hover:border-slate-300"
            />
          </div>
        </div>
        <div class="w-full border-slate-200 border p-3 flex justify-center">
          <button
            @click="createEmployee()"
            class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <!-- edit modal  -->
    <div
      v-if="editModal"
      class="w-full flex justify-center items-center absolute top-0 bottom-0 bg-block"
    >
      <div class="w-[500px] bg-slate-50">
        <div class="flex justify-between px-8 p-5 bg-blue-600">
          <p class="text-white">Create</p>
          <img
            src="../cancel.svg"
            alt="cancel image"
            class="mt-1 p-1 hover:bg-slate-100"
            @click="closeModal()"
          />
        </div>
        <div class="w-full mt-10 mx-auto">
          <div
            class="mx-auto space-x-14 m-4 w-full flex justify-center items-center"
          >
            <span class="p-1">Name : </span>
            <input
              v-model="employee.name"
              type="text"
              placeholder="Entet the Name"
              class="p-1 border border-slate-200 outline-none hover:border-slate-300"
            />
          </div>

          <div
            class="mx-auto space-x-14 m-4 w-full flex justify-center items-center"
          >
            <span class="p-1"> Role : </span>
            <input
              v-model="employee.role"
              type="text"
              placeholder="Entet the Role"
              class="p-1 border border-slate-200 outline-none hover:border-slate-300"
            />
          </div>
          <div
            class="mx-auto space-x-14 m-4 w-full flex justify-center items-center"
          >
            <span class="p-1">Salary : </span>
            <input
              v-model="employee.salary"
              type="text"
              placeholder="Entet the Salary"
              class="p-1 border border-slate-200 outline-none hover:border-slate-300"
            />
          </div>
        </div>
        <div class="w-full border-slate-200 border p-3 flex justify-center">
          <button
            class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            @click="update()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Crud",
  data() {
    return {
      datas: [],
      createModal: false,
      editModal: false,
      employee: {
        name: "",
        role: "",
        salary: "",
      },
    };
  },
  mounted() {
    this.getEmployee();
  },
  methods: {
    //  create
    createEmployee() {
      $fetch("http://localhost:5001/api/employee", {
        method: "POST",
        body: this.employee,
      }).then((response) => {
        if (response.success) {
          this.datas.push(this.employee);
          this.createModal = false;
          this.employee = {};
          return;
        }
      });
    },

    // read

    getEmployee() {
      $fetch("http://localhost:5001/api/employee", {
        method: "GET",
      }).then((response) => {
        this.datas = response.datas;
        return;
      });
    },

    // update

    update() {
      $fetch("http://localhost:5001/api/employee", {
        method: "PUT",
        body: this.employee,
      }).then((responce) => {
        if (responce.success) {
          this.datas[index] = this.employee;
        }
      });
      this.editModal = false;
    },

    // delte

    deleteEmployee(index, id) {
      $fetch(`http://localhost:5001/api/employee/${id}`, {
        method: "DELETE",
      }).then((responce) => {
        if (responce.success) {
          this.datas.splice(index, 1);
        }
      });
    },

    openCreateModal() {
      this.createModal = true;
    },
    openEditModal(index) {
      this.employee = this.datas[index];
      this.editModal = true;
    },
    closeModal() {
      this.createModal = false;
      this.editModal = false;
    },
  },
};
</script>
