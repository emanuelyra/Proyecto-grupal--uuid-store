const productos =
  [
    // {
    //   "nombre": "Air Max 90",
    //   "modelo": "Air Max",
    //   "precio": 120,
    //   "stock": { "36": 0, "37": 0, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 0, "44": 0, "45": 0, "46": 0, "36.5": 0, "37.5": 0, "38.5": 0, "39.5": 0, "40.5": 0, "41.5": 0, "42.5": 0, "43.5": 0, "44.5": 0, "45.5": 0 },
    //   "genero": "Unisex",
    //   "marca": "Nike",
    //   "keyBorradoLogico": 1,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": false ,
    //   "codigo": "A1B2C3"
    // },
    // {
    //   "nombre": "Superstar",
    //   "modelo": "Superstar",
    //   "precio": 80,
    //   "stock": { "36": 0, "37": 0, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 0, "44": 0, "45": 0, "46": 0 },
    //   "genero": "Unisex",
    //   "marca": "Adidas",
    //   "keyBorradoLogico": 2,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": false,
    //   "codigo": "D4E5F6"
    // },
    // {
    //   "nombre": "Air Force 1",
    //   "modelo": "Air Force",
    //   "precio": 100,
    //   "stock": { "36 US": 0, "37 US": 0, "38 US": 0, "39 US": 32, "40 US": 40, "41 US": 0, "42 US": 0, "43 US": 0, "44 US": 72, "45 US": 0, "46 US": 88 },
    //   "genero": "Hombre",
    //   "marca": "Nike",
    //   "keyBorradoLogico": 3,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "G7H8I9"
    // },
    // {
    //   "nombre": "Stan Smith",
    //   "modelo": "Stan Smith",
    //   "precio": 90,
    //   "stock": { "36": 12, "37": 24, "38": 0, "39": 48, "40": 60, "41": 72, "42": 84, "43": 96, "44": 0, "45": 0, "46": 0 },
    //   "genero": "Mujer",
    //   "marca": "Adidas",
    //   "keyBorradoLogico": 4,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "J1K2L3"
    // },
    // {
    //   "nombre": "Air Jordan 1",
    //   "modelo": "Air Jordan",
    //   "precio": 150,
    //   "stock": { "36": 6, "37": 0, "38": 18, "39": 0, "40": 30, "41": 36, "42": 0, "43": 0, "44": 54, "45": 0, "46": 66 },
    //   "genero": "Hombre",
    //   "marca": "Nike",
    //   "keyBorradoLogico": 5,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "M4N5O6"
    // },
    // {
    //   "nombre": "Gazelle",
    //   "modelo": "Gazelle",
    //   "precio": 85,
    //   "stock": { "36": 0, "37": 0, "38": 60, "39": 80, "40": 100, "41": 120, "42": 140, "43": 0, "44": 0, "45": 200, "46": 220 },
    //   "genero": "Mujer",
    //   "marca": "Adidas",
    //   "keyBorradoLogico": 6,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "P7Q8R9"
    // },
    // {
    //   "nombre": "Air Max 270",
    //   "modelo": "Air Max",
    //   "precio": 140,
    //   "stock": { "36": 0, "37": 6, "38": 9, "39": 12, "40": 0, "41": 18, "42": 21, "43": 24, "44": 0, "45": 0, "46": 33 },
    //   "genero": "Unisex",
    //   "marca": "Nike",
    //   "keyBorradoLogico": 7,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "S1T2U3"
    // },
    // {
    //   "nombre": "NMD_R1",
    //   "modelo": "NMD",
    //   "precio": 130,
    //   "stock": { "36": 4, "37": 8, "38": 12, "39": 16, "40": 20, "41": 24, "42": 28, "43": 32, "44": 0, "45": 0, "46": 0 },
    //   "genero": "Hombre",
    //   "marca": "Adidas",
    //   "keyBorradoLogico": 8,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "V4W5X6"
    // },
    // {
    //   "nombre": "Air Max Plus",
    //   "modelo": "Air Max",
    //   "precio": 160,
    //   "stock": { "36": 0, "37": 4, "38": 0, "39": 8, "40": 10, "41": 0, "42": 14, "43": 16, "44": 0, "45": 20, "46": 0 },
    //   "genero": "Mujer",
    //   "marca": "Nike",
    //   "keyBorradoLogico": 9,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "Y7Z8A9"
    // },
    // {
    //   "nombre": "ZX Flux",
    //   "modelo": "ZX",
    //   "precio": 95,
    //   "stock": { "36": 0, "37": 30, "38": 0, "39": 60, "40": 75, "41": 0, "42": 105, "43": 0, "44": 135, "45": 0, "46": 0 },
    //   "genero": "Unisex",
    //   "marca": "Adidas",
    //   "keyBorradoLogico": 10,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "B1C2D3"
    // },
    // {
    //   "nombre": "Chuck Taylor All Star",
    //   "modelo": "Chuck Taylor",
    //   "precio": 70,
    //   "stock": { "36": 25, "37": 50, "38": 0, "39": 100, "40": 125, "41": 0, "42": 175, "43": 200, "44": 225, "45": 0, "46": 0 },
    //   "genero": "Unisex",
    //   "marca": "Converse",
    //   "keyBorradoLogico": 11,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "E4F5G6"
    // },
    // {
    //   "nombre": "Old Skool",
    //   "modelo": "Old Skool",
    //   "precio": 75,
    //   "stock": { "36": 0, "37": 30, "38": 0, "39": 60, "40": 75, "41": 0, "42": 105, "43": 0, "44": 135, "45": 0, "46": 0 },
    //   "genero": "Unisex",
    //   "marca": "Vans",
    //   "keyBorradoLogico": 12,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "H7I8J9"
    // },
    // {
    //   "nombre": "Classic Leather",
    //   "modelo": "Classic Leather",
    //   "precio": 85,
    //   "stock": { "36": 0, "37": 30, "38": 0, "39": 60, "40": 75, "41": 0, "42": 105, "43": 0, "44": 135, "45": 0, "46": 0 },
    //   "genero": "Unisex",
    //   "marca": "Reebok",
    //   "keyBorradoLogico": 13,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "K1L2M3"
    // },
    // {
    //   "nombre": "Chuck 70",
    //   "modelo": "Chuck 70",
    //   "precio": 80,
    //   "stock": { "36": 0, "37": 40, "38": 0, "39": 80, "40": 0, "41": 120, "42": 0, "43": 0, "44": 0, "45": 0, "46": 0 },
    //   "genero": "Unisex",
    //   "marca": "Converse",
    //   "keyBorradoLogico": 14,
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "codigo": "N4O5P6"
    // },
    // {
    //   "nombre": "Sk8-Hi",
    //   "modelo": "Sk8-Hi",
    //   "precio": 90,
    //   "stock": { "36": 7, "37": 14, "38": 21, "39": 28, "40": 35, "41": 42, "42": 49, "43": 56, "44": 63, "45": 70, "46": 77 },
    //   "genero": "Unisex",
    //   "marca": "Vans",
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "keyBorradoLogico": 15,
    //   "estado": true,
    //   "codigo": "Q7R8S9"
    // },
    // {
    //   "codigo": "b68d1a",
    //   "id": 16,
    //   "nombre": "Zapatillas Hombre 500",
    //   "modelo": "500",
    //   "precio": 259,
    //   "stock": {
    //     "36": 0,
    //     "37": 0,
    //     "38": 4,
    //     "39": 4,
    //     "40": 3,
    //     "41": 0,
    //     "42": 0,
    //     "43": 0,
    //     "44": 0,
    //     "45": 0,
    //     "46": 0,
    //     "36.5": 0,
    //     "37.5": 0,
    //     "38.5": 4,
    //     "39.5": 0,
    //     "40.5": 0,
    //     "41.5": 0,
    //     "42.5": 0,
    //     "43.5": 0,
    //     "44.5": 0,
    //     "45.5": 0
    //   },
    //   "genero": "masculino",
    //   "marca": "NEW BALANCE",
    //   "imagen": [
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006174/uuid_store/ofqn3iirwour0acdvspa.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/ecsh2vbyuwqbmgyxmvf1.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006175/uuid_store/x5eogdbe1unfqjydhz85.webp",
    //     "https://res.cloudinary.com/djd7b0upe/image/upload/v1709006176/uuid_store/hjjqgw7qkbjkhoavkwjc.webp"
    //   ],
    //   "estado": true,
    //   "talle": null,
    //   "quantitysold": null,
    //   "enDescuento": null
    // }
  ]

module.exports = productos;
