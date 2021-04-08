import React, { Component } from 'react'

export default class DanhSachSanPham extends Component {

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        thongTinSanPham: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },

    }


    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card text-white text-dark text-center" style= {{border: 'none'}} >
                        <img className="card-img-top" style={{ width: '150px', height: '150px', marginLeft: '90px'}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                        <div className="card-body">
                            <h4 className="card-title">{sanPham.tenSP}</h4>
                            <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                            <button className="btn btn-warning" onClick={() => {
                                this.xemChiTiet(sanPham)
                            }}>Thông tin chi tiết</button>
                        </div>
                    </div>

                </div>
            )
        })
    }

    xemChiTiet = (sanPhamClick) => {
        this.setState({
            thongTinSanPham: sanPhamClick,
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row ">
                    <div className="col-4 text-center">
                        <h3>{this.state.thongTinSanPham.tenSP}</h3>
                        <img src={this.state.thongTinSanPham.hinhAnh} style={{ width: '250px', height: '250px' }} />
                    </div>

                    <div className="col-8">
                        <h3 className="text-left"> Thông tin chi tiết</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{this.state.thongTinSanPham.manHinh}</th>
                                </tr>

                                <tr>
                                    <th>Camera trước</th>
                                    <th>{this.state.thongTinSanPham.cameraTruoc}</th>
                                </tr>

                                <tr>
                                    <th>Camera sau</th>
                                    <th>{this.state.thongTinSanPham.cameraSau}</th>
                                </tr>

                                <tr>
                                    <th>Ram</th>
                                    <th>{this.state.thongTinSanPham.ram}</th>
                                </tr>

                                <tr>
                                    <th>ROM</th>
                                    <th>{this.state.thongTinSanPham.rom}</th>
                                </tr>
                            </thead>

                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
