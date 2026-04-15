// class NhanVien {
//   public maNV: string | number = ''
//   public tenNV: string = ''
//   protected heSoLuong: number = 1
//   protected luongCoBan: number = 1000
//   constructor() {

//   }

//   setLuongCoBan(value: number) {
//     this.luongCoBan = value
//   }

//   getHeSoLuong() {
//     return this.heSoLuong
//   }

//   tinhLuong() {
//     return this.luongCoBan * this.heSoLuong
//   }
// }

// class NhanVienKeToan extends NhanVien {
//   duAn: string = ''

//   tinhLuong(): number {
//     return super.tinhLuong() + 1000
//   }
// }

// const nv = new NhanVienKeToan()
// nv.tenNV = 'Hung'
// nv.maNV = '001'
// console.log(nv.tinhLuong())

// ================================ //
/**
 Decorators:  là một tính năng cho phép bạn “can thiệp” hoặc “mở rộng” hành vi của class, method, property, hoặc parameter mà không cần thay đổi trực tiếp code gốc.
 */
function Logger(value: unknown) {
  console.log('value', value)
  return function (target: unknown) {
    console.log('target', target)
  }
}
@Logger('Person')
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

@Logger('Car')
class Car {
  constructor(
    public name: string,
    public engine: string
  ) {}
}
