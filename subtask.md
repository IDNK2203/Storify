# Tasks

## App

---

## Page

---

### Home

- create product category links on home page.

### Product List

- grab url parameter as product category and set as page title
- passed states sort, category and filters down to product component

## Components

---

### Query Controls Components _- Product List page_

- converted sort dropdown into a controlled input
- handled both color and size dropdowns with useState hook.

### Products Components

- create a filterable and sortable product list component

**Instructions**

- recieve from db with API request depending on the category given or not.
- filter the retrieve products using the filters object into a new filtered Products arrray
- sort filtered array depending on the sort object.
- display products to the UI if the no filters object was provided, if provided display the filtered products array .

### ProductsItem Components

- product link to route to individual product page.
