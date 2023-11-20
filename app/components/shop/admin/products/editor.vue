<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useProductsStore } from '../../../../stores/products'
import { useNotificationStore } from '../../../../stores/notifications';

const router = useRouter()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const productsStore = useProductsStore()
const notificationStore = useNotificationStore()

const products = computed(() => {
  return productsStore.products.map((product) => product.slug);
})

const date = new Date().toISOString().split('T')[0]

const slug = computed(() => {
  if (!props.product) {
    return slugify(edit.value.name)
  } else {
    return props.product.slug
  }
})

const edit = ref(props.product || {
  id: '',
  brand: '',
  name: '',
  slug: '',
  images: [],
  quantity: 0,
  description: '',
  comments: '',
  facts: '',
  propertyName: '',
  propertyValue: '',
  variant: '',
  variants: [],
  properties: '',
  boughtPrice: 0,
  sellingPrice: 0,
  account: '',
  tax: 19,
  EAN: '',
  similarProducts: []
})

const selectedFiles = ref([])
const uploadProgressInfos = ref([])
const newFilesInfos = ref([])

const selectFiles = (e) => {
  selectedFiles.value = e.target.files
}

const uploadImages = async () => {
  try {
    const path = `shop/${date}/${slug.value}/`
    await uploadFiles(path, selectedFiles.value)
    for (let file of selectedFiles.value) {
      console.log(file);

      edit.value.images.push(path + slugify(file.name))
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
    for (let image of edit.value.images) {
      edit.value.images = edit.value.images.filter(p => p !== path)
    }
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

const makeImageFirst = (image) => {
  const index = edit.value.images.indexOf(image);

  if (index !== -1) {
    // Remove the item from its current position
    edit.value.images.splice(index, 1);

    // Add the item back to the beginning of the array
    edit.value.images.unshift(image);
  }

  return edit.value.images;
}

const addNewProduct = async () => {
  try {
    if (edit.value.name) {
      edit.value.slug = slug.value
      if (!edit.value.id) {
        await addProduct(edit)
      } else {
        await updateProduct(edit)
      }
      await productsStore.fetchProducts()
      router.push(`/shop/product/${edit.value.slug}`)
      notificationStore.addNotification({
        type: 'success',
        msg: 'Saved!'
      })
    } else {
      alert('Bitte minimum das Feld "Slug" & "Name" füllen')
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const removeProduct = async () => {
  try {
    await deleteProduct(edit.value.slug)
    await productsStore.fetchProducts()
    router.push(`/admin/shop/products`)
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
          <img class="w-full max-h-64 object-cover" :src="`/uploads/${(edit.images[0]) ? edit.images[0] : 'product-placeholder.png'}`" onclick="img_upload.showModal()">
          <button class="btn w-full my-2 rounded-r-none md:rounded-r rounded-2xl rounded-l-none shadow shadow-inner tooltip" onclick="img_upload.showModal()" disabled v-if="!slug" data-tip="Benenne das Produkt erst">Neues Produkt Bild</button>
          <button class="btn w-full my-2 rounded-r-none md:rounded-r rounded-2xl rounded-l-none shadow shadow-inner" onclick="img_upload.showModal()" v-else>Neues Produkt Bild</button>
          <dialog id="img_upload" class="modal">
            <div class="modal-box">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <p class="label-text">Pick an image file</p>
                  <p class="label-text-alt">Upload</p>
                </label>
                <input class="file-input file-input-bordered w-full max-w-xs" type="file" name="file" multiple @change="selectFiles"/>
                <label class="label">
                  <p class="label-text-alt">Resolution: 600x600px</p>
                </label>
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
                <tr class="hover:bg-base-200" v-for="image in edit.images" @click="makeImageFirst(image)">
                  <!-- <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th> -->
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img :src="`/uploads/${image}`" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ image }}
                  </td>
                  <th>
                    <button class="btn btn-error btn-circle btn-md" @click="removeImage(image)">
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

      <div class="w-full md:w-2/3 flex flex-wrap">
        <!-- Product infos -->
        <div class="w-full md:w-1/2 p-4">
          <h2 class="font-bold">Meta Daten</h2>

          <!-- Product Name -->
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <p class="label-text">Produkt Name*
                  <span class="text-gray-500 italic text-sm">Slug: {{ slug }}</span>
                </p>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.name"/>
            </div>
          </div>

          <!-- Quantity -->
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <p class="label-text">Menge</p>
              </label>
              <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.quantity"/>
            </div>
          </div>

          <!-- Varaints -->
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <p class="label-text">Farbe</p>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.variants[0]"/>
            </div>
          </div>

          <!-- Brand -->
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <p class="label-text">Marke</p>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.brand"/>
            </div>
          </div>

          <!-- Prices -->
          <div class="flex flex-wrap">
            <div class="">
              <div class="form-control w-full max-w-md">
                <label class="label">
                  <p class="label-text">Preis (Verkauf) (in EUR)</p>
                </label>
                <input type="number" placeholder="2€" class="input input-bordered w-full max-w-md"  v-model="edit.sellingPrice"/>
              </div>
            </div>
            <div class="">
              <div class="form-control w-full max-w-md">
                <label class="label">
                  <p class="label-text">Preis (gekauft) (in EUR)</p>
                </label>
                <input type="number" placeholder="1€" class="input input-bordered w-full max-w-md"  v-model="edit.boughtPrice"/>
              </div>
            </div>
          </div>

          <!-- Product EAN -->
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <p class="label-text">EAN</p>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.EAN"/>
            </div>
          </div>

          <div class="flex flex-warp">
            <!-- Account Tax-->
            <div class="">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <p class="label-text">Tax</p>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit.tax"/>
              </div>
            </div>

            <!-- Account ID -->
            <div class="">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <p class="label-text">Account</p>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit.account"/>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 p-4 flex flex-col">
          <div class="">
            <label class="label">
              <p class="label-text">Ähnliche Produkte</p>
            </label>
            <Multiselect
            v-model="edit.similarProducts"
            :options="products"
            :searchable="true"
            :classes="useMultiselectClasses()"
            mode="tags"
            />
          </div>

          <!-- Property Meta -->
          <div class="pt-4">
            <h3 class="font-bold">Eigenschaften</h3>
            <div class="form-control w-full max-w-md">
              <label class="label">
                <p class="label-text">Eigenschafts Name</p>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.propertyName"/>
            </div>
            <div class="">
              <div class="form-control w-full max-w-md">
                <label class="label">
                  <p class="label-text">Eigenschafts Wert</p>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.propertyValue"/>
              </div>
            </div>
            <div class="">
              <div class="form-control w-full max-w-md">
                <label class="label">
                  <p class="label-text">Weitere Eigenschaften</p>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.properties"/>
              </div>
            </div>
          </div>
        </div>
        <!-- Product Details -->
        <div class="w-full p-4">
          <h3 class="font-bold">Produkt Daten</h3>
          <div class="form-control w-full">
            <label class="label">
              <p class="label-text">Beschreibung</p>
            </label>
            <Texteditor v-model="edit.description"/>
            <!-- <textarea class="textarea textarea-bordered w-full h-64" placeholder="Produkt Beschreibung" v-model="edit.description"></textarea> -->
          </div>
        </div>

        <div class="divider">
        </div>

        <div class="w-full p-4">
          <h3 class="font-bold">Kommentar</h3>
          <div class="form-control w-full">
            <Texteditor v-model="edit.comments"/>
          </div>
        </div>
      </div>

    </div>
    <div class="w-full p-4 rounded-t rounded-xl">
      <!-- Featured -->
      <div class="">
        <div class="form-control w-16">
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="checkbox" checked="checked" class="checkbox"  v-model="edit['featured']"/>
              <p class="label-text pl-2">Featured</p>
            </label>
          </div>
        </div>
      </div>
      <button class="btn btn-success mr-2" @click="addNewProduct()">Save</button>
      <button class="btn btn-error mr-2" onclick="remove_product.showModal()">Remove</button>
      <dialog id="remove_product" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Attention!</h3>
          <p class="py-4">Removing this product deletes it permanentally!</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn btn-error" @click="removeProduct()">Remove</button>
              <button class="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
      <button class="btn" @click="router.push(`/shop/product/${edit.slug}`)">View</button>
    </div>

  </div>
</template>
