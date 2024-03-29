const data: Car[] = [
  {
    id: 0,
    name: 'Koenigsegg',
    type: 'sport',
    gas: 90,
    gear: 'manual',
    capacity: 2,
    price: 99,
    imgUrl: '/src/assets/img/Koenigsegg.png',
    previewImgUrl: '/src/assets/img/Koenigsegg_preview.jpg',
  },
  {
    id: 1,
    name: 'Nissan GT-R',
    type: 'sport',
    gas: 80,
    gear: 'manual',
    capacity: 2,
    price: 80,
    imgUrl: '/src/assets/img/nissan_gt_r.png',
    previewImgUrl: '/src/assets/img/nissan_gt_r_preview.jpg',
  },
  {
    id: 2,
    name: 'Rolls-Royce',
    type: 'sedan',
    gas: 70,
    gear: 'manual',
    capacity: 4,
    price: 96,
    imgUrl: '/src/assets/img/rolls_royce.png',
    previewImgUrl: '/src/assets/img/rolls-royce_preview.jpg',
  },
  {
    id: 3,
    name: 'Nissan GT-R',
    type: 'sport',
    gas: 80,
    gear: 'manual',
    capacity: 2,
    price: 80,
    imgUrl: '/src/assets/img/nissan_gt_r.png',
    previewImgUrl: '/src/assets/img/nissan_gt_r_preview.jpg',
  },
  {
    id: 4,
    name: 'All New Rush',
    type: 'suv',
    gas: 70,
    gear: 'manual',
    capacity: 6,
    price: 72,
    imgUrl: '/src/assets/img/all_new_rush.png',
    previewImgUrl: '/src/assets/img/all_new_rush_preview.webp',
  },
  {
    id: 5,
    name: 'CR-V',
    type: 'suv',
    gas: 80,
    gear: 'manual',
    capacity: 6,
    price: 80,
    imgUrl: '/src/assets/img/cr_v.png',
    previewImgUrl: '/src/assets/img/cr_v_preview.jpg',
  },
  {
    id: 6,
    name: 'All New Terios',
    type: 'sport',
    gas: 90,
    gear: 'manual',
    capacity: 2,
    price: 74,
    imgUrl: '/src/assets/img/all_new_terios.png',
    previewImgUrl: '/src/assets/img/all_new_rush_preview.webp',
  },
  {
    id: 7,
    name: 'MG ZX Exclusive',
    type: 'Hatchback',
    gas: 70,
    gear: 'manual',
    capacity: 4,
    price: 76,
    imgUrl: '/src/assets/img/mg_zx_exclusive.png',
    previewImgUrl: '/src/assets/img/cr_v_preview.jpg',
  },
  {
    id: 8,
    name: 'New MG ZS',
    type: 'suv',
    gas: 80,
    gear: 'manual',
    capacity: 6,
    price: 80,
    imgUrl: '/src/assets/img/new_mg_zs.png',
    previewImgUrl: '/src/assets/img/all_new_rush_preview.webp',
  },
  {
    id: 9,
    name: 'MG ZX Excite',
    type: 'Hatchback',
    gas: 90,
    gear: 'manual',
    capacity: 4,
    price: 74,
    imgUrl: '/src/assets/img/mg_zx_excite.png',
    previewImgUrl: '/src/assets/img/cr_v_preview.jpg',
  },
  {
    id: 10,
    name: 'CR-V',
    type: 'suv',
    gas: 80,
    gear: 'manual',
    capacity: 6,
    price: 80,
    imgUrl: '/src/assets/img/cr_v.png',
    previewImgUrl: '/src/assets/img/cr_v_preview.jpg',
  },
  {
    id: 11,
    name: 'New MG ZS',
    type: 'suv',
    gas: 80,
    gear: 'manual',
    capacity: 6,
    price: 80,
    imgUrl: '/src/assets/img/new_mg_zs_silver.png',
    previewImgUrl: '/src/assets/img/all_new_rush_preview.webp',
  },
]

interface Car {
  id: number
  name: string
  type: string
  gear: 'manual' | 'automatic'
  gas: number
  capacity: number
  price: number
  imgUrl: string
  previewImgUrl: string
}

export default data
