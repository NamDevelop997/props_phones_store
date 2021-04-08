import React, { Component } from 'react'

export default class SanPham extends Component {


    render() {

        let { sanPhamProps } = this.props;

        return (
            <div className="card text-white text-dark text-center" style={{ border: 'none' }} >
                <img className="card-img-top" style={{ width: '150px', height: '150px', marginLeft: '90px' }} src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPhamProps.tenSP}</h4>
                    <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
                    <button className="btn btn-warning" onClick={() => {
                        this.props.xemChiTiet(sanPhamProps)
                    }}>Thông tin chi tiết</button>
                </div>
            </div>
        )
    }
}
