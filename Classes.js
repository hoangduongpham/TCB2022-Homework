const fs = require("fs");

class Nguoi {
    ten;
    tuoi;
    gioiTinh;
    ngaySinh;

    constructor(ten, tuoi, gioiTinh, ngaySinh) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.ngaySinh = ngaySinh;
    }
}

class SinhVien extends Nguoi {
    maSV;
    lop;
    diem;

    constructor(json) {
        super(json.ten, json.tuoi, json.gioiTinh, json.ngaySinh);
        this.maSV = json.maSV;
        this.lop = json.lop;
        this.diem = new Diem(
            json.diemToan,
            json.diemLy,
            json.diemHoa,
            json.diemAnh
        );
    }

    calcDiemChu(diem) {
        if (diem >= 8.5) {
            return "A";
        } else if (diem >= 7) {
            return "B";
        } else if (diem >= 5.5) {
            return "C";
        } else if (diem >= 5) {
            return "D+";
        } else if (diem >= 4) {
            return "D";
        } else {
            return "F";
        }
    }
}

class Diem {
    toan;
    ly;
    hoa;
    anh;

    constructor(toan, ly, hoa, anh) {
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.anh = anh;
    }

    TB() {
        return (this.toan + this.ly + this.hoa + this.anh) / 4;
    }

    isQuaMon() {
        return this.toan >= 4 && this.ly >= 4 && this.hoa >= 4 && this.anh >= 4;
    }
}

class DataLoader {
    data;

    load(file) {
        let rawData = fs.readFileSync(file);
        this.data = JSON.parse(rawData);
    }
}

module.exports = {
    SinhVien,
    DataLoader,
};
