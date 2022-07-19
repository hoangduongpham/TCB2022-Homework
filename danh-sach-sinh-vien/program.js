const data = require("./data.json");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

class SinhVien {
    constructor(json) {
        this.maSV = json.maSV;
        this.tenSV = json.tenSV;
        this.tuoi = json.tuoi;
        this.gioiTinh = json.gioiTinh;
        this.ngaySinh = json.ngaySinh;
        this.diemToan = json.diemToan;
        this.diemLy = json.diemLy;
        this.diemHoa = json.diemHoa;
        this.diemAnh = json.diemAnh;
        this.lop = json.lop;
    }

    getDiemToan() {
        return this.diemToan;
    }

    getDiemLy() {
        return this.diemLy;
    }

    getDiemHoa() {
        return this.diemHoa;
    }

    getDiemAnh() {
        return this.diemAnh;
    }

    getDiemTB() {
        return (this.diemToan + this.diemLy + this.diemHoa + this.diemAnh) / 4;
    }
}

// Hàm tính điểm chữ (hệ 4) từ điểm số (hệ 10)
function calcDiemChu(diem) {
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

// Nhập danh sách sinh viên từ file JSON và lưu vào array
const listSinhVien = [];
data.forEach((json) => {
    let sinhvien = new SinhVien(json);
    listSinhVien.push(sinhvien);
});

// 1. Điểm trung bình các môn học của từng sinh viên
function option1() {
    for (sinhvien of listSinhVien) {
        console.log(sinhvien.tenSV + ": " + sinhvien.getDiemTB());
    }
}

// 2. Sinh viên có điểm trung bình cao, thấp nhất mỗi lớp
function option2() {
    // Lấy ra danh sách các lớp
    let listLop = [];
    listSinhVien.forEach((sinhvien) => {
        if (!listLop.includes(sinhvien.lop)) {
            listLop.push(sinhvien.lop);
        }
    });
    // Tìm điểm cao nhất và thấp nhất của từng lớp
    listLop.forEach((lop) => {
        let maxDiem = 0;
        let minDiem = 10;
        listSinhVien.forEach((sinhvien) => {
            if (sinhvien.lop === lop) {
                if (sinhvien.getDiemTB() > maxDiem) {
                    maxDiem = sinhvien.getDiemTB();
                }
                if (sinhvien.getDiemTB() < minDiem) {
                    minDiem = sinhvien.getDiemTB();
                }
            }
        });
        console.log(lop + ": " + maxDiem + " - " + minDiem);
    });
}

// 3. Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10)
function option3() {
    listSinhVien.forEach((sinhvien) => {
        if (
            sinhvien.getDiemToan() >= 4 &&
            sinhvien.getDiemLy() >= 4 &&
            sinhvien.getDiemHoa() >= 4 &&
            sinhvien.getDiemAnh() >= 4
        ) {
            console.log(sinhvien.tenSV);
        }
    });
}

// 4. Điểm chữ của từng sinh viên
function option4() {
    listSinhVien.forEach((sinhvien) => {
        console.log(
            sinhvien.tenSV +
                ": \n" +
                "- Toán: " +
                calcDiemChu(sinhvien.getDiemToan()) +
                "\n" +
                "- Lý: " +
                calcDiemChu(sinhvien.getDiemLy()) +
                "\n" +
                "- Hóa: " +
                calcDiemChu(sinhvien.getDiemHoa()) +
                "\n" +
                "- Anh: " +
                calcDiemChu(sinhvien.getDiemAnh())
        );
    });
}

function main() {
    // Danh sách các tùy chọn
    console.log("Lựa chọn danh sách cần xem:");
    console.log("1. Điểm trung bình các môn học của từng sinh viên");
    console.log("2. Sinh viên có điểm trung bình cao, thấp nhất mỗi lớp");
    console.log("3. Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10)");
    console.log("4. Điểm chữ của từng sinh viên");

    readline.question("Lựa chọn: ", (option) => {
        switch (option) {
            case "1":
                option1();
                mainLoop();
                break;
            case "2":
                option2();
                mainLoop();
                break;
            case "3":
                option3();
                mainLoop();
                break;
            case "4":
                option4();
                mainLoop();
                break;
            default:
                console.log("Vui lòng nhập số trong khoảng 1-4");
        }
    });
}

// Chạy lại chương trình nếu cần
function mainLoop() {
    readline.question(
        "Bạn có muốn xem danh sách khác chứ? (y/n) ",
        (option) => {
            switch (option) {
                case "y":
                    main();
                    break;
                case "n":
                    console.log("Cảm ơn bạn đã sử dụng chương trình!");
            }
        }
    );
}

main();
