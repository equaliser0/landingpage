<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const productsStore = useProductsStore()

const edit = ref({
  "image": "",
  "group-id": 1,
  "group-name": "",
  "product-id": Date,
  "brand": "",
  "name": "",
  "property-name": "",
  "property-value": "",
  "color": "",
  "properties": "",
  "selling-price": 0,
  "account": 8400,
  "tax": "19,00 %",
  "buying-price": 0,
  "EAN": "",
  "quantity": 1,
  "featured": false
})
</script>
<template>
  <div class="container auto-mx">
    <form class="flex flex-wrap">

      <!-- Image -->
      <div class="w-full md:w-1/3">
        <div class="">
          <img :src="`/uploads/shop/products/${(product.image) ? product.image : 'product-placeholder.png'}`" onclick="my_modal_1.showModal()">
          <button class="btn" onclick="my_modal_1.showModal()">Update Product Image</button>
          <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Pick an image file</span>
                  <span class="label-text-alt">Upload</span>
                </label>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
                <label class="label">
                  <span class="label-text-alt">Resolution: 600x600px</span>
                </label>
              </div>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn btn-success">Upload</button>
                  <button class="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <!-- Featured -->
        <div class="">
          <div class="form-control w-full max-w-xs">
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Featured</span>
                <input type="checkbox" checked="checked" class="checkbox"  v-model="edit['featured']"/>
              </label>
            </div>
          </div>
        </div>

        <!-- Brand -->
        <div class="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Brand</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['brand']"/>
          </div>
        </div>
      </div>

      <!-- Product infos -->
      <div class="w-full md:w-1/3 bg-base-300 rounded p-4">
        Product Infos
        <!-- Product ID -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Product ID</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['product-id']" disabled/>
          </div>
        </div>

        <!-- Product Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['name']"/>
          </div>
        </div>

        <!-- Quantity -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Quantity</span>
            </label>
            <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['quantity']"/>
          </div>
        </div>

        <!-- Group ID -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Group ID</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['group-id']"/>
          </div>
        </div>

        <!-- Group Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Group Name</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['group-name']"/>
          </div>
        </div>

        <!-- Prices -->
        <div class="">
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Selling Price (in EUR)</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['selling-price']"/>
            </div>
          </div>
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Buying Price (in EUR)</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['buying-price']"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Property Meta -->
      <div class="w-full md:w-1/3 bg-base-300 rounded p-4 flex flex-col m-4">
        <h3>Property</h3>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Propperty Name</span>
          </label>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['property-name']"/>
        </div>
        <div class="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Propperty Value</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['property-value']"/>
          </div>
        </div>
        <div class="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Properties</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['properties']"/>
          </div>
        </div>
      </div>

      <!-- Account -->
      <div class="flex flex-col">
        <h3>Account</h3>
        <!-- Account ID -->
        <div class="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Account</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['account']"/>
          </div>
        </div>

        <!-- Account Tax-->
        <div class="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Tax</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['tax']"/>
          </div>
        </div>

        <!-- Product EAN -->
        <div class="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">EAN</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['EAN']"/>
          </div>
        </div>
      </div>edit

      <div class="w-full py-8">
        <button class="btn btn-success" @click="productsStore.updateProduct(edit)">Save</button>
        <button class="btn btn-error" onclick="my_modal_5.showModal()">Remove</button>
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Attention!</h3>
            <p class="py-4">Removing this product deletes it permanentally!</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn btn-error" @click="productsStore.removeProduct(edit)">Remove</button>
                <button class="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </form>

  </div>
</template>
