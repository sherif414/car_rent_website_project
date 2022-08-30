const data: Car[] = [
  {
    name: 'Koenigsegg',
    type: 'sport',
    gas: 90,
    gear: 'manual',
    capacity: 2,
    price: 99.0,
    imgUrl: 'src/assets/img/Koenigsegg.png',
  },
  {
    name: 'Koenigsegg',
    type: 'sport',
    gas: 90,
    gear: 'manual',
    capacity: 2,
    price: 99.0,
    imgUrl: 'src/assets/img/Koenigsegg.png',
  },
  {
    name: 'Koenigsegg',
    type: 'sport',
    gas: 90,
    gear: 'manual',
    capacity: 2,
    price: 99.0,
    imgUrl: 'src/assets/img/Koenigsegg.png',
  },
  {
    name: 'Koenigsegg',
    type: 'sport',
    gas: 90,
    gear: 'manual',
    capacity: 2,
    price: 99.0,
    imgUrl: 'src/assets/img/Koenigsegg.png',
  },
]

interface Car {
  name: string
  type: string
  gear: 'manual' | 'automatic'
  gas: number
  capacity: number
  price: number
  imgUrl: string
}

export default data
