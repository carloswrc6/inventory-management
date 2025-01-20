
# Inventory Management

https://master.d2bsyess54t9q6.amplifyapp.com/

This GitHub project is an inventory management system with Next.js, Redux, Node and AWS using Next.js for the frontend, styled with Tailwind CSS and Material UI Data Grid for complex data handling. State management is optimized with Redux Toolkit, complemented with Redux Toolkit Query for data fetching. 

The backend runs on Node.js, using Prisma as ORM to facilitate interactions with the database. It implements and integrates AWS services such as RDS for database management, EC2 for compute power, API Gateway for creating robust APIs, Amplify for front-end implementation and S3 for storage solutions.

**Main page**

![Main page](https://s3-inventory-management-qazedctgbvxcrewdsf-iopkjlmnhbnvgbh.s3.us-east-1.amazonaws.com/Inventory+Management.png)

It is organized into several main modules that facilitate the management of various aspects of a business.

## 1. Dashboard

**Most Popular Products:** Display of the most sold products.
**Sales Summary:** Displays a summary of daily, weekly or monthly sales.
**Summary of Purchases and Expenses:** Detail of accumulated purchases and expenses.
**Customers and Expenses:** Consolidated information about customers and their expenses.
**Quotas and Pending Orders:** Listing of pending quotas and orders awaiting processing.
**Sales and Discounts:** Summary of sales made and discounts applied.

```http
  GET /dashboard - All data dashboard
```

## 2. Inventory

**Product List:** Displays a detailed listing of all products available in inventory, with options to view, edit or delete.

```http
  GET /products - All products
```

## 3. Products

**Product Listing:** Lists all products registered in the system.
**Product Creation:** Allows you to add new products with details such as name, description, price, and stock.

```http
  GET /products - All products
```

```http
  POST /products - Add products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `productId` | `string` | **Required**. |
| `name` | `string` | **Required**. |
| `price` | `float` | **Required**. |
| `rating` | `float` | **Required**. |
| `stockQuantity` | `number` | **Required**. |

## 4. Users
**User List:** Presents a list of registered users, with management options such as profile editing and user deletion.

```http
  GET /users - All users
```

## 5. Settings
**Edit User Data:** Section where users can update their personal information, including name, email, and password.

## 6. Expenses
**Filter by Category and Dates:** Allows filtering expenses by categories and date ranges.
**Expense Pie Chart:** Generates a pie chart showing the distribution of expenses by specific areas.

```http
  GET /expenses - All data expenses
```

## Installation

**Frontend**

```bash
# Acceder a la carpeta 'client'
cd .\client\

# Instalar las dependencias del proyecto usando npm
npm i

# Crear el archivo '.env.local' y agregar la variable de entorno NEXT_PUBLIC_API_BASE_URL
echo NEXT_PUBLIC_API_BASE_URL=http://localhost:80 > .env.local

# Ejecutar el servidor de desarrollo
npm run dev
```
        
**Backend**

```bash
# Acceder a la carpeta 'server'
cd .\server\

# Instalar las dependencias del servidor usando npm
npm i

# Generar el cliente Prisma basado en el esquema definido
npx prisma generate

# Ejecutar la migración de la base de datos para aplicar los cambios iniciales
npx prisma migrate dev --name init

# Ejecutar el script de semillas (seed) para poblar la base de datos con datos iniciales
npm run seed

# Crear el archivo '.env' y agregar las variables de entorno PORT y DATABASE_URL
echo PORT=80 > .env && echo DATABASE_URL="postgresql://myuser:mypassword@localhost:5433/mydatabase?schema=public" >> .env

# Iniciar el servidor de desarrollo del backend
npm run dev
```
## Screenshots


**Main page**

![Main page](https://s3-inventory-management-qazedctgbvxcrewdsf-iopkjlmnhbnvgbh.s3.us-east-1.amazonaws.com/Inventory+Management.png)

**AWS Infrastructure**

![AWS Infrastructure](https://s3-inventory-management-qazedctgbvxcrewdsf-iopkjlmnhbnvgbh.s3.us-east-1.amazonaws.com/AWS.png)

**DataBase**

![DataBase](https://s3-inventory-management-qazedctgbvxcrewdsf-iopkjlmnhbnvgbh.s3.us-east-1.amazonaws.com/DataBase.png)

