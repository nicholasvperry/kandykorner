Database productType
{
    "id": 
    "productName": 
    "productPrice":
    "productTypesId"
},

ApplicationViews
{/* Render the animal list when http://localhost:3000/productTypes */}
<Route path="/productTypes" element={<ProductTypeList />} />  

{/* Render the animal list when http://localhost:3000/employee */}
<Route path="/employees" element={<EmployeeList />} />

{/* Render the location list when http://localhost:3000/products */}
<Route path="/products" element={<ProductList />} />