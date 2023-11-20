<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useCategoriesStore } from '../../../../stores/categories'
import { useProductsStore } from '../../../../stores/products'
import { useNotificationStore } from '../../../../stores/notifications';

const router = useRouter()
const route = useRoute()

const props = defineProps({
  subcategory: {
    type: Object,
    required: true
  }
})

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
const notificationStore = useNotificationStore()

const date = new Date().toISOString().split('T')[0]

const category = computed(() => {
  return categoriesStore.categories.find(c => c.slug === route.params.slug)
})

const slug = computed(() => {
  if (!props.subcategory) {
    return slugify(edit.value.name)
  } else {
    return props.subcategory.slug
  }
})

const edit = ref(props.subcategory || {
  id: '',
  parent: route.params.slug,
  name: '',
  slug: '',
  image: '',
  description: '',
  products: [],
  featured: [],
  created: '',
  updated: '',
})

const selectedFiles = ref([])
const uploadProgressInfos = ref([])
const newFilesInfos = ref([])

const selectFiles = (e) => {
  selectedFiles.value = e.target.files
}

const uploadImages = async () => {
  try {
    const path = `shop/subcategories/${date}/${slug.value}/`
    await uploadFiles(path, selectedFiles.value)
    for (let file of selectedFiles.value) {
      edit.value.image = path + slugify(selectedFiles.value[0].name)
    }
    notificationStore.addNotification({
      type: 'success',
      msg: 'Saved!'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const removeImage = async (path) => {
  try {
    await deleteFile(path)
    edit.value.image = ''
    notificationStore.addNotification({
      type: 'success',
      msg:  `"/uploads/${path}" successfully removed!`
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const addNewSubcategory = async () => {
  try {
    if (edit.value.name) {
      edit.value.slug = slug.value
      if (!edit.value.id) {
        await addSubcategory(route.params.slug, edit)
      } else {
        await updateSubcategory(route.params.slug, edit)
      }
      await categoriesStore.fetchCategories()
      router.push(`/admin/shop/categories/${route.params.slug}`)
      notificationStore.addNotification({
        type: 'success',
        msg: 'Saved!'
      })
    } else {
      alert('Bitte die Felder "Slug" & "Name" füllen')
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const removeSubcategory = async () => {
  try {
    await deleteSubcategory(route.params.slug, edit.value.slug)
    await categoriesStore.fetchCategories()
    router.push(`/admin/shop/categories/${route.params.slug}`)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Successfully removed!'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap bg-base-100 rounded rounded-xl shadow">

      <!-- Image -->
      <div class="w-full md:w-1/3">
        <div class="">
          <img class="w-full max-h-64 object-cover" :src="`/uploads/${(edit.image) ? edit.image : 'shop/product-placeholder.png'}`" onclick="img_upload.showModal()">
          <button class="btn w-full my-2 rounded-r-none md:rounded-r rounded-2xl rounded-l-none shadow shadow-inner" onclick="img_upload.showModal()" disabled v-if="!slug" data-tip="Benenne das Produkt erst">Neues Subkategorie Bild</button>
          <button class="btn w-full my-2 rounded-r-none md:rounded-r rounded-2xl rounded-l-none shadow shadow-inner" onclick="img_upload.showModal()" v-else>Neues Subkategorie Bild</button>
          <dialog id="img_upload" class="modal">
            <div class="modal-box">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Pick an image file</span>
                  <span class="label-text-alt">Upload</span>
                </label>
                <input class="file-input file-input-bordered w-full max-w-xs" type="file" name="file" multiple @change="selectFiles"/>
                <!-- <label class="label">
                  <span class="label-text-alt">Resolution: 600x600px</span>
                </label> -->
              </div>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn btn-success" @click="uploadImages()">Upload</button>
                  <button class="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>

          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <!-- <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th> -->
                  <th>Bild</th>
                  <th>Dateipfad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-base-200" v-if="edit.image">
                  <!-- <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th> -->
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img :src="`/uploads/${edit.image}`" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ edit.image }}
                  </td>
                  <th>
                    <button class="btn btn-error btn-circle btn-md" @click="removeImage(edit.image)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </th>
                </tr>
              </tbody>
              <!-- foot -->
              <tfoot>
                <tr>
                  <!-- <th></th> -->
                  <th>Bild</th>
                  <th>Dateiname</th>
                  <th></th>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>
      </div>

      <!-- Category infos -->
      <div class="w-full md:w-1/3 p-4">
        <h2 class="font-bold">Eigenschaften</h2>
        <!-- Category ID -->
        <!-- <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Category ID</span>
            </label>
            <input type="text" placeholder="Automatisch generiert" class="input input-bordered w-full max-w-md"  v-model="edit.id" disabled/>
          </div>
        </div> -->

        <!-- Category Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Subkategorie Name*</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.name"/>
          </div>
        </div>

        <div class="form-control w-full max-w-md">
          <label class="label">
            <span class="label-text">Beschreibung</span>
          </label>
          <textarea class="textarea textarea-bordered w-full h-64" placeholder="Subkategorie Beschreibung" v-model="edit.description"></textarea>
        </div>
      </div>

      <div class="w-full md:w-1/3 p-4 flex flex-col p-4">
        <!-- Category Details -->
        <div class="">
          <h3 class="font-bold">Kategorie Inhalt</h3>
          <label class="label">
            <span class="label-text">Produkte</span>
          </label>
          <Multiselect
            v-model="edit.products"
            :options="category.products"
            :searchable="true"
            :classes="useMultiselectClasses()"
            mode="tags"
          />

          <div class="">
            <label class="label">
              <span class="label-text">Featured</span>
            </label>
            <Multiselect
              v-model="edit.featured"
              :options="edit.products"
              :searchable="true"
              :classes="useMultiselectClasses()"
              mode="tags"
            />
          </div>
          <!-- <select class="select select-bordered w-full max-w-md h-64" multiple v-model="edit.products">
            <option disabled selected>Produkte</option>
            <option v-for="product in productsStore.products">{{ product.name }}</option>
          </select> -->
        </div>
      </div>

    </div>
    <div class="w-full p-4 rounded-t rounded-xl">
      <button class="btn btn-success mr-2" @click="addNewSubcategory()">Save</button>
      <button class="btn btn-error mr-2" onclick="remove_subcategory.showModal()">Remove</button>
      <dialog id="remove_subcategory" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Attention!</h3>
          <p class="py-4">Removing this category deletes it permanentally!</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn btn-error" @click="removeSubcategory()">Remove</button>
              <button class="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
      <button class="btn" @click="router.push(`/shop/category/${edit.slug}`)">View</button>
    </div>

  </div>
</template>
